// Monta translations/<name>.json (arquivos não-StoryData) a partir de scripts/data/<name>.json.
// Base = EN oficial do jogo; o patch é um overlay parcial com a MESMA forma do arquivo
// ({ dataList: [ { id|key, ...campos traduzidos } ] }); arrays casam por id/key, senão por posição.
// Uso: node scripts/build-file.mjs BattleKeywords-a1c10p1   |   RPGSystem/rpg-loc-ui-common-a1c10p1
import fs from "node:fs";
import path from "node:path";

const name = process.argv[2];
if (!name) { console.error("Uso: node scripts/build-file.mjs <name>"); process.exit(1); }
const EN = "C:/Program Files (x86)/Steam/steamapps/common/Limbus Company/LimbusCompany_Data/Assets/Resources_moved/Localize/en";
const rd = (p) => JSON.parse(fs.readFileSync(p, "utf8").replace(/^\uFEFF/, ""));
const dir = path.dirname(name), file = path.basename(name);
const base = rd(path.join(EN, dir, "EN_" + file + ".json"));
const patch = rd(path.join("scripts", "data", name + ".json"));

const keyOf = (e) => e && typeof e === "object" ? (e.id ?? e.key ?? e.level ?? e.index) : undefined;
let applied = 0;
function overlay(b, p) {
  if (Array.isArray(b) && Array.isArray(p)) {
    p.forEach((pe, i) => {
      const k = keyOf(pe);
      const be = k === undefined ? b[i] : b.find((x) => String(keyOf(x)) === String(k));
      if (be === undefined) { console.warn(`!! sem correspondência: ${JSON.stringify(pe).slice(0, 80)}`); return; }
      overlay(be, pe);
    });
  } else if (b && typeof b === "object" && p && typeof p === "object") {
    for (const [k, v] of Object.entries(p)) {
      if (typeof v === "string") { if (b[k] !== v) applied++; b[k] = v; }
      else if (k in b) overlay(b[k], v);
    }
  }
}
overlay(base, patch);

// aviso: strings que continuam iguais ao EN (só campos de texto)
const TXT = new Set(["name", "desc", "content", "title", "dlg", "text", "flavor", "summary", "displayName", "description", "panicName", "lowMoraleDescription", "panicDescription"]);
const en = rd(path.join(EN, dir, "EN_" + file + ".json"));
let same = 0;
(function cmp(a, b) {
  if (Array.isArray(a)) return a.forEach((x, i) => cmp(x, b[i]));
  if (a && typeof a === "object") for (const k of Object.keys(a)) {
    if (TXT.has(k) && typeof a[k] === "string" && a[k].trim() && /[A-Za-z]{3}/.test(a[k]) && a[k] === b[k]) { same++; if (same <= 5) console.warn(`  EN restante: ${k}=${a[k].slice(0, 70)}`); }
    else cmp(a[k], b[k]);
  }
})(base, en);

const out = path.join("translations", name + ".json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, "\uFEFF" + JSON.stringify(base, null, 4).replace(/\n/g, "\r\n"), "utf8");
console.log(`OK: ${out} (${applied} strings aplicadas${same ? ", " + same + " ainda em EN" : ""})`);

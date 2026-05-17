// Monta a tradução de um arquivo StoryData a partir de scripts/story/<ID>.json.
// Base = arquivo ptbr-CLT existente; substitui content por id e, opcionalmente,
// rótulos (teller/title/place) por valor via a chave "labels".
// Uso: node scripts/build-story.mjs P10513
import fs from "node:fs";
import path from "node:path";

const id = process.argv[2];
if (!id) { console.error("Uso: node scripts/build-story.mjs <ID>"); process.exit(1); }

const PT = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Limbus Company\\LimbusCompany_Data\\Lang\\ptbr-CLT\\StoryData";
const rd = (p) => JSON.parse(fs.readFileSync(p, "utf8").replace(/^﻿/, ""));

const base = rd(path.join(PT, id + ".json"));
const raw = rd(path.join(process.cwd(), "scripts", "story", id + ".json"));
const labels = raw.labels ?? {};
const content = {};
for (const [k, v] of Object.entries(raw)) if (k !== "labels") content[k] = v;

const EN = new Set("the you your and with this that will they have from which can may his her him when what while would should there these those been were are into about not for was has had its our only".split(" "));
const PT_WORDS = new Set("você não com uma que para mais são está também seu sua dos das pela pelo mas ele ela isso então pode ser tem foi".split(" "));
const PT_DIAC = /[áàâãéêíóôõúüçÁÀÂÃÉÊÍÓÔÕÚÇ]/;
const HANGUL = /[가-힣]/;
function cls(s) {
  if (typeof s !== "string" || !s.trim()) return "vazio";
  if (HANGUL.test(s)) return "kr";
  const toks = s.toLowerCase().match(/[\p{L}']+/gu) || [];
  let en = 0, pt = 0;
  for (const t of toks) { if (EN.has(t)) en++; if (PT_WORDS.has(t)) pt++; }
  if (PT_DIAC.test(s) || pt > 0) return "pt";
  if (en >= 3) return "en"; // frase claramente inglesa (rótulos curtos: ver audit-labels)
  return "neutro";
}

// arquivos sem campo "id" são indexados pela posição no array
const useIndex = base.dataList.every((e) => e.id === undefined);
let undefN = 0;
base.dataList.forEach((e, i) => {
  let key;
  if (useIndex) key = String(i);
  else if (e.id === undefined) { key = undefN === 0 ? "undefined" : "undefined_" + undefN; undefN++; }
  else key = String(e.id);
  if (key in content) e.content = content[key];
  for (const f of ["teller", "title", "place"]) {
    if (typeof e[f] === "string" && e[f] in labels) e[f] = labels[e[f]];
  }
});

// verificação: nenhuma entrada pode continuar com conteúdo em inglês/coreano
const bad = [];
for (const e of base.dataList) {
  for (const f of ["content", "teller", "title", "place"]) {
    const c = cls(e[f]);
    if (c === "en" || c === "kr") bad.push(`id=${e.id} ${f}=${c}: ${String(e[f]).slice(0, 60)}`);
  }
}
if (bad.length) { console.error(`!! ${id}: ${bad.length} campo(s) não traduzido(s):\n` + bad.join("\n")); process.exit(1); }

const dir = path.join(process.cwd(), "translations", "StoryData");
fs.mkdirSync(dir, { recursive: true });
const json = JSON.stringify(base, null, 4).replace(/\n/g, "\r\n");
fs.writeFileSync(path.join(dir, id + ".json"), "﻿" + json, "utf8");
const nl = Object.keys(labels).length;
console.log(`OK: ${id}.json (${base.dataList.length} entradas, ${Object.keys(content).length} traduzidas${nl ? ", " + nl + " rótulos" : ""})`);

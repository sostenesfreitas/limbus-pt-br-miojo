// Copia os arquivos de translations/ (+ config.json e fonte de assets/lang) para Lang/Miojo-PTBR do jogo.
// Faz backup (.bak) de qualquer arquivo existente antes de sobrescrever.
// Uso: node scripts/apply-to-game.mjs
import fs from "node:fs";
import path from "node:path";

const GAME = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Limbus Company";
const DEST = path.join(GAME, "LimbusCompany_Data", "Lang", "Miojo-PTBR");
const SRC = path.join(process.cwd(), "translations");

const LANG = path.join(process.cwd(), "assets", "lang");
if (!fs.existsSync(DEST)) {
  fs.mkdirSync(DEST, { recursive: true });
  fs.copyFileSync(path.join(LANG, "config.json"), path.join(DEST, "..", "config.json"));
  fs.cpSync(path.join(LANG, "Font"), path.join(DEST, "Font"), { recursive: true });
  console.log(`criada: ${DEST} (config.json + Font)`);
}

function walk(base, dir = base, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(base, full, out);
    else out.push(path.relative(base, full));
  }
  return out;
}

for (const rel of walk(SRC)) {
  const from = path.join(SRC, rel);
  const to = path.join(DEST, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (fs.existsSync(to)) {
    fs.copyFileSync(to, to + ".bak");
    console.log(`backup: ${rel}.bak`);
  }
  fs.copyFileSync(from, to);
  console.log(`copiado: ${rel}`);
}
console.log("\nConcluído. Feche o jogo antes de aplicar; selecione Miojo-PTBR nas opções de idioma se não vier sozinho.");

// Copia os arquivos de translations/ para a pasta ptbr-CLT do jogo.
// Faz backup (.bak) de qualquer arquivo existente antes de sobrescrever.
// Uso: node scripts/apply-to-game.mjs
import fs from "node:fs";
import path from "node:path";

const GAME = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Limbus Company";
const DEST = path.join(GAME, "LimbusCompany_Data", "Lang", "ptbr-CLT");
const SRC = path.join(process.cwd(), "translations");

if (!fs.existsSync(DEST)) {
  console.error(`Pasta de destino não encontrada: ${DEST}`);
  process.exit(1);
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
console.log("\nConcluído. Feche o jogo antes de aplicar; a localização ptbr-CLT já estava selecionada.");

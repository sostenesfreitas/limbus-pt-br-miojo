// Reads scripts/pt-fixes-all.json (shape: { "<relative file>": { "<JSON Pointer>": "PT", ... } })
// For each file: load CLT base, set each pointer to the PT value, write to translations/<relative file>.
// Preserves UTF-8 BOM, CRLF, and 4-space indent (CLT format).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STEAM = 'C:/Program Files (x86)/Steam/steamapps/common/Limbus Company/LimbusCompany_Data';
const PT_DIR = path.join(STEAM, 'Lang/ptbr-CLT');
const OUT_DIR = path.join(ROOT, 'translations');
const FIXES = path.join(ROOT, 'scripts', 'pt-fixes-all.json');

const fixes = JSON.parse(fs.readFileSync(FIXES, 'utf8'));

function ptrUnescape(s) { return s.replace(/~1/g, '/').replace(/~0/g, '~'); }
function ptrParts(ptr) { return ptr.split('/').slice(1).map(ptrUnescape); }

function setAtPtr(obj, ptr, value) {
  const parts = ptrParts(ptr);
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    cur = Array.isArray(cur) ? cur[+p] : cur[p];
    if (cur === undefined) return false;
  }
  const last = parts[parts.length - 1];
  if (Array.isArray(cur)) cur[+last] = value; else cur[last] = value;
  return true;
}

const files = Object.keys(fixes);
let written = 0, skipped = [], totalFields = 0;

for (const rel of files) {
  const src = path.join(PT_DIR, rel);
  if (!fs.existsSync(src)) { skipped.push(rel + ' (missing source)'); continue; }
  const raw = fs.readFileSync(src, 'utf8').replace(/^﻿/, '');
  const data = JSON.parse(raw);
  let n = 0;
  for (const [ptr, val] of Object.entries(fixes[rel])) {
    if (setAtPtr(data, ptr, val)) n++;
    else skipped.push(rel + ' ' + ptr + ' (set failed)');
  }
  totalFields += n;
  const json = JSON.stringify(data, null, 4).replace(/\n/g, '\r\n');
  const outAbs = path.join(OUT_DIR, rel);
  fs.mkdirSync(path.dirname(outAbs), { recursive: true });
  fs.writeFileSync(outAbs, '﻿' + json, 'utf8');
  written++;
}
console.log(`Wrote ${written} files, ${totalFields} fields updated.`);
if (skipped.length) { console.log('Skipped:'); skipped.slice(0, 10).forEach(x => console.log(' ', x)); }

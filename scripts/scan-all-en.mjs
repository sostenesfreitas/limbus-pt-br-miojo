// Scans every JSON file under Lang/ptbr-CLT/ (recursive), walks the JSON
// structure, and flags every STRING field that classifies as English.
// Emits a worklist with KR source pulled from kr/KR_<filename>.json (same path).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STEAM = 'C:/Program Files (x86)/Steam/steamapps/common/Limbus Company/LimbusCompany_Data';
const PT_DIR = path.join(STEAM, 'Lang/ptbr-CLT');
const KR_DIR = path.join(STEAM, 'Assets/Resources_moved/Localize/kr');

const EN = new Set(`the and with that this these those your you doesn't didn't isn't wasn't weren't can't won't don't hasn't haven't hadn't wouldn't shouldn't couldn't but because what when where why who whose just only still even going gonna wanna into onto from about against before after it's that's what's who's where's here's there's let's well wherefore thou thee thy thyself dost doth hath hast art been being have has had was were they them their there our us we she he his her him hers its much such many other every each both either neither between through across though although while since unless inside outside`.split(/\s+/).filter(Boolean));
const PT = new Set('não nao também tambem então entao ainda já só até após ele ela eles elas você voce vocês meu minha seu sua nosso nossa este esta esse essa isso isto aquele aquela aqui ali está estão estamos estou é são somos sou foi fui era tem têm tinha vou vamos vão pode posso podem podemos faz fez diz disse vê viu irmão irmã senhor senhora amigo gente porque quando onde como quem nem mesmo mesma para pra pro mas se contudo entretanto durante enquanto agora hoje muito muita muitos muitas pouco pouca todo toda todos todas algum alguma alguns algumas qualquer cada outro outra outros outras eu nós'.split(/\s+/).filter(Boolean));

export function classify(s) {
  if (typeof s !== 'string' || !s.trim()) return null;
  const norm = s.replace(/[‘’]/g, "'");
  const lower = norm.toLowerCase();
  const tokens = lower.split(/[^a-zA-ZÀ-ſ']+/).filter(Boolean);
  if (tokens.length < 3) return null;
  let en = 0, pt = 0;
  for (const t of tokens) { if (EN.has(t)) en++; if (PT.has(t)) pt++; }
  const acc = (s.match(/[À-ſ]/g) || []).length;
  if (en >= 3 && pt === 0 && acc <= 1) return 'en';
  if (en >= 4 && en > pt) return 'en';
  return null;
}

// Walk JSON, emit { jsonPath, value } for each string field.
function* walk(obj, ptr = '') {
  if (typeof obj === 'string') { yield { ptr, value: obj }; return; }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) yield* walk(obj[i], ptr + '/' + i);
  } else if (obj && typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      yield* walk(obj[k], ptr + '/' + k.replace(/~/g, '~0').replace(/\//g, '~1'));
    }
  }
}

function listJsonFiles(dir, rel = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const sub = path.join(dir, e.name);
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...listJsonFiles(sub, r));
    else if (e.isFile() && e.name.endsWith('.json') && !e.name.endsWith('.bak')) out.push({ abs: sub, rel: r });
  }
  return out;
}
function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8').replace(/^﻿/, '')); }
  catch { return null; }
}

const files = listJsonFiles(PT_DIR);
const arg = process.argv[2];
const filter = process.argv[3]; // optional file-name regex
const re = filter ? new RegExp(filter) : null;

const worklist = [];
const perFile = {};

for (const { abs, rel } of files) {
  if (re && !re.test(rel)) continue;
  const pt = readJson(abs);
  if (!pt) continue;
  // KR counterpart
  const krRel = rel.replace(/([^/]+)$/, 'KR_$1');
  const krAbs = path.join(KR_DIR, krRel);
  const kr = readJson(krAbs);
  // Build map ptr -> kr value (same shape walk on KR)
  const krMap = new Map();
  if (kr) for (const { ptr, value } of walk(kr)) krMap.set(ptr, value);
  // Scan PT
  let fileN = 0;
  for (const { ptr, value } of walk(pt)) {
    if (classify(value) === 'en') {
      worklist.push({ file: rel, ptr, en: value, kr: krMap.get(ptr) ?? null });
      fileN++;
    }
  }
  if (fileN) perFile[rel] = fileN;
}

if (arg === '--worklist') {
  const out = process.argv[4] || path.join(ROOT, 'scripts', 'en-worklist-all.json');
  fs.writeFileSync(out, JSON.stringify(worklist, null, 2), 'utf8');
  const withKr = worklist.filter(e => e.kr).length;
  console.log(`Wrote ${worklist.length} entries to ${out}`);
  console.log(`With KR: ${withKr}   Without KR: ${worklist.length - withKr}`);
} else if (arg === '--file') {
  const fname = process.argv[3];
  console.log(`Entries in ${fname}:`);
  for (const w of worklist.filter(e => e.file === fname)) {
    console.log(`  ${w.ptr}`);
    console.log(`    EN: ${w.en.replace(/\n/g,' ').slice(0,140)}`);
    console.log(`    KR: ${(w.kr||'').replace(/\n/g,' ').slice(0,140)}`);
  }
} else {
  console.log(`Total flagged EN: ${worklist.length}   Files with residue: ${Object.keys(perFile).length}`);
  const sorted = Object.entries(perFile).sort((a, b) => b[1] - a[1]);
  for (const [f, n] of sorted.slice(0, 25)) console.log(`${f.padEnd(50)} ${String(n).padStart(5)}`);
}

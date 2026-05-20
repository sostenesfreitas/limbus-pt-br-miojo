// Scans translations/StoryData/*.json entry-by-entry for English content
// that should have been translated. Flags entries where `content` looks
// like English by strong-marker word counting + accent-density rules.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'translations', 'StoryData');

// Strong EN markers — chosen to avoid PT cognates.
const EN = new Set(`
the and with that this these those your you doesn't didn't isn't wasn't weren't
can't won't don't hasn't haven't hadn't wouldn't shouldn't couldn't but because
what when where why who whose just only still even going gonna wanna into onto
from about against before after it's that's what's who's where's here's there's
let's well ought used hey oh ah okay alright something anything nothing everything
someone anyone been being have has had was were they them their there our us we
she he his her him hers its much such many another other every each both either
neither between through across though although while since unless inside outside
yourself himself herself itself themselves yourselves shall should would could
needn't isn't aren't won't
`.split(/\s+/).filter(Boolean));

// DEFINITE-EN markers: a single occurrence guarantees English text.
// (Archaic/Early Modern English — has zero PT cognates and zero false-positive risk.)
const DEFINITE_EN = new Set(`
thee thou thy thyself thine dost doth hath hast wherefore prithee ye 'tis 'twas
ne'er e'er oft methinks forsooth verily thence whence hither thither yonder
`.split(/\s+/).filter(Boolean));

const PT = new Set(`
não nao também tambem então entao ainda já só até após apos ele ela eles elas
você voce vocês voces meu minha meus minhas seu sua seus suas nosso nossa nossos
nossas este esta esse essa isso isto aquele aquela aquilo nem mesmo mesma pra
pro para aqui ali está estão estamos estou estava estavam é são somos sou tens
têm tinha tinham vou vamos vão vai pode posso podem podemos faz fez fazem
fizeram diz disse dizem disseram veio vejo veem irmão irmã senhor senhora amigo
amiga gente porque porém quando enquanto durante depois antes contudo entretanto
agora hoje ontem amanhã muito muita muitos muitas pouco pouca poucos poucas
todo toda todos todas algum alguma alguns algumas nenhum nenhuma nada tudo
alguém ninguém qualquer cada outro outra outros outras
`.split(/\s+/).filter(Boolean));

function classify(s) {
  if (!s || !s.trim()) return { tag: 'empty' };
  // Korean residue
  const kr = (s.match(/[가-힯]/g) || []).length;
  if (kr >= 2) return { tag: 'kr', kr };
  // Normalize curly apostrophes
  const norm = s.replace(/[‘’]/g, "'");
  const lower = norm.toLowerCase();
  const tokens = lower.split(/[^a-zA-ZÀ-ſ']+/).filter(Boolean);
  if (tokens.length === 0) return { tag: 'punct' };
  let en = 0, pt = 0, definite = 0;
  for (const t of tokens) {
    if (EN.has(t)) en++;
    if (DEFINITE_EN.has(t)) definite++;
    if (PT.has(t)) pt++;
  }
  const accents = (s.match(/[À-ſ]/g) || []).length;
  const ptClitic = (s.match(/-(me|te|se|lhe|lhes|nos|vos|os|as)\b/gi) || []).length;
  pt += ptClitic;

  // Decision rules
  if (definite >= 1 && pt === 0 && accents === 0) return { tag: 'en', en, pt, accents, definite };
  if (en >= 4 && pt === 0 && accents <= 1) return { tag: 'en', en, pt, accents };
  if (en >= 3 && pt === 0 && accents === 0) return { tag: 'en', en, pt, accents };
  if (en >= 2 && pt === 0 && accents === 0 && tokens.length <= 8) return { tag: 'en', en, pt, accents };
  if (en >= 5 && en > pt * 2 && accents <= 2) return { tag: 'en', en, pt, accents };
  return { tag: pt || accents ? 'pt' : 'unknown', en, pt, accents };
}

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.json')).sort();
const report = [];
let totalEntries = 0, totalEn = 0, totalKr = 0;

for (const f of files) {
  let raw;
  try { raw = fs.readFileSync(path.join(DIR, f), 'utf8').replace(/^﻿/, ''); }
  catch { continue; }
  let data;
  try { data = JSON.parse(raw); } catch { continue; }
  if (!data?.dataList) continue;
  const flagged = [];
  for (let i = 0; i < data.dataList.length; i++) {
    totalEntries++;
    const e = data.dataList[i];
    const c = classify(e.content);
    if (c.tag === 'en') { flagged.push({ idx: i, id: e.id, c, content: e.content }); totalEn++; }
    if (c.tag === 'kr') { flagged.push({ idx: i, id: e.id, c, content: e.content }); totalKr++; }
  }
  if (flagged.length) report.push({ file: f, count: flagged.length, flagged });
}

report.sort((a, b) => b.count - a.count);

console.log(`Total entries scanned: ${totalEntries}`);
console.log(`Flagged EN: ${totalEn}   Flagged KR: ${totalKr}`);
console.log(`Files with residue: ${report.length}`);
console.log('---');

// Group by prefix to see distribution
const byPrefix = {};
for (const r of report) {
  const p = r.file.match(/^([A-Z]+)/)?.[1] || '?';
  byPrefix[p] = (byPrefix[p] || 0) + r.count;
}
console.log('By prefix:', byPrefix);
console.log('---');

const arg = process.argv[2];
if (arg === '--worklist') {
  const KR_DIR = 'C:/Program Files (x86)/Steam/steamapps/common/Limbus Company/LimbusCompany_Data/Assets/Resources_moved/Localize/kr/StoryData';
  const out = [];
  for (const r of report) {
    const id = r.file.replace(/\.json$/, '');
    const krPath = path.join(KR_DIR, `KR_${id}.json`);
    let krData = null;
    try {
      const raw = fs.readFileSync(krPath, 'utf8').replace(/^﻿/, '');
      krData = JSON.parse(raw);
    } catch {}
    const krById = new Map();
    const krByIdx = new Map();
    if (krData?.dataList) {
      krData.dataList.forEach((e, i) => {
        krById.set(String(e.id), e.content || '');
        krByIdx.set(i, e.content || '');
      });
    }
    for (const fl of r.flagged) {
      const kr = krById.get(String(fl.id)) ?? krByIdx.get(fl.idx) ?? null;
      out.push({ file: r.file, id: fl.id, idx: fl.idx, en: fl.content, kr });
    }
  }
  const outPath = process.argv[3] || path.join(ROOT, 'scripts', 'en-worklist.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Wrote ${out.length} entries to ${outPath}`);
  const withKr = out.filter(e => e.kr).length;
  console.log(`With KR source: ${withKr}   Without KR: ${out.length - withKr}`);
  process.exit(0);
}
if (arg === '--full') {
  for (const r of report) {
    console.log(`\n=== ${r.file}  (${r.count} flagged) ===`);
    for (const fl of r.flagged) {
      const preview = (fl.content || '').replace(/\s+/g, ' ').slice(0, 160);
      console.log(`  [${fl.idx}] id=${fl.id} (${fl.c.tag} en=${fl.c.en} pt=${fl.c.pt} ac=${fl.c.accents}): ${preview}`);
    }
  }
} else {
  // Just the top 30 worst files
  for (const r of report.slice(0, 30)) {
    console.log(`${r.file.padEnd(20)} ${String(r.count).padStart(4)} flagged`);
    const sample = r.flagged[0];
    const preview = (sample.content || '').replace(/\s+/g, ' ').slice(0, 100);
    console.log(`  e.g. [${sample.idx}] ${preview}`);
  }
}

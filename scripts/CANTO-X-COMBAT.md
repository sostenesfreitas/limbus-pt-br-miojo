# Combate / UI do Canto X (arquivos *-a1c10p1) — complemento do CANTO-X-BRIEF.md

Fluxo: `scripts/data/<name>.json` (overlay parcial, mesma forma do arquivo do jogo, casando por `id`/`key`)
→ `node scripts/build-file.mjs <name>` → `translations/<name>.json` (base = EN oficial).

## Convenções herdadas do Canto IX (translations/*-a1c9*.json)

- Nível Ofensivo / Nível Defensivo; Velocidade Máx.; Poder Base / Poder de Moeda / Poder de Embate / Poder Final; PV / PS
- "Início de Turno:" / "Fim de Turno:"; "Recebe N de [X]"; "Inflige N de [X]"; "+N Contagem de [X]"; Acúmulo (수치); "Acúmulo Máx.: N"; "(máx. N)"
- Embate (합), Atordoamento (흐트러짐), Vitória/Derrota no Embate, "no próximo turno", "uma vez por turno"
- Tokens `[Token]` e marcadores `[OnSucceedAttack]` etc. ficam verbatim; nomes de status entre colchetes não se traduzem.

## Nomes fixados (usados em Enemies/BattleResultHint/PanicInfo já traduzidos)

- 르카키 → Kaki (Kaki Sedento / Kaki Faminto); 점원 → Atendente; 가죽 지갑 → Carteira de Couro; [햇살] → [Ensolarado]
- 붉은 신[미생] → **Deus Vermelho [Vida Incipiente]**; 생명줄 → Cordão Vital; 붉은 신의 뜯긴 살점 → Carne Arrancada do Deus Vermelho
- 포레그 / 원레그 → Quatro-Pernas / Uma-Perna; 바늘이 → Agulhinha (날실/씨실 → de Urdume / de Trama); 바느질의 왕 → **Rei da Costura**
- 수셰프 → **Sous-chef** (tique verbal "-는 거예요" → "…, tá ouvindo?"); 3층 플로어 매니저 → Gerente do 3º Andar; 탈의실 → Provador
- 토막난 요리재료 → Ingredientes Picados; '맛있는거 먹고 힘난다는거예요' → "Comer gostoso dá força, tá ouvindo?";
  '제 시그니쳐인 거예요' → "É o meu prato assinatura, tá ouvindo?"; '배고픈 거예요' → "Tô com fome, tá ouvindo?"
- 경계심 → Cautela; 경청에 대한 감사 → Gratidão pela Escuta; 세례[적] → Batismo [Vermelho]; 바늘못 → Agulhaprego; 박제 → Taxidermizado
- '피크스티치 일부러 눈에 띄게 박았냐고?! 그렇게 쳐박아주마!' → "Cravou o pesponto de propósito pra aparecer?! Então eu cravo em você!"
- 안내 불이행 → Descumprimento das Orientações; 우스티드 원단 → tecido worsted; 황금가죽 → Pele Dourada; 눈알 → olhos
- Pânico: 가죽 밖으로! → Fora do Couro!; 껍질 속으로… → De Volta pra Casca…; 요리갈망 → Anseio Culinário; 헝클어진 재봉 → Costura Desalinhada; 반복되는 죽음 → Morte Repetida; 분열 → Cisão

# Brief de tradução — Masmorra do Canto VIII (8D101B–8D209I)

Masmorra da história do Canto VIII (Hong Lu / Família Jia): a **2ª rodada da Seleção do Patriarca**,
um "battle royale" de moedas no Local de Seleção (심사장). Os candidatos carregam moedas penduradas no
pescoço; quem perde todas é eliminado. Os Pecadores acompanham Hong Lu (가보옥/Jia Baoyu) e enfrentam
Jia Qiu, Jia Huan (versão E.G.O), Wang Qingshan, os condenados de Hongyuan, etc. O espaço vai encolhendo
(zona que fecha), um apresentador (사회자) narra tudo por alto-falante. Há muitos flashbacks (과거) da
infância de Hong Lu no Grande Jardim, com a Vovó (과거가모) e Lin Daiyu criança.

Os 26 arquivos são 8D1xx (1º andar / subsolo 1) e 8D2xx (subsolo 2 / sala final). Em ordem de ID.

## Caminhos / fluxo (igual ao CANTO-X-BRIEF.md)

- Fonte KR (principal): `C:/Program Files (x86)/Steam/steamapps/common/Limbus Company/LimbusCompany_Data/Assets/Resources_moved/Localize/kr/StoryData/KR_<ID>.json`
- EN (referência de interpretação): `.../Localize/en/StoryData/EN_<ID>.json`
- Escrever `scripts/story/<ID>.json` = `{ "<id>": "texto PT", ..., "labels": { "<rótulo EN>": "<rótulo PT>" } }`
  - chave = `id` da entrada (string). TODAS as entradas com `content` não vazio precisam de chave.
  - `labels`: mapeia `teller`/`title`/`place` **pelo valor EN exato** → PT. "???" fica "???".
  - `model` e `id` nunca mudam (model é KR e não é exibido).
- `node scripts/build-story.mjs <ID>` gera `translations/StoryData/<ID>.json` e falha se sobrar EN/KR.
- Preservar verbatim: `<color=#...>…</color>`, `<i>`, `<size=...>`, `■■`, `\n`, `[Tokens]`, e as falas do
  Dante entre `<` e `>` (ex.: `<Hum… e agora?>`).
- Reticências "…" (caractere único); travessão "—".

## Glossário fixo (ver também scripts/GLOSSARY.md)

Termos já consolidados no Canto VIII do pacote — usar EXATAMENTE assim:

- 가씨 가문 / Jia Family → **Família Jia**; 가주 → **Patriarca**; 가모 / Vovó Jia → **Vovó** (as crianças) /
  **Matriarca** (quando é título); 어르신 / The Elders → **Os Anciãos** (teller) / "os anciãos"
- 가주 심사 / Family Hierarch Evaluation → **Seleção do Patriarca**; 2차 심사 / round 2 → **2ª seleção**
  ("a 2ª seleção", "segunda rodada da Seleção"); 후보 / candidate → **candidato(a)**
- 심사장 / Evaluation Arena → **Local de Seleção**; 심사장 1층 → "Local de Seleção, 1º andar";
  지하 1층/2층 → "Subsolo 1/Subsolo 2"; 가주 심사 최후의 방 → **Sala Final da Seleção do Patriarca**
- 죄인 / the condemned (de Hongyuan) → **condenado(s)**; 죄인의 방 → **Sala dos Condenados**
- 대관원 / Daguanyuan → **Grande Jardim**; 이홍원 → **Yihongyuan**; 요정관 → **Aojingguan**
- 홍원 / Hongyuan → **Hongyuan**; 철함사 / Tiekan Temple → **Tiekansi**; 공씨 가문 / Kong Family → **Família Kong**
- 세가 / X's Clan → **Casa de X** (ex.: "Casa de Xichun"); 세력 / Clan (facção) → **Facção**; 세력원 → **membro da Facção**
- 선인 / Revered Xianren → **Xianren** (os Imortais — manter "Xianren" quando o EN usa); 불로불사 → imortalidade
- 호위무사 / Bodyguard → **Guarda-costas**; 친척 → Parente; 친척 아이 → Criança Parente; 주민 → morador(a)
- 방송음 / Announcement (teller) → **Anúncio**; 사회자 (model; o locutor do jogo) → nas falas é "o apresentador"
- 동전 / coins → **moedas**; 동전 꾸러미 / coin bundle → **trouxa de moedas**; 탈락 → **eliminado(a)**
- H사 / H Corp. → **H Corp.**; 핏빛 향 / blood fragrance → **aroma de sangue**; 의체 → prótese
- Nomes: **Hong Lu**, **Jia Baoyu** (nome de Hong Lu na família), **Jia Qiu**, **Jia Huan**, **Xichun** (가시춘),
  **Lin Daiyu** / "Daiyu", **Xue Baochai**, **Xue Pan**, **Xiren**, **Jia Yuanchun**, **Zilu**, **Wei**;
  demais (Wang Zhao, Wang Qingshan, Wang Dawei, Kong Wujin, Shi Xiangjing, Shi Huajing, Shi Yihua,
  Kong Sihui, Jia Lion, Zhao Jiren etc.) → **a romanização do EN oficial, verbatim**.
- 형 / 오라버니 (Hong Lu → Jia Huan) → **irmão**; 누이/누나 → irmã; 도련님 (criados → Hong Lu) → **jovem senhor**;
  아가씨 (→ Daiyu/Baochai) → **senhorita**; 할머니 → Vovó
- Gerente Executivo (Dante, MASCULINO); Pecador(a); Mandatário(a); Anormalidade; E.G.O; Distorção.

## Registro de fala

- **Hong Lu**: gentil, suave, meio alheio; nos flashbacks "어린홍루" é criança curiosa e doce. "다친홍루" = ferido (ofegante).
- **Vovó (과거가모)**: carinhosa e autoritária ao mesmo tempo; fala de avó aristocrata.
- **Lin Daiyu (임대옥)**: delicada, melancólica, orgulhosa; criança (어린임대옥) tímida e séria.
- **Jia Qiu (가치우)**: frio, cruel, ambicioso; **Jia Huan E.G.O (에고가환)**: amargo, raivoso, desesperado.
- **Apresentador (사회자)**: locutor de show, animado e debochado ("Senhoras e senhores~", "Hora do cardio!").
- **Wang Zhao (왕자우)**: aliado temporário, falador e pragmático; **Xue Pan**: arrogante e covarde.
- **Dante**: narração em 1ª pessoa (plural "nós" quando narra o grupo); falas entre `< >`, inseguro.
- Pecadores como no INTERVALLO-BRIEF.md: Don Quixote "vós"; Faust 3ª pessoa; Heathcliff gíria de rua;
  Rodya descontraída; Yi Sang arcaico; Outis polida/militar; Ishmael prática e irritadiça; Gregor pé no chão;
  Sinclair nervoso; Ryōshū seca; Meursault literal.

## Qualidade

- PT-BR natural, de diálogo de jogo — nada de literalismo duro. Traduzir do KR; usar o EN para desfazer ambiguidade.
- NENHUMA entrada fica em EN/KR (interjeições incluídas: "Whoa" → "Uau", "Huh?" → "Hã?", "Hmm" → "Hum",
  "Tch" → "Tsc", "Guh" → "Argh"). O build falha se sobrar inglês.

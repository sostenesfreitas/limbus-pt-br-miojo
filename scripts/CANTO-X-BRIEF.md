# Brief de tradução — Canto X, parte 1 (S1000B–S1016B, S1060B–S1062B)

Update do jogo de 2026-09-17. Canto do Meursault: o ônibus está no Distrito 14 (N Corp.). Meursault é
preso por violar a pena de exílio permanente, julgado e condenado à Pena de Sisyphe (enforcado) — o que o
manda ao Grand Magasin Sisyphe, a "loja de departamentos" onde se fabricam as Experiências Enlatadas.
Os Pecadores entram lá pela Máquina Automática de Suicídio com a ajuda da Nova Liga dos Nove Literatos.

## Caminhos / fluxo

- Fonte KR: `.../Localize/kr/StoryData/KR_<ID>.json`; EN (referência): `.../Localize/en/StoryData/EN_<ID>.json`
- Escrever `scripts/story/<ID>.json` = `{ "<id>": "texto PT", ..., "labels": { "<rótulo EN>": "<rótulo PT>" } }`
  - chave = `id` da entrada (string). Entradas sem `id` recebem `"undefined"`, `"undefined_1"`, … na ordem.
  - `labels`: mapeia teller/title/place **pelo valor EN** (a base agora é o EN oficial, não mais a CLT).
- `node scripts/build-story.mjs <ID>` gera `translations/StoryData/<ID>.json` e falha se sobrar EN/KR.
- Preservar verbatim: `<color=#...>…</color>`, `<i>`, `<size=70%>`, `■■`, `\n`, falas do Dante entre `<` e `>`.

## Glossário do Canto X (além de scripts/GLOSSARY.md e INTERVALLO-BRIEF.md)

- 시지프 백화점 → **Grand Magasin Sisyphe** (nome próprio; "o Grand Magasin", "a loja" quando genérico);
  시지프탑 → Torre Sisyphe; 시지프형 → **Pena de Sisyphe**; 시지프 교수대 → forca de Sisyphe
- 거인 → **Gigante** (os Gigantes sustentam o Grand Magasin; = as "Vozes"); 목소리 → **a Voz** (maiúscula quando é a entidade seguida pelos clientes)
- 못 박는 자 → **Os Que Cravam Pregos** (precedente); 못 → prego
- 경험 통조림 → Experiências Enlatadas; 경험 반죽 → Massa de Experiência; 경험 요리/와인/샐러드 → Culinária/Vinho/Salada de Experiência; 정육소다 → **Refrigerante de Carne**
- 자살 자판기 → **Máquina Automática de Suicídio**
- 황금가죽 → **Pele Dourada**; 황금가지 → Ramo Dourado; 황금 실타래 → **Novelo Dourado**; 황금고치 → Casulo Dourado; 황금염료 → Tintura Dourada; 황금송진 → Resina Dourada; 황금고름 → Pus Dourado; 황금 실 → Fio Dourado
- 눈알 (moeda do Grand Magasin) → **olhos** ("bolas de olho" só se o KR enfatizar o objeto)
- 등급 (do cliente) → **Nível de Prestígio** / "nível"; 플로어 매니저 → **Gerente de Andar**; 시즌 → temporada
- 샘터 → **a Fonte**; 마네킹 → Manequim; 고객 → cliente; 안내 방송 (teller) → **Anúncio**
- 이방인 → **estrangeiro(s)** (aceno a "O Estrangeiro" de Camus; é como o Grand Magasin chama quem vem de fora)
- 은둔자 → **a Eremita** (irmã mais velha de Kromer; MULHER; tellers ficam "???")
- 잔느 → **Jeanne** (Gigante; ex-namorada de Meursault; MULHER); 마 퓌스 → **ma puce** (manter em francês)
- 르루주 → **Le Rouge**; 르누아르 → **Le Noir** (pl. "os Noir"); 리나모비블 → **L'Inamovible** (mãe de Meursault, MULHER); 네이키드 → **Naked**
- 아네트 → **Annette**; 수선사 → **Costureira**; 팔레트 → **Palette**; 퍼티 → **Putty** (irmã mais velha de Palette)
- 타래 둥지 → Ninho de Novelos; 염색실 → **Tinturaria**; 수선실 → Ateliê de Costura; 뷰티관 → Pavilhão de Beleza; 명품관 → Pavilhão de Luxo; 푸드코트 → Praça de Alimentação; 에스컬레이터 홀 → Hall das Escadas Rolantes
- Andares: 1F/2F/3F → "1º andar/2º andar/3º andar"; B1F/B2F → "Subsolo 1/Subsolo 2". Formato de `place` como no EN: "Pavilhão de Beleza, 1º andar".
- 법정 → tribunal; 법정 경위 → **Oficial de Justiça**; 판사 → juiz (HOMEM; "Excelência"); 검사 → **promotora** (MULHER); 피고(인) → réu; 변호인 → defesa/advogado(a); 방청석 → galeria; 존경하는 재판장님 → "Excelência"; 이의 있습니다 → "Protesto!"; 주문 → "Dispositivo:"; 최고형 → pena máxima
- 신구인회 → **Nova Liga dos Nove Literatos** (title "N사-신구인회" → "N Corp. - Nova Liga dos Nove Literatos"); 헤르만 이사 → **Diretora Hermann** (MULHER); 아세아 → Aseah; 구보 → Gubo; 가환 → Jia Huan (irmão de Hong Lu; Hong Lu o chama de "irmão"); 가보옥 → Jia Baoyu; 영지 형 → "o irmão Young-ji"
- 넬리 → Nelly (MULHER); 캐시 → Cathy; 언쇼 씨 → senhor Earnshaw; 에이해브/선장 → **Capitã Ahab** (MULHER); 고래 → a Baleia
- 금기 → **Tabu**; 금기 사냥꾼 → **Caçador de Tabus**; 노란작살 → **Arpão Amarelo**; 둥지 → Ninho; 뒷문 → porta dos fundos; 복도 → Corredor; 약지 → o Anelar; 유리(창) (invenção do Young-ji) → **a Vidraça**; 거울 → o Espelho; 홍원 → Hongyuan; 철함사 → Tiekansi; 징수원 → Coletores; 의체 → prótese
- 데미안 → Demian; 림 → Rim; 산손 → Sansón; 에피 → Effie; 크로머 → Kromer
- 카페 드 플로르 → Café de Flore; 바 두 퐁 로얄 → Bar du Pont Royal; 코코뱅 → coq au vin; 도넛 골목 → Beco do Donut; 마르게리타 → margherita
- 관리자님 (Dante) → **Gerente**; 관리자 양반 (Gregor) → **caro Gerente** (precedente); 흰머리 → Cabelo Branco; 파우 → Fau; 뫼르 → Meur; 싱클 → Sincl (precedente)
- Jogo de abreviações da Ryōshū: manter o formato "X. Y." com iniciais PT da expressão. Fixos: 시.대. → **C.H.** (precedente);
  모.분. → **C.F.** (cabeça fora); 사.분. → **M.F.** (membros fora); 뫼.차. → **V.M.** (vez do Meursault); 기.완. → **A.N.** (anotado);
  빠.따. → **Ta.Co.**; 황.가. → **R.D.** — piada: Meursault entende "Ramo Dourado", Ryōshū corrige "R.D. é Retalho Dourado", e a Gerente de Andar responde "se está falando da Pele Dourada…" (como o EN fez).
- 째깍이다 → tiquetaquear; 시계 태엽 → mola do relógio; 잠시 후... → "Algum tempo depois…"

## Registro de fala

- **Meursault**: seco, literal, frases curtas, tom quase burocrático; nunca emotivo. Chama Jeanne de "você".
- **Jeanne**: provocadora, carinhosa e irônica, fala em tom de conversa de café; chama Meursault de "ma puce".
- **Eremita (irmã de Kromer)**: risonha, arrastada, falsamente amigável, com um quê de sinistro.
- **Aseah**: erudito e floreado; **Jia Huan**: sarcástico, amargo com Hong Lu; **Gubo**: pragmático; **Nelly**: polida e fria.
- **Juiz/promotora/Oficial**: jargão forense brasileiro ("Excelência", "a acusação", "a defesa", "réu", "dispositivo").
- **Anúncios da loja**: linguagem de alto-falante de loja de departamentos ("Prezados clientes…").
- **Annette / Gerente de Andar do Subsolo 2**: maternais, pausadas, com metáforas de costura/fio.
- Demais Pecadores, Dante, Vergilius, LCD: como no INTERVALLO-BRIEF.md (Don Quixote com "vós"; Faust em 3ª pessoa; Heathcliff gíria de rua; Rodya descontraída; Yi Sang arcaico; Outis polida/militar; Ishmael prática e irritadiça; Hong Lu gentil; Gregor pé no chão; Sinclair nervoso).
- Reticências "…" (caractere único); travessão "—".

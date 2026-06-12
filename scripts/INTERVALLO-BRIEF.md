# Brief de tradução — Intervallo "Poeta do Chapéu de Bambu" (E915B–E927B, P10615/P10815/P10508)

Update do jogo de 2026-06-10/11. Continuação direta do Canto IX: a equipe do ônibus está no
Distrito da N Corp. (becos, "Rua da Manteiga" / Butter Street), trabalhando com a equipe LCD.
Foco: Kim do Chapéu de Bambu (김삿갓, o poeta andarilho), sua discípula Aeng-du, Ezra, e o
general Im Gyeong-eop (임경업).

## Caminhos

- Fonte KR (principal): `C:/Program Files (x86)/Steam/steamapps/common/Limbus Company/LimbusCompany_Data/Assets/Resources_moved/Localize/kr/StoryData/KR_<ID>.json`
- Fonte EN (referência): `.../Localize/en/StoryData/EN_<ID>.json`
- Saída: `translations/StoryData/<ID>.json` (já existe — é cópia do EN; substituir os textos por PT mantendo a estrutura, indentação de 2 espaços e LF, sem BOM)

## Regras de estrutura

- Traduzir os campos `content`, `title`, `place`, `teller` (teller só quando for cargo/descrição;
  nomes próprios e "???" ficam). `model` e `id` NUNCA mudam.
- Preservar verbatim: tags `<i>`, `<color=...>`, `<ruby=...>`, `[Tokens]` entre colchetes, `\n`.
- Traduzir do COREANO (KR é a fonte); usar o EN como referência de interpretação. O EN oficial
  às vezes recria piadas — siga o sentido do KR com a naturalidade do EN.
- Falas do Dante vêm entre `<` e `>` — manter os sinais.

## Glossário obrigatório (CLT) — ver também scripts/GLOSSARY.md

- Sinner → Pecador(a/es); Manager → Gerente; Executive Manager → Gerente Executivo (Dante = MASCULINO)
- Fixer → Mandatário(a); Distortion → Distorção; Abnormality → Anormalidade
- Golden Bough → Ramo Dourado; Bus → ônibus (minúsculo); Backstreets → becos
- 김삿갓 / Bamboo-hatted Kim → **Kim do Chapéu de Bambu** (abreviado: "Kim"; satgat = "chapéu de bambu")
- 앵두 / Aeng-du → **Aeng-du** (MULHER — a mais nova da LCD, braços protéticos; artigos femininos)
- 사부 (como Aeng-du chama Kim) → **Mentor**
- Im Gyeong-eop (임경업) → manter — **é MULHER** (그녀 no KR): Comissária Militar (절도사) da
  S Corp.; artigos/concordância femininos; Ezra → manter (mulher); Han Ho-bae → manter; Bongy → manter
- S Corp. = **Salpippyeo Agroindústrias** (precedente E512B — NÃO "Agropecuária/Agroindústria Salpippyeo")
- 기록부 / Docugrapher → **Docúgrafo**; 추노꾼 → **Ch'unokkun** (pl. Ch'unokkuns)
- 검계 → **Pacto da Lâmina** (padrão CLT, 314 ocorrências; NÃO "Linhagem da Lâmina");
  우두머리 como substantivo ("líder do Pacto") → **líder**
- 변곡점 → **Ponto de Inflexão** (termo técnico da LCD)
- 경험 통조림 → **Experiências Enlatadas**; 경험 반죽 → **Massa de Experiência**
- 시지프 백화점 → **Grand Magasin Sisyphe** (nome próprio, manter como o EN)
- 과거 (exame estatal Joseon) → **Exame Real**; 절도사 → **Comissária Militar**
- 사부 E 우두 (tratamento da Aeng-du para Kim) → **Mentor** (padrão CLT já publicado nos
  announcers/StageNodes; não usar "Chefe")
- 거미집 태우기 작전 / Operation Spider Pyre → **Operação Pira das Aranhas**
- Moses, Ezra, Outis, Im Gyeong-eop, Aeng-du → todas MULHERES (senhora/senhorita)
- LCD → **a LCD** (feminino: "a equipe da LCD"); LCC idem
- Gesellschaft, WARP (trem WARP), Arayashiki, Sora, Ren, Catherine → manter
- Clockhead (apelido do Dante) → "cabeça de relógio" / "relógio" (minúsculo, como insulto/apelido)
- fathoms (of ego) → profundezas (do ego); Aspect (o que Dante busca) → **Aspecto**
- Star (a Estrela que Dante segue) → Estrela; House of Spiders → Casa das Aranhas
- Mirror World → Mundo Espelho; K Corp./N Corp./L Corp. → manter

## Registro de fala (consistência com a base CLT / Canto IX já traduzido)

- **Kim do Chapéu de Bambu**: tagarela, brincalhão, preguiçoso assumido, mas poeta eloquente —
  coloquial fluido com floreios líricos ocasionais. Versão "뉴김삿갓" (Mundo Espelho) é a que fala.
- **Aeng-du**: formal, devotada, fala polida e um pouco arcaica/cerimoniosa ("Sim, Mentor.").
- **Im Gyeong-eop**: general clássico — fala arcaica/solene (sem chegar ao "vós" do Don Quixote).
- **Faust**: formalíssima, refere-se a si mesma em 3ª pessoa ("Faust"); jargão técnico.
- **Dante**: coloquial, inseguro; narração em 1ª pessoa nos trechos sem teller.
- **Don Quixote**: arcaico com "vós/vosso" (padrão CLT); **Outis**: polida ("senhorita Faust");
  **Rodya**: descontraída; **Sinclair**: educado e nervoso; **Meursault**: seco e literal.
- Tratamentos: personagens usam "senhor/senhora/senhorita + nome" como na base CLT.
- Pontuação: reticências "…" (caractere único); travessão "—" como no EN.

## Qualidade

- PT-BR natural — nada de tradução literal dura. Reler cada fala como diálogo de jogo.
- NENHUMA entrada pode ficar em inglês ou coreano (nem linhas curtas, interjeições têm
  tradução: "Whoa" → "Uau/Opa", "Huh?" → "Hã?", "Hmm" → "Hum" etc.).
- Poemas/versos do Kim: traduzir com ritmo e, se possível, rima leve — priorizar imagem poética.

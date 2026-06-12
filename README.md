# Limbus PT-BR — Miojo 🍜

> Tradução PT-BR de **Limbus Company**, servida quente em 3 minutos.

A tradução da comunidade **CLT District** é uma **Asa**: estrutura, recursos,
singularidade própria, funcionário de crachá. Respeite a Asa. 🫡

Nós? Nós somos **O Médio**. 🖕

| ![O Médio](assets/o-medio.png) |
|:--:|
| ***O Médio** em pessoa. Sim, o livro é de ouro. Sim, foi pago com o seu agradecimento.* |

A Asa cuida do Distrito dela lá do arranha-céu. **A gente cuida do beco.** O que ainda
não saiu por lá — os Cantos novos, os Intervallos quentinhos do update, as falas que
ficaram em inglês — chega primeiro aqui embaixo, contrabandeado direto do coreano, com
selo de qualidade d'O Médio. Subsidiário não oficial, preço de beco, entrega no mesmo
dia. E, como manda a tradição dos Dedos, nossas regras são rigorosas e nossas punições,
implacáveis (vide aviso abaixo).

## ⚠️ AVISO D'O MÉDIO: NÃO PULE A HISTÓRIA

A gente traduziu **cada fala** desse jogo na mão, direto do coreano. Cada poema do Kim
do Chapéu de Bambu, cada "Mentor." da Aeng-du, cada surto da Dona Distorcida. Se você
instalar isso tudo e sair **segurando o botão de skip igual o Messias** — que skipou
9 Cantos, 2 Intervallos e uma Noite de Walpurgis e até hoje acha que o Dante é uma
lâmpada —, O Médio vai saber. **O Médio sempre sabe.**

## 📦 O que tem no pacote

- **TUDO da história** (`StoryData/`): Cantos I–IX completos, Arco E inteiro (219
  arquivos), Intervallos — incluindo o mais recente, **o Intervallo do Kim do Chapéu de
  Bambu** (update de 10–11/06), com as histórias das Identidades novas (Hong Lu
  S Corp., Ishmael LCD, Meursault).
- **Combate, eventos e UI** do conteúdo novo: skills, buffs, presentes E.G.O da
  Masmorra Espelho, announcer do Kim & Aeng-du, vozes, tutoriais, banners.
- Tudo traduzido **a partir do coreano oficial**, mantendo estilo e terminologia da
  base CLT (a Asa fixa o glossário; O Médio não quebra contrato… esse tipo de
  contrato, pelo menos).
- A base **CLT completa (v6.51.0)** já vem dentro do zip — fonte, config, tudo. Não
  precisa instalar nada antes. Onde a Asa já traduziu, vale a palavra da Asa; O Médio
  só completa os buracos (e o conteúdo novo inteiro).

## 🔧 Como instalar (do jeito que até o Messias consegue)

Muita gente relatou problema instalando por partes. Acabou. Agora o zip traz a pasta
`Lang` **inteira e pronta**, com a tradução já selecionada:

1. **Feche o jogo.**
2. Baixe o `Lang-pt-BR-vX.Y.Z.zip` na
   [página de Releases](https://github.com/sostenesfreitas/limbus-pt-br-miojo/releases).
3. Extraia o zip. Vai sair uma pasta chamada `Lang`.
4. Jogue essa pasta `Lang` dentro de:

   ```
   C:\Program Files (x86)\Steam\steamapps\common\Limbus Company\LimbusCompany_Data\
   ```

   (clique com o direito no jogo na Steam → **Gerenciar → Procurar arquivos locais**
   se não souber onde é)
5. Se o Windows perguntar se quer **substituir os arquivos**: sim, substitui. Confia.
6. Abra o jogo. Se a tradução não vier sozinha, selecione **pt-BR** nas opções de
   idioma. Pronto. Agora **leia a história** (vide aviso acima).

> 💡 O zip já inclui o `config.json` que deixa a pt-BR selecionada — na maioria dos
> casos o jogo já abre em português.

## 🛠️ Pra quem gosta de fuçar (Subsidiários)

```
translations/          A tradução pronta (espelha Lang/pt-BR/)
scripts/
  GLOSSARY.md          Glossário de termos (consistência com a Asa)
  INTERVALLO-BRIEF.md  Brief de tradução do Intervallo atual
  build-story.mjs      Reconstrói um arquivo de história a partir da base CLT
  apply-to-game.mjs    Instala translations/ na pasta do jogo (faz backup .bak)
```

Com [Node.js](https://nodejs.org) instalado e o jogo no caminho padrão da Steam:

```
node scripts/apply-to-game.mjs
```

## 🙏 Créditos

- **ptbr-CLT (CLT District)** — a Asa. Base, fonte, estilo e glossário. O Médio agradece
  e não morde a mão (é literalmente um dedo dela).
- **Project Moon** — *Limbus Company* © Project Moon. A gente só ama (e sofre com) o
  jogo de vocês.
- **O Médio** — tradução dos becos, direto do coreano, sem singularidade, na base do
  miojo e da teimosia.

*Cada dia vivo na Cidade é uma bênção. Cada Canto lido, também.*

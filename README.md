# Limbus PT-BR — Miojo 🍜

> Tradução PT-BR independente de **Limbus Company**, feita direto do coreano.
> Servida quente em 3 minutos.

Nas Backstreets da Cidade, quem manda são os Dedos. E aqui, quem traduz é
**O Médio**. 🖕

| ![O Médio](assets/o-medio.png) |
|:--:|
| ***O Médio** em pessoa. Sim, o livro é de ouro. Sim, foi pago com o seu agradecimento.* |

Tradução de beco, sem corporação, sem singularidade, sem crachá: o conteúdo novo do
jogo — Cantos, Intervallos, histórias de Identidade — chega aqui traduzido **do
coreano oficial**, geralmente dias depois do update. Subsidiário de ninguém, preço de
beco, entrega no mesmo dia. E, como manda a tradição dos Dedos, nossas regras são
rigorosas e nossas punições, implacáveis (vide aviso abaixo).

## ⚠️ AVISO D'O MÉDIO: NÃO PULE A HISTÓRIA

A gente traduziu **cada fala** na mão, direto do coreano. Cada poema do Kim do Chapéu
de Bambu, cada "Mentor." da Aeng-du, cada surto da Dona Distorcida. Se você instalar
isso tudo e sair **segurando o botão de skip igual o Messias** — que skipou 9 Cantos,
2 Intervallos e uma Noite de Walpurgis e até hoje acha que o Dante é uma lâmpada —,
O Médio vai saber. **O Médio sempre sabe.**

## 📦 O que tem no pacote

- **A HISTÓRIA** (`StoryData/`): Cantos VII, VIII e IX completos, Arco E inteiro,
  Intervallos — incluindo o mais recente, **o Intervallo do Kim do Chapéu de Bambu**
  (update de 10–11/06), com as histórias das Identidades novas (Hong Lu S Corp.,
  Ishmael LCD, Meursault).
- **Combate e eventos do conteúdo recente**: skills, buffs, presentes E.G.O da
  Masmorra Espelhada, announcer do Kim & Aeng-du, vozes, letras de BGM, anotações do
  Dante no Teatro da História.
- **Fonte própria** (Noto Sans, licença aberta OFL) — o pacote é 100% independente.
- Foco d'O Médio é a **história**: o que estiver fora dela e não constar no pacote
  aparece no idioma original do jogo.

## 🔧 Como instalar (do jeito que até o Messias consegue)

1. **Feche o jogo.**
2. Baixe o `Lang-Miojo-PTBR-vX.Y.Z.zip` na
   [página de Releases](https://github.com/sostenesfreitas/limbus-pt-br-miojo/releases).
3. Extraia o zip. Vai sair uma pasta chamada `Lang`.
4. Jogue essa pasta `Lang` dentro de:

   ```
   C:\Program Files (x86)\Steam\steamapps\common\Limbus Company\LimbusCompany_Data\
   ```

   (clique com o direito no jogo na Steam → **Gerenciar → Procurar arquivos locais**
   se não souber onde é)
5. Se o Windows perguntar se quer **substituir os arquivos**: sim, substitui. Confia.
6. Abra o jogo. Se a tradução não vier sozinha, selecione **Miojo-PTBR** nas opções
   de idioma. Pronto. Agora **leia a história** (vide aviso acima).

> 💡 Já usa outra tradução personalizada? Copie o **conteúdo** da pasta `Miojo-PTBR`
> (sem o `config.json` da raiz) para dentro da pasta da sua tradução em
> `LimbusCompany_Data\Lang\<nome>`, substituindo os arquivos — assim você combina as
> duas. O Médio não julga (julga sim, mas deixa passar).

## 🛠️ Pra quem gosta de fuçar (Subsidiários)

```
translations/          A tradução pronta (espelha o conteúdo de Miojo-PTBR/)
scripts/
  GLOSSARY.md          Glossário de termos da tradução
  INTERVALLO-BRIEF.md  Brief de tradução do Intervallo atual
  apply-to-game.mjs    Instala translations/ na pasta do jogo (faz backup .bak)
```

Com [Node.js](https://nodejs.org) instalado e o jogo no caminho padrão da Steam:

```
node scripts/apply-to-game.mjs
```

## 🙏 Créditos

- **O Médio** — tradução dos becos, direto do coreano, na base do miojo e da
  teimosia.
- **Fontes**: Noto Sans © The Noto Project Authors, sob
  [SIL Open Font License 1.1](https://openfontlicense.org) — licença incluída no
  pacote.
- **Project Moon** — *Limbus Company* © Project Moon. A gente só ama (e sofre com) o
  jogo de vocês.

*Cada dia vivo na Cidade é uma bênção. Cada Canto lido, também.*

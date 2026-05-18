# Limbus PT-BR — Miojo

Tradução **PT-BR** do conteúdo de história (StoryData) de **Limbus Company**.

Este pacote **complementa** a localização da comunidade **ptbr-CLT**: ele traduz os
arquivos de história que a ptbr-CLT ainda deixava em inglês (em sua maioria, conteúdo
mais recente do jogo). A tradução é feita a partir do texto oficial em **coreano**,
mantendo consistência de estilo e terminologia com a ptbr-CLT.

## O que está traduzido

- **Arco E completo** (219 arquivos) — Intervallos, Noites de Walpurgis, os arcos do
  Distrito 8 / família de Hong Lu, da Teia / Corredores, e as side-stories.
- **Cantos VII, VIII e IX** e demais arquivos de história (`StoryData/`).
- Textos do Teatro da História de Personalidade e afins.

Todos os arquivos de StoryData que estavam em inglês na base CLT foram traduzidos.
Conteúdo fora da história (descrições de habilidades, combate, UI) **não** faz parte
deste pacote.

## Estrutura do repositório

```
translations/        Tradução pronta para instalar (espelha Lang/ptbr-CLT/)
  StoryData/         Arquivos de história traduzidos
  *.json             Outros arquivos traduzidos
scripts/
  story/             Fonte editável — texto PT por id, antes da montagem
  build-story.mjs    Reconstrói translations/ a partir de scripts/story/ + base CLT
  apply-to-game.mjs  Instala translations/ na pasta do jogo (faz backup .bak)
```

## Como instalar

Requer Limbus Company v1.73.0+ (suporte a tradução personalizada) e a localização
**ptbr-CLT** já instalada.

**Opção A — Release (recomendada):** baixe o `limbus-pt-br-miojo-vX.Y.zip` na
[página de Releases](https://github.com/sostenesfreitas/limbus-pt-br-miojo/releases).
Feche o jogo e extraia o conteúdo do zip dentro da pasta `Lang` do jogo
(`LimbusCompany_Data/Lang/`) — o zip traz uma pasta `ptbr-CLT` que se junta à
existente. Confirme **Substituir os arquivos** quando o Windows perguntar. Depois
selecione **ptbr-CLT** no jogo.

**Opção B — manual a partir do repositório:** feche o jogo e copie o conteúdo de
`translations/` (a pasta `StoryData/` e os `.json`) para dentro de
`LimbusCompany_Data/Lang/ptbr-CLT/`, sobrescrevendo os arquivos existentes. Depois
selecione **ptbr-CLT** no jogo.

**Opção C — script:** com [Node.js](https://nodejs.org) instalado e o jogo no caminho
padrão do Steam, rode na raiz do repositório:

```
node scripts/apply-to-game.mjs
```

Ele copia `translations/` para a pasta do jogo, criando um `.bak` de cada arquivo
substituído.

## Como editar / reconstruir

A tradução editável fica em `scripts/story/<ID>.json` — um objeto cujas chaves são os
`id` das falas e os valores, o texto em PT. Após editar, reconstrua o arquivo final:

```
node scripts/build-story.mjs <ID>
```

`build-story.mjs` mescla o texto de `scripts/story/` sobre o arquivo-base da ptbr-CLT
e grava o resultado em `translations/StoryData/`. Ele lê a base CLT no caminho padrão
de instalação do jogo no Steam (Windows).

## Créditos

- Base e estilo: localização da comunidade **ptbr-CLT** (CLT District).
- *Limbus Company* © Project Moon.

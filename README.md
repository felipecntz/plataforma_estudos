# Atlas de Estudos

Biblioteca pessoal de estudos com build totalmente estatico, foco editorial e estrutura pronta para crescer por arquivos de conteudo.

## Objetivo

Entregar a fundacao visual da plataforma:

- home editorial simples;
- sidebar hierarquica;
- paginas de area, categoria e conteudo;
- formulas com KaTeX;
- dupla visualizacao por topico com `Resumo` e `Mapa mental`;
- busca local no navegador;
- favoritos e recentes com `localStorage`.

## Stack

- Astro 7 em modo `static`
- MDX para conteudos
- CSS modular por arquivos de estilo
- JavaScript client-side minimo
- KaTeX para formulas

## Instalacao

O ambiente WSL deste projeto pode precisar de um Node Linux local para evitar problemas com `npm` do Windows em caminhos UNC.

Antes de instalar ou rodar, confira quais binarios estao sendo usados:

```bash
which node
which npm
```

Se o `npm` aparecer como algo parecido com `/mnt/c/Program Files/nodejs/npm`, voce esta usando o Node do Windows dentro do WSL. Nesse caso, use a opcao do Node local abaixo.

### Opcao 1: ambiente Node Linux ja configurado

```bash
npm install
```

### Opcao 2: usar o Node local baixado no workspace

```bash
PATH="$PWD/.local/node-v22.14.0-linux-x64/bin:/bin:/usr/bin" npm install
```

## Execucao

```bash
npm run dev
```

Se estiver usando o Node local, rode:

```bash
PATH="$PWD/.local/node-v22.14.0-linux-x64/bin:/bin:/usr/bin" npm run dev
```

O Astro normalmente abre em:

```text
http://localhost:4321
```

### Erro comum no WSL

Se aparecer uma mensagem como:

```text
CMD.EXE foi iniciado tendo o caminho acima como pasta atual.
Nao ha suporte para caminhos UNC.
'astro' nao e reconhecido como um comando interno ou externo
```

isso significa que o `npm` do Windows foi executado dentro do WSL. Use:

```bash
PATH="$PWD/.local/node-v22.14.0-linux-x64/bin:/bin:/usr/bin" npm run dev
```

Para deixar o terminal atual preparado e evitar repetir o prefixo:

```bash
export PATH="$PWD/.local/node-v22.14.0-linux-x64/bin:/bin:/usr/bin:$PATH"
npm run dev
```

## Build

```bash
npm run build
```

A saida final fica em `dist/` e pode ser servida diretamente por qualquer servidor HTTP estatico.

## Estrutura de pastas

```text
.
├── public/
│   └── search-index.json
├── src/
│   ├── components/
│   ├── content/
│   │   └── studies/
│   │       ├── matematica/
│   │       └── dados/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── dist/
├── astro.config.mjs
├── package.json
└── README.md
```

## Criacao de nova pagina

1. Adicione um arquivo `.md` ou `.mdx` em `src/content/studies/<area>/<categoria>/`.
2. Preencha os metadados obrigatorios do frontmatter.
3. Inclua o objeto `mindMap` no frontmatter para a visualizacao enxuta do topico.
4. Use os componentes editoriais importando de `src/components/`.
5. Atualize `src/data/navigation.ts` para incluir o novo topico na sidebar.
6. Atualize `public/search-index.json` para expor a pagina na busca local.
7. Rode o build.

Exemplo:

```mdx
---
title: Probabilidade basica
description: Introducao visual a eventos e chances.
area: Matematica
areaSlug: matematica
category: Estatistica
categorySlug: estatistica
topic: Probabilidade
slug: probabilidade-basica
order: 9
icon: circle
color: stats
difficulty: Iniciante
readingTime: 5 min
updatedAt: 13/07/2026
featured: false
tags:
  - matematica
  - estatistica
  - probabilidade
mindMap:
  title: Mapa mental de probabilidade
  legend: [Base, Regra, Revisao]
  nodes:
    - { id: "prob", label: "Probabilidade", x: 50, y: 12, kind: "core" }
    - { id: "evento", label: "Evento", x: 30, y: 40, kind: "base" }
    - { id: "casos", label: "Casos possiveis", x: 70, y: 40, kind: "base" }
  edges:
    - ["prob", "evento"]
    - ["prob", "casos"]
---
```

## Padrao editorial dos topicos

Cada topico deve ter sempre duas visualizacoes:

- `Resumo`: mais descritivo, com logica, exemplos e cobertura suficiente para nao deixar lacunas importantes.
- `Mapa mental`: extremamente resumido, visual e focado no essencial.

Na pratica:

- o corpo do MDX contem o resumo textual;
- o frontmatter `mindMap` abastece a revisao enxuta.

## Criacao de nova area

1. Adicione a area em `src/data/areas.ts`.
2. Adicione a hierarquia em `src/data/navigation.ts`.
3. Crie a pasta correspondente dentro de `src/content/studies/`.
4. Adicione paginas demonstrativas da nova area.
5. Inclua entradas na busca local.

## Criacao de novo topico

1. Crie o arquivo de conteudo com `slug` unico.
2. Posicione o arquivo dentro da categoria correta.
3. Inclua o topico na navegacao estatica.
4. Verifique a ordem com o campo `order`.

## Uso de formulas

O componente `FormulaBlock.astro` recebe:

- `name`
- `expression`
- `description`
- `variables`
- `example`
- `note`
- `mistake`

Exemplo:

```mdx
<FormulaBlock
  name="Porcentagem"
  expression="\left(\frac{\text{parte}}{\text{total}}\right) \times 100"
  description="Converte uma relacao em escala percentual."
  variables={[
    { label: "parte", meaning: "valor observado" },
    { label: "total", meaning: "base de comparacao" }
  ]}
/>
```

## Uso de mapas mentais

O componente `MindMap.astro` recebe um objeto com:

- `title`
- `nodes`
- `edges`
- `legend`

O exemplo demonstrativo atual esta em `src/data/mindmap.ts`.

## Busca

- A busca e local, sem backend.
- O indice atual esta em `public/search-index.json`.
- Os resultados mostram titulo, caminho, descricao e tags.

## Favoritos

- Persistidos em `localStorage` com a chave `atlas-favorites`.
- Podem ser adicionados nas paginas de conteudo.
- Sao exibidos na home.

## Recentes

- Persistidos em `localStorage` com a chave `atlas-recents`.
- Registram as ultimas paginas de conteudo visitadas.
- Sao exibidos na home.

## Deploy estatico

Pode ser publicado em:

- Nginx servindo `dist/`
- servidor HTTP simples
- GitHub Pages
- Cloudflare Pages
- Netlify

Nao existe backend, banco, API, SSR ou dependencia de servidor de aplicacao.

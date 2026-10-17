# Task 001 — Estrutura inicial estática da plataforma de estudos

## Status

- [ ] Planejada
- [ ] Em desenvolvimento
- [ ] Em validação
- [ ] Concluída

---

## 1. Objetivo

Criar toda a estrutura inicial da plataforma estática de estudos.

Esta task deve entregar a fundação visual e editorial do projeto.

A plataforma deve ser composta somente por frontend estático.

Não deve existir:

- backend;
- banco de dados;
- Django;
- Flask;
- API;
- autenticação;
- painel administrativo;
- usuários;
- servidor de aplicação;
- persistência remota;
- infraestrutura complexa.

A entrega deve priorizar:

- layout premium, clean e simples;
- sidebar hierárquica;
- páginas de conteúdo;
- fórmulas;
- mapas mentais de revisão real;
- busca local;
- responsividade;
- organização dos arquivos;
- facilidade para adicionar novos conteúdos em tasks futuras.

---

## 2. Contexto

A plataforma será uma biblioteca pessoal de resumos.

Ela será usada para organizar conteúdos como:

- matemática;
- dados;
- Power BI;
- SQL;
- Python;
- estatística;
- Microsoft Fabric;
- inteligência artificial;
- SAP;
- outros assuntos futuros.

Cada novo assunto será criado em uma task separada.

A Task 001 não deve desenvolver conteúdos completos.

Ela deve criar apenas:

- estrutura;
- layout;
- componentes;
- exemplos demonstrativos;
- padrões editoriais;
- navegação.

Mesmo quando o conteúdo for demonstrativo, ele deve ser útil para revisão e não apenas ilustrativo.

### Diretriz editorial permanente

Cada tópico deve sempre ter duas visualizações complementares:

- `Resumo`
- `Mapa mental`

#### Resumo

O resumo deve:

- ser mais profundo;
- explicar com lógica;
- conectar conceitos;
- incluir exemplos;
- incluir macetes quando fizer sentido;
- cobrir o essencial sem deixar lacunas importantes.

O resumo não deve ser telegráfico.

#### Mapa mental

O mapa mental deve:

- servir para bater o olho e lembrar rapidamente do assunto;
- ser mais enxuto que o resumo;
- trazer pequenas definições;
- destacar fórmulas quando existirem;
- trazer regras essenciais;
- incluir mini exemplos rápidos quando isso ajudar;
- resumir visualmente o conteúdo de verdade.

O mapa mental não deve ser:

- apenas decorativo;
- apenas uma lista de palavras soltas;
- apenas um diagrama genérico com tópicos;
- uma imagem aleatória sem valor de revisão.

#### Granularidade dos tópicos

Conteúdos grandes devem ser sempre divididos em tópicos separados, cada um com sua própria página, resumo e mapa mental.

Não concentrar módulos extensos em uma única tela longa. Quando um assunto tiver várias partes naturais, como visão geral, instalação, comandos, consultas, funções, segurança, deploy ou diferenças entre ferramentas, criar arquivos separados e ligar todos pela navegação.

Regra prática:

- uma página deve responder a uma pergunta principal;
- comandos e sintaxes devem ficar em páginas próprias quando o volume crescer;
- páginas de visão geral devem orientar o caminho, não tentar conter todo o curso;
- cada página nova deve manter `Resumo` e `Mapa mental`;
- a sidebar deve representar a sequência de estudo sugerida.

#### Regra específica para AWS

AWS não deve ser concentrada em uma página única de "serviços principais".

Sempre separar os serviços relevantes em tópicos próprios, cada um com sua própria página, resumo e mapa mental. A página geral de AWS deve apenas orientar a sequência de estudo, apresentar conceitos-base e ligar para os serviços.

Serviços que devem ter páginas próprias quando AWS estiver no escopo:

- `IAM`: identidade, roles, policies, menor privilégio, MFA e auditoria;
- `EC2`: instâncias, AMIs, tipos de máquina, EBS, security groups, acesso e escala;
- `S3`: buckets, objetos, chaves, políticas, versionamento, criptografia, lifecycle e classes de armazenamento;
- `RDS`: engines, instâncias, storage, backups, Multi-AZ, réplicas, rede e segurança;
- `Lambda`: eventos, handlers, runtimes, execution role, timeout, memória, logs, limites e custos.

Se outros serviços AWS crescerem em volume, como VPC, CloudFront, Route 53, CloudWatch, CloudTrail, KMS, Secrets Manager, DynamoDB, ECS, EKS ou CloudFormation, eles também devem virar páginas independentes.

---

## 3. Princípio principal

A prioridade máxima é a aparência.

A plataforma deve parecer:

- moderna;
- premium;
- editorial;
- visual;
- organizada;
- agradável;
- memorável;
- feita para estudar;
- limpa;
- simples de navegar;
- focada em revisão rápida.

O visual deve privilegiar:

- pouco ruído;
- poucos elementos por tela;
- leitura rápida;
- clareza acima de ornamentação;
- revisão acima de excesso de destaque.

Ela não deve parecer:

- sistema administrativo;
- dashboard corporativo;
- blog genérico;
- documentação técnica crua;
- template Bootstrap;
- aplicação de cadastro;
- sistema empresarial.

---

## 4. Escopo técnico

Criar um projeto estático.

Abordagens permitidas:

### Opção A — HTML, CSS e JavaScript

```text
index.html
pages/
assets/
data/
components/
```

### Opção B — Gerador de site estático

Pode utilizar:

- Astro;
- Eleventy;
- Vite;
- outra solução leve.

A solução escolhida deve gerar uma pasta final estática, como:

```text
dist/
```

O servidor deverá apenas servir arquivos.

Não deve existir runtime backend.

---

## 5. Critério para escolha da tecnologia

Escolher a opção que melhor permita:

- componentes reutilizáveis;
- páginas bonitas;
- conteúdo em Markdown;
- organização hierárquica;
- build estático;
- busca client-side;
- deploy simples;
- ótima performance;
- facilidade para a IA criar novas páginas.

Se utilizar Astro ou solução semelhante, configurar saída totalmente estática.

Não criar endpoints.

Não criar API routes.

Não criar SSR dependente de servidor.

---

## 6. Estrutura sugerida

```text
/
├── src/
│   ├── content/
│   │   ├── matematica/
│   │   └── dados/
│   ├── layouts/
│   │   ├── BaseLayout
│   │   ├── StudyLayout
│   │   └── AreaLayout
│   ├── components/
│   │   ├── Sidebar
│   │   ├── Header
│   │   ├── Breadcrumbs
│   │   ├── StudyCard
│   │   ├── TopicCard
│   │   ├── FormulaBlock
│   │   ├── MindMap
│   │   ├── DefinitionBlock
│   │   ├── ExampleBlock
│   │   ├── TipBlock
│   │   ├── WarningBlock
│   │   ├── CodeBlock
│   │   ├── TableBlock
│   │   └── RelatedContent
│   ├── data/
│   │   ├── navigation.json
│   │   ├── areas.json
│   │   └── search-index.json
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── content.css
│   │   └── responsive.css
│   ├── scripts/
│   │   ├── sidebar.js
│   │   ├── search.js
│   │   ├── favorites.js
│   │   └── app.js
│   └── pages/
├── public/
├── dist/
├── package.json
└── README.md
```

A estrutura pode ser adaptada, desde que continue simples e estática.

---

## 7. Organização do conteúdo

Criar uma convenção clara para novos conteúdos.

Exemplo:

```text
src/content/matematica/matematica-basica/fracoes.md
src/content/dados/power-bi/dax.md
```

Cada conteúdo deve possuir metadados.

Exemplo:

```yaml
---
title: Frações
description: Aprenda frações de forma visual.
area: Matemática
category: Matemática básica
topic: Frações
slug: fracoes
order: 1
icon: divide
color: purple
tags:
  - matemática
  - frações
  - básico
---
```

A IA deve conseguir criar novas páginas apenas adicionando arquivos.

---

## 8. Navegação hierárquica

Criar uma hierarquia estática capaz de representar:

```text
Área
└── Categoria
    └── Subcategoria
        └── Tópico
```

Criar dados demonstrativos:

```text
Matemática
├── Matemática básica
│   ├── Operações fundamentais
│   ├── Frações
│   ├── Potenciação
│   └── Porcentagem
└── Álgebra
    ├── Equações
    └── Funções
```

```text
Dados
├── Power BI
│   ├── Modelagem
│   ├── DAX
│   ├── Power Query
│   └── Visualização
├── SQL
│   ├── Consultas básicas
│   ├── Joins
│   └── Funções de janela
└── Python
    ├── Pandas
    └── Automação
```

Esses itens servem apenas para demonstrar o layout.

---

## 9. Sidebar

Criar uma sidebar premium.

### Requisitos

- múltiplos níveis;
- expansão e recolhimento;
- item atual destacado;
- caminho ativo destacado;
- ícones;
- cores por área;
- rolagem própria;
- aparência leve;
- animações suaves;
- estados de hover;
- boa legibilidade;
- suporte a muitos itens;
- responsividade.

### Desktop

- fixa ou sticky;
- altura total;
- navegação sempre acessível;
- grupos bem separados.

### Mobile

- drawer;
- botão de abrir;
- botão de fechar;
- overlay;
- navegação por toque;
- sem quebrar o conteúdo.

### Persistência

Utilizar `localStorage` para lembrar grupos abertos.

---

## 10. Header

Criar um header elegante com:

- logo ou nome da plataforma;
- busca;
- breadcrumbs resumidos;
- botão de menu mobile;
- botão de tema, caso seja implementado;
- acesso a favoritos locais;
- atalho para conteúdos recentes.

O header deve ser discreto e premium.

---

## 11. Dashboard inicial

Criar uma home editorial.

### Seção principal

Incluir:

- saudação;
- título;
- texto curto;
- busca em destaque;
- ação para continuar estudando;
- composição visual forte.

### Áreas de estudo

Criar cards para:

- Matemática;
- Dados;
- outras áreas demonstrativas.

Cada card deve conter:

- ícone;
- nome;
- descrição;
- cor temática;
- quantidade de tópicos demonstrativa;
- link.

### Conteúdos recentes

Criar cards com:

- título;
- caminho;
- tempo de leitura;
- tags;
- destaque visual.

### Destaques

Criar seções como:

- fórmula em destaque;
- mapa mental em destaque;
- resumo rápido;
- conteúdo recomendado.

Evitar gráficos corporativos.

---

## 12. Página de área

Criar uma página de área.

Exemplo:

```text
Matemática
```

Incluir:

- capa;
- cor temática;
- descrição;
- categorias;
- tópicos;
- cards visuais;
- conteúdos em destaque;
- mapa geral da área;
- breadcrumbs.

---

## 13. Página de categoria

Criar página intermediária.

Exemplo:

```text
Matemática > Matemática básica
```

Incluir:

- título;
- descrição;
- tópicos;
- ordem de estudo;
- cards;
- conteúdos relacionados;
- mapa visual;
- breadcrumbs.

---

## 14. Página de conteúdo

Criar um layout de conteúdo premium.

### Cabeçalho

Incluir:

- breadcrumbs;
- área;
- categoria;
- título;
- subtítulo;
- descrição;
- tags;
- tempo de leitura;
- dificuldade;
- data estática de atualização;
- botão de favorito local.

### Sumário

Criar sumário interno.

No desktop:

- sticky;
- lateral ou integrado ao layout.

No mobile:

- recolhível.

### Blocos

Criar componentes para:

- introdução;
- definição;
- resumo;
- conceito;
- fórmula;
- exemplo;
- passo a passo;
- dica;
- atenção;
- erro comum;
- código;
- tabela;
- exercício;
- resposta;
- mapa mental;
- referências;
- conteúdo relacionado.

### Rodapé

Incluir:

- anterior;
- próximo;
- voltar para categoria;
- conteúdos relacionados.

---

## 15. Fórmulas

Adicionar KaTeX ou MathJax.

Criar componente visual de fórmula.

Campos visuais:

- nome;
- expressão;
- descrição;
- variáveis;
- exemplo;
- observação;
- erro comum.

Criar pelo menos duas fórmulas demonstrativas.

Exemplo:

```text
Porcentagem = (parte / total) × 100
```

Validar quebra e rolagem no mobile.

---

## 16. Mapas mentais

Criar um componente demonstrativo.

Pode utilizar:

- SVG;
- Mermaid;
- HTML e CSS;
- biblioteca frontend;
- JSON.

O componente deve possuir:

- nós;
- conexões;
- cores;
- legenda;
- zoom ou visualização ampliada;
- boa adaptação para celular;
- aparência integrada ao restante da página.

Criar ao menos um mapa mental demonstrativo.

Não criar editor.

---

## 17. Busca local

Criar busca sem backend.

Pode utilizar:

- Pagefind;
- Fuse.js;
- índice JSON;
- solução equivalente.

A busca deve indexar:

- títulos;
- descrições;
- áreas;
- categorias;
- tópicos;
- tags;
- conteúdo.

Resultados devem mostrar:

- título;
- trecho;
- caminho hierárquico;
- tags;
- link.

Criar estado sem resultado.

---

## 18. Favoritos locais

Criar favoritos usando `localStorage`.

Permitir:

- favoritar página;
- remover favorito;
- visualizar favoritos;
- manter favoritos após recarregar.

Não criar usuário.

Não criar sincronização.

---

## 19. Conteúdos recentes

Registrar no navegador:

- páginas acessadas;
- data local;
- último conteúdo;
- lista de recentes.

Utilizar `localStorage`.

Limitar a quantidade armazenada.

---

## 20. Design system

Definir tokens para:

- cores;
- tipografia;
- tamanhos;
- espaçamento;
- bordas;
- raios;
- sombras;
- transições;
- largura de conteúdo;
- breakpoints.

Criar paletas por área.

Exemplo:

- Matemática;
- Dados;
- Tecnologia;
- Estatística;
- IA.

Criar componentes consistentes.

---

## 21. Tipografia

Definir:

- fonte de títulos;
- fonte de corpo;
- fonte monoespaçada;
- escala tipográfica;
- line-height;
- largura máxima de leitura.

A leitura deve ser confortável.

Títulos devem ter forte presença visual.

---

## 22. Responsividade

Validar:

- desktop grande;
- notebook;
- tablet;
- celular.

Testar:

- sidebar;
- header;
- cards;
- busca;
- breadcrumbs;
- fórmulas;
- tabelas;
- mapas mentais;
- sumário;
- rodapé;
- navegação anterior e próxima.

A experiência mobile deve manter a qualidade visual.

---

## 23. Acessibilidade básica

Implementar:

- HTML semântico;
- contraste;
- foco visível;
- navegação por teclado;
- labels;
- `aria`;
- texto alternativo;
- áreas de toque adequadas;
- redução de animação quando configurada no sistema.

---

## 24. Desempenho

Aplicar:

- imagens otimizadas;
- lazy loading;
- CSS organizado;
- JavaScript mínimo;
- build otimizado;
- divisão de recursos quando útil;
- fontes carregadas com cuidado;
- saída estática rápida.

Não adicionar bibliotecas pesadas sem necessidade.

---

## 25. Dados demonstrativos

Criar conteúdo fictício suficiente para validar o layout.

Mínimo:

- 2 áreas;
- 4 categorias;
- 8 tópicos;
- 6 páginas;
- 2 fórmulas;
- 1 mapa mental;
- 6 cards;
- 6 resultados de busca;
- 3 tipos de bloco editorial.

O conteúdo não precisa ser aprofundado.

---

## 26. Deploy

Preparar o projeto para publicação como site estático.

Documentar opções como:

- Nginx;
- servidor HTTP simples;
- GitHub Pages;
- Cloudflare Pages;
- Netlify.

Se for publicado no servidor próprio, basta servir a pasta de build.

Exemplo:

```text
dist/
```

Não configurar banco.

Não configurar aplicação Python.

Não configurar Gunicorn.

Não configurar migrations.

---

## 27. README

Criar documentação com:

- objetivo;
- stack;
- instalação;
- execução;
- build;
- estrutura de pastas;
- criação de nova página;
- criação de nova área;
- criação de novo tópico;
- uso de fórmulas;
- uso de mapas mentais;
- busca;
- favoritos;
- deploy estático.

---

## 28. Fora de escopo

Não implementar:

- Django;
- backend;
- banco;
- PostgreSQL;
- SQLite;
- API;
- autenticação;
- usuários;
- admin;
- cadastro por formulário;
- CMS;
- permissões;
- multiusuário;
- sincronização;
- comentários;
- comunidade;
- cobrança;
- assinatura;
- aplicativo mobile;
- IA integrada ao site;
- RAG;
- busca semântica;
- editor de mapas mentais;
- quizzes completos;
- flashcards;
- gamificação;
- analytics avançado.

---

## 29. Critérios de aceite técnicos

- [ ] O projeto gera somente arquivos estáticos.
- [ ] Não existe backend.
- [ ] Não existe banco.
- [ ] Não existe Django.
- [ ] Não existe API própria.
- [ ] Não existe autenticação.
- [ ] O build funciona.
- [ ] A pasta de saída pode ser servida diretamente.
- [ ] A navegação funciona.
- [ ] A sidebar funciona.
- [ ] A busca funciona no navegador.
- [ ] Os favoritos funcionam com `localStorage`.
- [ ] Os recentes funcionam com `localStorage`.
- [ ] Fórmulas renderizam.
- [ ] O mapa mental é exibido.
- [ ] Os links funcionam.
- [ ] O site funciona após recarregar páginas internas.
- [ ] O README está completo.

---

## 30. Critérios de aceite visuais

- [ ] A plataforma possui aparência premium.
- [ ] O dashboard possui composição editorial.
- [ ] A sidebar é bonita e organizada.
- [ ] O layout não parece sistema administrativo.
- [ ] O layout não parece blog genérico.
- [ ] Os cards possuem acabamento visual.
- [ ] As páginas possuem hierarquia clara.
- [ ] Os blocos de conteúdo são bem divididos.
- [ ] Fórmulas ficam evidentes.
- [ ] Mapas mentais parecem parte natural do layout.
- [ ] A tipografia é forte e legível.
- [ ] As cores são consistentes.
- [ ] Os espaçamentos são consistentes.
- [ ] Existem hovers e transições.
- [ ] O mobile mantém qualidade visual.
- [ ] Não existem blocos longos sem divisão.
- [ ] Não existem desalinhamentos evidentes.
- [ ] Não existem elementos improvisados.
- [ ] A identidade visual é memorável.

---

## 31. Definição de pronto

A task estará concluída quando:

1. O frontend estiver estruturado.
2. O build estático funcionar.
3. A sidebar estiver completa.
4. O dashboard estiver finalizado.
5. As páginas base estiverem prontas.
6. Os blocos editoriais estiverem criados.
7. Fórmulas estiverem funcionando.
8. O mapa mental estiver funcionando.
9. A busca local estiver funcionando.
10. Favoritos locais estiverem funcionando.
11. Conteúdos recentes estiverem funcionando.
12. O mobile estiver validado.
13. Os conteúdos demonstrativos estiverem presentes.
14. O README estiver completo.
15. Nenhuma camada de backend tiver sido criada.
16. Nenhum banco tiver sido criado.
17. A task for movida para `specs/tasks/done/`.

---

## 32. Observação final

A plataforma deve ser simples de manter.

Adicionar um novo conteúdo deve significar apenas:

1. criar uma nova task;
2. escrever um arquivo de conteúdo;
3. associar o conteúdo à navegação;
4. executar o build;
5. publicar os arquivos estáticos.

Não introduzir complexidade.

A prioridade desta task é entregar uma base visual excepcional para todos os conteúdos futuros.

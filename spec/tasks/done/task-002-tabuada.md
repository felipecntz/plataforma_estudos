# Task 002 — Tabuada como primeiro tópico de Matemática

## Status

- [x] Concluída em 01/11/2026

## Entrega

- Página `tabuada.mdx` em Matemática > Matemática básica, com `order: 0`, antes de Frações.
- Resumo com significado da multiplicação, tabela de 0 a 10, propriedades, macetes, divisão e exercícios com respostas comentadas.
- Mapa mental com definições curtas, fórmulas e exemplos para revisão.
- Revisão do mapa mental com um bloco por tabuada de 1 a 9, cada um com dez multiplicações e uma dica de cálculo.
- Apresentação em nove cards dedicados, com número grande, indicador visual de quantidade, contas alinhadas, resultados destacados, cores por card e dica no rodapé.
- Grade responsiva que aproveita a largura do mapa mental; o sumário volta a aparecer ao selecionar Resumo.
- Tabela gerada no build, com cabeçalhos semânticos e foco para rolagem por teclado.
- Inclusão na primeira posição da sidebar e no índice de busca local.
- Reutilização dos componentes editoriais e estilos existentes.

## Validação

- `npm run build` concluído, com 75 páginas estáticas.
- Conferência do HTML gerado: 121 produtos corretos, mapa mental e KaTeX presentes.
- Tabuada antes de Frações na navegação e como Passo 1 da categoria.
- Entrada única de Tabuada no índice de busca gerado.
- Revisão visual em Chrome nas larguras de 1440 e 390 px, com temas claro e escuro.
- Verificação no navegador em 1440, 1024, 768, 390 e 320 px, nos dois temas: nove cards, 90 produtos corretos e ausência de overflow horizontal ou conteúdo cortado nos cards.
- Alternância entre Resumo e Mapa mental validada, incluindo restauração do sumário.

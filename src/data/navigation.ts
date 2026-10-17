export const navigation = [
  {
    area: "Matematica",
    slug: "matematica",
    color: "math",
    icon: "◧",
    categories: [
      {
        name: "Matematica basica",
        slug: "matematica-basica",
        description: "Fundamentos de calculo, algebra, proporcoes e matematica financeira.",
        topics: [
          { title: "Fracoes", slug: "fracoes" },
          { title: "Porcentagem", slug: "porcentagem" },
          { title: "Expressoes numericas", slug: "expressoes-numericas" },
          { title: "Potenciacao", slug: "potenciacao" },
          { title: "Radiciacao", slug: "radiciacao" },
          { title: "Produtos notaveis", slug: "produtos-notaveis" },
          { title: "Equacao do primeiro grau", slug: "equacao-primeiro-grau" },
          { title: "Equacao do segundo grau", slug: "equacao-segundo-grau" },
          { title: "Regra de tres", slug: "regra-de-tres" },
          { title: "Matematica financeira basica", slug: "matematica-financeira-basica" }
        ]
      },
      {
        name: "Matematica nivel medio",
        slug: "matematica-nivel-medio",
        description: "Sequencias, conjuntos e funcoes para consolidar a matematica do ensino medio.",
        topics: [
          { title: "Progressao aritmetica", slug: "progressao-aritmetica" },
          { title: "Progressao geometrica", slug: "progressao-geometrica" },
          { title: "Conjuntos", slug: "conjuntos" },
          { title: "Fundamentos de funcoes", slug: "fundamentos-de-funcoes" },
          { title: "Funcao do primeiro grau", slug: "funcao-primeiro-grau" },
          { title: "Funcao do segundo grau", slug: "funcao-segundo-grau" }
        ]
      }
    ]
  },
  {
    area: "Dados",
    slug: "dados",
    color: "data",
    icon: "▣",
    categories: [
      {
        name: "Banco de Dados",
        slug: "banco-de-dados",
        description: "Conceitos de bancos de dados, SGBDs e SQL com sintaxe focada em PostgreSQL.",
        topics: [
          { title: "Visao geral e historia", slug: "banco-de-dados-visao-geral-historia" },
          { title: "SGBDs famosos e usos", slug: "banco-de-dados-sgbds-famosos-usos" },
          { title: "PostgreSQL: fundamentos", slug: "postgresql-fundamentos" },
          { title: "DDL: estrutura do banco", slug: "sql-ddl-postgresql" },
          { title: "DML: manipulacao de dados", slug: "sql-dml-postgresql" },
          { title: "DQL: SELECT e filtros", slug: "sql-dql-select-filtros-postgresql" },
          { title: "DQL: agrupamentos", slug: "sql-dql-agrupamentos-postgresql" },
          { title: "DQL: joins, subqueries e CTEs", slug: "sql-dql-joins-subqueries-ctes-postgresql" },
          { title: "DQL: funcoes PostgreSQL", slug: "sql-dql-funcoes-postgresql" },
          { title: "DQL: window functions", slug: "sql-dql-window-functions-postgresql" },
          { title: "DCL: permissoes", slug: "sql-dcl-postgresql" },
          { title: "TCL: transacoes", slug: "sql-tcl-postgresql" },
          { title: "Diferencas entre SGBDs", slug: "sql-diferencas-sgbds" }
        ]
      }
    ]
  },
  {
    area: "Programação",
    slug: "programacao",
    color: "tech",
    icon: "⌘",
    categories: [
      {
        name: "Python",
        slug: "python",
        description: "Aprenda a sintaxe, as estruturas e o raciocínio essenciais para criar programas em Python.",
        topics: [
          { title: "Conceitos básicos", slug: "python-conceitos-basicos" },
          { title: "Noções básicas da linguagem", slug: "python-nocoes-basicas" },
          { title: "Variáveis e tipos", slug: "python-variaveis-e-tipos" },
          { title: "Operações", slug: "python-operacoes" },
          { title: "Listas, dicionários e tuplas", slug: "python-listas-dicionarios-tuplas" },
          { title: "Condicionais", slug: "python-condicionais" },
          { title: "While", slug: "python-while" },
          { title: "For", slug: "python-for" },
          { title: "Funções, built-ins e lambda", slug: "python-funcoes-builtins-lambda" },
          { title: "POO básica", slug: "python-poo-basica" }
        ]
      },
      {
        name: "Django",
        slug: "django",
        description: "Projetos web monolito com Django, apps, models, views, templates, PostgreSQL e Bootstrap.",
        topics: [
          { title: "Visao geral do monolito", slug: "django-monolito-conceitos" },
          { title: "Projeto, apps e settings", slug: "django-projeto-apps-settings" },
          { title: "Models, ORM e migrations", slug: "django-models-orm-migrations" },
          { title: "Views, URLs e templates", slug: "django-views-urls-templates" },
          { title: "Forms, admin e autenticacao", slug: "django-forms-admin-autenticacao" },
          { title: "PostgreSQL, static e deploy", slug: "django-postgresql-static-deploy" }
        ]
      }
    ]
  },
  {
    area: "Infraestrutura",
    slug: "infraestrutura",
    color: "tech",
    icon: "▤",
    categories: [
      {
        name: "Linux",
        slug: "linux",
        description: "Comandos essenciais para operar arquivos, permissões, processos, serviços, rede, pacotes e disco no Linux.",
        topics: [
          { title: "Conceitos básicos", slug: "linux-conceitos-basicos" },
          { title: "Navegação e sistema de arquivos", slug: "linux-navegacao-sistema-arquivos" },
          { title: "Arquivos e diretórios", slug: "linux-arquivos-diretorios" },
          { title: "Visualização, busca e texto", slug: "linux-visualizacao-busca-texto" },
          { title: "Permissões e usuários", slug: "linux-permissoes-usuarios" },
          { title: "Processos e serviços", slug: "linux-processos-servicos" },
          { title: "Rede e diagnóstico", slug: "linux-rede-diagnostico" },
          { title: "Pacotes, disco e compactação", slug: "linux-pacotes-disco-compactacao" }
        ]
      }
    ]
  },
  {
    area: "Cloud",
    slug: "cloud",
    color: "tech",
    icon: "☁",
    categories: [
      {
        name: "Cloud Computing",
        slug: "cloud-computing",
        description: "Fundamentos de nuvem, modelos de serviço, modelos de implantação, elasticidade, custo e segurança.",
        topics: [
          { title: "Visão geral da cloud", slug: "cloud-visao-geral" }
        ]
      },
      {
        name: "AWS",
        slug: "aws",
        description: "Principais serviços e conceitos da Amazon Web Services para montar uma base sólida de arquitetura em nuvem.",
        topics: [
          { title: "AWS: visão geral e ordem de estudo", slug: "aws-servicos-conceitos" },
          { title: "IAM: identidade e permissões", slug: "aws-iam-identidade-permissoes" },
          { title: "EC2: servidores virtuais", slug: "aws-ec2-servidores-virtuais" },
          { title: "S3: armazenamento de objetos", slug: "aws-s3-armazenamento-objetos" },
          { title: "RDS: bancos relacionais gerenciados", slug: "aws-rds-bancos-relacionais" },
          { title: "Lambda: funções serverless", slug: "aws-lambda-funcoes-serverless" }
        ]
      }
    ]
  }
];

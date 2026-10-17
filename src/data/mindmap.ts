export const foundationalMindMap = {
  title: "Mapa de estudo da area de Dados",
  legend: ["Base", "Processo", "Aplicacao"],
  nodes: [
    { id: "dados", label: "Dados", x: 50, y: 14, kind: "core" },
    { id: "modelagem", label: "Modelagem", x: 22, y: 38, kind: "base" },
    { id: "sql", label: "SQL", x: 50, y: 38, kind: "base" },
    { id: "visual", label: "Visualizacao", x: 78, y: 38, kind: "base" },
    { id: "dax", label: "DAX", x: 35, y: 66, kind: "process" },
    { id: "pandas", label: "Pandas", x: 65, y: 66, kind: "process" },
    { id: "decisao", label: "Decisao", x: 50, y: 88, kind: "application" }
  ],
  edges: [
    ["dados", "modelagem"],
    ["dados", "sql"],
    ["dados", "visual"],
    ["modelagem", "dax"],
    ["sql", "pandas"],
    ["dax", "decisao"],
    ["pandas", "decisao"],
    ["visual", "decisao"]
  ]
};

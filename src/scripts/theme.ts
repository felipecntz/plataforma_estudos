const STORAGE_KEY = "atlas-theme";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function updateButton(button: HTMLButtonElement, theme: Theme) {
  const nextLabel = theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro";
  button.setAttribute("aria-label", nextLabel);
  button.title = nextLabel;
  button.setAttribute("aria-pressed", String(theme === "dark"));
}

function applyTheme(theme: Theme, button: HTMLButtonElement) {
  document.documentElement.dataset.theme = theme;
  updateButton(button, theme);

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // O tema ainda funciona durante a visita quando o storage esta bloqueado.
  }
}

export function initTheme() {
  const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (!button) return;

  updateButton(button, currentTheme());
  button.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark", button);
  });
}

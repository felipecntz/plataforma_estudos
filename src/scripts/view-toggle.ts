export function initViewToggle() {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-view-toggle]");
  const panels = document.querySelectorAll<HTMLElement>("[data-view-panel]");
  if (!buttons.length || !panels.length) return;

  const activate = (view: string) => {
    buttons.forEach((button) => {
      const active = button.dataset.viewToggle === view;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.viewPanel !== view;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.viewToggle ?? "summary"));
  });
}

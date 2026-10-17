const STORAGE_KEY = "atlas-open-groups";

function readState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeState(keys: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
}

function closeDescendants(panel: HTMLElement, openKeys: Set<string>) {
  const nestedPanels = panel.querySelectorAll<HTMLElement>("[data-sidebar-panel]");
  const nestedToggles = panel.querySelectorAll<HTMLElement>("[data-sidebar-toggle]");

  nestedPanels.forEach((nestedPanel) => {
    nestedPanel.hidden = true;
  });

  nestedToggles.forEach((nestedToggle) => {
    const nestedKey = nestedToggle.dataset.key;
    nestedToggle.setAttribute("aria-expanded", "false");
    if (nestedKey) {
      openKeys.delete(nestedKey);
    }
  });
}

export function initSidebar() {
  const openKeys = new Set<string>(readState());
  const toggles = document.querySelectorAll<HTMLElement>("[data-sidebar-toggle]");

  toggles.forEach((toggle) => {
    const key = toggle.dataset.key;
    const panel = key ? document.querySelector<HTMLElement>(`[data-sidebar-panel="${key}"]`) : null;
    if (!key || !panel) return;

    const shouldOpen = openKeys.has(key);
    panel.hidden = !shouldOpen;
    toggle.setAttribute("aria-expanded", String(shouldOpen));

    toggle.addEventListener("click", () => {
      const willOpen = panel.hidden;
      panel.hidden = !panel.hidden;
      toggle.setAttribute("aria-expanded", String(willOpen));

      if (!willOpen) {
        closeDescendants(panel, openKeys);
        openKeys.delete(key);
      } else {
        openKeys.add(key);
      }

      writeState([...openKeys]);
    });
  });
}

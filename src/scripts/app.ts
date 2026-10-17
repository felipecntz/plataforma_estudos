import { initSidebar } from "./sidebar";
import { initSearch } from "./search";
import { initFavorites } from "./favorites";
import { initViewToggle } from "./view-toggle";
import { initTheme } from "./theme";

function initDrawer() {
  const body = document.body;
  const openButton = document.querySelector<HTMLElement>("[data-drawer-open]");
  const closeButton = document.querySelector<HTMLElement>("[data-drawer-close]");
  const overlay = document.querySelector<HTMLElement>("[data-drawer-overlay]");

  openButton?.addEventListener("click", () => body.classList.add("drawer-open"));
  closeButton?.addEventListener("click", () => body.classList.remove("drawer-open"));
  overlay?.addEventListener("click", () => body.classList.remove("drawer-open"));
  document.querySelectorAll(".sidebar a").forEach((link) =>
    link.addEventListener("click", () => body.classList.remove("drawer-open"))
  );
}

initSidebar();
initSearch();
initFavorites();
initViewToggle();
initDrawer();
initTheme();

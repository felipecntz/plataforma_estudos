const STORAGE_KEY = "atlas-favorites";
const RECENTS_KEY = "atlas-recents";

type Favorite = { slug: string; title: string; path: string };

function read<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) ?? JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

function renderFavoritesPanel() {
  const panel = document.querySelector<HTMLElement>("[data-favorites-panel]");
  if (!panel) return;

  const favorites = read<Favorite[]>(STORAGE_KEY, []);
  if (!favorites.length) {
    panel.innerHTML = `<div class="eyebrow">Favoritos locais</div><p class="lede" style="margin:0.3rem 0 0;">Adicione conteudos aos favoritos em qualquer pagina para ve-los aqui.</p>`;
    return;
  }

  panel.innerHTML = `
    <div class="eyebrow">Favoritos locais</div>
    <div class="stack-sm" style="margin-top:0.8rem;">
      ${favorites
        .map(
          (item) => `
          <a class="topic-card" href="${item.path}">
            <span class="eyebrow">Favorito</span>
            <strong>${item.title}</strong>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

function renderRecentsPanel() {
  const panel = document.querySelector<HTMLElement>("[data-recents-panel]");
  if (!panel) return;
  const recents = read<Favorite[]>(RECENTS_KEY, []);
  if (!recents.length) {
    panel.innerHTML = `<div class="eyebrow">Conteudos recentes</div><p class="lede" style="margin:0.3rem 0 0;">As ultimas paginas visitadas aparecerao aqui para voce retomar o estudo com um clique.</p>`;
    return;
  }

  panel.innerHTML = `
    <div class="eyebrow">Conteudos recentes</div>
    <div class="stack-sm" style="margin-top:0.8rem;">
      ${recents
        .map(
          (item) => `
          <a class="topic-card" href="${item.path}">
            <span class="eyebrow">Visitado recentemente</span>
            <strong>${item.title}</strong>
          </a>
        `
        )
        .join("")}
    </div>
  `;
}

function registerRecent() {
  const button = document.querySelector<HTMLElement>("[data-favorite-button]");
  if (!button) return;
  const title = button.dataset.favoriteTitle ?? "";
  const path = button.dataset.favoritePath ?? window.location.pathname;
  const slug = button.dataset.favoriteSlug ?? "";
  const recents = read<Favorite[]>(RECENTS_KEY, []).filter((item) => item.slug !== slug);
  recents.unshift({ slug, title, path });
  write(RECENTS_KEY, recents.slice(0, 6));
}

export function initFavorites() {
  const button = document.querySelector<HTMLButtonElement>("[data-favorite-button]");
  if (button) {
    const slug = button.dataset.favoriteSlug ?? "";
    const title = button.dataset.favoriteTitle ?? "";
    const path = button.dataset.favoritePath ?? window.location.pathname;

    const sync = () => {
      const favorites = read<Favorite[]>(STORAGE_KEY, []);
      const active = favorites.some((item) => item.slug === slug);
      button.textContent = active ? "Remover favorito" : "Favoritar";
    };

    sync();
    button.addEventListener("click", () => {
      const favorites = read<Favorite[]>(STORAGE_KEY, []);
      const next = favorites.some((item) => item.slug === slug)
        ? favorites.filter((item) => item.slug !== slug)
        : [{ slug, title, path }, ...favorites].slice(0, 12);
      write(STORAGE_KEY, next);
      sync();
      renderFavoritesPanel();
    });

    registerRecent();
  }

  renderFavoritesPanel();
  renderRecentsPanel();
}

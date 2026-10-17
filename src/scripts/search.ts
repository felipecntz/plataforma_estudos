type SearchItem = {
  title: string;
  description: string;
  area: string;
  category: string;
  topic: string;
  slug: string;
  tags: string[];
  content: string;
};

let cache: SearchItem[] | null = null;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

async function loadIndex() {
  if (cache) return cache;
  const response = await fetch(`${import.meta.env.BASE_URL}search-index.json`);
  cache = await response.json();
  return cache;
}

function score(item: SearchItem, query: string) {
  const normalizedQuery = normalize(query);
  const text = normalize(`${item.title} ${item.description} ${item.area} ${item.category} ${item.topic} ${item.tags.join(" ")} ${item.content}`);
  if (!text.includes(normalizedQuery)) return -1;
  let result = 0;
  if (normalize(item.title).includes(normalizedQuery)) result += 5;
  if (normalize(item.tags.join(" ")).includes(normalizedQuery)) result += 3;
  if (normalize(item.description).includes(normalizedQuery)) result += 2;
  return result;
}

function renderResults(container: HTMLElement, items: SearchItem[], query: string) {
  if (!query) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }

  container.hidden = false;
  if (!items.length) {
    container.innerHTML = `<div style="padding:1rem;"><strong>Nenhum resultado</strong><p class="lede" style="margin:0.35rem 0 0;">Tente outro termo ou navegue pela sidebar.</p></div>`;
    return;
  }

  container.innerHTML = items
    .slice(0, 6)
    .map(
      (item) => `
      <a class="recent-item" href="${import.meta.env.BASE_URL}conteudos/${item.slug}/" style="display:block;padding:1rem;border-bottom:1px solid rgba(56,42,31,0.08);">
        <div class="eyebrow">${item.area} / ${item.category}</div>
        <strong>${item.title}</strong>
        <p class="lede" style="font-size:0.92rem;margin:0.35rem 0 0;">${item.description}</p>
        <div class="tag-row" style="margin-top:0.6rem;">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </a>
    `
    )
    .join("");
}

export function initSearch() {
  const input = document.querySelector<HTMLInputElement>("[data-search-input]");
  const results = document.querySelector<HTMLElement>("[data-search-results]");
  if (!input || !results) return;

  input.addEventListener("input", async () => {
    const query = input.value.trim();
    const index = await loadIndex();
    const matches = index
      .map((item) => ({ item, score: score(item, query) }))
      .filter((entry) => entry.score >= 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item);

    renderResults(results, matches, query);
  });

  document.addEventListener("click", (event) => {
    if (!results.contains(event.target as Node) && event.target !== input) {
      results.hidden = true;
    }
  });
}

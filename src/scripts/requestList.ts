// Anfrageliste: Produkte sammeln und gesammelt anfragen (kein Shop, keine Preise).
// Liegt nur im Browser des Besuchers.

export interface ListItem {
  slug: string;
  name: string;
  brand: string;
  category: string;
  qty: number;
}

const KEY = 'vz-anfrageliste';
const EVENT = 'vz:list-change';

export const readList = (): ListItem[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ListItem[]) : [];
  } catch {
    return [];
  }
};

const write = (items: ListItem[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* Speicher nicht verfügbar: Liste gilt nur für diese Seite */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: items }));
};

export const addItem = (item: Omit<ListItem, 'qty'>, qty = 1) => {
  const items = readList();
  const found = items.find((i) => i.slug === item.slug);
  if (found) found.qty += qty;
  else items.push({ ...item, qty });
  write(items);
};

export const setQty = (slug: string, qty: number) => {
  const items = readList()
    .map((i) => (i.slug === slug ? { ...i, qty } : i))
    .filter((i) => i.qty > 0);
  write(items);
};

export const removeItem = (slug: string) => write(readList().filter((i) => i.slug !== slug));
export const clearList = () => write([]);
export const onListChange = (fn: (items: ListItem[]) => void) => {
  window.addEventListener(EVENT, (e) => fn((e as CustomEvent<ListItem[]>).detail));
  window.addEventListener('storage', (e) => e.key === KEY && fn(readList()));
};

// Gemeinsames Rendering für Drawer und Anfrageformular
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const ICON_MINUS = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M4 10h12"/></svg>';
const ICON_PLUS = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>';

export const renderItems = (target: HTMLElement, items: ListItem[]) => {
  target.innerHTML = items
    .map(
      (i) => `<li class="dl-item" data-slug="${esc(i.slug)}">
        <div><div class="dl-brand">${esc(i.brand)}</div><div class="dl-name">${esc(i.name)}</div></div>
        <div class="dl-qty">
          <button type="button" data-dec aria-label="Menge verringern">${ICON_MINUS}</button>
          <input type="number" min="1" inputmode="numeric" value="${i.qty}" aria-label="Menge ${esc(i.name)}" data-qty />
          <button type="button" data-inc aria-label="Menge erhöhen">${ICON_PLUS}</button>
        </div>
        <button type="button" class="dl-remove" data-remove>Entfernen</button>
      </li>`,
    )
    .join('');
};

export const bindItemControls = (root: HTMLElement) => {
  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const li = t.closest<HTMLElement>('[data-slug]');
    if (!li) return;
    const slug = li.dataset.slug!;
    const cur = readList().find((i) => i.slug === slug)?.qty ?? 1;
    if (t.closest('[data-inc]')) setQty(slug, cur + 1);
    else if (t.closest('[data-dec]')) setQty(slug, Math.max(1, cur - 1));
    else if (t.closest('[data-remove]') && !li.classList.contains('is-leaving')) {
      // kurz ausblenden, dann entfernen (Liste wird danach neu gerendert)
      li.classList.add('is-leaving');
      setTimeout(() => removeItem(slug), 180);
    }
  });
  root.addEventListener('change', (e) => {
    const input = e.target as HTMLInputElement;
    if (!input.matches('[data-qty]')) return;
    const slug = input.closest<HTMLElement>('[data-slug]')!.dataset.slug!;
    setQty(slug, Math.max(1, parseInt(input.value, 10) || 1));
  });
};


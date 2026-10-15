const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Interne Pfade um den Basis-Pfad ergänzen (z. B. für GitHub Pages unter /repo-name). */
export const u = (path: string) => base + path;

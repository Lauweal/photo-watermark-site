/** Resolve public assets for both root domains and GitHub Pages project subpaths. */
export function asset(name: string): string {
  return `${import.meta.env.BASE_URL}assets/${name}`;
}

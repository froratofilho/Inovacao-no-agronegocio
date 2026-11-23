import raw from './credits.generated.json';

export type Credit = {
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
  path: string;
  width?: number;
  height?: number;
  note?: string;
};

/** Créditos gerados por `npm run images` (Wikimedia Commons, licença verificada). */
export const credits = raw as Record<string, Credit>;

const byPath = new Map(Object.values(credits).map((c) => [c.path, c]));
export const creditFor = (path?: string) => (path ? byPath.get(path) : undefined);

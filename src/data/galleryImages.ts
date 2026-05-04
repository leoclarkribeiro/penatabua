/** Eager Vite glob — all files in src/assets/gallery (sorted by path). */

const modules = import.meta.glob<{ default: string }>("../assets/gallery/*", { eager: true });

function fileStem(path: string): string {
  const base = path.split("/").pop() ?? "foto";
  return base.replace(/\.[^.]+$/i, "");
}

export const galleryImageItems: { src: string; alt: string }[] = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
  .map((path) => ({
    src: modules[path].default,
    alt: `Galeria Pé na Tábua — ${fileStem(path)}`,
  }));

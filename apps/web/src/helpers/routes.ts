export function toChildPath(path: string) {
  return path === "/" ? "" : path.slice(1)
}

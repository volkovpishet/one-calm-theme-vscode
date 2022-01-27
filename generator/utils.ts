import * as fs from "fs"

export async function writeFile(path: string, data: unknown) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), (err) =>
      err ? reject(err) : resolve(null)
    )
  })
}

// 0 is transparent 1 is fully visible
export function applyAlphaToColor(color: String, opacity: number) {
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

import { join } from "path"

import { standardColors } from "./theme/colors"
import { editorTokens } from "./theme/editor"
import { getSemanticTokenColors } from "./theme/semantic-colors"
import {
  alwaysBoldTokens,
  alwaysItalicTokens,
  getStandardTokens,
} from "./theme/theme"
import { writeFile } from "./utils"

export function generateTheme() {
  const colors = standardColors

  const tokenColors = [
    getStandardTokens(colors),
    alwaysItalicTokens,
    alwaysBoldTokens,
  ].reduce((aggregate, curr) => aggregate.concat(...curr), [])

  return {
    colors: editorTokens,
    name: "OneCalm",
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(colors),
    tokenColors,
    type: "dark",
  }
}

writeFile(
  join(__dirname, "..", "themes", "OneCalm-color-theme.json"),
  generateTheme()
)


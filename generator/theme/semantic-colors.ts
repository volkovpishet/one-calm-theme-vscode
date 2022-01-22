import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    "property": colors.chalky,
    "property.declaration": colors.ivory,
    // Entity initialisation
    "class.constructor": colors.cyan,
    "method.constructor": colors.cyan,
    // Annotations
    "class.annotation": colors.coral,
    "property.annotation": colors.coral,
    "annotation": colors.coral,
    // Constants
    "boolean": colors.coral,
  }
}
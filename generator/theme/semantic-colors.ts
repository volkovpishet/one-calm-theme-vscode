import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    "property": colors.chalky,
    "property.declaration": colors.ivory,
    // Parameters
    "parameter.label": colors.ivory,
    // Annotations
    "class.annotation": colors.coral,
    "property.annotation": colors.coral,
    "annotation": colors.coral,
  }
}

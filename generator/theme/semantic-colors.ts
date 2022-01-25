import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    "property": colors.chalky,
    "property.declaration": colors.ivory,
    "source.interpolation": colors.ivory,
    // Constants
    "boolean": colors.coral,
    // Entity, Type
    "type": colors.malibu,
    "class": colors.malibu,
    "type.declaration": colors.malibu,
    // Entity initialisation
    "class.constructor": colors.violet,
    "method.constructor": colors.violet,
    // Annotations
    "class.annotation": colors.coral,
    "property.annotation": colors.coral,
    "annotation": colors.coral,
  }
}

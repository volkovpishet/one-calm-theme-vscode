import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    "property": colors.whiskey,
    "property.declaration": colors.ivory,
    "source.interpolation": colors.ivory,
    "variable": colors.cyan,
    // Entity, Type
    "type": colors.malibu,
    "class": colors.malibu,
    "type.declaration": colors.malibu,
    // Entity initialisation
    "class.constructor": colors.violet,
    "method.constructor": colors.violet,
    // Annotations
    "class.annotation": colors.ivory,
    "property.annotation": colors.ivory,
    "annotation": colors.ivory,
  }
}

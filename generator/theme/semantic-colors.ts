import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    "property": colors.whiskey,
    "property.declaration": colors.whiskey,
    "variable": colors.cyan,
    "source.interpolation": colors.ivory, // variables in Strings
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

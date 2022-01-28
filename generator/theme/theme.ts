import { Colors, TokenGroup } from "../models"

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: "Chalky",
    scope: [
      // Numbers, booleans
      "constant",
      "support.constant",
    ],
    settings: {
      foreground: colors.chalky,
    },
  },
  {
    name: "Coral",
    scope: [
      "keyword",
      "storage.type",
      "storage.modifier",
      "markup.italic",
      "punctuation.definition.block.tag",
      "entity.name.tag",
      "support.type.property-name",
      "heading",
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.list.end.markdown",
      "punctuation.definition.template-expression",
      "punctuation.section.embedded",
      "variable.language.this",
      "keyword.operator.expression.typeof",
      "keyword.control.anchor", // Regex ^ etc
      "keyword.operator.new",
    ],
    settings: {
      foreground: colors.coral,
    },
  },
  {
    name: "Cyan",
    scope: [
      // Regex
      "string.regexp",
      "constant.other.character-class",
      // Other
      "constant.character.escape",
      "markup.underline.link",
      "string.url",
    ],
    settings: {
      foreground: colors.cyan,
    },
  },
  {
    name: "Malibu",
    scope: [
      "entity.other.inherited-class",
      "keyword.other.type",
      "storage.modifier.import",
      "storage.modifier.package",
      "storage.type.built-in",
      "storage.type.generic",
      // storage.type.java and storage.type.groovy are necessary because
      // storage.type uses violet for JS/TS const, let, and var
      "storage.type.java",
      "storage.type.groovy",
      "storage.type.primitive",
      "support.class",
      "support.other.namespace",
      "support.type",
      // Types, interfaces
      "entity.name.type.class",
      "entity.name.type.interface",
      "entity.name.type.enum",
      "entity.name.type.module",
      "entity.name.type.parameter",
      // Type primitives such as number, string in TS
      "entity.name.type",
      "support.type.primitive",
    ],
    settings: {
      foreground: colors.malibu,
    },
  },
  {
    name: "Ivory",
    scope: [
      "meta.brace",
      "punctuation.accessor",
      "punctuation.definition.block",
      "punctuation.separator",
      "support.type.property-name.css",
      "variable.other.constant",
      "string.interpolated.expression",
      // All operators (=>, "=", "() braces in arrow")
      "keyword.operator",
      "storage.type.function.arrow",
      "meta.arrow",
      // Keywords
      "keyword.operator.comparison",
      "keyword.operator.logical",
      "keyword.operator.bitwise",
      "keyword.operator.decrement",
      "keyword.operator.increment",
      // Annotations
      "storage.type.annotation",
      "punctuation.definition.annotation",
      "meta.decorator",
      // Object properties, function params
      "entity.other.attribute-name",
      "variable.parameter",
      "variable.object.property",
      "meta.object-literal.key",
    ],
    settings: {
      foreground: colors.ivory,
    },
  },
  {
    name: "Sage",
    scope: [
      "markup.inline",
      "markup.quote",
      "source.ini",
      "string.other.link.description",
      "string",
    ],
    settings: {
      foreground: colors.sage,
    },
  },
  {
    name: "Stone",
    scope: ["comment"],
    settings: {
      foreground: colors.stone,
    },
  },
  {
    name: "Violet",
    scope: [
      "entity.other.attribute-name.id.css",
      "string.other.link",
      "variable.language.super",
      // Functions
      "entity.name.function",
      "meta.function-call",
      "support.function",
    ],
    settings: {
      foreground: colors.violet,
    },
  },
  {
    name: "Whiskey",
    scope: [
      "keyword.operator.quantifier.regexp",
      "markup.bold",
      "variable.other.jsdoc",
      "variable.other.enummember",
    ],
    settings: {
      foreground: colors.whiskey,
    },
  },
]

export const alwaysItalicTokens: TokenGroup[] = [
  {
    name: "Always italic",
    scope: ["markup.quote", "markup.italic"],
    settings: {
      fontStyle: "italic",
    },
  },
]

export const alwaysBoldTokens: TokenGroup[] = [
  {
    name: "Always bold",
    scope: ["heading", "markup.bold"],
    settings: {
      fontStyle: "bold",
    },
  },
]

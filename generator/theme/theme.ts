import { Colors, TokenGroup } from "../models"

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: "Chalky",
    scope: [
      "variable.other.enummember",
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
      "constant.other.character-class",
      "entity.name.tag",
      "support.type.property-name",
      "heading",
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.list.end.markdown",
      "punctuation.definition.template-expression",
      "punctuation.section.embedded",
      // Annotations
      "storage.type.annotation",
      "punctuation.definition.annotation",
    ],
    settings: {
      foreground: colors.coral,
    },
  },
  {
    name: "Cyan",
    scope: [
      "constant.character.escape",
      "markup.underline.link",
      "string.regexp",
      "string.url",
      "variable.language.this",
      "constant",
      "support.constant",
      "keyword.operator",
    ],
    settings: {
      foreground: colors.cyan,
    },
  },
  {
    name: "Malibu",
    scope: [
      "entity.name.type",
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
      "entity.name.function",
      "entity.other.attribute-name.id.css",
      "meta.function-call.generic",
      "string.other.link",
      "support.function",
      "variable.language.super",
    ],
    settings: {
      foreground: colors.violet,
    },
  },
  {
    name: "Whiskey",
    scope: [
      "entity.other.attribute-name",
      "keyword.operator.quantifier.regexp",
      "markup.bold",
      "variable.parameter",
      "variable.object.property",
      "meta.object-literal.key",
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

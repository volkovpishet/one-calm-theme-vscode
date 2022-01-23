import { standardColors } from "./colors"

const colors = {
  primaryBright: "#457dff",
  primary: "#568af2",
  primaryBlind: "#4d78cc",
  secondary: "#7e0097",
  secondaryBlind: "#66017a",
  background: "#28333d",
  darkBackground: "#242d35",
  lightForeground: "#e3f1ff9f",
  lightInactiveForeground: "#e3f1ff70",
  lightBlindForeground: "#e3f1ff48",
  error: "#c24038",
  border: "#181a1f",
}

const theme = standardColors;

export const editorTokens = {
  "activityBar.activeBorder": colors.primary,
  "activityBar.background": colors.background,
  "activityBar.foreground": "#d7dae0",
  "activityBarBadge.background": colors.primaryBlind,
  "activityBarBadge.foreground": "#f8fafd",
  "badge.background": colors.background,
  "button.background": colors.primaryBlind,
  "button.secondaryBackground": colors.background,
  "debugToolBar.background": colors.darkBackground,
  "diffEditor.insertedTextBackground": "#00809b33",
  "dropdown.background": colors.darkBackground,
  "dropdown.border": colors.darkBackground,
  "editor.background": colors.background,
  "editor.findMatchBackground": "#42557b",
  "editor.findMatchBorder": colors.primaryBright,
  "editor.findMatchHighlightBackground": "#528bff3d",
  "editor.foreground": theme.ivory,
  "editor.lineHighlightBackground": "#ffffff04",
  "editor.selectionBackground": "#3f847e5f",
  "editor.selectionHighlightBackground": "#ffffff17",
  "editor.selectionHighlightBorder": "#ffffff00",
  "editor.wordHighlightBackground": "#484e5b",
  "editor.wordHighlightBorder": "#7f848e",
  "editor.wordHighlightStrongBackground": "#abb2bf26",
  "editor.wordHighlightStrongBorder": "#7f848e",
  "editorBracketMatch.background": "#ffffff0d",
  "editorBracketMatch.border": "#ffffff00",
  "editorCursor.background": "#ffffffc9",
  "editorCursor.foreground": colors.primaryBright,
  "editorError.foreground": colors.error,
  "editorGroup.border": colors.border,
  "editorGroupHeader.tabsBackground": colors.darkBackground,
  "editorHoverWidget.background": colors.darkBackground,
  "editorHoverWidget.border": colors.border,
  "editorIndentGuide.activeBackground": "#ffffff2e",
  "editorIndentGuide.background": "#ffffff10",
  "editorInlayHint.foreground": "#A0A0A0F0",
  "editorLineNumber.foreground": colors.lightBlindForeground,
  "editorLineNumber.activeForeground": colors.lightInactiveForeground,
  "editorMarkerNavigation.background": colors.darkBackground,
  "editorRuler.foreground": "#abb2bf26",
  "editorSuggestWidget.background": colors.darkBackground,
  "editorSuggestWidget.border": colors.border,
  "editorSuggestWidget.selectedBackground": "#ffffff16",
  "editorWhitespace.foreground": "#3b4048",
  "editorWidget.background": colors.darkBackground,
  focusBorder: colors.primary,
  "input.background": "#1d1f23",
  "list.activeSelectionBackground": colors.primaryBlind,
  "list.activeSelectionForeground": "#ffffff",
  "list.focusBackground": "#ffffff16",
  "list.highlightForeground": "#c5c5c5",
  "list.hoverBackground": "#ffffff16",
  "list.inactiveSelectionBackground": "#ffffff0f",
  "list.inactiveSelectionForeground": "#d7dae0",
  "menu.foreground": "#c8c8c8",
  "panel.border": colors.border,
  "panelTitle.activeBorder": colors.primary,
  "peekViewEditor.background": "#1b1d23",
  "peekViewEditor.matchHighlightBackground": "#29244b",
  "peekViewResult.background": "#22262b",
  "quickInputList.focusBackground": "#ffffff16",
  "scrollbarSlider.activeBackground": "#747d9180",
  "scrollbarSlider.background": "#4e566660",
  "scrollbarSlider.hoverBackground": "#5a637580",
  "settings.modifiedItemIndicator": colors.primary,
  "sideBar.background": colors.darkBackground,
  "sideBar.foreground": colors.lightForeground,
  "quickInput.foreground": colors.lightForeground,
  "sideBar.border": colors.border,
  "sideBarSectionHeader.background": colors.background,
  "statusBar.background": colors.darkBackground,
  "statusBar.debuggingBackground": colors.secondary,
  "statusBar.debuggingBorder": colors.secondaryBlind,
  "statusBar.debuggingForeground": "#ffffff",
  "statusBar.foreground": colors.lightForeground,
  "statusBar.noFolderBackground": colors.darkBackground,
  "statusBarItem.hoverBackground": colors.primaryBlind,
  "statusBarItem.remoteBackground": colors.primaryBlind,
  "statusBarItem.remoteForeground": "#f8fafd",
  "tab.activeBackground": colors.background,
  "tab.activeBorder": colors.primary,
  "tab.activeForeground": "#dcdcdc",
  "tab.activeModifiedBorder": colors.primary,
  "tab.border": colors.border,
  "tab.hoverBackground": colors.primaryBlind,
  "tab.inactiveBackground": colors.darkBackground,
  "tab.unfocusedHoverBackground": "#323842",
  "terminal.ansiBlack": "#000000",
  "terminal.ansiBlue": theme.malibu,
  "terminal.ansiBrightBlack": colors.darkBackground,
  "terminal.ansiBrightBlue": colors.primaryBright,
  "terminal.ansiBrightCyan": theme.cyan,
  "terminal.ansiBrightGreen": theme.sage,
  "terminal.ansiBrightMagenta": theme.violet,
  "terminal.ansiBrightRed": colors.error,
  "terminal.ansiBrightWhite": "#d7dae0",
  "terminal.ansiBrightYellow": theme.chalky,
  "terminal.ansiCyan": theme.cyan,
  "terminal.ansiGreen": theme.sage,
  "terminal.ansiMagenta": theme.violet,
  "terminal.ansiRed": theme.coral,
  "terminal.ansiWhite": "#d7dae0",
  "terminal.ansiYellow": theme.chalky,
  "terminal.foreground": "#c8c8c8",
  "textBlockQuote.background": colors.darkBackground,
  "textBlockQuote.border": colors.primary,
  "textCodeBlock.background": colors.background,
  "textLink.activeForeground": theme.malibu,
  "textLink.foreground": theme.malibu,
  "textPreformat.foreground": theme.chalky,
  "titleBar.activeBackground": colors.background,
  "titleBar.activeForeground": colors.lightForeground,
  "titleBar.border": colors.border,
  "titleBar.inactiveBackground": colors.darkBackground,
  "titleBar.inactiveForeground": colors.lightInactiveForeground,
}

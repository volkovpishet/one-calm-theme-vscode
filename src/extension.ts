import { ExtensionContext, extensions } from "vscode"

const getCurrentVersion = () => {
  return extensions.getExtension("volkovpishet.one-calm-theme").packageJSON.version;
}

const VERSION_KEY = "one-dark-theme:version"

export function activate(context: ExtensionContext): void {
  const oldVersion = context.globalState.get(VERSION_KEY)
  const currentVersion = getCurrentVersion()

  if (oldVersion !== currentVersion) {
    context.globalState.update(VERSION_KEY, currentVersion)
  }
}

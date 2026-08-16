import * as vscode from "vscode";
import { createRiverpodModule } from "./commands/create_riverpod_module";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "riverpod-module-generator.createRiverpodModule",
    createRiverpodModule,
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

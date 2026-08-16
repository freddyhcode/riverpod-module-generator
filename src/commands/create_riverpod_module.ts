import * as vscode from "vscode";
import { generateRiverpodModule } from "../generators/riverpod_generator";

export async function createRiverpodModule(uri: vscode.Uri) {
  if (!uri) {
    vscode.window.showErrorMessage("Please select a folder from the Explorer.");
    return;
  }

  const style = await vscode.window.showQuickPick(
    [
      {
        label: "Single file",
        description: "Provider, state and notifier in one file.",
        value: "single",
      },
      {
        label: "Part files",
        description: "Separate files using part and part of.",
        value: "part",
      },
      {
        label: "Separate files",
        description: "Separate files using standard imports.",
        value: "separate",
      },
    ],
    {
      placeHolder: "Choose a module style",
      title: "Riverpod Module",
    },
  );

  if (!style) {
    return;
  }

  const name = await vscode.window.showInputBox({
    prompt: "Module name",
    placeHolder: "roxy",
    validateInput: (value) => {
      if (!value.trim()) {
        return "Please enter a name.";
      }

      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value)) {
        return "Please enter a valid name.";
      }

      return null;
    },
  });

  if (!name) {
    return;
  }

  const files =
    style.value === "single"
      ? [vscode.Uri.joinPath(uri, `${name}_provider.dart`)]
      : [
          vscode.Uri.joinPath(uri, `${name}_provider.dart`),
          vscode.Uri.joinPath(uri, `${name}_state.dart`),
          vscode.Uri.joinPath(uri, `${name}_notifier.dart`),
        ];

  let exists = false;

  for (const file of files) {
    try {
      await vscode.workspace.fs.stat(file);
      exists = true;
      break;
    } catch {
      // File does not exist.
    }
  }

  if (exists) {
    const result = await vscode.window.showWarningMessage(
      `A module named "${name}" already exists. Overwrite it?`,
      "Yes",
      "Cancel",
    );

    if (result !== "Yes") {
      return;
    }
  }

  try {
    const providerFile = await generateRiverpodModule(uri, name, style.value);

    vscode.window.showInformationMessage(`${name} created successfully.`);

    const document = await vscode.workspace.openTextDocument(providerFile);

    await vscode.window.showTextDocument(document);
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to create files: ${error}`);
  }
}

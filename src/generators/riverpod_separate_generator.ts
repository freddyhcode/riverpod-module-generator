import * as vscode from "vscode";

export async function generateRiverpodSeparate(
  uri: vscode.Uri,
  name: string,
): Promise<vscode.Uri> {
  const className = name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const providerFile = vscode.Uri.joinPath(uri, `${name}_provider.dart`);

  const stateFile = vscode.Uri.joinPath(uri, `${name}_state.dart`);

  const notifierFile = vscode.Uri.joinPath(uri, `${name}_notifier.dart`);

  const providerContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${name}_state.dart';
import '${name}_notifier.dart';

final ${name}Provider = NotifierProvider<${className}Notifier, ${className}State>(
  ${className}Notifier.new,
);
`;

  const stateContent = `class ${className}State {
  const ${className}State();
}
`;

  const notifierContent = `import 'package:flutter_riverpod/flutter_riverpod.dart';
import '${name}_state.dart';

class ${className}Notifier extends Notifier<${className}State> {
  @override
  ${className}State build() {
    return const ${className}State();
  }
}
`;

  await vscode.workspace.fs.writeFile(
    providerFile,
    Buffer.from(providerContent, "utf8"),
  );

  await vscode.workspace.fs.writeFile(
    stateFile,
    Buffer.from(stateContent, "utf8"),
  );

  await vscode.workspace.fs.writeFile(
    notifierFile,
    Buffer.from(notifierContent, "utf8"),
  );

  return providerFile;
}

import * as vscode from "vscode";

export async function generateRiverpodSingle(
  uri: vscode.Uri,
  name: string,
): Promise<vscode.Uri> {
  const className = name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const providerFile = vscode.Uri.joinPath(uri, `${name}_provider.dart`);

  const content = `import 'package:flutter_riverpod/flutter_riverpod.dart';

class ${className}State {
  const ${className}State();
}

class ${className}Notifier extends Notifier<${className}State> {
  @override
  ${className}State build() {
    return const ${className}State();
  }
}

final ${name}Provider = NotifierProvider<${className}Notifier, ${className}State>(
  ${className}Notifier.new,
);
`;

  await vscode.workspace.fs.writeFile(
    providerFile,
    Buffer.from(content, "utf8"),
  );

  return providerFile;
}

# Package the extension

Install `vsce` if it is not already installed:

```bash
npm install --save-dev @vscode/vsce
```

Create the `.vsix` package:

```bash
npx vsce package
```

This generates a file similar to:

```text
riverpod-module-generator-0.1.0.vsix
```
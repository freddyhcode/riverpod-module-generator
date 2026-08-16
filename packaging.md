# Empaquetar la extensión

Instala `vsce` si aún no está instalado:

```bash
npm install --save-dev @vscode/vsce
```

Genera el paquete .vsix:

```bash
npx vsce package
```

Esto generará un archivo similar a:

```text
riverpod-module-generator-<version>.vsix
```

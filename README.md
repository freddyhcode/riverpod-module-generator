# Riverpod Module Generator

![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)
![Riverpod](https://img.shields.io/badge/Riverpod-54A3D8?style=flat&logo=riverpod&logoColor=white)

VS Code extension for quickly generating customizable **Riverpod 3** modules for Flutter projects.

## Usage

Select a folder from the Explorer:

```text
Right click → Create Riverpod Module
```

Choose a module style:

```text
Single file
Part files
Separate files
```

Enter the module name:

```text
roxy
```

### Single file

Generates:

```text
roxy_provider.dart
```

Containing:

- `RoxyState`
- `RoxyNotifier`
- `roxyProvider`

### Part files

Generates:

```text
roxy_provider.dart
roxy_state.dart
roxy_notifier.dart
```

Using Dart `part` / `part of`.

### Separate files

Generates:

```text
roxy_provider.dart
roxy_state.dart
roxy_notifier.dart
```

Using standard Dart imports.

The module name automatically determines the file, class, and provider names.

## License

MIT

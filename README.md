# Riverpod Module Generator

![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)
![Riverpod](https://img.shields.io/badge/Riverpod-54A3D8?style=flat&logo=riverpod&logoColor=white)

Extensión para VS Code que permite generar rápidamente módulos personalizables de **Riverpod 3** para proyectos Flutter.

## Uso

Desde el Explorer de VS Code, selecciona una carpeta:

```text
Click derecho → Create Riverpod Module
```

Selecciona el tipo del módulo:

```text
Single file
Part files
Separate files
```

Ingresa el nombre del módulo:

```text
roxy
```

### Single file

Genera:

```text
roxy_provider.dart
```

Conteniendo:

- `RoxyState`
- `RoxyNotifier`
- `roxyProvider`

### Part files

Genera:

```text
roxy_provider.dart
roxy_state.dart
roxy_notifier.dart
```

Utilizando `part` / `part of` de Dart.

### Separate files

Genera:

```text
roxy_provider.dart
roxy_state.dart
roxy_notifier.dart
```

Utilizando imports estándar de Dart.

El nombre del módulo determina automáticamente los nombres de los archivos, clases y providers generados.

## Licencia

MIT

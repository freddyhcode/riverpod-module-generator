import * as vscode from "vscode";
import { generateRiverpodSingle } from "./riverpod_single_generator";
import { generateRiverpodPart } from "./riverpod_part_generator";
import { generateRiverpodSeparate } from "./riverpod_separate_generator";

export type RiverpodModuleStyle = "single" | "part" | "separate";

export async function generateRiverpodModule(
  uri: vscode.Uri,
  name: string,
  style: string,
): Promise<vscode.Uri> {
  switch (style as RiverpodModuleStyle) {
    case "single":
      return generateRiverpodSingle(uri, name);

    case "part":
      return generateRiverpodPart(uri, name);

    case "separate":
      return generateRiverpodSeparate(uri, name);

    default:
      throw new Error(`Unknown Riverpod module style: ${style}`);
  }
}

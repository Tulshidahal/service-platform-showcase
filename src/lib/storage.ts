import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const storageDirectory = path.join(process.cwd(), "storage");

export async function appendToStorage<T extends object>(
  filename: string,
  entry: T,
) {
  await mkdir(storageDirectory, { recursive: true });

  const filePath = path.join(storageDirectory, filename);

  try {
    await readFile(filePath, "utf8");
  } catch {
    await writeFile(filePath, "[]", "utf8");
  }

  const fileContents = await readFile(filePath, "utf8");
  const entries = JSON.parse(fileContents) as T[];
  entries.push(entry);

  await writeFile(filePath, `${JSON.stringify(entries, null, 2)}\n`, "utf8");

  return filePath;
}

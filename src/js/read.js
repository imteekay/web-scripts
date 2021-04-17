import { promises as fs } from 'fs';
import { resolve } from 'path';

export async function readFile(fileName) {
  const componentFilePath = resolve(__dirname, fileName);
  return await fs.readFile(componentFilePath, 'utf8');
}

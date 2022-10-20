import { getFiles } from "./index.js";
import chalk from "chalk";

const path = process.argv;

async function processText(filePath) {
  const result = await getFiles(filePath[2]);
  console.log(chalk.yellow("Lista de links"), result);
}

processText(path);

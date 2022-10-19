import chalk from "chalk";
import fs from "fs";

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayExtractedLinks = [];
  let temp;
  while ((temp = regex.exec(text)) !== null) {
    arrayExtractedLinks.push({ [temp[1]]: temp[2] });
  }
  return arrayExtractedLinks;
}

function handleError(error) {
  throw new Error(chalk.red(error.code, "não há arquivo no caminho"));
}

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(extractLinks(text));
  } catch (error) {
    handleError(error);
  }
}

getFile("./arquivos/texto1.md");

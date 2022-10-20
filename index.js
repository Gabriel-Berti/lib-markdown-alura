import chalk from "chalk";
import fs from "fs";
import path from "path";

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayExtractedLinks = [];
  let temp;
  while ((temp = regex.exec(text)) !== null) {
    arrayExtractedLinks.push({ [temp[1]]: temp[2] });
  }
  return arrayExtractedLinks.length === 0
    ? "Não há links no texto"
    : arrayExtractedLinks;
}

function handleError(error) {
  throw new Error(chalk.red(error.code, "não há arquivo no caminho"));
}

async function getFiles(dirRelativePath) {
  const encoding = "utf-8";
  const dirAbsolutePath = path.resolve();
  const fullPath = path.join(dirAbsolutePath, dirRelativePath);
  try {
    const files = await fs.promises.readdir(fullPath, { encoding });
    const result = await Promise.all(
      files.map(async (file) => {
        const filePath = `${fullPath}/${file}`;
        const text = await fs.promises.readFile(filePath, encoding);
        return extractLinks(text);
      })
    );
    return result;
  } catch (error) {
    return handleError(error);
  }
}

export { getFiles };

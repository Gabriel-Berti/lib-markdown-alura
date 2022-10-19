import chalk from "chalk";
import fs from "fs";

function handleError(error) {
  throw new Error(chalk.red(error.code, "não há arquivo no caminho"));
}

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(chalk.green(text));
  } catch (error) {
    handleError(error);
  } finally {
    console.log("Fim da Função 'getFile'");
  }
}

// function getFile(filePath) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(filePath, encoding)
//     .then((text) => {
//       console.log(chalk.green(text));
//     })
//     .catch((error) => {
//       handleError(error);
//     });
// }

// function getFile(filePath) {
//   const encoding = "utf-8";
//   fs.readFile(filePath, encoding, (error, text) => {
//     if (error) {
//       handleError(error);
//     }
//     console.log(chalk.green(text));
//   });
// }

getFile("./arquivos/texto1.md");

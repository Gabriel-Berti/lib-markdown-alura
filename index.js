import chalk from "chalk";
const log = console.log;
const paragrafo = "Texto retornado de uma função";

function texto(string) {
  return string;
}

log(chalk.blue(texto(paragrafo)));

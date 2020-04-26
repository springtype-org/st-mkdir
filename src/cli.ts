#!/usr/bin/env node
const chalk = require('chalk');
import { mkdir } from "./function/st-mkdir";

const directoriesToCreate = process.argv.slice(2);

(async () => {
  if (directoriesToCreate.length == 0) {
    console.log(chalk.red("Nothing to delete."));
  } else {
    console.log(
      chalk.green("Start creating directories:"),
      directoriesToCreate
    );
    for (let directory of directoriesToCreate) {
      mkdir(directory);
    }
  }
})();


const chalk = require('chalk');
import { platform } from "os";
import { mkdir as mkdirWindows } from "./st-mkdir-windows";
import { mkdir as mkdirLinux } from "./st-mkdir-linux";
import { IMkdirOptions } from "../interface/imkdiroptions";

 const DEFAULT_OPTIONS: IMkdirOptions = {silent: false};

export const DIR_WILDCARD = "%%_dir_%%";

export const mkdir = (dir: string, options: IMkdirOptions = DEFAULT_OPTIONS) => {

   if(!options.silent) {
      console.log(chalk.cyan("creating directory: ") + dir);
   }

   const isWindows = platform() === "win32";

   if (isWindows) {
      mkdirWindows(dir);
   } else {
      mkdirLinux(dir);
   }
};

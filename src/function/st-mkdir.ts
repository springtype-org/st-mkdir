import chalk from "chalk";
import { platform } from "os";
import { mkdir as mkdirWindows } from "./st-mkdir-windows";
import { mkdir as mkdirLinux } from "./st-mkdir-linux";

export const DIR_WILDCARD = "%%_dir_%%";

export const mkdir = (dir: string) => {
   
   console.log(chalk.cyan("creating directory: ") + dir);

   const isWindows = platform() === "win32";

   if (isWindows) {
      mkdirWindows(dir);
   } else {
      mkdirLinux(dir);
   }
};

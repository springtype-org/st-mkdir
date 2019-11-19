import chalk from "chalk";
import {platform} from "os";
import {mkdir as mkdirWindows} from "./st-mkdir-windows"
import {mkdir as mkdirLinux} from "./st-mkdir-linux"
export const mkdir = (directory: string) => {
    console.log(chalk.cyan("creating directory: ") + directory);
    const isWindows = platform() === "win32";

    if (isWindows) {
       mkdirWindows(directory);
    } else {
       mkdirLinux(directory);
    }
};

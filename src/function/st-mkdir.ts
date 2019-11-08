import * as pathLinux from "path";
import {win32 as pathWindows} from "path";
import {platform} from "os";
import {execSync} from "child_process";
import chalk from "chalk";

export const mkdir = (directory: string) => {
    console.log(chalk.cyan('creating directory: ') + directory);
    const isWindows = platform() === "win32";
    const path = isWindows ? pathWindows : pathLinux;
    directory = path.resolve(process.cwd(), directory);
    if (isWindows) {
        execSync(`${process.env.comspec} /c mkdir "${directory}"`)
    } else {
        const _directory = path.relative(process.cwd(), directory);
        const junks = _directory.split(path.sep);
        let growingDirectory = '';
        for (const junk of junks) {
            console.log(growingDirectory);
            growingDirectory += junk + path.sep;
            execSync(`mkdir ${path.resolve(process.cwd(), growingDirectory)}`);
        }
    }
};
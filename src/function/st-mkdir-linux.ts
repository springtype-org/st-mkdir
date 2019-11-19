import {execSync} from "child_process";
import {existsSync} from "fs";
import * as path from "path";

export const mkdir = (directory: string) => {
    const linuxDirectory = path.relative(process.cwd(), directory);
    const junks = linuxDirectory.split(path.sep);
    let growingDirectory = "";
    for (const junk of junks) {
        growingDirectory += junk + path.sep;

        const folderToCreate = path.resolve(process.cwd(), growingDirectory);

        if (!existsSync(folderToCreate)) {
            execSync(`mkdir ${folderToCreate}`);
        }
    }

};

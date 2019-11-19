import {execSync} from "child_process";
import {existsSync} from "fs";
import {win32 as path} from "path";

export const mkdir = (directory: string) => {
    const windowsDirectory =  path.relative(process.cwd(), directory);
    const junks = windowsDirectory.split(path.sep);
    let growingDirectory = "";
    for (const junk of junks) {
        growingDirectory += junk + path.sep;
        const folderToCreate = path.resolve(process.cwd(), growingDirectory);

        if (!existsSync(folderToCreate)) {
            execSync(`${process.env.comspec} /c mkdir "${directory}"`);
        }
    }
};

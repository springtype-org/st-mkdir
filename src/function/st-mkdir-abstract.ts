import { execSync } from "child_process";
import { existsSync } from "fs";
import * as path from "path";
import { DIR_WILDCARD } from "./st-mkdir";

export const abstractMkDir = (dir: string, mkdirCommand: string) => {

    dir = path.relative(process.cwd(), dir);

    const chunks = dir.split(path.sep);
    let subDir = "";

    for (const chunk of chunks) {
        
        subDir += chunk + path.sep;

        const absoluteSubDir = path.resolve(process.cwd(), subDir);

        if (!existsSync(absoluteSubDir)) {
            execSync(mkdirCommand.replace(DIR_WILDCARD, absoluteSubDir));
        }
    }
};
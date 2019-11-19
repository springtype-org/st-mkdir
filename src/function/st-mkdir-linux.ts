import { abstractMkDir } from "./st-mkdir-abstract";
import { DIR_WILDCARD } from "./st-mkdir";

export const mkdir = (dir: string) => {
    abstractMkDir(dir, `mkdir ${DIR_WILDCARD}`);
};

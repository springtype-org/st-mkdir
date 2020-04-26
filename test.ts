import { mkdir } from "./dist";
import { existsSync, rmdirSync } from "fs";

mkdir('.test');

const ok = !existsSync('.test');

rmdirSync('.test');

if (ok) {
    console.log('[!!] Test failed. Test directory .test does not exists.');
    process.exit(1);
} else {
    console.log('[OK] Test finished.');
}
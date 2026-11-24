import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Dear HR, I quit. The 'unlimited PTO' turned out to be a dare, and I have decided to accept it — permanently.";
const outDir = process.argv[2] ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

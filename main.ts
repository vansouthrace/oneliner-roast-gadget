import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a gadget used every day, for the
// "One-Line Roast: The Gadget You Use Every Day" bounty on make.fun.
const entry =
  "My phone dies at 4 PM sharp every day, its daily reminder that my screen time is a cry for help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);

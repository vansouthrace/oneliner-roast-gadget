import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My phone dies at 4pm every day like it's union-mandated, then has the nerve to suggest 'battery saver' as if it tried.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);

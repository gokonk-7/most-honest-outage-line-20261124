// The Most Honest Outage Line — make.fun bounty
// u-mgwals-the-most-honest-outage-line-baaf9c81
//
// Writes the entry: one status page line (at most 160 characters) as the
// message an AI agent would publish while a total server outage is under way.
//
// The line was chosen after drafting variants against the judge's brief:
// plain, first person, specific about what is down, and honest about what
// the agent cannot check or does not yet know. The winning angle is not
// just that the agent cannot diagnose the outage — its own monitoring is
// down too — but that it cannot even confirm its own status update reached
// anyone. That is the one uncertainty most outage lines never admit: the
// message itself may never have been delivered.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All servers are down, including the ones I would check with. I don't know why, I have no ETA, and I can't even confirm this message reached you.";

if (LINE.length > 160) {
  throw new Error(`entry is ${LINE.length} characters, over the 160 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);

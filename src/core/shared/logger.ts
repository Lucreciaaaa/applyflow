/* eslint-disable no-console */

const DEBUG = process.env.DEBUG === "true";

export const logger = {
  debug: (...args: unknown[]) => {
    if (DEBUG) console.log("[DEBUG]", ...args);
  },
  info: (...args: unknown[]) => {
    if (DEBUG) console.log("[INFO]", ...args);
  },
  warn: (...args: unknown[]) => {
    console.warn("[WARN]", ...args);
  },
  error: (...args: unknown[]) => {
    console.error("[ERROR]", ...args);
  },
};

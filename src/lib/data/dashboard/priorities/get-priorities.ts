import { mockPriorities } from "./priorities.mock";
import { Priority } from "./priorities.types";

export async function getPriorities(): Promise<Priority[]> {
  // TODO : Update with real data
  return mockPriorities;
}

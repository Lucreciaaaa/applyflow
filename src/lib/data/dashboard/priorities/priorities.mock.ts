import { Priority } from "./priorities.types";

export const mockPriorities: Priority[] = [
  {
    id: "1",
    label: "Follow up with Just Eat",
    type: "follow_up",
    date: new Date(2026, 4, 15),
  },
  {
    id: "2",
    type: "interview",
    label: "Prepare interview with Shopify",
    date: new Date(2026, 4, 2),
  },
  {
    id: "3",
    type: "warning",
    label: "3 applications with no response",
  },
];

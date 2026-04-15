export type Priority = {
  id: string;
  label: string;
  type: "follow_up" | "interview" | "warning";
  date?: Date;
};

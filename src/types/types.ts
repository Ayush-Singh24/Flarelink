export type Task = {
  id: string;
  priority: PriorityType;
};

export type PriorityType = "" | "high" | "low" | "medium";

export type StatusType = "active" | "completed";

export type PriorityObject = { [key: string]: PriorityType };

export type StatusObject = { [key: string]: StatusType };

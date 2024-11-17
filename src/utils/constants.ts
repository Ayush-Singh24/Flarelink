import { PriorityObject, StatusObject } from "../types/types";

export const Options = {
  All: 1,
  High: 2,
  Medium: 3,
  Low: 4,
  No: 5,
  Completed: 6,
};

export const Priority: PriorityObject = {
  NoPriority: "",
  High: "high",
  Medium: "medium",
  Low: "low",
};

export const Status: StatusObject = {
  Active: "active",
  Completed: "completed",
};

export const navItems = [
  {
    option: Options.All,
    icon: "/assets/all-task-icon.svg",
    label: "All tasks",
  },
  {
    option: Options.High,
    icon: "/assets/high-priority-icon.svg",
    label: "High Priority",
  },
  {
    option: Options.Medium,
    icon: "/assets/medium-priority-icon.svg",
    label: "Medium Priority",
  },
  {
    option: Options.Low,
    icon: "/assets/low-priority-icon.svg",
    label: "Low Priority",
  },
  {
    option: Options.No,
    icon: "/assets/no-priority-icon.svg",
    label: "No Priority",
  },
  {
    option: Options.Completed,
    icon: "/assets/completed-icon.svg",
    label: "Completed",
  },
];

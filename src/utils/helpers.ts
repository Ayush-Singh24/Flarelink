import { Task } from "../types/types";
import { Options, Priority, Status } from "./constants";

export const shouldShowTask = (task: Task, option: number): boolean => {
  if (option === Options.All) return true;
  if (option === Options.Completed) return task.status === Status.Completed;

  return (
    task.status === Status.Active &&
    ((option === Options.High && task.priority === Priority.High) ||
      (option === Options.Medium && task.priority === Priority.Medium) ||
      (option === Options.Low && task.priority === Priority.Low) ||
      (option === Options.No && task.priority === Priority.NoPriority))
  );
};

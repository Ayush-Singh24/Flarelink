import { Task } from "../../types/types";
import { shouldShowTask } from "../../utils/helpers";
import TaskItem from "./TaskItem";

export interface TasksContainerProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleDelete: (id: string) => void;
  option: number;
  handleStatus: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
}

export default function TasksContainer({
  tasks,
  setTasks,
  handleDelete,
  option,
  handleStatus,
}: TasksContainerProps) {
  return (
    <main className="task-container">
      {tasks
        ?.filter((task) => shouldShowTask(task, option))
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            handleDelete={handleDelete}
            handleStatus={handleStatus}
          />
        ))}
    </main>
  );
}

import { Task } from "../../types/types";
import PrioritySelector from "./PrioritySelector";
import StatusCheckbox from "./StatusCheckbox";
import { TasksContainerProps } from "./TasksContainer";

interface TaskItemProps extends Omit<TasksContainerProps, "option"> {
  task: Task;
}

export default function TaskItem({
  task,
  tasks,
  setTasks,
  handleDelete,
  handleStatus,
}: TaskItemProps) {
  return (
    <div className="task">
      <span className="task__text">{task.text}</span>

      <PrioritySelector task={task} tasks={tasks} setTasks={setTasks} />

      <StatusCheckbox task={task} handleStatus={handleStatus} />

      <button className="task__delete" onClick={() => handleDelete(task.id)}>
        <img
          src="/assets/delete-icon.svg"
          alt="delete"
          className="task__delete-img"
        />
      </button>
    </div>
  );
}

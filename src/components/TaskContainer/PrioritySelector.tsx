import { PriorityType, Task } from "../../types/types";
import { Priority } from "../../utils/constants";
import "./task.scss";

interface PrioritySelectorProps {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

interface PriorityOption {
  value: PriorityType;
  text: string;
}

export default function PrioritySelector({
  task,
  tasks,
  setTasks,
}: PrioritySelectorProps) {
  const priorities: PriorityOption[] = [
    { value: Priority.NoPriority, text: "No Priority" },
    { value: Priority.High, text: "High" },
    { value: Priority.Medium, text: "Medium" },
    { value: Priority.Low, text: "Low" },
  ];

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id
        ? { ...t, priority: event.target.value as PriorityType }
        : t,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task__priority">
      <select
        name="priority"
        id="priority"
        className="task__priority-dropdown"
        value={task.priority}
        onChange={handlePriorityChange}
      >
        {priorities.map(({ value, text }) => (
          <option key={value} value={value} className={text}>
            {text}
          </option>
        ))}
      </select>
      <span className="task__priority-arrow">
        <img
          src="/assets/down-arrow.svg"
          alt="no priority"
          className="side-nav__img"
        />
      </span>
    </div>
  );
}

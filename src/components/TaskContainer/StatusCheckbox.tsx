import { Task } from "../../types/types";
import { Status } from "../../utils/constants";

interface StatusCheckboxProps {
  task: Task;
  handleStatus: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
}
export default function StatusCheckbox({
  task,
  handleStatus,
}: StatusCheckboxProps) {
  return (
    <>
      <label htmlFor={`check-${task.id}`} className="task__checkbox">
        <img
          src={
            task.status === Status.Completed
              ? "/assets/checked-icon.svg"
              : "/assets/not-checked-icon.svg"
          }
          alt="checkbox"
          className="task__checkbox-img"
        />
      </label>
      <input
        type="checkbox"
        name={`check-${task.id}`}
        id={`check-${task.id}`}
        checked={task.status === Status.Completed}
        className="task__checkbox-input"
        onChange={(e) => handleStatus(e, task.id)}
      />
    </>
  );
}

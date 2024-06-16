import { FC } from "react";
import { Status } from "../types";

interface ITaskFilter {
  filterTasks: (status?: Status) => void;
}

const TaskFilter: FC<ITaskFilter> = ({ filterTasks }) => {
  const handleFilterChange = (status?: Status) => {
    if (!status) {
      filterTasks();
    } else {
      filterTasks(status);
    }
  };

  return (
    <div>
      <button onClick={() => handleFilterChange()}>All</button>
      <button onClick={() => handleFilterChange("pending")}>Pending</button>
      <button onClick={() => handleFilterChange("in-progress")}>
        In progress
      </button>
      <button onClick={() => handleFilterChange("completed")}>Completed</button>
    </div>
  );
};

export default TaskFilter;

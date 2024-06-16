import dayjs from "dayjs";
import { CompletedTask, InProgressTask, PendingTask, Task } from "../types";
import "../index.css";
import classnames from "classnames";

// ts. Type-guard
const isPendingDetails = (task: Task): task is PendingTask =>
  task.status === "pending";
const isProgressDetails = (task: Task): task is InProgressTask =>
  task.status === "in-progress";
const isCompletedDetails = (task: Task): task is CompletedTask =>
  task.status === "completed";

interface ITaskListProps<T extends Task> {
  task: T;
  deleteTask: (id: number) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
}

// ts. универсальный тип, наследуемый от Task
const TaskItem = <T extends Task>({
  task,
  deleteTask,
  updateTask,
}: ITaskListProps<T>) => {
  const { title, status, description, createdAt } = task;

  const handleUpdate = (task: Task) => {
    if (isPendingDetails(task)) {
      const proressTask: InProgressTask = {
        ...task,
        status: "in-progress",
        details: {
          ...task.details,
          updatedAt: new Date(),
        },
      };

      updateTask(proressTask);
    }
    if (isProgressDetails(task)) {
      const completedTask: CompletedTask = {
        ...task,
        status: "completed",
        details: {
          ...task.details,
          updatedAt: new Date(),
          completedAt: new Date(),
        },
      };

      updateTask(completedTask);
    }
  };

  return (
    <div className={classnames("Item", task.status)}>
      <div>title: {title}</div>
      <div>status: {status}</div>
      {task?.description && <div>description: {description}</div>}
      <div>createdAt: {dayjs(createdAt).format("YYYY-MM-DD")}</div>
      {isPendingDetails(task) && (
        <>
          <div>
            deadline: {dayjs(task.details.deadline).format("YYYY-MM-DD")}
          </div>
        </>
      )}
      {isProgressDetails(task) && (
        <>
          <div>
            deadline: {dayjs(task.details.deadline).format("YYYY-MM-DD")}
          </div>
          <div>
            updatedAt: {dayjs(task.details.updatedAt).format("YYYY-MM-DD")}
          </div>
        </>
      )}
      {isCompletedDetails(task) && (
        <>
          <div>
            completedAt: {dayjs(task.details.completedAt).format("YYYY-MM-DD")}
          </div>
          <div>
            updatedAt: {dayjs(task.details.updatedAt).format("YYYY-MM-DD")}
          </div>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      {!isProgressDetails(task) && !isCompletedDetails(task) && (
        <button onClick={() => handleUpdate(task)}>To work</button>
      )}
      {!isCompletedDetails(task) && !isPendingDetails(task) && (
        <button onClick={() => handleUpdate(task)}>Completed</button>
      )}
    </div>
  );
};

export default TaskItem;

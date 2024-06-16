import { FC } from "react";
import { Task } from "../types";
import TaskItem from "./task-item";

interface ITaskListProps{
    tasks: Task[]
    deleteTask: (id: number) => Promise<void>
    updateTask: (task: Task) => Promise<void>
}

const TaskList: FC<ITaskListProps> = ({tasks = [], deleteTask, updateTask}) => {
    return <div>{tasks.map((task) => <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/> )}</div>
}

export default TaskList;
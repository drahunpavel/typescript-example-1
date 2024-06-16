import { useState, useEffect } from "react";

import { NewTask, Task } from "../types";
import { TaskService } from "../services/task-service";

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskService = new TaskService();

  const fetchTasks = async () =>
    taskService.getAllTasks().then((data) => setTasks(data.tasks));
  const addTask = (task: NewTask) =>
    taskService.addTask(task).then(() => fetchTasks());
  const deleteTask = (id: number) =>
    taskService.deleteTask(id).then(() => fetchTasks());
  const updateTask = (task: Task) =>
    taskService.updateTask(task).then(() => fetchTasks());
  const filterTasks = (status?: Task["status"]) => {
    if (status) {
      taskService.getFilteredTasks(status).then((data) => setTasks(data.tasks));
    }else{
      fetchTasks()
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    fetchTasks,
    addTask,
    deleteTask,
    updateTask,
    filterTasks,
  };
};

import TaskFilter from "./components/task-filter";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import { useTaskManager } from "./hooks/use-task-manager";

function App() {
  const { tasks, addTask, deleteTask, updateTask, filterTasks } = useTaskManager();

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter filterTasks={filterTasks}/>
      <div className="container">
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
    </div>
  );
}

export default App;

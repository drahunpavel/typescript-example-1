import { FC, FormEvent, useState } from "react";
import { NewTask } from "../types";
import '../index.css';

interface ITaskFormProps{
    addTask: (task: NewTask) => Promise<void>
}

const TaskForm: FC<ITaskFormProps> = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      const newTask: NewTask = {
        title,
        description,
        status: 'pending',
        createdAt: new Date(),
        details: {
            deadline: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        }
      };
      addTask(newTask);
      setTitle('');
      setDescription('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="Form">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    );
  };
  
  export default TaskForm;
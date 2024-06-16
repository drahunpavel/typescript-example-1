import { Request, Response } from "express";
import { openDb } from "../database";
import { Task } from "../models/Task";
import { TaskDetails, TransformedTask } from "../types";

function transformArray(arr: Task[]): TransformedTask[] {
  return arr.map((item: { [x: string]: any }) => {
    const transformed: Partial<TransformedTask> = {};
    Object.keys(item).forEach((key) => {
      if (key.startsWith("details_")) {
        const newKey = key.split("_")[1] as keyof TaskDetails;
        transformed.details = { ...transformed.details, [newKey]: item[key] };
      } else {
        transformed[key as keyof TransformedTask] = item[key];
      }
    });
    return transformed as TransformedTask;
  });
}

export const getAllTasks = async (_: Request, res: Response) => {
  const db = await openDb();

  try {
    const tasks: Task[] = await db.all("SELECT * FROM tasks");
    res.status(200).json({ tasks: transformArray(tasks) });
  } finally {
    db.close();
  }
};

export const addTask = async (req: Request, res: Response) => {
  const db = await openDb();
  try {
    const { title, description, createdAt, details, status } = req.body;

    await db.run(
      "INSERT INTO tasks (title, description, createdAt, status, details_deadline) VALUES (?, ?, ?, ?, ?)",
      [title, description || null, createdAt, status, details.deadline]
    );

    res.status(200).json({ message: "Task added" });
  } finally {
    db.close();
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const db = await openDb();
  try {
    const { details, status, id } = req.body;
    await db.run(
      "UPDATE tasks SET status = ?, details_updatedAt = ?, details_completedAt = ? WHERE id = ?",
      [status, details.updatedAt, details.completedAt || null, id]
    );
    res.status(200).json({ message: "Task updated" });
  } finally {
    db.close();
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const db = await openDb();
  try {
    const { id } = req.params;
    await db.run("DELETE FROM tasks WHERE id = ?", id);
    res.status(200).json({ message: "Task deleted" });
  } finally {
    db.close();
  }
};

export const getFilteredTasks = async (req: Request, res: Response) => {
  const db = await openDb();
  try {
    const { status } = req.body;
    const tasks: Task[] = await db.all("SELECT * FROM tasks WHERE status = ?", [
      status,
    ]);
    res.status(200).json({ tasks: transformArray(tasks) });
  } finally {
    db.close();
  }
};

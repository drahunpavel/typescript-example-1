import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  getFilteredTasks,
  updateTask,
} from "../controllers/task-controller";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", addTask);
router.put("/tasks", updateTask);
router.delete("/tasks/:id", deleteTask);
router.post("/filtered", getFilteredTasks);

export default router;

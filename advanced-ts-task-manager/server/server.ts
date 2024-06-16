import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./routes/task-router";
import { openDb } from "./database";

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", taskRoutes);

(async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      createdAt TEXT NOT NULL,
      status TEXT NOT NULL CHECK (status IN ('pending', 'in-progress', 'completed')),
      details_deadline TEXT,
      details_updatedAt TEXT,
      details_completedAt TEXT
    )
    `);
})();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

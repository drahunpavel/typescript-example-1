export type Status = "pending" | "in-progress" | "completed"; //ts. Union type

export interface BaseTask {
  id: number;
  title: string;
  description?: string; // ts. Optional
  createdAt: Date;
}

// ts. Общий интерфейс таски (Generics)
interface ITask<T extends Status, U> extends BaseTask {
  status: T;
  details: U;
}

interface IPendingDetails {
  deadline: Date;
}

interface IInProgressDetails {
  deadline: Date;
  updatedAt: Date;
}

interface ICompletedDetails {
  completedAt: Date;
  updatedAt: Date;
}

export type PendingTask = ITask<"pending", IPendingDetails>; 
export type InProgressTask = ITask<"in-progress", IInProgressDetails>;
export type CompletedTask = ITask<"completed", ICompletedDetails>;

// ts. Discriminated Unions
export type Task = PendingTask | InProgressTask | CompletedTask;

// ts. Utility types
export type NewTask = Omit<PendingTask, 'id'>;






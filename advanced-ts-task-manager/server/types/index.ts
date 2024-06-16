export interface TaskDetails {
  deadline?: Date;
  updatedAt?: Date;
  completedAt?: Date;
}

export interface TransformedTask {
  id: number;
  title: string;
  description?: string;
  createdAt: Date;
  details: TaskDetails;
}

export interface Task {
    id: number;
    title: string;
    description: string | null;
    status: 'pending' | 'in-progress' | 'completed';
    createdAt: string;
    updatedAt: string;
    details_deadline: string;
    details_updatedAt: string;
    details_completedAt: string;
  }
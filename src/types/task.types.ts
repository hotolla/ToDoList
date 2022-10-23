export interface ITask {
  id?: number;
  name: string | null;
  description: string | null;
  isDone: boolean;
  time: string | null;
};

export interface TaskProgress {
  total: number;
  isDone: number;
  inProgress: number;
};
 
export interface ITask {
    id: number;
    name: string;
    isDone: boolean;
  };

  export interface TaskProgress {
    total: number
    isDone: number
    inProgress: number
  }

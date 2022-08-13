import { ITask } from "../../types/task.types";
import { TasksFilter } from "./TasksFilter";

export interface ITasksState {
  tasks: ITask[];
  filter: TasksFilter;
  loading: boolean;
};

export const initialState: ITasksState = {
  tasks: [],
  filter: TasksFilter.Total,
  loading: false
};

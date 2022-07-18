import { ITask } from "../../types/task.types";
import { TasksFilter } from "./TasksFilter";

export interface TasksState {
  tasks: ITask[];
  filter: TasksFilter;
  loading: boolean;
};

const initialState: TasksState = {
  tasks: [],
  filter: TasksFilter.Total,
  loading: false,
};

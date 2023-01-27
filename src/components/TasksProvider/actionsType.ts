import { ITask } from "../../types/task.types";
import { Types } from "./types";
import { TasksFilter } from "./TasksFilter";

export type Action =
  | { type: Types.AddTask; payload: ITask }
  | { type: Types.AddTasks; payload: ITask[] }
  | { type: Types.DeleteTask; payload: ITask }
  | { type: Types.EditTask; payload: ITask }
  | { type: Types.FetchTasks; payload: ITask[] }
  | { type: Types.FetchTasksRequest, payload?: any }
  | { type: Types.ToggleFilter; payload: TasksFilter }
  | { type: Types.FetchTasksSuccess; payload?: any }

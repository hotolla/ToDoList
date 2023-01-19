import { ITask } from "../../types/task.types";
import { ITasksState } from './initialState';
import { TasksFilter } from "./TasksFilter";
import { Types } from "./types";

export type Action =
  | { type: Types.AddTask; payload: ITask }
  | { type: Types.AddTasks; payload: ITask[] }
  | { type: Types.DeleteTask; payload: ITask }
  | { type: Types.EditTask; payload: ITask }
  | { type: Types.FetchTasks; payload: ITask[] }
  | { type: Types.ToggleFilter; payload: TasksFilter }

export const reducer = (state: ITasksState, { type, payload }: Action) => {
  switch (type) {
    case Types.AddTask:
      return { ...state, tasks: state.tasks.concat(payload) };

    case Types.AddTasks:
      return { ...state, tasks: state.tasks.concat(payload) };
        
    case Types.DeleteTask:
      return { ...state, tasks: state.tasks.filter((task) => task.id != payload.id) };
      
    case Types.ToggleFilter:
      return { ...state, filter: payload };
      
    case Types.FetchTasks:
      return { ...state, tasks: payload };

    case Types.EditTask:
      return { ...state, tasks: state.tasks.map((task) => task.id === payload.id ? payload : task) };

    default:
      return state;
  };
};

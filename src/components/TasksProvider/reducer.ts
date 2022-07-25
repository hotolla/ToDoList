import { ITask } from "../../types/task.types";
import { ITasksState } from './initialState';
import { TasksFilter } from "./TasksFilter";
import { Types } from "./types";

export type Action =
  | { type: Types.AddTask; payload: ITask }
  | { type: Types.DeleteTask; payload: ITask }
  | { type: Types.FetchTasks; payload: ITask[] }
  | { type: Types.ToggleFilter; payload: TasksFilter };

export const reducer = (state: ITasksState, action: Action) => {
  switch (action.type) {
    case Types.AddTask:
      return { ...state, tasks: [ action.payload, ...state.tasks ] };

    case Types.DeleteTask:
      return { ...state, tasks: state.tasks.filter((task) => task.id != action.payload.id) };
    
    case Types.ToggleFilter:
      return { ...state, filter: action.payload };
    
    case Types.FetchTasks:
      return { ...state, tasks: action.payload };
    
    default: 
      return state;
  };
};

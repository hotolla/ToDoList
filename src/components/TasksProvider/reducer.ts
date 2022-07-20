import { ITask } from "../../types/task.types";
import { ITasksState } from './initialState';
import { Types } from "./types";

export type Action = { type: Types.AddTask; payload: ITask }

export const reducer = (state: ITasksState, action: Action) => {
  switch (action.type) {
    case Types.AddTask:
      return {...state, tasks: [action.payload, ...state.tasks]};
    default: 
      return state;
  }
} 

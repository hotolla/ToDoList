import { Action } from "../actionsType";
import { ITasksState } from '../initialState';
import { Types } from "../types";

export const taskReducer = (state: ITasksState, { type, payload }: Action) => {
  switch (type) {
    case Types.FetchTasks:
      return { ...state, tasks: payload };

    case Types.AddTask:
      return { ...state, tasks: state.tasks.concat(payload) };

    case Types.AddTasks:
      return { ...state, tasks: state.tasks.concat(payload) };
        
    case Types.DeleteTask:
      return { ...state, tasks: state.tasks.filter((task) => task.id != payload.id) };
      
    case Types.EditTask:
      return { ...state, tasks: state.tasks.map((task) => task.id === payload.id ? payload : task) };

    default:
      return state;
  };
};

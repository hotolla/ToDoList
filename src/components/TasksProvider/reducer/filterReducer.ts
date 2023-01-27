import { Action } from "../actionsType";
import { ITasksState } from '../initialState';
import { Types } from "../types";

export const filterReducer = (state: ITasksState, { type, payload }: Action) => {
  switch (type) {
    case Types.ToggleFilter:
      return { ...state, filter: payload };
    
    default:
      return state;
  };
};

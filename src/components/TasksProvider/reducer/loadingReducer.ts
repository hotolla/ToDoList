import { Action } from "../actionsType";
import { ITasksState } from '../initialState';
import { Types } from "../types";

export const loadingReducer = (state: ITasksState, { type, payload }: Action) => {
  switch (type) {
    case Types.FetchTasksRequest:
      return { ...state, loading: true };
    
    case Types.FetchTasksSuccess:
      return { ...state, loading: false };

    default:
      return state;
  };
};

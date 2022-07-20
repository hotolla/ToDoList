import { ITask } from "../../types/task.types";
import { ITasksState } from './initialState';
import { Types } from "./types";

export type Action = { type: Types; payload: ITask }

export const reducer = (state: ITasksState, action: Action) => {
  switch (action.type) {
    case Types.AddTask:
      return {...state, tasks: [action.payload, ...state.tasks]};
    case Types.DeleteTask:
      return {...state, tasks: [action.payload, ...state.tasks.filter((task) => action.payload.id != task.id)]};
    default: 
      return state;
  }
} 
// добавляю в case новый тип из enum Types свойство DeleteTask, и хочу вернуть текущее состояние, но с измененным массивом тасков. В массиве все таски у которых id не равно id по которому кликнули=задиспатчили

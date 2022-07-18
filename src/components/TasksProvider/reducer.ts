import { PayloadAction } from '@reduxjs/toolkit';
import { ITask } from "../../types/task.types";
import { TasksState } from './initialState';

export const reducer = (state: TasksState, action: PayloadAction<ITask>) => {
  switch (action.type) {
    case 'createTask':
      return {...state, tasks: [action.payload, ...state.tasks]};
  }

} 

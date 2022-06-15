import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../types/task.types';

export interface TaskState {
  tasks: ITask[];
  totalCount: number;
  totalDoneTasks: number;  
  totalPendingTasks: number;
}; 

const initialState: TaskState = {
  tasks: [],
  totalCount: 0,
  totalDoneTasks: 0,
  totalPendingTasks: 0,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      state.totalCount = state.totalCount + 1;
      state.totalPendingTasks = state.totalPendingTasks + 1;
      // state.totalCount = state.totalPendingTasks - state.totalDoneTasks + 1;
      // state.totalPendingTasks = state.totalPendingTasks + 1;
    },
    deleteTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.filter(({ id }) => action.payload.id !== id);
      state.totalCount = state.totalCount - 1;
      state.totalDoneTasks = state.totalDoneTasks + 1;
      // state.totalCount = state.totalCount - state.totalDoneTasks;
      state.totalPendingTasks = state.totalDoneTasks - 1;
      
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task ));
    },
    changeTaskStatus: (state, action) => {
      state.tasks = state.tasks.map((task) => task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task);
      state.totalDoneTasks = state.totalDoneTasks + 1;
      state.totalPendingTasks = state.totalPendingTasks - 1;

    },
  },
});

export const { createTask, deleteTask, editTask, changeTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;

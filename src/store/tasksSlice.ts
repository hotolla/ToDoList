import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../types/task.types';

export enum TasksFilter {
  Total = "TOTAL",
  Done = "DONE",
  InProgress = "IN_PROGRESS"
}

export interface TasksState {
  tasks: ITask[];
  filter: TasksFilter,
  totalTasks: number;
  totalDoneTasks: number;
  totalPendingTasks: number;
}

const initialState: TasksState = {
  tasks: [],
  filter: TasksFilter.Total,
  totalTasks: 0,
  totalDoneTasks: 0,
  totalPendingTasks: 0
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Array<ITask>>) => {
      state.tasks = action.payload;
    },
    createTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      state.totalTasks += 1;
      state.totalPendingTasks += 1;
    },
    deleteTask: (state, { payload }: PayloadAction<ITask>) => {
      const countType = payload.isDone ? "totalDoneTasks" : "totalPendingTasks";

      state.tasks = state.tasks.filter(({ id }) => payload.id !== id);
      state.totalTasks -= 1;
      state[countType] -= 1;
    },
    editTask: (state, { payload }: PayloadAction<ITask>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id ? payload : task
      );
    },
    changeTaskStatus: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id !== payload.id) {
          return task;
        } else {
          state.totalDoneTasks += payload.isDone ? -1 : 1;
          state.totalPendingTasks += payload.isDone ? 1 : -1;
          
          return { ...task, isDone: !task.isDone };
        }
      });
    },
    toggleFilter: (state, { payload }) => {
      state.filter = payload;
    }
  }
});

export const { 
  createTask,
  deleteTask,
  editTask,
  changeTaskStatus,
  toggleFilter,
  setTasks
} = tasksSlice.actions;

export default tasksSlice.reducer;

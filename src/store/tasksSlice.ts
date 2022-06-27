import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../types/task.types';

export enum TasksFilter {
  Total = 'TOTAL',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
}

export interface TasksState {
  tasks: ITask[];
  filter: TasksFilter;
}

const initialState: TasksState = {
  tasks: [],
  filter: TasksFilter.Total,
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
    },
    deleteTask: (state, { payload }: PayloadAction<ITask>) => {
      state.tasks = state.tasks.filter(({ id }) => payload.id !== id);
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
          return { ...task, isDone: !task.isDone };
        }
      });
    },
    toggleFilter: (state, { payload }: PayloadAction<TasksFilter>) => {
      state.filter = payload;
    },
  },
});

export const {
  createTask,
  deleteTask,
  editTask,
  changeTaskStatus,
  toggleFilter,
  setTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;

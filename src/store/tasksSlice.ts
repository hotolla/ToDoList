import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../types/task.types';
import {
  changeStatusTaskThunk,
  createTodo,
  deleteTaskThunk,
  editTaskThunk,
  fetchTasks,
} from './tasks.thunk';

export enum TasksFilter {
  Total = 'TOTAL',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
}

export interface TasksState {
  tasks: ITask[];
  filter: TasksFilter;
  loading: boolean;
  errorMessage: string;
}

const initialState: TasksState = {
  tasks: [],
  filter: TasksFilter.Total,
  loading: false,
  errorMessage: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleFilter: (state, { payload }: PayloadAction<TasksFilter>) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createTodo.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        state.loading = false;
        state.tasks.push(action.payload);
      }
    );
    builder.addCase(createTodo.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = 'ERROR!!!!';
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      }
    );
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = 'ERROR!!!!';
    });
    builder.addCase(deleteTaskThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteTaskThunk.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => action.payload !== task.id);
      }
    );
    builder.addCase(deleteTaskThunk.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = 'ERROR!!!!';
    });

    builder.addCase(changeStatusTaskThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      changeStatusTaskThunk.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      }
    );

    builder.addCase(changeStatusTaskThunk.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = 'ERROR!!!!';
    });

    builder.addCase(editTaskThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editTaskThunk.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      }
    );
    builder.addCase(editTaskThunk.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = 'ERROR!!!!';
    });
  },
});

export const { toggleFilter } = tasksSlice.actions;

export default tasksSlice.reducer;

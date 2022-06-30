import { RootState } from './store';
import { createSelector } from 'reselect';
import { TasksFilter } from './tasksSlice';
import { ITask, TaskProgress } from '../types/task.types';

export const filterSelector = (state: RootState): TasksFilter => state.todo.filter;
export const tasksSelector = (state: RootState) => state.todo.tasks;
export const loadingSelector = (state: RootState) => state.todo.loading;
export const errorSelector = (state: RootState) => state.todo.errorMessage;

export const filteredTasksSelector = createSelector(
  filterSelector,
  tasksSelector,
  (filter, tasks): ITask[] => {
    if (filter === TasksFilter.Total) {
      return tasks;
    }
    return tasks.filter((task) => {
      const isDone = task.isDone && filter === TasksFilter.Done;
      const isInProgress = !task.isDone && filter === TasksFilter.InProgress;

      return isDone || isInProgress;
    });
  }
);

export const badgeSelector = createSelector(
  tasksSelector,
  (tasks): TaskProgress => {
    return {
      total: tasks.length,
      isDone: tasks.filter(task => task.isDone).length,
      inProgress: tasks.filter(task => !task.isDone).length
    }
  }
);

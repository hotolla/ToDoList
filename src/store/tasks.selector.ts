import { RootState } from './store';
import { createSelector } from 'reselect';
import { TasksFilter } from './tasksSlice';

const filterSelector = (state: RootState) => state.tasks.filter;
const tasksSelector = (state: RootState) => state.tasks.tasks;

export const filteredTasksSelector = createSelector(
  filterSelector,
  tasksSelector,
  (filter, tasks) => {
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

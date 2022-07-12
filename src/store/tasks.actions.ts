import { createAction } from '@reduxjs/toolkit';
import { ITask } from '../types/task.types';

export const getTasksAction = createAction('getTasks');
export const deleteTaskAction = createAction<ITask>('deleteTask');
export const changeStatusTaskAction = createAction<ITask>('changeStatus');
export const editTaskAction = createAction<{task: ITask, newName: string}>('editTask');

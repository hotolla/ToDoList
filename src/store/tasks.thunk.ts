import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../api/tasks.api';
import { ITask } from '../types/task.types';

export const createTodo = createAsyncThunk<ITask, ITask>(
  'todo/createTask',
  async (newTask) => {
    const { data } = await API.post('tasks', newTask);
    return data;
  }
);

export const fetchTasks = createAsyncThunk<ITask[]>(
  'todo/fetchTasks',
  async () => {
    const { data } = await API.get('tasks');
    return data;
  }
);

export const deleteTaskThunk = createAsyncThunk<any, ITask>(
  'todo/deleteTask',
  async (task) => {
    await API.delete(`tasks/${task.id}`);
    return task.id;
  }
);

export const changeStatusTaskThunk = createAsyncThunk<any, ITask>(
    'todo/changeStatusTask',
    async (task) => {
      const {data} = await API.put(`tasks/${task.id}`, {
        ...task,
        isDone: !task.isDone,
      });
      return data;
    }
  );

export const editTaskThunk = createAsyncThunk<any, {task: ITask, newName: string}>(
    'todo/editTask',
    async ({task, newName}) => {
      const { data } = await API.put(`tasks/${task.id}`, {
        ...task,
        name: newName,
      });
      return data;
    }
  );

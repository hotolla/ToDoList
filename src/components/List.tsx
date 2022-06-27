import { List as MuiList, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../api/tasks.api';
import { useAppSelector } from '../store';
import { filteredTasksSelector } from '../store/tasks.selector';
import { setTasks, TasksFilter } from '../store/tasksSlice';
import { ITask } from '../types/task.types';
import { Task } from './Task';

export const List = () => {
  const dispatch = useDispatch();
  const tasks = useAppSelector(filteredTasksSelector);

  const fetchTasks = async () => {
    const { data } = await API.get('tasks');
    dispatch(setTasks(data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <MuiList dense>
      {!tasks.length && <Typography align="center">No tasks found</Typography>}

      {tasks.map((task: ITask) => (
        <Task key={task.id} task={task} />
      ))}
    </MuiList>
  );
};

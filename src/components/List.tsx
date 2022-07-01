import { List as MuiList, Typography, CircularProgress, Modal } from '@mui/material';
import { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  errorSelector,
  filteredTasksSelector,
  loadingSelector,
} from '../store/tasks.selector';
import { fetchTasks } from '../store/tasks.thunk';
import { ITask } from '../types/task.types';
import { Task } from './Task';
import { TodoModal } from './TodoModal';

export const List = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(filteredTasksSelector);
  const loading = useAppSelector(loadingSelector);
  const errorMessage = useAppSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <MuiList dense>

      {loading && <CircularProgress size={36} style={{marginLeft: '50%', marginTop: 12}}/>}
      {errorMessage && <div>{errorMessage}</div>}
      {!loading && !errorMessage && !tasks.length && (
        <Typography align="center">No tasks found</Typography>
      )}

      {!loading && tasks.map((task: ITask) => (
        <Task key={task.id} task={task} />
      ))}

      <TodoModal />

    </MuiList>

  );
};

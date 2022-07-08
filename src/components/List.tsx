import { makeStyles } from '@mui/styles';
import {
  List as MuiList,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  errorSelector,
  filteredTasksSelector,
  loadingSelector,
} from '../store/tasks.selector';
import { fetchTasks } from '../store/tasks.thunk';
import { ITask } from '../types/task.types';
import { Task } from './Task';
import { scrollBarStyling } from '../config/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: 'auto',
    height: '60vh',
    ...scrollBarStyling,
  },
}));

export const List = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(filteredTasksSelector);
  const loading = useAppSelector(loadingSelector);
  const errorMessage = useAppSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <Paper className={classes.container}>
      <MuiList dense>
        {loading && (
          <CircularProgress
            size={36}
            style={{ marginLeft: '50%', marginTop: 12 }}
          />
        )}

        {errorMessage && <div>{errorMessage}</div>}

        {!loading && !errorMessage && !tasks.length && (
          <Typography align="center">No tasks found</Typography>
        )}

        {!loading &&
          tasks.map((task: ITask) => <Task key={task.id} task={task} />)}
      </MuiList>
    </Paper>
  );
};

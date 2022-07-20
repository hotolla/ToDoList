import { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import {
  List as MuiList,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';
import { useAppSelector } from '../store';
import {
  errorSelector,
  filteredTasksSelector,
  loadingSelector,
} from '../store/tasks.selector';
import { ITask } from '../types/task.types';
import { Task } from './Task';
import { scrollBarStyling } from '../config/theme';
import { TasksContext } from './TasksProvider';

const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: 'auto',
    height: '60vh',
    ...scrollBarStyling,
  },
}));

export const List = () => {
  const classes = useStyles();
  const loading = useAppSelector(loadingSelector);
  const errorMessage = useAppSelector(errorSelector);
  const { tasks } = useContext(TasksContext);
console.log(tasks);

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

import { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import {
  List as MuiList,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';
import { ITask } from '../types/task.types';
import { Task } from './Task';
import { scrollBarStyling } from '../config/theme';
import { TasksContext } from './TasksProvider';

const useStyles = makeStyles({
  container: {
    overflowY: 'auto',
    height: '60vh',
    ...scrollBarStyling
  }
});

export const List = () => {
  const classes = useStyles();
  const { tasks, loading } = useContext(TasksContext);

  return (
    <Paper className={classes.container}>
      <MuiList dense>
        {loading && (
          <CircularProgress
            size={36}
            style={{ marginLeft: '50%', marginTop: 12 }}
          />
        )}

        {!tasks.length ? (
          <Typography align="center">No tasks found</Typography>
        ) : tasks.map((task: ITask) => (
          <Task key={task.id} task={task} />
        ))}
      </MuiList>
    </Paper>
  );
};

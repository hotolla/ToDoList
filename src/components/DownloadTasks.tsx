import { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Button  } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { TasksContext } from './TasksProvider';
import { ITask } from '../types/task.types';
import * as tasksApi from '../api/tasks';
import { tasksMock } from './tasksMock';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  button: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

export const DownloadTasks = () => {
  const { addTasks, fetchTasksRequest, fetchTasksSuccess } = useContext(TasksContext);
  const classes = useStyles();

  const handleTaskDowload = () => {
    fetchTasksRequest();

    setTimeout((() => {
      addTasks(tasksMock);
      fetchTasksSuccess();
    }), 2000)
  };

  return (
    <div className={classes.container}>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        endIcon={<DownloadIcon />}
        onClick={handleTaskDowload}
      > 
        Download Tasks
      </Button>
    </div>
  );
};


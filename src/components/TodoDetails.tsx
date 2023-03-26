import { makeStyles } from '@mui/styles';
import { IconButton, Paper, Typography, CircularProgress } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { scrollBarStyling } from '../themes/themes';
import { useContext, useEffect, useState } from 'react';
import { TasksContext } from './TasksProvider';
import { ITask } from '../types/task.types';
import { fetchTask } from '../api/tasks';

const useStyles = makeStyles((theme) => ({
  ...scrollBarStyling,
  
  container: {
    marginTop: 30,
    padding: theme.spacing(3),
    overflowY: "auto",
    overflowX: 'hidden',
    height: "60vh"
  },

  title: {
    color: theme.palette.primary.main
  },

  colorButton: {
    color: theme.palette.secondary.main
  },

  description: {
    wordBreak: "break-all"
  }
}));

export const TodoDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [ task, setTask ] = useState<ITask | null>(null);

  useEffect(() => {
    // if (!id) {
    //   return;
    // }

    if (id) fetchTask(+id).then((task) => {
      setTask(task);
    });
  }, []);

  return !task ? (
    <CircularProgress
      size={36}
      style={{ marginLeft: '50%', marginTop: 12 }}
    />
  ) : (
    <Paper className={classes.container}>
      <Typography className={classes.title}>
        {task.name}
      </Typography>

        <Link to={`/`}>
          <IconButton edge="end" sx={{ left: 240 }}>
            <ArrowBackIcon className={classes.colorButton} />
          </IconButton>
        </Link>

      <Typography className={classes.title}>
        Task status:
      </Typography>

      <Typography>
        {(task.isDone) ? "Done" : "In Progress"}
      </Typography>

      <Typography className={classes.title}>
        Description:
      </Typography>

      <Typography className={classes.description}>
        {task.description}
      </Typography>

      <Typography className={classes.title}>
        Due date:
      </Typography>

      <Typography className={classes.description}>
        {task.time}
      </Typography>

      <Typography className={classes.title}>
        Priority:
      </Typography>

      <Typography className={classes.description}>
        {task.priority}
      </Typography>
    </Paper>
  );
};

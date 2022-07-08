import { makeStyles } from '@mui/styles';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '../store';
import { currentTaskSelector } from '../store/tasks.selector';
import { scrollBarStyling } from '../config/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
    padding: theme.spacing(3),
    overflowY: "auto",
    height: "60vh",
  },
...scrollBarStyling,
  title: {
    color: theme.palette.primary.main,
  },
  colorButton: {
    color: theme.palette.secondary.main,
  },
  description: {
    wordBreak: "break-all",
  }
}));

export const TodoDetails = () => {
  const classes = useStyles();
  const { id } = useParams();

  const taskSelector = useAppSelector(currentTaskSelector);
  const task = taskSelector(id);
  
  return (
    <Paper className={classes.container}>
      <Typography className={classes.title}>
        {task?.name}
        <Link to={`/`}>
        <IconButton edge="end" sx={{left: 240}}>
          <ArrowBackIcon className={classes.colorButton} />
        </IconButton>
      </Link>
      </Typography>

      <Typography className={classes.title}>
        Task status:
      </Typography>

      <Typography >
      {(task?.isDone) ? "Done" : "In Progress"}
      </Typography>

      <Typography className={classes.title}>
        Description:
      </Typography>

      <Typography className={classes.description}>
        {task?.description}
      </Typography>

    </Paper>
  )
};
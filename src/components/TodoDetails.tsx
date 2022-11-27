import { makeStyles } from '@mui/styles';
import { IconButton, Paper, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { scrollBarStyling } from '../themes/lightTheme';

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
  const task = { id, name: 'Learn JS', description: 'very fast', isDone: true, time: "2 days" };
  
  return (
    <Paper className={classes.container}>
      <Typography className={classes.title}>
        {task?.name}

        <Link to={`/`}>
          <IconButton edge="end" sx={{ left: 240 }}>
            <ArrowBackIcon className={classes.colorButton} />
          </IconButton>
        </Link>
      </Typography>

      <Typography className={classes.title}>
        Task status:
      </Typography>

      <Typography>
        {(task?.isDone) ? "Done" : "In Progress"}
      </Typography>

      <Typography className={classes.title}>
        Description:
      </Typography>

      <Typography className={classes.description}>
        {task?.description}
      </Typography>

      <Typography className={classes.title}>
        Description:
      </Typography>

      <Typography className={classes.description}>
        {task?.time}
      </Typography>
    </Paper>
  );
};

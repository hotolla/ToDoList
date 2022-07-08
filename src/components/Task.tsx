import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Checkbox,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import { ITask } from '../types/task.types';
import { useAppDispatch } from '../store';
import {
  deleteTaskThunk,
  changeStatusTaskThunk,
  editTaskThunk,
} from '../store/tasks.thunk';

interface Props {
  task: ITask;
  // onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  color: {
    color: theme.palette.secondary.main,
  },
}));

export const Task = ({ task }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState(task.name);

  const toggleDeleteModal = () => setOpen(!open)
  const toggleIsEditable = () => {
    setIsEditable((isEditable) => !isEditable);
  };

  const changeName = (task: ITask) => {
    dispatch(editTaskThunk({ task, newName: inputValue }));
  };

  const handleBlur = () => {
    toggleIsEditable();
    if (inputValue === task.name) return;
    changeName(task);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={toggleDeleteModal}
        >
          <DeleteIcon className={classes.color} />
        </IconButton>
      }
    >
      <Dialog open={open} onClose={toggleDeleteModal}>
        <DialogTitle>Delete task?</DialogTitle>
        <DialogActions>
          <Button onClick={() => dispatch(deleteTaskThunk(task))}>Yes</Button>
          <Button onClick={toggleDeleteModal}>No</Button>
        </DialogActions>
      </Dialog>

      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isDone}
          onChange={() => dispatch(changeStatusTaskThunk(task))}
        />
      </ListItemIcon>

      {!isEditable ? (
        <ListItemText primary={task.name} onClick={toggleIsEditable} />
      ) : (
        <TextField
          autoFocus
          fullWidth
          size="small"
          value={inputValue}
          onBlur={handleBlur}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      )}
      <Link to={`/todo/${task.id}`}>
        <IconButton aria-label="open">
          <DescriptionIcon className={classes.color} />
        </IconButton>
      </Link>
    </ListItem>
  );
};

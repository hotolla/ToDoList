import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
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
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import { ITask } from '../types/task.types';
import * as tasksApi from '../api/tasks';
import { TasksContext } from './TasksProvider';

interface Props {
  task: ITask;
}

export const Task = ({ task }: Props) => {
  const [ open, setOpen ] = useState(false);
  const { deleteTask, editTask } = useContext(TasksContext);
  const [ isEditable, setIsEditable ] = useState(false);
  const [ inputValue, setInputValue ] = useState(task.name);

  const toggleDeleteModal = () => {
    setOpen((open) => !open);
  };

  const toggleIsEditable = () => {
    setIsEditable((isEditable) => !isEditable);
  };

  const changeName = (task: ITask) => {
  };

  const handleBlur = () => {
    toggleIsEditable();

    if (inputValue === task.name) {
      changeName(task);
    }
  };

  const handleTaskDelete = () => {
    tasksApi.deleteTask(task.id).then(() => {
      deleteTask(task);
      toggleDeleteModal();
    });
  };

  const changeTaskStatus = () => {
    tasksApi.editTask({ ...task, isDone: !task.isDone }).then((task) => {
      editTask(task);
    });
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          color="secondary"
          onClick={toggleDeleteModal}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Dialog open={open} onClose={toggleDeleteModal}>
        <DialogTitle>Delete task?</DialogTitle>
        <DialogActions>
          <Button onClick={handleTaskDelete}>Yes</Button>
          <Button onClick={toggleDeleteModal}>No</Button>
        </DialogActions>
      </Dialog>

      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isDone}
          onChange={changeTaskStatus}
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
        <IconButton 
          aria-label="open"
          color="secondary"
        >
          <DescriptionIcon />
        </IconButton>
      </Link>
    </ListItem>
  );
};

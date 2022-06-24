import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Checkbox,
  ListItemIcon,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from '../types/task.types';
import { changeTaskStatus, deleteTask, editTask } from '../store/tasksSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { API } from '../api/tasks.api';

interface Props {
  task: ITask;
}

export const Task = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState(task.name);

  const toggleIsEditable = () => {
    setIsEditable((isEditable) => !isEditable);
  };

  const deleteTask1 = async (task: ITask) => {
    await API.delete(`tasks/${task.id}`);
    dispatch(deleteTask(task));
  };

  const changeStatus1 = async (task: ITask) => {
    const { data } = await API.put(`tasks/${task.id}`, {
      ...task,
      isDone: !task.isDone,
    });
    dispatch(changeTaskStatus(data));
  };

  const changeName = async (task: ITask) => {
    const { data } = await API.put(`tasks/${task.id}`, {
      ...task,
      name: inputValue,
    });
    dispatch(editTask(data));
    toggleIsEditable();
  }; 

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            deleteTask1(task);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isDone}
          onChange={() => {
            changeStatus1(task);
          }}
        />
      </ListItemIcon>

      {!isEditable ? (
        <ListItemText primary={task.name} onClick={toggleIsEditable} />
      ) : (
        <TextField
          fullWidth
          size="small"
          value={inputValue}
          onBlur={() => {
            changeName(task);
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      )}
    </ListItem>
  );
};

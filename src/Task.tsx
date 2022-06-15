import { ListItem, ListItemText, IconButton, TextField, Checkbox, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from './types/task.types';
import { changeTaskStatus, deleteTask } from './store/taskReducer';
import { editTask } from './store/taskReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

interface Props {
  task: ITask;
}

export const Task = ({ task }: Props) => {
  const dispatch = useDispatch();

  const [ isEditable, setIsEditable ] = useState(false);
  const [ inputValue, setInputValue ] = useState(task.name);

  const toggleIsEditable = () => {
    setIsEditable((isEditable) => !isEditable);
  };

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            dispatch(deleteTask(task));
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
            dispatch(changeTaskStatus(task));
          }}
        />
      </ListItemIcon>
      
      {!isEditable ? (
        <ListItemText
          primary={task.name}
          onClick={toggleIsEditable}
        />
       ) : ( 
        <TextField
          fullWidth
          size="small"
          value={inputValue}
          onBlur={() => {
            toggleIsEditable();
            dispatch(editTask({...task, name: inputValue}));
          }}
          onChange={(e) => {setInputValue(e.target.value)}}
        />
       )} 
    </ListItem>
  );
};
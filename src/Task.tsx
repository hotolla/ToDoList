import { ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ITask } from './types/task.types';
import { useState } from 'react';

interface Props {
  task: ITask;
  onDelete: (task: ITask) => void;
  onEdit: (task: ITask) => void;
}

export const Task = ({ task, onEdit, onDelete }: Props) => {
  const [isEditable, setIsEditable] = useState(false)
  const [inputValue, setInputValue] = useState(task.name)



  return (
    <ListItem>
      {!isEditable ? (<ListItemText
        primary={task.name}
        sx={{
          border: task.isDone ? '2px solid green' : '2px solid red',
          mb: '20px',
          p: '15px',
        }}
        onDoubleClick={() => setIsEditable((isEditable) => !isEditable)}
      />) : <TextField 
      value={inputValue}
      onChange={<Icon 
      onClick={() => {
      setIsEditable(false)
      callBack(task.id, inputValue)
      />}
       >}}
      <IconButton>
        <EditIcon />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => {
          onDelete(task);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

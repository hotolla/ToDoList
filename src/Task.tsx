import { ListItem, ListItemText, IconButton, TextField, Checkbox, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from './types/task.types';
import { useState } from 'react';

interface Props {
  task: ITask;
  onDelete: (task: ITask) => void;
  onEdit: (task: ITask) => void;
}

export const Task = ({ task, onEdit, onDelete }: Props) => {
  const [ isEditable, setIsEditable ] = useState(false);
  const [ inputValue, setInputValue ] = useState(task.name);

  const toggleIsEditable = () => {
    setIsEditable((isEditable) => !isEditable);
  };

  const toggleIsDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEdit({ ...task, isDone: e.target.checked });
  };

  const editTask = () => {
    toggleIsEditable();
    onEdit({ ...task, name: inputValue });
  };

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            onDelete(task);
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
          onChange={toggleIsDone}
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
          onBlur={editTask}
          onChange={(e) => {setInputValue(e.target.value);}}
        />
      )}
    </ListItem>
  );
};

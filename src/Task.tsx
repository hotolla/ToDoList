import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ITask } from './types/task.types'

interface Props {
  task: ITask;
  onDelete: (task: ITask) => void;
  onEdit: (task: ITask) => void;
}

export const Task = ({ task, onEdit, onDelete }: Props) => { 

  return (
    <ListItem >
      <ListItemText primary={task.name} sx={{border: task.isDone ? "2px solid green" : "2px solid red", mb: "20px", p: "15px"} }  onDoubleClick={() => onEdit(task)}/>
      <IconButton>
        <EditIcon />
      </IconButton>
      <IconButton  edge="end" aria-label="delete" onClick={() => {onDelete(task)}}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
};

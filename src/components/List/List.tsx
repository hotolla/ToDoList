import { List as MuiList } from "@mui/material";
import { Task } from '../../Task'
import { ITask } from "../../types/task.types";

export interface IProps {
  tasks: ITask[];
  onDelete: (task: ITask) => void;
  onEdit: (task: ITask) => void;
}

export const List = ({ tasks, onEdit, onDelete }: IProps) => {
  
  return (
    <MuiList dense>
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/> 
      ))} 
     
    </MuiList>
  );
};

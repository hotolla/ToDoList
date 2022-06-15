import { List as MuiList, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Task } from '../../Task';

// export interface IProps {
// }

export const List = () => {
  const tasks = useSelector((state: RootState) => state.newTask.tasks);
  const totalCount = useSelector((state: RootState) => state.newTask.totalCount);
  
  return (
    <>
    <Typography>{totalCount}</Typography>
    <MuiList dense>
        {tasks.map((task) => (
        <Task key={task.id} task={task}/> 
      ))} 
     
    </MuiList>
    </>
  );
};

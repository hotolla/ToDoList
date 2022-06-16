import { List as MuiList, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Task } from './Task';

export const List = () => {
  const tasks = useSelector((state: RootState) => state.newTask.tasks);
  const totalCount = useSelector((state: RootState) => state.newTask.totalCount);
  const totalDoneTasks = useSelector((state: RootState) => state.newTask.totalDoneTasks);
  const totalPendingTasks = useSelector((state: RootState) => state.newTask.totalPendingTasks);

  return (
    <>
      <Typography>Total: {totalCount}</Typography>
      <Typography>Total Done Tasks: {totalDoneTasks}</Typography>
      <Typography>Total Pending Tasks: {totalPendingTasks}</Typography>

      <MuiList dense>
        {tasks.map((task) => (
        <Task key={task.id} task={task}/> 
        ))}
      
      </MuiList>
    </>
  );
};

import { List as MuiList, Typography } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../store";
import { TasksFilter } from "../store/tasksSlice";
import { Task } from './Task';

export const List = () => {
  const tasks = useAppSelector(({ tasks }) => tasks.tasks);
  const filter = useAppSelector(({ tasks }) => tasks.filter);
  const filteredTasks = useMemo(() => {
    if (filter === TasksFilter.Total) {
      return tasks;
    }

    return tasks.filter((task) => {
      const isDone = task.isDone && filter === TasksFilter.Done;
      const isInProgress = !task.isDone && filter === TasksFilter.InProgress;
      
      return isDone || isInProgress;
    });
  }, [ filter, tasks ]);

  return (
    <MuiList dense>
      {!filteredTasks.length && (
        <Typography align="center">
          No tasks found
        </Typography>
      )}

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task}/> 
      ))}
    </MuiList>
  );
};

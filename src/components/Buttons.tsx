import { Button, ButtonGroup, Badge } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleFilter, TasksFilter } from "../store/tasksSlice";
import { useAppSelector } from "../store";

export const Buttons = () => {
  const dispatch = useDispatch();
  const filter = useAppSelector(({ tasks }) => tasks.filter);
  const totalTasks = useAppSelector(({ tasks }) => tasks.totalTasks);
  const totalDoneTasks = useAppSelector(({ tasks }) => tasks.totalDoneTasks);
  const totalPendingTasks = useAppSelector(({ tasks }) => tasks.totalPendingTasks);

  const updateFilter = (filter: TasksFilter) => () => {
    dispatch(toggleFilter(filter));
  };

  return (
    <ButtonGroup fullWidth>
      <Badge showZero badgeContent={totalTasks} color="secondary" sx={{ flexGrow: 1 }}>
        <Button
          variant={filter === TasksFilter.Total ? "contained" : "outlined"}
          onClick={updateFilter(TasksFilter.Total)}
        > 
          ALL
        </Button>
      </Badge>

      <Badge showZero badgeContent={totalDoneTasks} color="success" sx={{ flexGrow: 1 }}>
        <Button
          variant={filter === TasksFilter.Done ? "contained" : "outlined"}
          onClick={updateFilter(TasksFilter.Done)}
        > 
          DONE
        </Button>
      </Badge>

      <Badge showZero badgeContent={totalPendingTasks} color="warning" sx={{ flexGrow: 1 }}>
        <Button
          variant={filter === TasksFilter.InProgress ? "contained" : "outlined"}
          onClick={updateFilter(TasksFilter.InProgress)}
        > 
          IN PROGRES
        </Button>
        </Badge>
    </ButtonGroup> 
  );
};

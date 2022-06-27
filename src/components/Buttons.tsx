import { Button, ButtonGroup, Badge } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleFilter, TasksFilter } from '../store/tasksSlice';
import { useAppSelector } from '../store';
import { badgeSelector, filterSelector } from '../store/tasks.selector';

export const Buttons = () => {
  const dispatch = useDispatch();
  // const filter = (state: RootState) => state.tasks.filter;

  const filter = useAppSelector(filterSelector);
  const { total, isDone, inProgress } = useAppSelector(badgeSelector);

  const updateFilter = (filter: TasksFilter) => () => {
    dispatch(toggleFilter(filter));
  };

  return (
    <ButtonGroup fullWidth>
      <Badge
        showZero
        badgeContent={total}
        color="secondary"
        sx={{ flexGrow: 1 }}
      >
        <Button
          variant={filter === TasksFilter.Total ? 'contained' : 'outlined'}
          onClick={updateFilter(TasksFilter.Total)}
        >
          ALL
        </Button>
      </Badge>

      <Badge
        showZero
        badgeContent={isDone}
        color="success"
        sx={{ flexGrow: 1 }}
      >
        <Button
          variant={filter === TasksFilter.Done ? 'contained' : 'outlined'}
          onClick={updateFilter(TasksFilter.Done)}
        >
          DONE
        </Button>
      </Badge>

      <Badge
        showZero
        badgeContent={inProgress}
        color="warning"
        sx={{ flexGrow: 1 }}
      >
        <Button
          variant={filter === TasksFilter.InProgress ? 'contained' : 'outlined'}
          onClick={updateFilter(TasksFilter.InProgress)}
        >
          IN PROGRES
        </Button>
      </Badge>
    </ButtonGroup>
  );
};

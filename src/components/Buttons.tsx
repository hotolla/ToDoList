import { useContext } from 'react';
import { Button, ButtonGroup, Badge } from '@mui/material';
import { TasksContext } from './TasksProvider';

export const Buttons = () => {
  const { tasks, fetchTasks } = useContext(TasksContext);

  const badge = {
    total: tasks.length,
    isDone: tasks.filter((task) => task.isDone).length,
    inProgress: tasks.filter((task) => !task.isDone).length
  };

  const handleToggleFilter = (isDone: boolean | null) => () => {
    fetchTasks({
      isDone
    });
  };

  return (
    <ButtonGroup fullWidth>
      <Badge
        showZero
        badgeContent={badge.total}
        color="secondary"
        sx={{ flexGrow: 1 }}
      >
        <Button
          variant={badge.total ? 'contained' : 'outlined'}
          onClick={handleToggleFilter(null)}
        >
          ALL
        </Button>
      </Badge>
  
      <Badge
        showZero
        badgeContent={badge.isDone}
        color="success"
        sx={{ flexGrow: 1 }}
      >
        <Button
          variant={badge.isDone ? 'contained' : 'outlined'}
          onClick={handleToggleFilter(true)}
        >
          DONE
        </Button>
      </Badge>
  
      <Badge
        showZero
        badgeContent={badge.inProgress}
        color="warning"
        sx={{ flexGrow: 1 }}
      >
        <Button
          variant={badge.inProgress ? 'contained' : 'outlined'}
          onClick={handleToggleFilter(false)}
        >
          IN PROGRES
        </Button>
      </Badge>
    </ButtonGroup>
  );
};  

import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { List } from './List';
import { Buttons } from './Buttons';
import { TodoModal } from './TodoModal';
import { TasksProvider } from './TasksProvider';
import { Search } from './Search';
import { DownloadTasks } from './DownloadTasks';

const useStyles = makeStyles((theme) => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  createTaskButton: {
    marginTop: '-5% !important',
    width: '50%',
    alignSelf: 'center',
    borderRadius: '20px !important'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1.5)
  }

}));

export const Main = () => {
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <TasksProvider>
      <TodoModal isOpen={open} onClose={handleClose}/>
      
      <Box my={2}>
        <Buttons />
      </Box>
      <Box className={classes.listContainer}>
        <div className={classes.buttonContainer}>
          <Search />
          <DownloadTasks />
        </div>

        <List />
        
        <Button
          className={classes.createTaskButton}
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Create Task
        </Button>
      </Box>
    </TasksProvider>
  );
};

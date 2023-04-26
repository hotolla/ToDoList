import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Fab } from '@mui/material';
import { List } from './List/List';
import { Buttons } from '../../components/Buttons';
import { TodoModal } from '../../components/TodoModal';
import { TasksProvider } from '../../components/TasksProvider';
import { Search } from '../../components/Search';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    transform: 'translateY(-50%)',
    alignSelf: 'center'
  }
}));

export const TasksPage = () => {
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TasksProvider>
      <TodoModal isOpen={open} onClose={handleClose}/>
      
      <Box my={2}>
        <Buttons />
      </Box>

      <Box className={classes.listContainer}>
        <div>
          <Search />
        </div>

        <List />
        
        <Fab
          className={classes.button}
          variant="extended"
          color="primary"
          onClick={handleOpen}
        >
          {t('button.createTask')}
        </Fab>
      </Box>
    </TasksProvider>
  );
};

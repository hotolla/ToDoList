import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { List } from './List';
import { Buttons } from './Buttons';
import { TodoModal } from './TodoModal';
import { TasksProvider } from './TasksProvider';
import { Search } from './Search';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: '-1% !important',
    width: '50%',
    alignSelf: 'center',
    borderRadius: '20px !important'
  }
}));

export const Main = () => {
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
        
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          {t('button.createTask')}
        </Button>
      </Box>
    </TasksProvider>
  );
};

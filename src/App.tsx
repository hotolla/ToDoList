import { useState } from 'react';
import './App.css';
import { Box, Button } from '@mui/material';
import { List } from './components/List';
import { Buttons } from './components/Buttons';
import { TodoAppBar } from './components/TodoAppBar';
import { TodoModal } from './components/TodoModal';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  main: {
    minWidth: '30%',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: '-5% !important',
    width: '50%',
    alignSelf: 'center',
    borderRadius: '20px !important',
  },
}));

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.main}>
        <TodoAppBar />

        <TodoModal isOpen={open} onClose={handleClose} />

        <Box my={2}>
          <Buttons />
        </Box>

        <Box className={classes.listContainer}>
          <List />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            Create Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

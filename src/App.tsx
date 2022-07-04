import { Theme } from '@mui/material/styles';
import { Box, Button, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { TaskCreationForm } from './components/TaskCreationForm';
import { List } from './components/List';
import { Buttons } from './components/Buttons';
import { TodoAppBar } from './components/TodoAppBar';
import { useState } from 'react';
import { TodoModal } from './components/TodoModal';
import { makeStyles } from '@mui/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const useStyles = makeStyles(() => {
  return {
    createTaskButton: {
      backgroundColor: '#8A2BE2',
      borderRadius: '50px',
      borderColor: '#0063cc',
      color: 'white'
    },
    app: {
      background: '#f9f4fe'
    },
    '@global':{
      body:{
        backgroundColor:"#f9f4fe"
      },
  },
  };
});

const theme = createTheme();

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TodoAppBar />

        <TodoModal isOpen={open} onClose={handleClose} />
        <Box my={2}>
          <Buttons />
        </Box>

        <List />
        <Button onClick={handleOpen} className={classes.createTaskButton}>
          + Create Task
        </Button>

      </Container>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

import { useState } from 'react';
import { Theme } from '@mui/material/styles';
import { Box, Button, Container, createTheme, CssBaseline, Fab, ThemeProvider } from '@mui/material';
import { TaskCreationForm } from './components/TaskCreationForm';
import { List } from './components/List';
import { Buttons } from './components/Buttons';
import { TodoAppBar } from './components/TodoAppBar';
import { TodoModal } from './components/TodoModal';
import { makeStyles } from '@mui/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#AF7EEB"
    },
    background: {
      default: "#E4E9FF"
    }
  },
});

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TodoAppBar />

        <TodoModal isOpen={open} onClose={handleClose} />
        
        <Box my={2}>
          <Buttons />
        </Box>

        <List />

        <Fab 
          variant="extended"
          color="primary"
          onClick={handleOpen}
        >
          Create Task
        </Fab>
      </Container>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

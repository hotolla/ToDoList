import { Theme } from '@mui/material/styles';
import { Box, Button, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { TaskCreationForm } from './components/TaskCreationForm';
import { List } from './components/List';
import { Buttons } from './components/Buttons';
import { TodoAppBar } from './components/TodoAppBar';
import { useState } from 'react';
import { TodoModal } from './components/TodoModal';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme();

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TodoAppBar />
        <Button onClick={handleOpen}>
          + Create Task
        </Button>
        <TodoModal isOpen={open} onClose={handleClose} task={task}/>
        <Box my={2}>
          <Buttons />
        </Box>

        <List />
      </Container>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

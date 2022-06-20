import { Box, Container, CssBaseline } from '@mui/material';
import { TaskCreationForm } from './components/TaskCreationForm';
import { List } from './components/List';
import { Buttons } from './components/Buttons';

function App() {
  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TaskCreationForm />

        <Box my={2}>
          <Buttons />
        </Box>

        <List />
      </Container>

      <CssBaseline />
    </>
  );
}

export default App;

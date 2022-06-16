import { Container, CssBaseline } from '@mui/material';
import { TaskCreationForm } from './TaskCreationForm';
import { List } from './List';
import { Buttons } from './Buttons';

function App() {
  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TaskCreationForm />
        <List />
        <Buttons />
      </Container>
      <CssBaseline />
    </>
  );
}

export default App;

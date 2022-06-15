import { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import { TaskCreationForm } from './TaskCreationForm';
import { List } from './components/List/List';
import { ITask } from './types/task.types';

function App() {
  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TaskCreationForm />
        <List />
      </Container>
      <CssBaseline />
    </>
  );
}

export default App;

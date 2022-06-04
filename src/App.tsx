import { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import { TaskCreationForm } from './TaskCreationForm';
import { List } from './List';
import { ITask } from "./types/task.types";

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([]);

  const createTask = (task: ITask) => {
    setTasks([ ...tasks, task ]);
  };

  const deleteTask = (task: ITask) => {
    setTasks((tasks) => tasks.filter(({ id }) => task.id !== id));
  };

  const changeStatus = ({id}: ITask) => {
    setTasks((tasks) => tasks.map((item) => {
    //  item.id === id ? (...item, isDone: !item.isDone) : item));
    if (item.id === id) {
      return {
        ...item,
        isDone: !item.isDone
      }; 
    } else {
      return item;
    }
  }))
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TaskCreationForm onCreate={createTask} />
        <List tasks={tasks} onEdit={changeStatus} onDelete={deleteTask}/>
        
      </Container>

      <CssBaseline />
    </>
  );
}

export default App;

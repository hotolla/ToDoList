import { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import { TaskCreationForm } from './TaskCreationForm';
import { List } from './components/List/List';
import { ITask } from "./types/task.types";

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([]);

  const createTask = (task: ITask) => {
    setTasks([ ...tasks, task ]);
  };

  const deleteTask = (task: ITask) => {
    setTasks((tasks) => tasks.filter(({ id }) => task.id !== id));
  };

  // const changeStatus = ({id}: ITask) => {
  //   setTasks((tasks) => tasks.map((task) => {
  //     return task.id === id ? { ...task, isDone: !task.isDone } : task;
  //   }));
  // };

  const editTask = (changedTask: ITask) => {
    setTasks((tasks) => tasks.map((task) => task.id === changedTask.id ? changedTask : task));
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TaskCreationForm onCreate={createTask} />
        <List tasks={tasks} onEdit={editTask} onDelete={deleteTask}/>
      </Container>

      <CssBaseline />
    </>
  );
}

export default App;
 
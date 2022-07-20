import { Routes, Route } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@mui/styles';
import { TodoAppBar } from './components/TodoAppBar';
import { Main } from './components/Main';
import { TodoDetails } from './components/TodoDetails';

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
    width: '30%',
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <TodoAppBar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

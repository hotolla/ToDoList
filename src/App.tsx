import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Box} from '@mui/material';
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
    <Box className={classes.container}>
      <Box className={classes.main}>
        <TodoAppBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;

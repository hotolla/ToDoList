import { Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { TodoAppBar } from './components/TodoAppBar';
import { Main } from './components/Main';
import { useEffect } from 'react';

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
  
  useEffect(() => {
    return () => {
      console.log("error");
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <TodoAppBar />
        <Main />

        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;

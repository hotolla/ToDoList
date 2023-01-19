import { useCallback, useContext } from 'react';
import { debounce } from 'lodash';
import { makeStyles } from '@mui/styles';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TasksContext } from './TasksProvider';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  }
}));

export const Search = () => {
  const { fetchTasks } = useContext(TasksContext);
  const classes = useStyles();

  const handleTaskSearch = useCallback(debounce(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    fetchTasks({
      name_like: value
    });
  }, 500), []);

  return (
    <div className={classes.container}>
      <OutlinedInput color="primary"
        size="small"
        placeholder="Search task..."
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon color="secondary"/>
          </InputAdornment>
        }
        onChange={handleTaskSearch}
      />
    </div>
  );
};

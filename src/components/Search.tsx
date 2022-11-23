import { useCallback, useContext } from "react";
import { makeStyles } from '@mui/styles';
import { IconButton, InputAdornment, InputBase, OutlinedInput, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { TasksContext } from './TasksProvider';
import { debounce } from "lodash";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
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
        sx={{ p: 1 }}
        onChange={handleTaskSearch}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <SearchIcon color="secondary"/>
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

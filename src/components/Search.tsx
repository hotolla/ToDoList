import { useCallback, useContext } from "react";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { TasksContext } from './TasksProvider';
import { debounce } from "lodash";

export const Search = () => {
  const { fetchTasks } = useContext(TasksContext);
  
  const handleTaskSearch = useCallback(debounce(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    fetchTasks({
      name_like: value
    });
  }, 500), []);

  return (
    <>
      <InputBase 
        placeholder="Search task..."
        sx={{ p: 1 }}
        onChange={handleTaskSearch}
      />

      <IconButton>
        <SearchIcon color="secondary"/>
      </IconButton>
    </>
  );
};

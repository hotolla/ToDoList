import { useContext } from "react";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { TasksContext } from './TasksProvider';

export const Search = () => {
  const { fetchTasks } = useContext(TasksContext);
  
  const handleTaskSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    fetchTasks({
      name_like: value
    });
  };

  return (
    <>
      <InputBase 
        placeholder="Search task"
        sx={{ p: '10px' }}
        onChange={handleTaskSearch}
      />
      <IconButton>
        <SearchIcon color="secondary"/>
      </IconButton>
    </>
  );
};

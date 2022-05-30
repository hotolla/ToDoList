import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { ITask } from "./types/task.types";

const height = 42;
let count = 1;

interface IProps {
  onCreate: (task: ITask) => void
}

export const TaskCreationForm = ({ onCreate }: IProps) => {
  const [inputValue, setValue] = useState('')

  const handleSubmit = () => {
    if (inputValue) {
      onCreate({ id: count++, name: inputValue, isDone: false })
    }
    setValue('')
    
  };

  const handleEnter = (key: string) => {
    if (key === 'Enter' && inputValue) {
      onCreate({ id: count++, name: inputValue, isDone: false })
      setValue('')
    }
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs>
        <TextField
          fullWidth
          id="id"
          placeholder="Enter task..."
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => handleEnter(e.key)}
          variant="outlined"
          InputProps={{
            sx: {
              height
            }
          }}
        />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          sx={{ height }}
          onClick={handleSubmit}
          disabled={!inputValue}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};


import { FormEvent, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTodo } from '../store/tasks.thunk';
import { useAppDispatch } from '../store';
import { ITask } from '../types/task.types';

const height = 42;

interface Props {
  onSubmit: (task: ITask) => void;
}

export const TaskCreationForm = ({ onSubmit }: Props) => {
  const dispatch = useAppDispatch();
  const [inputValue, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const task = { id: Date.now(), name: inputValue, isDone: false };

    dispatch(createTodo(task));
    setValue('');
    onSubmit(task);
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item xs>
        <TextField
          fullWidth
          placeholder="Enter name task..."
          value={inputValue}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          variant="outlined"
          InputProps={{
            sx: {
              height,
            },
          }}
        />
          <TextField
            margin="dense"
            multiline
            fullWidth
            maxRows={4}
            placeholder="Enter description..."
          />
      </Grid>

      <Grid item>
        <Button
          disabled={!inputValue}
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          sx={{ height }}
        >
          Add
        </Button>
        
      </Grid>
    </Grid>
  );
};

import { FormEvent, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTodo } from '../store/tasks.thunk';
import { useAppDispatch } from '../store';

const height = 42;

export const TaskCreationForm = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createTodo({ id: Date.now(), name: inputValue, isDone: false } ));
    setValue('');
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
        placeholder="Enter task..."
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

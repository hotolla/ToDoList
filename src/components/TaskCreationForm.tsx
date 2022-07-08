import { FormEvent, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTodo } from '../store/tasks.thunk';
import { useAppDispatch } from '../store';
import { makeStyles } from '@mui/styles';

const height = 42;

interface Props {
  closeModal: () => void;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  },
  disabledButton: {
    backgroundColor: theme.palette.action.disabledBackground
  },
}));

export const TaskCreationForm = ({ closeModal }: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [inputValue, setValue] = useState('');
  const [inputValueDecr, setValueDecr] = useState('');


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const task = { id: Date.now(), name: inputValue, description: inputValueDecr, isDone: false };
    dispatch(createTodo(task));
    closeModal();
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      direction="column"
      component="form"
      className={classes.container}
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
          value={inputValueDecr}
          maxRows={4}
          onChange={(e) => {
            setValueDecr(e.target.value);
          }}
          placeholder="Enter description..."
        />
      </Grid>

      <Grid item>
        <Button
          disabled={!inputValue}
          classes={{ disabled: classes.disabledButton }}
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

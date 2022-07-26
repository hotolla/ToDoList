import { FormEvent, useContext, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { TasksContext } from './TasksProvider';
import { TextField } from './TextField';

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
  const [inputValue, setValue] = useState('');
  const [inputValueDecr, setValueDecr] = useState('');
  const { addTask } = useContext(TasksContext);
  const form = useForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const task = { id: Date.now(), name: inputValue, description: inputValueDecr, isDone: false };

    addTask(task);
    closeModal();
    form.handleSubmit(e);
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
          name="name"
          placeholder="Enter name task..."
          value={inputValue}
          variant="outlined"
        />

        <TextField
          fullWidth
          multiline
          name="decription"
          margin="dense"
          maxRows={4}
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

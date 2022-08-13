import { useContext } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { TasksContext } from './TasksProvider';
import { TextField } from './TextField';
import { preventDefault } from '../helpers';

interface Props {
  closeModal: () => void;
};

interface FormValues {
  name: string | null,
  description: string | null,
  isDone: boolean
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  }
}));

const defaultValues = {
  name: null,
  description: null,
  isDone: false
};

export const TaskCreationForm = ({ closeModal }: Props) => {
  const classes = useStyles();
  const { addTask } = useContext(TasksContext);
  const form = useForm({
    defaultValues
  });

  const handleSubmit = (values: FormValues) => {
    const task = { id: Date.now(), ...values };

    addTask(task);
    closeModal();
  };

  return (
    <FormProvider {...form}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        direction="column"
        component="form"
        className={classes.container}
        onSubmit={preventDefault(form.handleSubmit(handleSubmit))}
      >
        <Grid item xs>
          <TextField
            fullWidth
            name="name"
            placeholder="Enter name task..."
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
            disabled={!form.formState.isValid}
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

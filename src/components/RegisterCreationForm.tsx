import { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { preventDefault } from '../helpers';
import { Yup } from '../utils/validation';
import * as authApi from '../api/auth';
import { TextField } from './TextField';
import { useTranslation } from 'react-i18next';

interface Props {
  onSubmited: () => void;
};

 interface FormValues {
  name: string | null,
  email: string | null,
  password: string | null,
 }

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  }
}));

const defaultValues = {
  name: null,
  email: null,
  password: null,
};

const schema = Yup.object({
  name: Yup.string().nullable().required(),
  email: Yup.string().nullable().required(),
  password: Yup.string().nullable().required(),
});

export const RegisterCreationForm = ({ onSubmited }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  // const {  } = useContext(TasksContext);
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });

  const handleSubmit = (values: FormValues) => {
      authApi.register(values).then((user) => {
      });
    onSubmited();
    console.log(values)
  };

  return (
    <FormProvider {...form}>
      <Grid
        noValidate
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
            required
            margin="dense"
            name="name"
            label={t('register.nameLabel')}
            placeholder={t('register.namePlaceholder')}
            variant="outlined"
          />

          <TextField
            required
            margin="dense"
            multiline
            type="email"
            name="email"
            label={t('register.emailLabel')}
            placeholder={t('register.emailPlaceholder')}
            maxRows={4}
          />

          <TextField
            required
            margin="dense"
            type="password"
            name="password"
            label={t('register.passwordLabel')}
            placeholder={t('register.passwordPlaceholder')}
          />

          <TextField
            required
            type="password"
            margin="dense"
            name="passwordConfirmation"
            label={t('register.passwordRepeatLabel')}
            placeholder={t('register.passwordRepeatPlaceholder')}
          />
        </Grid>

        <Grid item>
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
          >
            {t('register.submitButton')}
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

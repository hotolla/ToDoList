import { useContext, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Button, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { preventDefault } from '../../../helpers';
import { Yup } from '../../../utils/validation';
import * as authApi from '../../../api/auth';
import { TextField } from '../../../components/TextField';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../components/AuthProvider';

interface FormValues {
  email: string | null,
  password: string | null,
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  }
}));

const defaultValues = {
  email: null,
  password: null,
};

const schema = Yup.object({
  email: Yup.string().nullable().required(),
  password: Yup.string().nullable().required(),
});

export const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [ isError, setIsError ] = useState(false);
  const { login } = useContext(AuthContext);

  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });

  const handleSubmit = (values: FormValues) => {
    authApi.login(values).then((user) => {
      login(user);
      navigate(location.state?.from?.pathname || '/', { replace: true });
    }).catch(() => {
      setIsError(true);
    });
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
            multiline
            type="email"
            name="email"
            label={t('login.emailLabel')}
            placeholder={t('login.emailPlaceholder')}
            maxRows={4}
          />

          <TextField
            required
            margin="dense"
            type="password"
            name="password"
            label={t('login.passwordLabel')}
            placeholder={t('login.passwordPlaceholder')}
          />
        </Grid>

        {isError &&
          <>
            <Typography align="center" color="error">
              {t('login.errorMessage')}
            </Typography>
          </>
        }

        <Grid item>
          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            {t('login.submitButton')}
          </Button>
        </Grid>

        <Grid container spacing={2} className={classes.container}>
          <Grid item>
            <Link to="/auth/registration">
              {t('auth.login.forgotPassword')}
            </Link>
          </Grid>

          <Grid item>
            <Link to="/auth/registration">
              {t('auth.login.registerLink')}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

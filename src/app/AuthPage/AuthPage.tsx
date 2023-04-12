import { Box } from '@mui/material';
import { redirect } from 'react-router';
// import { renderRoutes, Route } from '../components/router';
import { routes } from './routes';
import { Route } from '../../components/router/Route';
import { renderRoutes } from '../../components/router/renderRouters';

export const AuthPage = () => {
  return (
    <Box
      width="100%"
      height="100%"
      maxWidth={420}
      mt={8}
      mb={2}
      mx="auto"
      p={2}
    >
      <Route exact path="/auth">
        ${redirect("/auth/login")}
      </Route>

      {renderRoutes(routes)}
    </Box>
  );
};

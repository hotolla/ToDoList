import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { useTranslation } from 'react-i18next';
import { ThemeSwitch } from './ThemeSwitch';
import { LangSwitcher } from './LangSwitcher';
import { useState } from 'react';

export interface Props {
  onThemetoggle(): void
}

export const Header = (props: Props) => {
  const { t } = useTranslation();
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs>
            <Typography variant="h5" align="center">Website todo</Typography>
          </Grid>

          <Grid item>
            <ThemeSwitch onChange={props.onThemetoggle}/>
          </Grid> 

          <Grid item>
            <LangSwitcher />         
          </Grid>

          <Grid item>
            <Button
              color='inherit'
              startIcon={<LoginIcon />}
              onClick={handleOpen}
            >
              {t('menu.exit')}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

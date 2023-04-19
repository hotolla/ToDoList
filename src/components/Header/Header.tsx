import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { useTranslation } from 'react-i18next';
import { ThemeSwitch } from './ThemeSwitch';
import { LangSwitcher } from './LangSwitcher';
import { useEffect, useState } from 'react';
import { RegisteringUserModal } from '../RegisteringUserModal';
import { TasksProvider } from '../TasksProvider';
import { SideBar } from './SideBar';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export interface Props {
  isDarkTheme: boolean,
  onThemeToggle(): void,
  openMenu: boolean,
  onMenuToggle: (openMenu: unknown) => void
}
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: 90
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  }
}));

export const Header = ({ isDarkTheme, openMenu, onMenuToggle, onThemeToggle }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [ openLogout, setOpenLogout ] = useState(false);
  // const [ openMenu, setOpenMenu ] = useState(false);
  const handleCloseLogout = () => setOpenLogout(false);
  // @ts-ignore
  const toggleMenu = () => onMenuToggle((openMenu) => !openMenu);
  const handleCloseMenu= () => onMenuToggle(false);

  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openMenu
        })}
      >
        <Toolbar>
          <TasksProvider>
            <RegisteringUserModal isOpen={openLogout} onClose={handleCloseLogout}/>
            {openMenu ? <SideBar isOpen={openMenu} onClose={handleCloseMenu} /> : null}
            <Grid container alignItems="center">
              <Grid item>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={toggleMenu}
                  className={clsx(classes.menuButton, {
                    [classes.hide]: openMenu
                  })}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>

              <Grid item xs>
                <Typography variant="h5" align="center">Website todo</Typography>
              </Grid>

              <Grid item>
                <ThemeSwitch checked={isDarkTheme} onChange={onThemeToggle} />
              </Grid> 

              <Grid item>
                <LangSwitcher />         
              </Grid>

              <Grid item>
                <Button
                  color="inherit"
                  startIcon={<LoginIcon />}
                  component={Link}
                  to="/login"
                >
                  {t('auth.login.header')}
                </Button>
              </Grid>
            </Grid>
          </TasksProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
};

import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeSwitch } from './ThemeSwitch';
import { LangSwitcher } from './LangSwitcher';

export interface Props {
  onThemetoggle(): void
}

export const Header = (props: Props) => {
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
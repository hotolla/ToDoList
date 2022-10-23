import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    fontSize: 36,
    bold: 700
  }
});

export const TodoAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar >
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        {/* align="center"  почему не работает? и стили*/}
        {/* className={classes.title} */}
        <Typography variant='h5' align="center">Website todo</Typography>
      </Toolbar>
    </AppBar>
  )
}

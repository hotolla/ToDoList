import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    menuButton: {
    },
    title: {
      flexGrow: 5,

    },
  }));

export const TodoAppBar = () => {
  const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit">
                <MenuIcon />
                </IconButton>
                <Typography>Website todo</Typography>
            </Toolbar>
        </AppBar>
    )
}
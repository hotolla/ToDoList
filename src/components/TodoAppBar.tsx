import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const TodoAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar >
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography align="center">Website todo</Typography>
      </Toolbar>
    </AppBar>
  )
}
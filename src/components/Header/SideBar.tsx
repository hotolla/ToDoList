import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { List, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ListItem , ListItemIcon, ListItemText, Theme, Drawer, Divider} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import ListIcon from '@mui/icons-material/List';
import LoopIcon from '@mui/icons-material/Loop';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { TasksContext } from '../TasksProvider';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideBar = ({ isOpen, onClose }: Props) => {
  const { tasks, fetchTasks } = useContext(TasksContext);
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const handleToggleFilter = (isDone: boolean | null) => () => {
    fetchTasks({
      isDone
    });
    console.log(tasks);
  };

  return (
    <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: isOpen,
      [classes.drawerClose]: !isOpen,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      }),
    }}
  >
      <div className={classes.toolbar}>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Main', 'Task', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleToggleFilter(null)}>
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary={t('statuses.all')} />
        </ListItem>

        <ListItem button onClick={handleToggleFilter(true)}>
          <ListItemIcon><TaskAltIcon /></ListItemIcon>
          <ListItemText primary={t('statuses.done')} />
        </ListItem>

        <ListItem button onClick={handleToggleFilter(false)}>
          <ListItemIcon><LoopIcon /></ListItemIcon>
          <ListItemText primary={t('statuses.progress')} />
        </ListItem>
      </List>
    </Drawer>
  );
}

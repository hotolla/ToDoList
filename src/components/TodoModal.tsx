import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TaskCreationForm } from './TaskCreationForm';
import { createTodo } from '../store/tasks.thunk';
import { useAppDispatch } from '../store';
import { ITask } from '../types/task.types';

const useStyles = makeStyles((theme) => {
  return {
    createTaskButton: {
      borderRadius: '50px',
    },
    modalWindow: {
      border: '2px solid black',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: 400,
      padding: theme.spacing(3),
      color: '#3333ff',
    },
  };
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const TodoModal = ({ isOpen, onClose }: Props) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Create new Task</DialogTitle>
      <TaskCreationForm closeModal={onClose} />
    </Dialog>
  );
};

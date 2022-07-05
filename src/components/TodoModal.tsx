import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TaskCreationForm } from './TaskCreationForm';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: theme.palette.primary.main,
  }
}));

export const TodoModal = ({ isOpen, onClose }: Props) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose} className={classes.formContainer}>

      <DialogTitle className={classes.title}>
        Create new Task
      <IconButton edge="end"
        sx={{
          position: 'absolute',
          right: 26,
          top: 8,
          color: (theme) => theme.palette.primary.main,
        }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      </DialogTitle>
      
      <TaskCreationForm closeModal={onClose} />
    </Dialog>
  );
};
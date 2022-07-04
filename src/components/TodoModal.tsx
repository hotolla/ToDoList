import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { TaskCreationForm } from "./TaskCreationForm";
import { createTodo } from '../store/tasks.thunk';
import { useAppDispatch } from "../store";
import { ITask } from "../types/task.types";


const useStyles = makeStyles((theme) => {
return ({
  createTaskButton: {
    borderRadius: "50px"
  },
  modalWindow: {
    border: "2px solid black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    padding: theme.spacing(3),
    color: "#3333ff"
  },
})});

type Props = {
  isOpen: boolean;
  onClose: () => void;
  task: ITask;
}

export const TodoModal = ({ isOpen, onClose, task }: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <div >
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogTitle>
          Create new Task
        </DialogTitle>

        <TaskCreationForm onSubmit={onClose}/>

        <DialogActions>
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => dispatch(createTodo(task))}>
            Save
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  )
}

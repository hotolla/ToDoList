import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import { TaskCreationForm } from "./TaskCreationForm";
import { ITask } from "../types/task.types";

const useStyles = makeStyles(() => ({
  createTaskButton: {
    borderRadius: "50px"
  },
  modalWindow: {
    border: "2px solid black",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400",
    padding: "20",
    color: "#3333ff"
  },
}));

type Props = {
  onSubmit: (task: ITask) => void;
}

export const TodoModal = (onSubmit: Props) => {
  const classes = useStyles();
  //   const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div >
      <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <Box className={classes.modalWindow}>
        <h2 >Create new task</h2>
        <TaskCreationForm onModalClose= {onSubmit.handleClose} />
        </Box>
      </Modal>
    </div>
  )
}
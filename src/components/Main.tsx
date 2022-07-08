import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { List } from './List';
import { Buttons } from './Buttons';
import { TodoModal } from './TodoModal';

const useStyles = makeStyles((theme) => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: '-5% !important',
    width: '50%',
    alignSelf: 'center',
    borderRadius: '20px !important',
  },
}));

export const Main = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
	<>
		<TodoModal isOpen={open} onClose={handleClose}/>
			<Box my={2}>
				<Buttons />
			</Box>

			<Box className={classes.listContainer}>
				<List />
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					onClick={handleOpen}
				>
					Create Task
				</Button>
			</Box>
	</>
	
) 
}
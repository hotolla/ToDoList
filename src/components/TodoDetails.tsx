import { ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';

export const TodoDetails = () => {
  const { id } = useParams();
  
  return <div>{id}</div>
};

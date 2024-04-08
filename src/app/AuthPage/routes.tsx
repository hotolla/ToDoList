import { redirect } from 'react-router';
import { LoginPage } from './LoginPage';
import { TodoDetails }from '../../components/TodoDetails';
import { TasksPage } from '../TasksPage';

export const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      redirect ('/todo')
    )
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    isPrivate: true,
    path: '/todo',
    component: TasksPage
  },
  {
    isPrivate: true,
    path: '/todo/:id',
    component: TodoDetails
  }
]; 

import { render, screen } from '@testing-library/react';
import { ITask } from '../../../types/task.types';
import { List } from '../List';

describe('List component', () => {
  const tasks: ITask[] = [{id: 1, isDone: false, name: 'Some name'}]
  it('List renders', () => {
    render(<List tasks={tasks} onDelete={() => {}} onEdit={() => {}} />);
  })
  expect(screen.getByRole('button')).toBeDefined();
});

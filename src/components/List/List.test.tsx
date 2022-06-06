import { render, screen } from '@testing-library/react';
import { List } from './List';

describe('List component', () => {
  it('List renders', () => {
    render(<List />);
  })
  expect(screen.getByText({ tasks })).toBeInTheDocument();
});

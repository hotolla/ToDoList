import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import { TodoModal } from '../TodoModal';


describe('TodoModal.tsx', () => {
  const onClose = jest.fn();
  const props = {
    isOpen: true,
    onClose: onClose
  };

  beforeEach(() => {
    render(<TodoModal {...props} />)
  });

  it('Should render Create new Task', () => {
    // const content = await screen.findByText('Create new Task');
    const content = screen.getByText('Create new Task');
    expect(content).toBeInTheDocument();
  });

  it('Should render onClose button', () => {
    const button = screen.getAllByRole('button');
    expect(button).toBeDefined();
    // userEvent.click(button);
    expect(onClose).toBeCalled;
    // fireEvent.click(onCloseButton);
  });
});

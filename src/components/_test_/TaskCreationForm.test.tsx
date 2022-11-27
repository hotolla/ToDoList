import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { TaskCreationForm } from '../TaskCreationForm';
import { theme } from '../../themes/lightTheme';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

describe('TaskCreationForm.tsx', () => {
  const props = {
    onSubmited: () => {}
  };

  it('Should render Create new Task', () => {
    render(
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <TaskCreationForm onSubmited={props.onSubmited} />
        </LocalizationProvider>
      </ThemeProvider>
    );
    
    const taskName = screen.getByLabelText(/Name/i);
    
    expect(taskName).toBeInTheDocument();
  });
});

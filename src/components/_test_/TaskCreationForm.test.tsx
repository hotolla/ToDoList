import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { TaskCreationForm } from '../TaskCreationForm';
import { lightTheme, darkTheme } from '../../themes/themes';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

describe('TaskCreationForm.tsx', () => {
  const props = {
    onSubmited: () => {}
  };
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

  it('Should render Create new Task', () => {
    render(
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <TaskCreationForm onSubmited={props.onSubmited} />
        </LocalizationProvider>
      </ThemeProvider>
    );
    
    const taskName = screen.getByLabelText(/Name/i);
    
    expect(taskName).toBeInTheDocument();
  });
});

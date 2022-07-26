import { Controller, useFormContext } from "react-hook-form";
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps & {
  name: string;
};

export const TextField = ({ name, ...props }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <MuiTextField
          value={value}
          onChange={onChange}

          {...props}
        />
    )}
  />
  )
} 

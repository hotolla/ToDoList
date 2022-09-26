import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { DateTimePicker  as MuiDateTimePicker} from '@mui/x-date-pickers';
import moment from "moment";

type Props = TextFieldProps & {
  name: string;
};

export const DateTimePicker = ({ name, ...props }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref, ...field }, fieldState: { error } }) => (
        // @ts-ignore
        <MuiDateTimePicker
          renderInput={(params) => <TextField {...params} />}
          error={!!error}
          helperText={error?.message}
          inputRef={ref}
          // @ts-ignore
          onChange={(value) =>
            onChange(value)
          }

          {...field}
          {...props}
        />
      )}
    />
  );
};

// добавлять в контекст методы по работе с сервером удалить из нпм устаовить новые версии для пикеров

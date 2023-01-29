import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

function CustomTextField({ name, ...props }) {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...props}
      {...field}
      value={meta.value}
      error={!!meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
}

export default CustomTextField;

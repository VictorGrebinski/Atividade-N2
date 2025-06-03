// src/components/InputField.jsx
import { TextField } from '@mui/material';

function InputField({ label, value, onChange }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;

// src/components/Title.jsx
import { Typography } from '@mui/material';

function Title({ children }) {
  return (
    <Typography variant="h5" align="center" gutterBottom>
      {children}
    </Typography>
  );
}

export default Title;
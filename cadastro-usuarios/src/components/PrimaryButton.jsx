// src/components/PrimaryButton.jsx
import { Button } from '@mui/material';

function PrimaryButton({ children, onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 2 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;

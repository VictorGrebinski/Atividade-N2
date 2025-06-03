// src/components/UserCard.jsx
import { Card, CardContent, Typography } from '@mui/material';

function UserCard({ name, email }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">{email}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;

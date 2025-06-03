import { Container, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import Title from './Title';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ padding: 4, width: 400 }}>
        <Title>Usuários Cadastrados</Title>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} email={user.email} />
        ))}
      </Paper>
    </Container>
  );
}

export default UserList;

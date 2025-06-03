import { Paper, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import Title from './Title';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && email) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ name, email });
      localStorage.setItem('users', JSON.stringify(users));
      setName('');
      setEmail('');
    }
  };

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
        <Title>Cadastro de Usuário</Title>
        <InputField label="Nome *" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField label="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
        <PrimaryButton onClick={handleSubmit}>Cadastrar</PrimaryButton>
        <PrimaryButton onClick={() => navigate('/usuarios')}>Ver Cadastros</PrimaryButton>
      </Paper>
    </Container>
  );
}

export default UserForm;

// Aqui a gente pega algumas coisas da caixa '@mui/material' para deixar a tela bonita:
// 'Paper' é um papel onde a gente coloca as coisas, 'Container' ajuda a organizar tudo no meio da tela
import { Paper, Container } from '@mui/material';

// 'useNavigate' é uma ferramenta para mudar de página
import { useNavigate } from 'react-router-dom';

// 'useState' ajuda a guardar informações que podem mudar, como o nome e o email que a pessoa digita
import { useState } from 'react';

// Essas são peças que a gente fez antes: um lugar para digitar (InputField), um botão azul (PrimaryButton) e um título (Title)
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import Title from './Title';

// Essa função cria um formulário para a pessoa colocar o nome e o email
function UserForm() {
  // Aqui a gente guarda o nome e o email que a pessoa vai digitar, começando vazio ('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Essa é a ferramenta para mudar de página
  const navigate = useNavigate();

  // Essa função acontece quando a pessoa clica para cadastrar
  const handleSubmit = () => {
    // Se o nome e o email não estiverem vazios, a gente salva eles
    if (name && email) {
      // Pega a lista de usuários que está guardada no computador (se não tiver, começa uma lista vazia)
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Adiciona o novo usuário na lista
      users.push({ name, email });

      // Salva a lista nova de usuários no computador
      localStorage.setItem('users', JSON.stringify(users));

      // Depois limpa o nome e o email para a pessoa poder digitar de novo
      setName('');
      setEmail('');
    }
  };

  // Aqui é o que aparece na tela para a pessoa ver e usar
  return (
    // Container deixa tudo no centro da tela, tanto na horizontal quanto na vertical, e com altura toda da tela (100vh)
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Paper é o papel branco onde a gente coloca o formulário, com um pouco de espaço em volta e largura de 400 */}
      <Paper sx={{ padding: 4, width: 400 }}>
        {/* Mostra um título bonito */}
        <Title>Cadastro de Usuário</Title>

        {/* Caixa para digitar o nome, mostrando o que foi digitado e atualizando quando a pessoa mexe */}
        <InputField label="Nome *" value={name} onChange={(e) => setName(e.target.value)} />

        {/* Caixa para digitar o email, igual a do nome */}
        <InputField label="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />

        {/* Botão azul para cadastrar, que chama a função para salvar os dados quando clicado */}
        <PrimaryButton onClick={handleSubmit}>Cadastrar</PrimaryButton>

        {/* Botão azul para mudar para a página que mostra os usuários cadastrados */}
        <PrimaryButton onClick={() => navigate('/usuarios')}>Ver Cadastros</PrimaryButton>
      </Paper>
    </Container>
  );
}

// Aqui a gente diz que esse formulário pode ser usado em outras partes do programa
export default UserForm;

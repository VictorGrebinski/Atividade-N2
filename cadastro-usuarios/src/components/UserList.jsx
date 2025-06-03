// A gente pega umas coisas prontas da caixa '@mui/material' para deixar a tela bonita:
// 'Container' ajuda a colocar tudo no lugar, e 'Paper' é um papel para colocar as coisas em cima
import { Container, Paper } from '@mui/material';

// Também usamos ferramentas do React para guardar informações que mudam e para fazer coisas quando o programa começa
import { useEffect, useState } from 'react';

// A gente usa um cartão que mostra o nome e email da pessoa, que a gente fez antes
import UserCard from './UserCard';

// Também usamos um título bonito que a gente criou antes
import Title from './Title';

// Essa função cria uma lista que mostra todos os usuários que foram cadastrados
function UserList() {
  // Aqui a gente guarda os usuários em uma caixinha que pode mudar (começa vazia)
  const [users, setUsers] = useState([]);

  // useEffect é uma coisa que faz um passo só quando a tela aparece, para pegar os usuários que estavam guardados no computador
  useEffect(() => {
    // Pega a lista de usuários do computador, se não tiver, começa uma lista vazia
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Coloca essa lista na nossa caixinha de usuários
    setUsers(savedUsers);
  }, []); // o [] aqui significa que isso só acontece uma vez, quando a tela aparece

  // Aqui é o que aparece na tela para a pessoa ver
  return (
    // Container deixa tudo no centro da tela, na vertical e na horizontal, com a altura da tela toda
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Paper é o papel branco onde a gente coloca a lista, com espaço e largura boa */}
      <Paper sx={{ padding: 4, width: 400 }}>
        {/* Título que diz "Usuários Cadastrados" */}
        <Title>Usuários Cadastrados</Title>

        {/* Para cada usuário na lista, a gente cria um cartão mostrando o nome e o email */}
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} email={user.email} />
        ))}
      </Paper>
    </Container>
  );
}

// Dizemos que essa lista pode ser usada em outras partes do programa
export default UserList;

// A gente pega uma lista de usuários que a gente fez antes, chamada UserList
import UserList from '../components/UserList';

// Essa função cria uma página que mostra a lista de usuários cadastrados
function ListaUsuariosPage() {
  // Aqui a gente só coloca a lista na página para a pessoa ver os usuários
  return <UserList />;
}

// A gente deixa essa página pronta para usar em outras partes do programa
export default ListaUsuariosPage;

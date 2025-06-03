// A gente pega um formulário que a gente criou antes, chamado UserForm
import UserForm from '../components/UserForm';

// Essa função cria uma página que só mostra o formulário para a pessoa se cadastrar
function CadastroPage() {
  // Aqui a gente só coloca o formulário na página, para a pessoa ver e usar
  return <UserForm />;
}

// A gente deixa essa página pronta para usar em outras partes do programa
export default CadastroPage;

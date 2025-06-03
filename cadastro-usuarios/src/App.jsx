// A gente pega coisas que ajudam a trocar de página, chamadas Routes e Route, da caixa 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

// A gente pega dois pedaços do nosso programa: o formulário para cadastrar (UserForm) e a lista de usuários (UserList)
import UserForm from './components/UserForm'
import UserList from './components/UserList'

// Essa função cria o programa inteiro, dizendo o que aparece em cada página
function App() {
  return (
    // Aqui a gente coloca as rotas, que são os caminhos para as páginas
    <Routes>
      {/* Quando o caminho for "/" (a página inicial), mostra o formulário para cadastrar */}
      <Route path="/" element={<UserForm />} />

      {/* Quando o caminho for "/usuarios", mostra a lista de usuários cadastrados */}
      <Route path="/usuarios" element={<UserList />} />
    </Routes>
  )
}

// A gente deixa esse programa pronto para ser usado
export default App

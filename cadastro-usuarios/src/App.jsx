import { Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/usuarios" element={<UserList />} />
    </Routes>
  )
}

export default App

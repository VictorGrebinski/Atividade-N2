// A gente pega umas coisas do React que ajudam a criar o programa e deixar ele certinho:
// 'StrictMode' ajuda a encontrar erros, 'createRoot' cria o lugar onde o programa vai aparecer
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 'BrowserRouter' ajuda a mudar de página, como um mapa para o navegador
import { BrowserRouter } from 'react-router-dom';

// A gente pega um arquivo de estilos, que deixa tudo colorido e arrumado
import './index.css';

// A gente pega o programa principal que a gente criou, chamado App
import App from './App.jsx';

// Aqui a gente fala para o computador:
// "Pega o lugar chamado 'root' na página (onde o programa vai aparecer),
// e desenha o nosso programa lá dentro."
createRoot(document.getElementById('root')).render(
  // O StrictMode ajuda a achar problemas para o programa ficar melhor
  <StrictMode>
    {/* O BrowserRouter ajuda a navegar entre as páginas do programa */}
    <BrowserRouter>
      {/* Aqui a gente coloca o programa principal para mostrar na tela */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

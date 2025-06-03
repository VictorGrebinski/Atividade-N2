// A gente pega uma coisa pronta chamada 'Typography' da caixa '@mui/material'
import { Typography } from '@mui/material';

// Essa função cria um título, que é um texto especial grande e bonitinho
function Title({ children }) {
  return (
    // Aqui a gente usa o 'Typography' para mostrar o texto do jeito que a gente quer
    <Typography
      variant="h5"       // Faz o texto ficar grande, como um título (tamanho 5)
      align="center"     // Centraliza o texto no meio da página
      gutterBottom       // Dá um espacinho embaixo do texto, para não ficar grudado
    >
      {children}         // Mostra o texto que a gente colocou dentro do título
    </Typography>
  );
}

// A gente deixa esse título disponível para usar em outros lugares do programa
export default Title;

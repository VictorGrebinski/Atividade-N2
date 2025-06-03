// Aqui a gente pega um botão pronto de uma caixa chamada '@mui/material'
import { Button } from '@mui/material';

// Essa função cria um botão especial que a gente chama de PrimaryButton
// Ela pode mostrar um texto dentro (children) e fazer algo quando clicamos (onClick)
function PrimaryButton({ children, onClick }) {
  return (
    // Aqui a gente usa o botão da caixa '@mui/material'
    <Button
      variant="contained"   // Faz o botão ficar com cor cheia, não só o contorno
      color="primary"       // A cor do botão vai ser a principal (normalmente azul)
      fullWidth             // O botão vai ficar largo, ocupando toda a largura do lugar
      sx={{ mt: 2 }}        // Dá um espacinho em cima do botão (mt = margin-top)
      onClick={onClick}     // Quando clicamos, o botão faz a ação que a gente passou
    >
      {children}            // Mostra o que a gente colocou dentro do botão (como um texto)
    </Button>
  );
}

// Aqui a gente diz que esse botão pode ser usado em outras partes do programa
export default PrimaryButton;

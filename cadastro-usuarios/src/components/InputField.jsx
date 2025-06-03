// Importa o componente TextField da biblioteca Material-UI
// Ele é um campo de texto estilizado que já vem pronto para usar
import { TextField } from '@mui/material';

// Aqui estamos criando um componente chamado InputField
// Ele recebe três coisas (chamadas de "props"):
// - label: o nome que aparece no campo (tipo "Nome")
// - value: o valor que está escrito dentro do campo
// - onChange: o que acontece quando alguém digita algo no campo
function InputField({ label, value, onChange }) {
  return (
    <TextField
      label={label}         // Mostra o nome do campo
      variant="outlined"    // Usa o estilo com borda em volta do campo
      fullWidth             // Faz o campo ocupar toda a largura possível
      margin="normal"       // Adiciona um espacinho em cima e embaixo
      value={value}         // Mostra o valor atual que está digitado
      onChange={onChange}   // Toda vez que alguém digita algo, essa função é chamada
    />
  );
}

// Exporta esse componente para que ele possa ser usado em outras partes do projeto
export default InputField;

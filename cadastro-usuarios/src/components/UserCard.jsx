// A gente pega umas coisas prontas da caixa '@mui/material' para fazer um cartão bonito:
// 'Card' é o cartão, 'CardContent' é o conteúdo dentro do cartão, e 'Typography' é para escrever texto
import { Card, CardContent, Typography } from '@mui/material';

// Essa função cria um cartão de usuário que mostra o nome e o email da pessoa
function UserCard({ name, email }) {
  return (
    // Aqui a gente cria o cartão com um espacinho embaixo (mb = margin-bottom)
    <Card sx={{ mb: 2 }}>
      {/* Dentro do cartão, a gente coloca o conteúdo, que vai ser o nome e o email */}
      <CardContent>
        {/* Mostra o nome da pessoa grande, como um título */}
        <Typography variant="h6">{name}</Typography>
        {/* Mostra o email da pessoa com uma cor mais clarinha, para não brilhar muito */}
        <Typography color="text.secondary">{email}</Typography>
      </CardContent>
    </Card>
  );
}

// A gente deixa esse cartão disponível para usar em outros lugares do programa
export default UserCard;

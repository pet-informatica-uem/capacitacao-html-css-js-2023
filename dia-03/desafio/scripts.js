// Selecionar os elementos
// btn-generate

// password-container

// password

// btn-copy

// Função para gerar senha aleatória
function generateRandonPassword() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 10; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Eventos
// Ao clicar no botão gerar senha

// Ao clicar no botão copiar senha

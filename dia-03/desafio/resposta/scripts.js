const btnGenerate = document.getElementById('btn-generate');
const passwordContainer = document.getElementById('password-container');
const password = document.getElementById('password');
const btnCopy = document.getElementById('btn-copy');

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

btnGenerate.addEventListener('click', function () {
  const randomPassword = generateRandonPassword();
  password.innerHTML = randomPassword;
  passwordContainer.classList.add('active');
});

btnCopy.addEventListener('click', function () {
  const copyText = document.getElementById('password');
  navigator.clipboard.writeText(copyText.innerText);
  alert('Senha copiada');
});

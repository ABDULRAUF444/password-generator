const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  let characters = '';
  if (uppercaseEl.checked) characters += upper;
  if (lowercaseEl.checked) characters += lower;
  if (numbersEl.checked) characters += number;
  if (symbolsEl.checked) characters += symbol;

  const length = parseInt(lengthEl.value);
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  passwordEl.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  passwordEl.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
});

const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
const h1 = document.createElement('h1');
const mainSection = document.createElement('section');
const mainContainer = document.createElement('div');
const input = document.createElement('input');
const keyboardWrap = document.createElement('div');
const keyboardKeys = document.createElement('div');

body.className = 'body';
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
header.appendChild(h1);
main.appendChild(mainSection);
mainSection.appendChild(mainContainer);
mainContainer.appendChild(input);
mainContainer.appendChild(keyboardWrap);
keyboardWrap.appendChild(keyboardKeys);

input.type = 'text';
input.className = 'input';
keyboardWrap.className = 'wrap';
mainContainer.className = 'container';
h1.className = 'title';
keyboardKeys.className = 'keyboard_keys';

h1.innerText = 'RSS Virtual Keyboard by Meru';

const keyboardRows = [
  ['Del', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Enter'],
  ['Caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\'],
  ['Shift', '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
  ['fn', 'control', 'option', 'command', '', 'command', 'option', 'Left', 'Up', 'Down', 'Right'],
];

for (let i = 0; i < keyboardRows.length; i += 1) {
  const row = document.createElement('div');
  row.className = 'row';

  for (let j = 0; j < keyboardRows[i].length; j += 1) {
    const key = document.createElement('div');
    key.className = 'keys';
    key.textContent = keyboardRows[i][j];
    row.appendChild(key);
  }
  keyboardKeys.appendChild(row);
}

const keys = document.querySelectorAll('.keys');

for (let i = 0; i < keys.length; i += 1) {
  if (keys[i].textContent === 'Del') {
    keys[i].classList.add('delete-key');
  }
  if (keys[i].textContent === 'Backspace') {
    keys[i].classList.add('backspace');
  }
  if (keys[i].textContent === 'Tab') {
    keys[i].classList.add('tab');
  }
  if (keys[i].textContent === 'Enter') {
    keys[i].classList.add('enter');
  }
  if (keys[i].textContent === 'Caps lock') {
    keys[i].classList.add('caps-lock');
  }
  if (keys[i].textContent === '\\') {
    keys[i].classList.add('slash-key');
  }
  if (keys[i].textContent === 'Shift' && i === 41) {
    keys[i].classList.add('shift', 'shift-left');
  }
  if (keys[i].textContent === 'Shift' && i === 53) {
    keys[i].classList.add('shift', 'shift-right');
  }
  if (keys[i].textContent === 'fn') {
    keys[i].classList.add('fn');
  }
  if (keys[i].textContent === 'contral') {
    keys[i].classList.add('ctrl');
  }
  if (keys[i].textContent === 'option' && i === 56) {
    keys[i].classList.add('option', 'option-left');
  }
  if (keys[i].textContent === 'option' && i === 60) {
    keys[i].classList.add('option', 'option-right');
  }
  if (keys[i].textContent === 'command' && i === 57) {
    keys[i].classList.add('cmd', 'cmd-left');
  }
  if (keys[i].textContent === 'command' && i === 59) {
    keys[i].classList.add('cmd', 'cmd-right');
  }
  if (keys[i].textContent === '') {
    keys[i].classList.add('space-key');
  }
  if (keys[i].textContent === 'Left') {
    keys[i].classList.add('arrow-keys');
  }
  if (keys[i].textContent === 'Up') {
    keys[i].classList.add('arrow-keys', 'up');
  }
  if (keys[i].textContent === 'Down') {
    keys[i].classList.add('arrow-keys', 'down');
  }
  if (keys[i].textContent === 'Right') {
    keys[i].classList.add('arrow-keys');
  }
}

const rowWithArrow = document.querySelectorAll('.row')[4];
const arrowWrap = document.createElement('div');
rowWithArrow.appendChild(arrowWrap);
arrowWrap.className = 'arrow-keys-wrap';
arrowWrap.appendChild(keys[61]);
arrowWrap.appendChild(keys[62]);
arrowWrap.appendChild(keys[63]);
arrowWrap.appendChild(keys[64]);

// const del = document.querySelector('.delete-key');
// const backspace = document.querySelector('.backspace');
// const capsLock = document.querySelector('.caps-lock');
// const tab = document.querySelector('.tab');
// const enter = document.querySelector('.enter');
// const shiftLeft = document.querySelector('.shift-left');
// const shiftRight = document.querySelector('.shift-right');
// const spaceKey = document.querySelector('.space-key');
// const fn = document.querySelector('.fn');
// const inputText = document.querySelector('.input');

// let jet = [];
// document.onkeydown = function (e) {
//   console.log(e);
//   jet.push(e.keyCode);
//   console.log(jet);
// }

const keyboard = [46, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 16, 192, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 112, 17, 18, 91, 32, 93, 18, 37, 38, 40, 39];

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('id', keyboard[i]);
}

function keyDown(event) {
  const key = event.target;
  const { keyCode } = event;
  for (let i = 0; i < keys.length; i += 1) {
    if (+keys[i].getAttribute('id') === keyCode || keys[i] === key) {
      keys[i].classList.remove('remove');
      keys[i].classList.add('active');
    }
  }
}

function keyUp(event) {
  const key = event.target;
  const { keyCode } = event;
  for (let i = 0; i < keys.length; i += 1) {
    if (+keys[i].getAttribute('id') === keyCode || keys[i] === key) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('mousedown', keyDown);
document.addEventListener('mouseup', keyUp);

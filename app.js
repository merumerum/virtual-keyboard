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
  ['Del', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Enter'],
  ['Caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\'],
  ['Shift', '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
  ['control', 'option', 'command', '', 'command', 'option', '', '', '', ''],
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
  if (keys[i].textContent === '' && i === 13) {
    keys[i].classList.add('backspace');
  }
  if (keys[i].textContent === 'Tab') {
    keys[i].classList.add('tab');
  }
  if (keys[i].textContent === 'Enter' && i === 27) {
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
  if (keys[i].textContent === 'contral') {
    keys[i].classList.add('ctrl');
  }
  if (keys[i].textContent === 'option' && i === 56) {
    keys[i].classList.add('option', 'option-left');
  }
  if (keys[i].textContent === 'option' && i === 59) {
    keys[i].classList.add('option', 'option-right');
  }
  if (keys[i].textContent === 'command' && i === 56) {
    keys[i].classList.add('cmd', 'cmd-left');
  }
  if (keys[i].textContent === 'command' && i === 58) {
    keys[i].classList.add('cmd', 'cmd-right');
  }
  if (keys[i].textContent === '' && i === 57) {
    keys[i].classList.add('space-key');
  }
  if (keys[i].textContent === '' && i === 60) {
    keys[i].classList.add('arrow-keys');
  }
  if (keys[i].textContent === '' && i === 61) {
    keys[i].classList.add('arrow-keys', 'up');
  }
  if (keys[i].textContent === '' && i === 62) {
    keys[i].classList.add('arrow-keys', 'down');
  }
  if (keys[i].textContent === '' && i === 63) {
    keys[i].classList.add('arrow-keys');
  }
}

const rowWithArrow = document.querySelectorAll('.row')[4];
const arrowWrap = document.createElement('div');
rowWithArrow.appendChild(arrowWrap);
arrowWrap.className = 'arrow-keys-wrap';
arrowWrap.appendChild(keys[60]);
arrowWrap.appendChild(keys[61]);
arrowWrap.appendChild(keys[62]);
arrowWrap.appendChild(keys[63]);

// const del = document.querySelector('.delete-key');
const backspace = document.querySelector('.backspace');
// const capsLock = document.querySelector('.caps-lock');
// const tab = document.querySelector('.tab');
// const enter = document.querySelector('.enter');
// const shiftLeft = document.querySelector('.shift-left');
// const shiftRight = document.querySelector('.shift-right');
// const spaceKey = document.querySelector('.space-key');
// const inputText = document.querySelector('.input');

backspace.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
keys[60].innerHTML = '<i class="fa-solid fa-caret-left"></i>';
keys[61].innerHTML = '<i class="fa-solid fa-caret-up"></i>';
keys[62].innerHTML = '<i class="fa-solid fa-caret-down"></i>';
keys[63].innerHTML = '<i class="fa-solid fa-caret-right"></i>';

// let jet = [];
// document.onkeydown = function (e) {
//   console.log(e);
//   jet.push(e.keyCode);
//   console.log(jet);
// }

const keyboard = [
  'Delete', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash',
  'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight',
  'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight',
];

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('id', keyboard[i]);
}

function keyDown(event) {
  const key = event.target;
  const { code } = event;
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].getAttribute('id') === code || keys[i] === key) {
      keys[i].classList.remove('remove');
      keys[i].classList.add('active');
    }
  }
}

function keyUp(event) {
  const key = event.target;
  const { code } = event;
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].getAttribute('id') === code || keys[i] === key) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('mousedown', keyDown);
document.addEventListener('mouseup', keyUp);

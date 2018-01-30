import * as keyboard from './keyboard.js';

let buttonMap = {
    'up': ['UpArrow', 'W'],
    'down': ['DownArrow', 'S'],
    'left': ['LeftArrow', 'A'],
    'right': ['RightArrow', 'D'],
    'ok': ['Enter'],
    'cancel': ['Backspace'],
    'menu': ['F'],
    'pause': ['Tab'],
    'settings': ['F5'],
    'debug': ['F6']
};
let buttons = {};
for (let button in buttonMap) {
    buttons[button] = keyboard.button(buttonMap[button].map(x => keyboard.keyCode(x)));
}

export default buttons;

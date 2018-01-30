export function button(keyCodes) {
    let button = {};
    button.codes = keyCodes;
    button.isDown = false;
    button.isUp = true;
    button.press = undefined;
    button.release = undefined;

    //The `downHandler`
    button.downHandler = event => {
        if (button.codes.includes(event.keyCode)) {
            if (button.isUp && button.press) button.press();
            button.isDown = true;
            button.isUp = false;
        }
        event.preventDefault();
    };

    //The `upHandler`
    button.upHandler = event => {
        if (button.codes.includes(event.keyCode)) {
            if (button.isDown && button.release) button.release();
            button.isDown = false;
            button.isUp = true;
        }
        event.preventDefault();
    };

    window.addEventListener(
        "keydown", button.downHandler.bind(button), false
    );
    window.addEventListener(
        "keyup", button.upHandler.bind(button), false
    );
    return button;
}


export function keyCode(key) {
    var codes = {
    "\"'": 222,
    ",": 188,
    "-_": 189,
    ".": 190,
    "/": 191,
    "/?": 191,
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    ";:": 186,
    "=+": 187,
    "A": 65,
    "Add": 107,
    "B": 66,
    "Backspace": 8,
    "C": 67,
    "CapsLock": 20,
    "Control": 17,
    "D": 68,
    "Decimal": 110,
    "Delete": 46,
    "Divide": 111,
    "DownArrow": 40,
    "E": 69,
    "End": 35,
    "Enter": 13,
    "Esc": 27,
    "F": 70,
    "F1": 112,
    "F11": 122,
    "F12": 123,
    "F13": 124,
    "F14": 125,
    "F15": 126,
    "F2": 113,
    "F3": 114,
    "F4": 115,
    "F5": 116,
    "F6": 117,
    "F7": 118,
    "F8": 119,
    "F9": 120,
    "G": 71,
    "H": 72,
    "Home": 36,
    "I": 73,
    "Insert": 45,
    "J": 74,
    "K": 75,
    "L": 76,
    "LeftArrow": 37,
    "M": 77,
    "Multiply": 106,
    "N": 78,
    "NumLock": 144,
    "Numpad0": 96,
    "Numpad1": 97,
    "Numpad2": 98,
    "Numpad3": 99,
    "Numpad4": 100,
    "Numpad5": 101,
    "Numpad6": 102,
    "Numpad7": 103,
    "Numpad8": 104,
    "Numpad9": 105,
    "O": 79,
    "P": 80,
    "PageDown": 34,
    "PageUp": 33,
    "PauseBreak": 19,
    "Q": 81,
    "R": 82,
    "RightArrow": 39,
    "S": 83,
    "ScrLk": 145,
    "Shift": 16,
    "Spacebar": 32,
    "Subtract": 109,
    "T": 84,
    "Tab": 9,
    "U": 85,
    "UpArrow": 38,
    "V": 86,
    "W": 87,
    "X": 88,
    "Y": 89,
    "Z": 90,
    "[{": 219,
    "\\|": 220,
    "]}": 221,
    "`~": 192,
    "a": 65,
    "b": 66,
    "c": 67,
    "d": 68,
    "e": 69,
    "f": 70,
    "g": 71,
    "h": 72,
    "i": 73,
    "j": 74,
    "k": 75,
    "l": 76,
    "m": 77,
    "n": 78,
    "o": 79,
    "p": 80,
    "q": 81,
    "r": 82,
    "s": 83,
    "t": 84,
    "u": 85,
    "v": 86,
    "w": 87,
    "x": 88,
    "y": 89,
    "z": 90
};

    if (!key in codes) {
        console.log('key not found');
    }

    return codes[key];
}

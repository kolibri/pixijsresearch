let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

let app = new PIXI.Application({
    width: 256, // default: 800
    height: 256, // default: 600
    antialias: true, // default: false
    transparent: false, // default: false
    resolution: 1 // default: 1
});

app.renderer.backgroundColor = 0xDDDDDD;
document.body.appendChild(app.view);

PIXI.loader
    .add("fee.jpg")
    .load(setup);

class startView {
    constructor(app, imgFile = 'fee.jpg') {
        this.fee = new PIXI.Sprite(PIXI.loader.resources[imgFile].texture);
        this.fee.x = 1;
        this.fee.y = 2;
        this.fee.vx = 1;
        this.fee.vy = 2;

        app.stage.addChild(this.fee);

        this.registerKeys();
    }

    registerKeys() {
        let anykey = keyboard(32);
        anykey.press = () => { this.fee.x = 15; };
        anykey.release = () => { this.fee.x = -15; };
    }

    render(delta) {
        // this.fee.x += this.fee.vx;
        // this.fee.y += this.fee.vy;
    }
}

//  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
let state,
    view;

function setup() {
    view = new startView(app);

    state = play;
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    state(delta)
}

function play(delta) {
    view.render(delta)
}

function keyboard(keyCode) {
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    //The `downHandler`
    key.downHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}

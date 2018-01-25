import SpriteUtilities from 'pixi-sprite-utilities';

var PIXI = require('pixi.js');

//import PIXI from 'pixi.js'

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

let app = new PIXI.Application({
    width: 800, // default: 800
    height: 600, // default: 600
    antialias: true, // default: false
    transparent: false, // default: false
    resolution: 1 // default: 1
});

app.renderer.backgroundColor = 0xDDDDDD;
document.body.appendChild(app.view);

PIXI.loader
    .add("momo.json")
    .load(setup);

class startView {
    constructor(app) {
        let spriteUtils = new SpriteUtilities(PIXI);
        let sprites = [];
        let stand = [
            'stand_down',
            'stand_sw',
            'stand_w',
            'stand_nw',
            'stand_up'
        ];
        let x = 0;
        for (let frame of stand) {
            sprites[frame] = spriteUtils.sprite(frame);
            sprites[frame].x = 80 * x + 20;
            sprites[frame].y = 20;
            x++;
        }

        let animations = {
            'walking_nw': 5,
            'walking_sw': 5,
            'battle_intro': 21,
            'battle_attack': 14
        };
        x = 0;
        for (let name in animations) {
            sprites[name] = spriteUtils.sprite(spriteUtils.frameSeries(0, animations[name], name));
            sprites[name].fps = 6;
            sprites[name].x = 125 * x + 20;
            sprites[name].y = 150;
            sprites[name].playAnimation();
            x++;
        }


// (0 1) 2 3 (4 5 6) 7 (8 9) 10

        // this.waiting = spriteUtils.sprite(spriteUtils.frameSeries(0, 1, "battler"));
        // this.waiting.fps = 6;
        // this.waiting.x = 20;
        // this.waiting.y = 150;
        // this.waiting.playAnimation();
        // app.stage.addChild(this.waiting);

        // this.down = spriteUtils.sprite(spriteUtils.frameSeries(8, 9, "battler"));
        // this.down.fps = 6;
        // this.down.x = 100;
        // this.down.y = 150;
        // this.down.playAnimation();
        // app.stage.addChild(this.down);

        // this.cast = spriteUtils.sprite(spriteUtils.frameSeries(4, 6, "battler"));
        // this.cast.fps = 6;
        // this.cast.x = 180;
        // this.cast.y = 150;
        // this.cast.playAnimation();
        // app.stage.addChild(this.cast);

        // this.bow = spriteUtils.sprite(spriteUtils.frameSeries(2, 3, "battler"));
        // this.bow.fps = 6;
        // this.bow.x = 380;
        // this.bow.y = 150;
        // this.bow.playAnimation();
        // app.stage.addChild(this.bow);

        for (let sprite in  sprites) {
            app.stage.addChild(sprites[sprite]);
        }

        //this.registerKeys();
    }

    registerKeys() {
        let anykey = keyboard(32);
        anykey.press = () => {
            this.fee.x = 15;
        };
        anykey.release = () => {
            this.fee.x = -15;
        };
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

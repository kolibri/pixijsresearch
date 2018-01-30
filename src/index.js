let PIXI = require('pixi.js');

import demoView from './demoView.js';
import startView from './startView.js';
import debugView from './debugView.js';
import input from './input.js';
import stageFsm from './stageFsm.js';

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

let state,
    view;

function setup() {
    let start = { view: new startView(), input: input };
    //var demo = { view: new demoView() };

    stageFsm.init(start);


        input.down.press = () => {
            //
        };
        input.down.release = () => {
            stageFsm.buttonPush(start);
        };



    app.stage.addChild(start.view.container);

    state = play;
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    state(delta)
}

function play(delta) {
    //views.getCurrentView().render(delta)
}

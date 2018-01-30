var machina = require('machina');
let PIXI = require('pixi.js');

import demoView from './demoView.js';
import startView from './startView.js';
import debugView from './debugView.js';
import input from './input.js';

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

let stageFsm = new machina.BehavioralFsm( {
    namespace: "app-stage",
    initialState: "uninitialized",

    initialize: function( options ) {
    },

    states: {
        uninitialized: {
            "*": function( client ) {
                this.deferUntilTransition( client );
                this.transition( client, "start" );
            }
        },
        start: {
            _onEnter: function( client ) {
                client.view.container.visible = true;
            },
            buttonPush: function( client ) {
                console.log('Button pushed (start)');
//                this.deferUntilTransition(  client, "demo" );
            },
            init: function ( client) {
            },
            _onExit: function( client ) {
                client.view.container.visible = false;
            }
        }
    },

    // ???
    reset: function( client ) {
        this.handle(  client, "_reset" );
    },

    buttonPush: function ( client ) {
        this.handle( client, 'buttonPush' );
    }, 

    init: function ( client) {
        this.handle( client, 'init' );
    }
} );

let state,
    view;

// let views = new viewManager({
//     'start': new startView(input),
//     'demo': new demoView(),
// })


function setup() {
    //let input = new input();
    let start = { view: new startView() };
    //var demo = { view: new demoView() };

    stageFsm.init(start);

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

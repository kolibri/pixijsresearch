let PIXI = require('pixi.js');

import SpriteUtilities from 'pixi-sprite-utilities';
import keyboard from './keyboard.js';

let Container = PIXI.Container;


export default class startView {
    //constructor(input) {
    constructor() {
        this.container = new Container();
        
        let spriteUtils = new SpriteUtilities(PIXI);
        let sprites = [];

        sprites['text'] = spriteUtils.text("The Game Title", "32px Papyurs", "black", 20, 20);

        for (let sprite in  sprites) {
            this.container.addChild(sprites[sprite]);
        }



        /* //Input things
        input.down.press = () => {
            sprites['text'].x = 150;
        };
        input.down.release = () => {
            sprites['text'].x = 20;
        };
        */
    }

    render(delta) {
        // this.fee.x += this.fee.vx;
        // this.fee.y += this.fee.vy;
    }
}

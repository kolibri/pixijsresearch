import SpriteUtilities from 'pixi-sprite-utilities';

export default class demoView {
    constructor() {
    }

   getContainer() {
        let gameScene = new Container();
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

        for (let sprite in  sprites) {
            gameScene.addChild(sprites[sprite]);
        }

        return gameScene;
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

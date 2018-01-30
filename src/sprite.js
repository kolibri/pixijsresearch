import SpriteUtilities from 'pixi-sprite-utilities';

export default class sprite {
    constructor(sprite, x, y) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }

    createPixiSprite() {
        let sprite = spriteUtils.sprite(this.sprite);
            sprite.x = this.x;
            sprite.y = this.y;
    }
}

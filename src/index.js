import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import race from './assets/race.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('race', race);
    }

    create ()
    {
        // const logo = this.add.image(500, 400, 'race');
        this.tileSprite = this.add.tileSprite(400, 300, 800, 600, 'race')
        // this.tileSprite.autoScroll(0, 100)

    }

    update(){
         this.tileSprite.tilePositionY += 2;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);

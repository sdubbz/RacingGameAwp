import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import race from './assets/race.png';
import car from './assets/car.jpeg';

var raceCar

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('race', race);
        this.load.image('car', car)
    }

    create ()
    {
        this.tileSprite = this.add.tileSprite(400, 300, 850, 800, 'race')

        this.raceCar = this.add.sprite(400, 450, 'car' )
        this.raceCar.setScale(.05)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update(){
         this.tileSprite.tilePositionY -= 2;

         const body = this.raceCar.body


    if(this.cursors.left.isDown){
      console.log('up pressed')
      if(this.raceCar.x > 150){
      this.raceCar.x -= 10
      }

    }
    else if(this.cursors.right.isDown){
      console.log('down pressed')
      if(this.raceCar.x < 650){
        this.raceCar.x += 10
      }

    }
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

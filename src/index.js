import Phaser, { Physics } from 'phaser';
import logoImg from './assets/logo.png';
import race from './assets/race.png';
import car from './assets/car.jpeg';
import greenCar from './assets/greenCar.png';
import Timer from './timer';








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
        this.load.image('greenCar', greenCar)
    }

    create ()
    {

        this.tileSprite = this.add.tileSprite(400, 300, 850, 800, 'race')

        this.raceCar = this.add.sprite(400, 450, 'car' )
        this.raceCar.setScale(.05)
        this.physics.add.existing(this.raceCar, true)



        this.greenCar = this.add.sprite(400, 250, 'greenCar' )
        this.greenCar.setScale(.08)
        this.greenCar.setAngle(-270)



        this.raceTimer = this.add.text(200, 200, `${this.time.now /1000}`)



        this.physics.add.existing(this.greenCar)
        this.physics.add.collider(this.raceCar, this.greenCar, () => {
            this.physics.pause()
            this.raceTimer.visible = false
            this.add.text(200,200, `GAME OVER , SCORE : ${this.time.now / 1000}`)

            this.greenCar.destroy()
            console.log('destroyed')



        })




        this.cursors = this.input.keyboard.createCursorKeys()



    }



    update(){
        if(this.raceTimer){
        this.timer =  this.time.now /1000
        this.raceTimer.text =  this.timer
        }


         this.tileSprite.tilePositionY -= 2;




    if(this.cursors.left.isDown){

      if(this.raceCar.x > 150){
      this.raceCar.x -= 10,
      this.raceCar.body.x -= 10
      }

    }
    else if(this.cursors.right.isDown){

      if(this.raceCar.x < 650){
        this.raceCar.x += 10
        this.raceCar.body.x += 10
      }

    }



    if (this.greenCar.y > 565)
    {
        this.greenCar.y = -450;
    }


    if(!this.greenCar){
        console.log('yesssiiir')
        this.greenCar.setPosition(250,250)
    }
    }



}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 20},
            debug: true
        }
    }

};

const game = new Phaser.Game(config);

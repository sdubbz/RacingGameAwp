import Phaser, { Physics } from 'phaser';

import race from './assets/race.png';
import car from './assets/car.jpeg';
import greenCar from './assets/greenCar.png';
import truck from './assets/truck.png'
import blueCar from './assets/blueCar.png'
import redCar from './assets/redCar.png'









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
        this.load.image('truck', truck)
        this.load.image('blueCar', blueCar)
        this.load.image('redCar', redCar)
    }

    create ()
    {

        this.tileSprite = this.add.tileSprite(400, 300, 850, 800, 'race')

        this.raceCar = this.add.sprite(400, 450, 'car' )
        this.raceCar.setScale(.07)
        this.physics.add.existing(this.raceCar, true)



        this.greenCar = this.add.sprite(480, 650, 'greenCar' )
        this.greenCar.setScale(.15)
        this.physics.add.existing(this.greenCar)

        this.truck = this.add.sprite(225, 1050, 'truck' )
        this.truck.setScale(.17)
        this.physics.add.existing(this.truck)

        this.blueCar = this.add.sprite(350, 1750, 'blueCar' )
        this.blueCar.setScale(.5)
        this.physics.add.existing(this.blueCar)

        this.redCar = this.add.sprite(590, 850, 'redCar' )
        this.redCar.setScale(.15)
        this.physics.add.existing(this.redCar)



        this.raceTimer = this.add.text(200, 200, `${this.time.now /1000}`)



        this.physics.add.collider(this.raceCar, this.greenCar, () => {
            this.physics.pause()
            this.raceTimer.visible = false
            this.add.text(200,200, `GAME OVER , SCORE : ${Math.floor(this.time.now /1000, -2)} seconds`)

            this.greenCar.destroy()
            console.log('destroyed')



        })

        this.physics.add.collider(this.raceCar, this.truck, () => {
            this.physics.pause()
            this.raceTimer.visible = false
            this.add.text(200,200, `GAME OVER , SCORE : ${Math.floor(this.time.now /1000, -2)} seconds`)

            this.truck.destroy()
            console.log('destroyed')



        })

        this.physics.add.collider(this.raceCar, this.blueCar, () => {
            this.physics.pause()
            this.raceTimer.visible = false
            this.add.text(200,200, `GAME OVER , SCORE : ${Math.floor(this.time.now /1000, -2)} seconds`)

            this.blueCar.destroy()
            console.log('destroyed')



        })

        this.physics.add.collider(this.raceCar, this.redCar, () => {
            this.physics.pause()
            this.raceTimer.visible = false
            this.add.text(200,200, `GAME OVER , SCORE : ${Math.floor(this.time.now /1000, -2)} seconds`)

            this.redCar.destroy()
            console.log('destroyed')



        })

        this.cursors = this.input.keyboard.createCursorKeys()


    }



    update(){
        if(this.raceTimer){
        this.timer =  `${Math.floor(this.time.now /1000, -2)} seconds`
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

    if (this.truck.y > 765)
    {
        this.truck.y = -850;
    }

    if (this.blueCar.y > 965)
    {
        this.blueCar.y = -1050;
    }

    if (this.redCar.y > 1565)
    {
        this.redCar.y = -1550;
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
            debug: false
        }
    }

};

const game = new Phaser.Game(config);

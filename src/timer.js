export default class Timer{

  // /**@type {Phaser.scene} */
  // scene

  // /**@type {Phaser.GameObjects.Text} */
  // label

  // /**@type {Phaser.Time.TimerEvent} */
  // timerEvent

  // /** @type {() => void} */
  // finishedCallback

  // duration = 0;


  constructor(scene, label){
    this.scene = scene
    this.label = label
  }
/**
 *
 * @param {number} duration
 * @param {()=> void} callBack
 */


  start(duration = 45000, callBack){
    this.stop()



    this.timerEvent = this.scene.time.addEvent({
      delay: duration,
      callBack: () =>{
        this.stop()

        if(callBack){
          callBack()
        }
      }
    })
  }

  stop(){
    if(this.timerEvent){
      this.timerEvent.destroy()
      this.timerEvent = undefined;
    }
  }

  update(){
    if(!this.timerEvent || this.duration <= 0){
      return
    }
    const elapsed = this.timerEvent.getElapsed()
    const remaining = this.duration - elapsed
    const seconds = remaining / 1000

    this.label.text = seconds.toFixed(2)
  }
}

import { _decorator, Component, EventTouch, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraControl')
export class CameraControl extends Component {
    start() {
input.on(Input.EventType.TOUCH_START,this.onTouchStart,this)    
input.on(Input.EventType.TOUCH_END,this.onTouchEnd,this)
input.on(Input.EventType.TOUCH_MOVE,this.onTouchMove,this)
    }

    onTouchStart(event:EventTouch){
console.log('touchstart'+event.getLocation())
    }

onTouchEnd(event:EventTouch){
console.log('touchsEnd'+event.getLocation())
}

onTouchMove(event:EventTouch){
const pos =this.node.position
const moveScale =0.1
this.node.setPosition(pos.x+event.getDeltaX()*moveScale,pos.y+event.getDeltaY()*moveScale,pos.z)
}
    update(deltaTime: number) {
        
    }
}



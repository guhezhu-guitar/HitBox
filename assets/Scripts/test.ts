import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    start() {
console.log('start')
    }

    update(deltaTime: number) {
        console.log('update'+deltaTime)
    }
}



import { _decorator, Component, Node, Prefab,input,Input,EventTouch, instantiate, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackControl')
export class AttackControl extends Component {
    
    // @property(Node)
    // public grand:Node=null //在属性器上面添加node类型的grand属性，然后将原本的grand属性拖拽到node里面
    @property(Prefab)
    public bulletPrefab:Prefab = null
    //预制体Prefab 实例Instance

    @property(Node)
    public bullParent:Node =null
    
    @property
    public bulletSpeed:number = 40

    @property
    public fireRate:number = 0.15  //发射的速率

    private isTouching:boolean = false

    private fireTime = 0  //定义发射的时间，后面通过计时器判断是否达到了发射的时间
    start() {
    input.on(Input.EventType.TOUCH_START,this.onTouchStart,this) 
    input.on(Input.EventType.TOUCH_END,this.onTouchEND,this)     
    }

     onTouchStart(event:EventTouch){
    // const bullet = instantiate(this.bulletPrefab)
    // bullet.setParent(this.bullParent)
    // // bullet.setPosition(0,0,0)//设置子弹的初始位置，和摄像机保持一致  
    // bullet.setWorldPosition(this.node.position)
    // const rgd = bullet.getComponent(RigidBody)
    // rgd.setLinearVelocity(new Vec3(0,0,-this.bulletSpeed))
        this.isTouching = true  //给一个正在接触的信号
        }
    
        onTouchEND(event:EventTouch){
        this.isTouching = false
        }

    update(deltaTime: number) {
        if(this.isTouching){
            this.fireTime +=deltaTime //计时器
            if(this.fireTime > this.fireRate){
                this.fire()
                this.fireTime = 0
            }
        }
    }
    fire(){
        const bullet = instantiate(this.bulletPrefab)
    bullet.setParent(this.bullParent)
    // bullet.setPosition(0,0,0)//设置子弹的初始位置，和摄像机保持一致  
    bullet.setWorldPosition(this.node.position)
    const rgd = bullet.getComponent(RigidBody)
    rgd.setLinearVelocity(new Vec3(0,0,-this.bulletSpeed))
    }
}



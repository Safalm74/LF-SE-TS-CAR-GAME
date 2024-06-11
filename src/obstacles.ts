import Rectangle from "./geomerty/rectrangle";
import Point from "./geomerty/point";
interface Iobstacle{
    position:Point;
    width:number;
    height:number;
    body:Rectangle;
    speed:number;
    positionIndex:number;
}

export default class Obstacle implements Iobstacle{
    position;
    width;
    height;
    body;
    speed;
    positionIndex;
    constructor(
        p:Point,
        w:number,
        h:number,
        s:number,
        pi:number)
        {
        this.position=p;
        this.width=w;
        this.height=h;
        this.body=new Rectangle(
            this.position.x,
            this.position.y,
            this.width,
            this.height);
        this.speed=s
        this.positionIndex=pi;
    }
    move(){
        this.position.y +=this.speed;
    }
    update(){
        this.move();
        this.body.y =this.position.y
    }
}
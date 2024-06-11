import Point from "./geomerty/point";
import spritelocations from "./constants/spritelocations";
import mainConstants from "./constants/mainConstants";
interface Iobstacle{
    position:Point;
    width:number;
    height:number;
    speed:number;
    positionIndex:number;
}

export default class Obstacle implements Iobstacle{
    position;
    width;
    height;
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
        this.speed=s
        this.positionIndex=pi;
    }

    draw(contextOb:CanvasRenderingContext2D):void{
        this.width=spritelocations.van.width;
        this.height=spritelocations.van.height;
        contextOb.drawImage(
            mainConstants.carsSprite,
            spritelocations.van.x,
            spritelocations.van.y,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height);

        contextOb.strokeRect(this.position.x,this.position.y,this.width,this.height)
        }
    move(){
        this.position.y +=this.speed;
    }
    update(){
        this.move();
    }
}
import Rectangle from "./geomerty/rectrangle";
import Point from "./geomerty/point";
import Obstacle from "./obstacles";
import canvasConstants from "./constants/canvasShapes";
interface Iplayer{
    position:Point;
    width:number;
    height:number;
    body:Rectangle;
    positionIndex:number;
}

export default class Player implements Iplayer{
    position;
    width;
    height;
    body;
    positionIndex;
    constructor(p:Point,w:number,h:number,pi:number=1){
        this.position=p;
        this.width=w;
        this.height=h;
        this.body=new Rectangle(
            this.position.x,
            this.position.y,
            this.width,
            this.height);
        this.positionIndex=pi;
    }
    move(left:boolean,widthDifference:number,offset:number){
        const oldPosition=this.position.x;
        let adder:number;
        if (left){
            if (this.positionIndex>0){
                this.positionIndex--;
            }
        }
        else{
            if (this.positionIndex<2){
                this.positionIndex++
            }
        }
        const newPosition=widthDifference*this.positionIndex + offset;
        newPosition>oldPosition?adder=1:adder=-1;
        canvasConstants.movingInterval=setInterval(
            ()=>{
                this.position.x+=adder;
                this.update();
                if (this.position.x>=canvasConstants.windowWidth-canvasConstants.offset-this.width){
                    this.position.x=canvasConstants.windowWidth-canvasConstants.offset-this.width;
                    clearInterval(canvasConstants.movingInterval);
                }
                if (this.position.x<=canvasConstants.offset){
                    this.position.x=canvasConstants.offset;
                    clearInterval(canvasConstants.movingInterval);
                }
            },5
        );
    }
    update(){
        this.body.x=this.position.x;
    }
    checkCollision(obstaclesArray:Obstacle[]){
        obstaclesArray.forEach(
            (obj)=>{
               if (
                obj.position.y+obj.height >= this.position.y &&
                obj.position.x+obj.width>= this.position.x &&
                obj.position.x+obj.width<=this.position.x+obj.width+this.width
                ){
                console.log('colide');
               }
            }
        );
    }
}
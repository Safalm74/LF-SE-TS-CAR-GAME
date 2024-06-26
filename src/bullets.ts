import Point from "./geomerty/point";
import coinsSprite from "./constants/coinsSprite";
import canvasConstants from "./constants/canvasShapes";
import Obstacle from "./obstacles";
interface Ibullet{
    position:Point;
    width:number;
    height:number;
    speed:number;
    positionIndex:number;
    animationIndex:number;
}

export default class Bullet implements Ibullet{
    position;
    width;
    height;
    speed;
    positionIndex;
    animationIndex;
    constructor(
        p:Point,
        w:number,
        h:number,
        s:number,
        pi:number,
        animationIndex:number)
        {
        this.position=p;
        this.width=w;
        this.height=h;
        this.speed=s;
        this.positionIndex=pi;
        this.animationIndex=animationIndex;
        
    }

    draw(contextOb:CanvasRenderingContext2D):void{
        this.width=coinsSprite.width;
        this.height=coinsSprite.height;
        contextOb.drawImage(
            coinsSprite.coinsImage,
            coinsSprite.x+coinsSprite.width,
            coinsSprite.y,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width/2,
            this.height/2);
        
    }
    move(){
        this.position.y -=this.speed;
    }
    update(){
        this.move();
    }
    hide(){
        this.position.y=canvasConstants.windowHeight;
    } 
    checkCollision(obstaclesArray:Obstacle[]){
        obstaclesArray.forEach(
            (obj)=>{

                document.body.style.backgroundColor="white";
               if (
                obj.position.y+obj.height  >= this.position.y&&
                obj.position.y<= this.position.y + this.height&&
                obj.position.x+obj.width>= this.position.x &&
                obj.position.x+obj.width<=this.position.x+obj.width+this.width 
                ){
                    obj.position.y=canvasConstants.windowHeight;
               }
            }
        );}

}
import Point from "./geomerty/point";
import coinsSprite from "./constants/coinsSprite";
interface Icoin{
    position:Point;
    width:number;
    height:number;
    speed:number;
    positionIndex:number;
    animationIndex:number;
}

export default class Coin implements Icoin{
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
        this.animationIndex=0;
        
    }

    draw(contextOb:CanvasRenderingContext2D):void{
        this.width=coinsSprite.width;
        this.height=coinsSprite.height;
        // contextOb.drawImage(
            // coinsSprite.coinsImage,
            // coinsSprite.x+coinsSprite.width*index,
            // coinsSprite.y,
            // this.width,
            // this.height,
            // this.position.x,
            // this.position.y,
            // this.width,
            // this.height);
        setInterval (
            ()=>{
                console.log(coinsSprite.x+coinsSprite.width*this.animationIndex)
                contextOb.drawImage(
                coinsSprite.coinsImage,
                coinsSprite.x+coinsSprite.width*this.animationIndex,
                coinsSprite.y,
                this.width,
                this.height,
                this.position.x,
                this.position.y,
                this.width,
                this.height);
                this.animationIndex++;
                this.animationIndex=this.animationIndex%6;

            }
            ,
            100
        );
        
    }
    move(){
        this.position.y +=this.speed;
    }
    update(){
        this.move();
    }
}
import Rectangle from "./geomerty/rectrangle";
import Point from "./geomerty/point";
import Obstacle from "./obstacles";
import canvasConstants from "./constants/canvasShapes";
import mainConstants from "./constants/mainConstants";
import spritelocations from "./constants/spritelocations";
import Coin from "./coins";
import gameoverPage from "./pages/gameover";
import playerConstants from "./constants/player";
interface Iplayer{
    position:Point;
    width:number;
    height:number;
    body:Rectangle;
    positionIndex:number;
    score:number;
    bulletsRemaining:number;
    bankBalance:number;
}

export default class Player implements Iplayer{
    position;
    width;
    height;
    body;
    positionIndex;
    score;
    bulletsRemaining;
    bankBalance;
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
        this.score=0;
        this.bulletsRemaining=playerConstants.bulletsRemaining;
        this.bankBalance=playerConstants.bankBalance;
    }

    draw(contextOb:CanvasRenderingContext2D):void{
        this.width=spritelocations.police.width;
        this.height=spritelocations.police.height;
        contextOb.drawImage(
            mainConstants.carsSprite,
            spritelocations.police.x,
            spritelocations.police.y,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
            }
    move(left:boolean,widthDifference:number,offset:number){
        const oldPosition=this.position.x;
        console.log('old idcex:',this.positionIndex);
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
                if (this.position.x*adder>newPosition*adder){
                    clearInterval(canvasConstants.movingInterval);

                }
            },2
        );

        console.log('new idcex:',this.positionIndex);
    }
    update(){
        this.body.x=this.position.x;
    }
    checkCollision(obstaclesArray:Obstacle[],coinsArray:Coin[]){
        obstaclesArray.forEach(
            (obj)=>{

                document.body.style.backgroundColor="white";
               if (
                obj.position.y+obj.height  >= this.position.y&&
                obj.position.y<= this.position.y + this.height&&
                obj.position.x+obj.width>= this.position.x &&
                obj.position.x+obj.width<=this.position.x+obj.width+this.width
                ){
                mainConstants.inGame=false;
                document.body.style.backgroundColor="red";
                gameoverPage(this.score);
               }
            }
        );
        coinsArray.forEach(
            (obj)=>{
               if (
                obj.position.y+obj.height >= this.position.y &&
                obj.position.x+obj.width>= this.position.x &&
                obj.position.x+obj.width<=this.position.x+obj.width+this.width
                ){
                obj.hide();
                this.bankBalance +=10;
               }
            }
        );
    }
    
}
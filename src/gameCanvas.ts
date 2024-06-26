import canvasConstants from "./constants/canvasShapes";
import mainConstants from "./constants/mainConstants";
import playerConstants from "./constants/player";
import obstacleConstant from "./constants/obstacles";
import Obstacle from "./obstacles";
import getRandomInt from "./utils/randomNumber";
import Point from "./geomerty/point";
import Coin from "./coins";
import coinsSprite from "./constants/coinsSprite";
import { player1, reset } from "./initialize";
import Bullet from "./bullets";

const canvasMain: HTMLCanvasElement=document.createElement('canvas') as HTMLCanvasElement;
const scoreTopMsg=document.createElement('h1');
scoreTopMsg.style.backgroundColor="wheat";
const bulletsRemainingTopMsg=document.createElement('h1');
bulletsRemainingTopMsg.style.backgroundColor="wheat";
const bankBalanceTopMsg=document.createElement('h1');
bankBalanceTopMsg.style.backgroundColor="wheat";

function loadDOM(){
    if (mainConstants.rootDiv){
        mainConstants.rootDiv.innerHTML='';
        mainConstants.rootDiv.appendChild(scoreTopMsg);
        mainConstants.rootDiv.appendChild(bulletsRemainingTopMsg);
        mainConstants.rootDiv.appendChild(bankBalanceTopMsg);
        mainConstants.rootDiv.appendChild(canvasMain);
    
    }
}


const ctx=canvasMain.getContext('2d') as CanvasRenderingContext2D;

let obstaclesArray: Obstacle[]=[];
let coinsArray: Coin[]=[];
export let bulletArray: Bullet[]=[];

function createObsticles(){
    let positionIndex:number
    positionIndex=getRandomInt(0,2);
    for (let tryAttemp=0;tryAttemp<10;tryAttemp++){
        positionIndex=getRandomInt(0,2)
        if (obstaclesArray.filter(
            (obj)=>{
                return obj.positionIndex===positionIndex
            }
        ).length===0){
            break;
        }
    }
    const randomV='truck';
    if (player1.score>10){
        obstacleConstant.vtyp[randomV].speed +=Math.exp(-player1.score/10)*3;
    }
    const obstacleObj: Obstacle=new Obstacle(
        new Point(
            positionIndex*canvasConstants.widthDifference+playerConstants.offset,
            -obstacleConstant.vtyp[randomV].height),
        obstacleConstant.width,
        obstacleConstant.vtyp[randomV].height,
        obstacleConstant.vtyp[randomV].speed,
        positionIndex 
    )
    obstaclesArray.push(obstacleObj)
}
function createCoin(){
    let positionIndex:number
    positionIndex=getRandomInt(0,2);
    for (let tryAttemp=0;tryAttemp<10;tryAttemp++){
        positionIndex=getRandomInt(0,2)
        if (obstaclesArray.filter(
            (obj)=>{
                return obj.positionIndex===positionIndex
            }
        ).length===0){
            break;
        }
    }
    const coinObj: Coin=new Coin(
        new Point(
            positionIndex*canvasConstants.widthDifference+playerConstants.offset,
            -coinsSprite.height),
        coinsSprite.width,
        coinsSprite.height,
        obstacleConstant.vtyp.truck.speed,
        positionIndex ,
        0
    )
    coinsArray.push(coinObj)

}
setInterval(
    ()=>{
        if (obstaclesArray.length<3){
            createObsticles();
        }
        if (coinsArray.length<5){
            createCoin();
        }
      
        obstaclesArray=obstaclesArray.filter(
            (obj)=>{
                if (obj.position.y<canvasConstants.windowHeight){
                    return true;
                }
                else{
                    player1.score++;
                    return false;
                }
            }
        );
        coinsArray=coinsArray.filter(
            (obj)=>{
                if (obj.position.y<canvasConstants.windowHeight){
                    return true;
                }
                else{
                    player1.score++;
                    return false;
                }
            }
        );
        bulletArray=bulletArray.filter(
            (obj)=>{
                return obj.position.y<0;
            }
        );
    },
    obstacleConstant.vtyp['truck'].speed*200
);


function gameMainloop(){
    ctx.clearRect(
        0,
        0,
        canvasConstants.windowWidth,
        canvasConstants.windowHeight);
    canvasConstants.line.forEach(
        (l)=>{
            l.draw(ctx);
        }
    );
    
    obstaclesArray.forEach(
        (obj)=>{
            obj.update();
            obj.draw(ctx);
        }
    );

    coinsArray.forEach(
        (obj)=>{
            obj.update();
            obj.draw(ctx);
        }
    );
    bulletArray.forEach(
        (obj)=>{
            obj.update();
            obj.draw(ctx);
            obj.checkCollision(obstaclesArray);
        }
    );
    player1.update();
    player1.draw(ctx);
    player1.checkCollision(obstaclesArray,coinsArray);


    

    scoreTopMsg.innerHTML=`score: ${player1.score}`;
    bulletsRemainingTopMsg.innerHTML=`BulletsRemaining: ${player1.bulletsRemaining}`;
    bankBalanceTopMsg.innerHTML=`Bank Balance: ${player1.bankBalance}`;
    if (mainConstants.inGame){
        requestAnimationFrame(gameMainloop);
    }
    else{

    obstaclesArray=[];
    coinsArray=[];
    bulletArray=[];

    }
}
export default function canvasInitialize(){
    if (mainConstants.rootDiv) mainConstants.rootDiv.innerHTML='';
    loadDOM();
    reset();
    mainConstants.inGame=true;
    const canvasWidth:number= canvasConstants.windowWidth;
    const canvasHeight:number=  canvasConstants.windowHeight;
    canvasMain.width=canvasWidth;
    canvasMain.height=canvasHeight;
    canvasMain.style.display='block';
    canvasMain.style.margin="0 auto";
    canvasMain.style.backgroundColor="rgba(125,125,125,0.9)";   
    canvasMain.addEventListener(
        'click',
        (e)=>{
            if (e.offsetX<canvasConstants.windowWidth/2){
                clearInterval(canvasConstants.movingInterval);
                player1.move(true,canvasConstants.widthDifference,playerConstants.offset)     
            }
            else{
                clearInterval(canvasConstants.movingInterval);
                        player1.move(false,canvasConstants.widthDifference,playerConstants.offset);
            }

        }
    );


    player1.body.draw(ctx);
    for(let i=0;i<canvasConstants.line.length;i++){
        canvasConstants.line[i].draw(ctx);
    }
    gameMainloop();
    }


    
    
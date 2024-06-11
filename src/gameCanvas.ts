import canvasConstants from "./constants/canvasShapes";
import mainConstants from "./constants/mainConstants";
import playerConstants from "./constants/player";
import Player from "./player";
import obstacleConstant from "./constants/obstacles";
import Obstacle from "./obstacles";
import getRandomInt from "./utils/randomNumber";
import Point from "./geomerty/point";

const canvasMain: HTMLCanvasElement=document.createElement('canvas') as HTMLCanvasElement;
if (mainConstants.rootDiv){
    mainConstants.rootDiv.innerHTML='';
    mainConstants.rootDiv.appendChild(canvasMain);
    }

const ctx=canvasMain.getContext('2d') as CanvasRenderingContext2D;
const player1=new Player(
    playerConstants.position,
    playerConstants.width,
    playerConstants.height
)
let obstaclesArray: Obstacle[]=[];

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

    getRandomInt(0,2);
    const randomV='truck';
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
setInterval(
    ()=>{
        if (obstaclesArray.length<3){
            createObsticles();
        }
      
        obstaclesArray=obstaclesArray.filter(
            (obj)=>{
                return obj.position.y<canvasConstants.windowHeight;
            }
        );
    },
    1000
);
function gameMainloop(){
    ctx.clearRect(
        0,
        0,
        canvasConstants.windowWidth,
        canvasConstants.windowHeight);
    obstaclesArray.forEach(
        (obj)=>{
            obj.update();
            obj.body.draw(ctx);
            player1.update();
            player1.body.draw(ctx);
        }
    );
    player1.checkCollision(obstaclesArray);

    for(let i=0;i<canvasConstants.line.length;i++){
        canvasConstants.line[i].draw(ctx);
    }

    requestAnimationFrame(gameMainloop);
}
export default function canvasInitialize(){
    mainConstants.inGame=true;
    const canvasWidth:number= canvasConstants.windowWidth;
    const canvasHeight:number=  canvasConstants.windowHeight;
    canvasMain.width=canvasWidth;
    canvasMain.height=canvasHeight;
    canvasMain.style.display='block';
    canvasMain.style.margin="0 auto";
    canvasMain.style.backgroundColor="#ddd";   
    window.addEventListener(
        'keypress',
        (e)=>{
            if (mainConstants.inGame){
                switch(e.key){
                    case 'a':
                        clearInterval(canvasConstants.movingInterval);
                        player1.move(true,canvasConstants.widthDifference,playerConstants.offset)
                        break;

                    case 'd':
                        
                        clearInterval(canvasConstants.movingInterval);
                        player1.move(false,canvasConstants.widthDifference,playerConstants.offset);
                        break;
                    case 's':  
                        clearInterval(canvasConstants.movingInterval);
                        break;
                }
                
            }
        }
    );

    player1.body.draw(ctx);
    for(let i=0;i<canvasConstants.line.length;i++){
        canvasConstants.line[i].draw(ctx);
    }
    gameMainloop();
    }


    
    
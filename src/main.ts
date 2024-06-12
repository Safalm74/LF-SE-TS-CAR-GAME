
import loadHomePage from "./pages/home";
import mainConstants from "./constants/mainConstants";
import playerConstants from "./constants/player";
import { player1 } from "./initialize";
import coinsSprite from "./constants/coinsSprite";
import Point from "./geomerty/point";
import Bullet from "./bullets";
import canvasConstants from "./constants/canvasShapes";
import obstacleConstant from "./constants/obstacles";
import { bulletArray } from "./gameCanvas";
window.addEventListener(
    'keypress',
    function windowEvent(e){
        if (mainConstants.inGame){
            switch(e.key){
                case 'a':
                    console.log('event')
                    clearInterval(canvasConstants.movingInterval);
                    player1.move(true,canvasConstants.widthDifference,playerConstants.offset)
                    break;

                case 'd':
                    
                    clearInterval(canvasConstants.movingInterval);
                    player1.move(false,canvasConstants.widthDifference,playerConstants.offset);
                    break;
                case 'w':

                    if (player1.bulletsRemaining>0){
                        player1.bulletsRemaining--;
                        const bulletObj: Bullet=new Bullet(
                            new Point(
                                player1.position.x,
                                player1.position.y +Math.floor(player1.width/2)),
                            coinsSprite.width,
                            coinsSprite.height,
                            obstacleConstant.vtyp.truck.speed,
                            player1.positionIndex ,
                            0
                        )
                        bulletArray.push(bulletObj)}
                    break;
                    case 'r':
                        if (player1.bankBalance>100){
                            player1.bulletsRemaining++;
                            player1.bankBalance -=100;
                        
                        }
                        break;
            }
            
        }
    }
);

loadHomePage();
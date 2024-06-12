import canvasConstants from "./constants/canvasShapes";
import mainConstants from "./constants/mainConstants";
import playerConstants from "./constants/player";
import Player from "./player";

export function reset(){
    player1.positionIndex=playerConstants.positionIndex;
    player1.score=playerConstants.playerScore;
    player1.bulletsRemaining=playerConstants.bulletsRemaining;
    player1.position=playerConstants.position;
    clearInterval(canvasConstants.movingInterval)

}
export const player1=new Player(
            playerConstants.position,
            playerConstants.width,
            playerConstants.height,
            playerConstants.positionIndex,
        );
 
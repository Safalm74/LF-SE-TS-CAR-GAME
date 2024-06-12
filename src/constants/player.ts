import Point from "../geomerty/point"
import canvasConstants from "./canvasShapes";
type PlayerConstant={
    position:Point;
    width:number;
    height:number;
    positionIndex:number;
    offset:number;
    movingInterval:any;
    playerScore:number;
    bulletsRemaining:number;
    bankBalance:number;
}

const width=0.4*canvasConstants.widthDifference;
const height=200
const Offset=0.3*canvasConstants.widthDifference
const playerConstants: PlayerConstant={
    // position:new Point(canvasConstants.widthDifference,canvasConstants.windowHeight+height),
    position:new Point(canvasConstants.widthDifference*1 +Offset,
        canvasConstants.windowHeight-height-Offset),
    width:width,
    height:height,
    positionIndex:1,
    offset:Offset,
    movingInterval:null,
    playerScore:0,
    bulletsRemaining:5,
    bankBalance:0

}
export default playerConstants;
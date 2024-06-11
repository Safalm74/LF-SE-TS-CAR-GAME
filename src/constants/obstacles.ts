import Point from "../geomerty/point"
import canvasConstants from "./canvasShapes";

type VtypInstance={
    height:number;
    speed:number;
}
type Vtyp={
    truck:VtypInstance
    car:VtypInstance,

}

const vtyp:Vtyp={
    truck:{
        height:300,
        speed:13 //lower the actual speed, faster we can overtake so higher value
    },
    car:{
        height:200,
        speed:8
    }
}

type ObstacleConstant={
    position:Point;
    width:number;
    vtyp: Vtyp;
}

const width=0.4*canvasConstants.widthDifference;
//const height=200
//const heightOffeset=5
const obstacleConstant: ObstacleConstant={
    // position:new Point(canvasConstants.widthDifference,canvasConstants.windowHeight+height),
    position:new Point(0,0),
    width:width,
    vtyp:vtyp,

}
export default obstacleConstant;
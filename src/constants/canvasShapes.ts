import Point from "../geomerty/point";
import Line from "../geomerty/line";
const windowHeight:number=0.9*window.innerHeight;
const windowWidth:number=0.8 * window.innerWidth;
const numberOfLanes=3;
const offset=10;
const widthDifference=windowWidth/numberOfLanes;
const point1_l1=new Point(widthDifference*1,0)
const point2_l1=new Point(widthDifference*1,windowHeight)
const point1_l2=new Point(widthDifference*2,0)
const point2_l2=new Point(widthDifference*2,windowHeight)

type Constants={
    windowHeight:number;
    windowWidth:number;
    line:Line[],
    widthDifference:number,
    movingInterval:any,
    offset:number
}
const canvasConstants: Constants={
    windowHeight:windowHeight,
    windowWidth:windowWidth,
    line:[
        new Line(point1_l1,point2_l1),
        new Line(point1_l2,point2_l2)
    ],
    widthDifference:widthDifference,
    movingInterval:null,
    offset:offset

}

export default canvasConstants;
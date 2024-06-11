import Point from "./point";


interface Iline{
    startingPoint:Point;
    endingPoint:Point;
}
export default class Line implements Iline{
    startingPoint;
    endingPoint;
    constructor(s:Point,e:Point){
        this.startingPoint=s;
        this.endingPoint=e;
    }
    draw(ctxObj:CanvasRenderingContext2D){
        ctxObj.beginPath();
        ctxObj.moveTo(this.startingPoint.x,this.startingPoint.y);
        ctxObj.lineTo(this.endingPoint.x,this.endingPoint.y);
        ctxObj.stroke();
        ctxObj.closePath();
    }
}
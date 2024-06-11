interface IRectangle{
    width:number,
    height:number,
    x:number,
    y:number
}

export default class Rectangle implements IRectangle{
    width;
    height;
    x;
    y;
    constructor(x:number,y:number,w:number,h:number){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
    }
    draw(contextOb:any):void{
        contextOb.strokeRect(this.x,this.y,this.width,this.height);
    }
}
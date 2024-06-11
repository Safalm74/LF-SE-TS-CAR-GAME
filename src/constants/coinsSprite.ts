import coins from '../assets/coins-removebg-preview.png'
const coinsImage=new Image;
coinsImage.src=coins;

type CoinsSprite={
    coinsImage:any,
    x:number,
    y:number,
    width:number,
    height:number,
    spriteNumbers:number
}
const coinsSprite: CoinsSprite={
    coinsImage:coinsImage,
    x:6,
    y:11,
    width:48,
    height:48,
    spriteNumbers:6
    
}
export default coinsSprite;
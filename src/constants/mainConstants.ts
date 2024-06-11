import cars from '../assets/carsSprite.png';

type MainConstants={
    rootDiv:HTMLElement | null;
    inGame:boolean;
    carsSprite:any;
}
const carsSprite=new Image();
carsSprite.src=cars;

const mainConstants: MainConstants={
    rootDiv:document.getElementById('game-container'),
    inGame:false,
    carsSprite:carsSprite
}

if (mainConstants.rootDiv){
    mainConstants.rootDiv.style.height='100vh';
    mainConstants.rootDiv.style.width='100%';
    //mainConstants.rootDiv.style.backgroundColor="red";

}

export default mainConstants;
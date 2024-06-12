import mainConstants from "../constants/mainConstants";
import loadHomePage from "./home";
import { player1, reset } from "../initialize";

export default function gameoverPage(score:number){
    const wrapper= document.createElement('div');
    wrapper.style.width= `${window.innerWidth*0.2}px`;
    wrapper.style.height= `${window.innerWidth*0.2}px`;
    wrapper.style.position='absolute';
    wrapper.style.top="50%";
    wrapper.style.left="50%";
    wrapper.style.transform="translate(-50%,-50%)";
    wrapper.style.textAlign="center";
    wrapper.style.backgroundColor="#eee";
    wrapper.style.boxShadow="0 .2rem 1.2rem .2rem rgba(20,20,20,0.3)";
    wrapper.style.borderRadius="5px";


    const gameOverMsg=document.createElement('h1');
    gameOverMsg.innerHTML="GAME OVER"


    const scoreMsg=document.createElement('h1');
    scoreMsg.innerHTML=`Score:${score}`

    const goHomeBtn=document.createElement('button');
    goHomeBtn.value="Go Home";
    goHomeBtn.innerHTML="Go Home";
    goHomeBtn.addEventListener(
        'click',
        ()=>{
            loadHomePage();
        }
    );

    wrapper.appendChild(gameOverMsg);
    wrapper.appendChild(scoreMsg);
    wrapper.appendChild(goHomeBtn);
    
    
    
    if (mainConstants.rootDiv){
        mainConstants.rootDiv.appendChild(wrapper);
        reset();
        console.log(player1);
    }
    
}
import mainConstants from "../constants/mainConstants";
import canvasInitialize from "../gameCanvas";

export default function loadHomePage(){
    if (mainConstants.rootDiv){
        mainConstants.rootDiv.innerHTML='';
        //setting home page
        const homepage= document.createElement('div');
        homepage.style.display='flex';
        homepage.style.height=`100vh`;
        homepage.style.width=`100%`;
        homepage.style.justifyContent="center";
        homepage.style.alignItems="center";
        homepage.style.position='relative';
        homepage.className='home-page';
        //setting start btn
        const startBtn=document.createElement('button');
        startBtn.style.position="absolute";
        startBtn.style.top="50%";
        startBtn.style.left="50%";
        startBtn.style.transform="translate(-50%,-50%)";
        startBtn.value="Start Game";
        startBtn.innerHTML="Start Game";
        startBtn.className="start-btn";
        startBtn.addEventListener(
            'click',
            ()=>{
                canvasInitialize();
                mainConstants.inGame=true;
            }
        );
        //appending start btn to homepage

        const controlsMsg=document.createElement('p');
        controlsMsg.innerHTML=`Press'w' or click of left &nbsp 
                                side to move left And` 
        homepage.appendChild(startBtn);
        mainConstants.rootDiv.appendChild(homepage);



    }
}

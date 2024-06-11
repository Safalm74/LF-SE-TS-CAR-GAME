import mainConstants from "./constants/mainConstants";
import homeConstants from "./constants/home";
import canvasInitialize from "./gameCanvas";

export default function loadHomePage(){
    console.log(mainConstants.rootDiv);
    if (mainConstants.rootDiv){
        mainConstants.rootDiv.innerHTML='';
        //setting home page
        const homepage= document.createElement('div');
        homepage.style.display='flex';
        homepage.style.height=`${homeConstants.height}px`;
        homepage.style.width=`${homeConstants.height}px`;
        homepage.style.justifyContent="center";
        homepage.style.alignItems="center";
        //setting start btn
        const startBtn=document.createElement('button');
        startBtn.value="Start Game";
        startBtn.innerHTML="Start Game";
        startBtn.addEventListener(
            'click',
            ()=>{
                canvasInitialize();
            }
        );
        //appending start btn to homepage
        homepage.appendChild(startBtn);
        mainConstants.rootDiv.appendChild(homepage);


    }
}

type MainConstants={
    rootDiv:HTMLElement | null;
    inGame:boolean;
}

const mainConstants: MainConstants={
    rootDiv:document.getElementById('game-container'),
    inGame:false
}

if (mainConstants.rootDiv){
    mainConstants.rootDiv.style.height='100vh';
    mainConstants.rootDiv.style.width='100%';
    //mainConstants.rootDiv.style.backgroundColor="red";

}

export default mainConstants;
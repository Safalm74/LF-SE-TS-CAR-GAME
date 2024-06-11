import mainConstants from "../constants/mainConstants";
window.addEventListener(
    'keypress',
    (e)=>{
        console.log('helllo');
        if (mainConstants.inGame){
            console.log(e.key)
        }
    }
);

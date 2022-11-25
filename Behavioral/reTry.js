const externalServiceCall = function(){
    console.log("calling external service...");
    let random = Math.random();
    console.log("random is : " , random);
    const shouldPass = random < 0.4;
    if(shouldPass) return true;
    throw "Failure";
} 

const delay = function(s){
    return new Promise(ok=>{
        setTimeout(function(){
            ok();
        },s * 1000)
    })
}

const retryOperation = async function(){
    let currentTry = 0;

    while(true){
        try{
            externalServiceCall();
            console.log("Succeeded!");
            break;
        }catch(e){
            currentTry++;
            console.log(`Failed attempt ${currentTry}`);
            if(currentTry > 10){
                console.log("Retry maximum reached. Exiting");
                break;
            }
            await delay(3);
        }
    }
}

retryOperation();
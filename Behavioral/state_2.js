//context class
function MobileAlertContext(){
    var _currentState = null; // private
    return {
        //public
        setState : function(state){
            _currentState = state;
        },

        alert : function(){
            return _currentState.alert(this);
        }
    }
}

// interface
class MobileAlertState{
    constructor(alert) {
        this.alert = alert
    }
}

function Vibration(){
    return new MobileAlertState((context)=>{
        // make change state use context
        console.log("Vibration...");
    })
}

function Silent(){
    return new MobileAlertState((context)=>{
        console.log("Silent...");
    })
}

function main(){
    const mobileAlert = new MobileAlertContext();
    mobileAlert.setState(new Vibration());
    mobileAlert.alert();
    mobileAlert.alert();
    mobileAlert.setState(new Silent());
    mobileAlert.alert();
}

main();

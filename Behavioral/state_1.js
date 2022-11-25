//class Context
function DocumentContext(){
    var _state = null;

    return {
        setState : function(state){
            _state = state;
        },

        applyState : function(){
            return _state.handleRequest();
        }
    }
}

// class state interface
class State{
    constructor(handleRequest){
        this.handleRequest = handleRequest
    }
}

// class conctre class , implement interface
function newState (){
    return new State(()=>{
        console.log("Create a new Document");
    })
}

function submittedState(){
    return new State(()=>{
        console.log("Submitted");
    })
}

function approvedState(){
    return new State(()=>{
        console.log("Approved");
    })
}


function main(){
    var context = new DocumentContext();

    context.setState(new newState());
    context.applyState();

    context.setState(new submittedState());
    context.applyState();

    context.setState(new approvedState());
    context.applyState();

}

main();
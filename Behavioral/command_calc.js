// ivoker
const Calculator = function(){
    var _current        = 0;
    var _commandStack   = [];

    return {
        execute : function(command, ...args){
            _commandStack.push(command);
            return command.execute(...args);
        },

        undo : function(...args){
            let command = _commandStack.pop();
            return command.execute(...args);
        }
    }
}

// receiver
class Operator {
    constructor(){
        this.result = 0;
    }

    add({x , y}){
        this.result = x + y;
    }

    sub({x , y}){
        this.result = x - y;
    }

    mul({x , y}){
        this.result = x * y;
    }

    div({x , y}){
        this.result = x/y;
    }
}

class command{
    constructor(execute){
        this.execute = execute;
    }
}

function AddCommand(operator, math){
    return new command(()=>{
        operator.add(math);
        console.log("the result is : ", operator.result);
    });
}

function SubCommand(operator, math){
    return new command(()=>{
        operator.sub(math);
        console.log("the result is : ", operator.result);
    });
}

function MulCommand(operator, math){
    return new command(()=>{
        operator.mul(math);
        console.log("the result is : ", operator.result);
    });
}

function DivCommand(operator, math){
    return new command(()=>{
        operator.div(math)
        console.log("the result is : ", operator.result);
    });
}

function main(){
    const myCalc      = new Calculator();
    const operator    = new Operator();
    myCalc.execute(new AddCommand(operator, {x: 1, y : 2}));
    myCalc.execute(new AddCommand(operator, {x: 3, y : 5}));
    myCalc.undo();
    myCalc.undo();
}

main();
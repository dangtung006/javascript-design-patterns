// class Context

function Context(model){
    var _ac_model     = model ? model : "";
    var _isAirCraft   = false;

    return {

        getModel : function(){
            return _ac_model;
        },

        getLength : function(){
            return _ac_model.length;
        },

        getLastChar : function(){
            return _ac_model[_ac_model.length - 1];
        },

        getFirstChar : function(){
            return _ac_model[0];
        },

        isAirCraft : function(){
            return _isAirCraft;
        },

        setAirCraft : function(isAirCraft){
            _isAirCraft = isAirCraft;
        }
    }
}
// Expression class interface :
class Expression {
    constructor(interpretContext){
        this.interpretContext = interpretContext;
    }
}
// Expression implement :
function CheckExpression(context){
    return new Expression(()=>{
        if(context.getFirstChar() != "A" && context.getFirstChar() != "B") return context.setAirCraft(false);
        if(context.getLength() == 4 || context.getLength() == 5)  context.setAirCraft(true);
    })
}

function BrandExpression(context){
    return new Expression(()=>{
        if(!context.isAirCraft()) return console.log("Brand could not be interpreted");
        if(context.getFirstChar() == "A") return console.log("Brand is Airbus");
        if(context.getFirstChar() == "B") return console.log("Brand is Boeing");
    })
}

function ModelExpression(context){
    return new Expression(()=>{
        if(!context.isAirCraft()) return console.log("Model could not be interpreted");
        console.log("Model is : " , context.getModel().substring(1, 3));
    });
}

function TypeExpression(context){
    return new Expression(()=>{
        if(!context.isAirCraft()) return console.log("Type could not be interpreted");
        if(context.getLength == 5 && context.getLastChar() == "F") return console.log("Aircraft type is Cargo/Freighter");
        console.log("Aircraft type is Passenger Transportation");
    });
}

function main(){
    let contexts = [new Context("A330"), new Context("A330F"), new Context("B777"), new Context("B777F"), new Context("Haaaa")]
    let expresssionList = [CheckExpression, BrandExpression, ModelExpression, TypeExpression ];
    new expresssionList[0](new Context("A330")).interpretContext();

    for(let idx = 0; idx < contexts.length ; idx++){
        for(let jdx = 0; jdx < expresssionList.length; jdx++){
            new expresssionList[jdx](contexts[idx]).interpretContext();
        }
        console.log("==========================");
    }
}
main();
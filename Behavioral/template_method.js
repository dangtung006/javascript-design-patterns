//abtract object 
var dataStore = {
    process : function(){
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
}

const inherit = function(proto){
    var Fn = function(){};
    Fn.prototype= proto;
    return new Fn();
}

var mySql = inherit(dataStore);

mySql.connect = function(){
    console.log("connect to mysql");
}

mySql.select = function(){
    //overide method 
    console.log("SELECT * FROM");
}

mySql.disconnect = function(){
    console.log("disconnected");
}


var mongoDB = inherit(dataStore);

mongoDB.connect = function(){
    console.log("connect to mongoDB");
}

mongoDB.select = function(){
    //overide method 
    console.log("find({})");
}

mongoDB.disconnect = function(){
    console.log("disconnected");
}

mySql.process();
mongoDB.process();

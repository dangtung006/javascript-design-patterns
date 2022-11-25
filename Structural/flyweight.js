function Flyweight(make, model, processor){
    this.make = make;
    this.model = model;
    this.processor = processor;
}

var FlyWeightFactory = (function(){
    var flyweights = {}

    return {
        get : function(make, model, processor){
            if(!flyweights[make + model]){
                flyweights[make + model] = new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },

        getCount : function(){
            var count = 0;
            for(var f in flyweights ){
                if(f) count++;
            }
            return count++;
        }
    }

})();

var Computer  = function(make, model, processor, memory, tag){
    this.flyweights = new FlyWeightFactory.get(make, model, processor);
    this.memory     = memory;
    this.tag        = tag;
    this.getMake    = function(){
        return this.flyweights[make];
    }
}

function ComputerCollection() {
    var computers = {};
    var count = 0;

    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] = new Computer(make, model, processor, memory, tag);
            count++;
        },

        get: function (tag) {
            computer =  computers[tag]; 
            let { flyweights , memory } = computer;
            computer = {...flyweights, memory, tag };
            return computer;
        },

        getCount: function () {
            return count;
        }
    };
}

function main() {
    var computers = new ComputerCollection();
    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computers: " + computers.getCount());
    console.log("Computers: " + JSON.stringify(computers.get("Y755P")));
    console.log("Flyweights: " + FlyWeightFactory.getCount());
}
main();

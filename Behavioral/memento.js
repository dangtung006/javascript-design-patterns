// class Memento
class Memento {
    constructor({name, street, city, state}){
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

function person(name, street, city, state){

    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    let self = this;

    return {
        hydrate : function(){
            return JSON.stringify(new Memento(self));
        },

        dehydrate: function (memento) {
            var m = JSON.parse(memento);
            return {...m}
        }
    }
}

function CareTaker() {
    this.mementos = {};

    this.add = function (key, memento) {
        this.mementos[key] = memento;
    },

    this.get = function (key) {
        return this.mementos[key];
    }
}

function main(){
    var caretaker = new CareTaker();

    var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
    var john = new Person("John Wang", "48th Street", "San Jose", "CA");
    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    console.log(mike);
    console.log(john);
}


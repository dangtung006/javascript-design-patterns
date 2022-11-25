class Car {
    constructor(){
    }

    view(){
        console.log(this.name);
    }
}

class Honda extends Car{
    constructor(opt){
        super(opt);
        this.name = opt.name
    }
}

class Toyota extends Car {
    constructor(opt){
        super(opt);
        this.name = opt.name
    }
}

class BMW extends Car {
    constructor(opt){
        super(opt);
        this.name = opt.name
    }
}

class FactoryCar {

    view(type){
        if(type == "honda")  return new Honda({ name : "My_honda"}).view();
        if(type == "toyota") return new Toyota({ name : "My_toyota"}).view();
    }
}

class Boss {
    viewCar(type){
        const carFactory = new FactoryCar()
        return carFactory.view(type);
    }
}

var Boss_hoa = new Boss();
Boss_hoa.viewCar("honda");
class Observer {
    constructor(name){
        this.name = name;
        this.destination = "";
    }

    updateStatus(location){
        this.destination = location;
        this._goToHelp(location);
    }

    _goToHelp(location){
        console.log(`${this.name} is going to ${location}`);
    }
}

class Subject{
    constructor(){
        this.observerList = [];
    }

    addObserver(observer){
        this.observerList.push(observer);
    }

    notify(location){
        for(let idx = 0; idx < this.observerList.length; idx++){
            this.observerList[idx].updateStatus(location);
        }
    }
}
const subject = new Subject();
subject.addObserver(new Observer("Teo"));
subject.addObserver(new Observer("Ti"));
subject.notify("anh em quan");

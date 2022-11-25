class Boss {
    receiveRequest(offer){
        console.log("approve the offer : " , offer);
    }
}

class Secretary{
    constructor(){
        this.leader = new Boss();
    }

    sendRequestToBoss(offer){
        this.leader.receiveRequest(offer);
    }
}

class Deverloper{
    constructor(offer){
        this.offer = offer;
    }

    makeRequest(personReceiveRequest){
        personReceiveRequest.sendRequestToBoss(this.offer);
    }
}
const dev = new Deverloper("salary up to 5k");
dev.makeRequest(new Secretary());

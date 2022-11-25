//Receiver
class Order{
    constructor() {
        this._orders = [];
    }

    add(orderDetail){
        this._orders.push(orderDetail);
    }

    cancle(orderdetail){
        let { id }    = orderdetail;
        this._orders  = this._orders.filter(order => order.id !== id);
    }

    getDetail(orderDetail){
        let { id }    = orderDetail;
        let orderInfo = this._orders.filter(order => order.id === id);
        if(orderInfo.length > 0) return true;
    }
}

//Class Invoker
class OrderControl{

    constructor(){
        this.commands = [];
    }

    execute(command, ...args) {
        this.commands.push(command);
        return command.execute(...args);
    }
}

//class Commander interface
class Command{
    constructor(execute) {
        this.execute = execute;
    }
}

// class command implement
function PlaceOrderCommand(orderStore, orderdetail){
    return new Command(()=>{
        orderStore.add(orderdetail);
        console.log(`You have successfully ordered ${JSON.stringify(orderdetail)}`);
    })
}

function CancelOrderCommand(orderStore, orderdetail) {
    return new Command(() => {
        orderStore.cancle(orderdetail);
        console.log(`You have canceled your order ${JSON.stringify(orderdetail)}`);
    });
}

function TrackOrderCommand(orderStore, orderdetail){
    return new Command(() => {
        orderStatus = orderStore.getDetail(orderdetail);
        if(!orderStatus) return console.log("invalid order"); 
        console.log(`Your order ${JSON.stringify(orderdetail)} will arrive in 20 minutes.`)
    });
}

function main(){
    const manager    = new OrderControl();
    const orderStore = new Order();
    let orderDetail  = {  "id" : 1234, "name" : "com rang"}
    
    manager.execute(new PlaceOrderCommand(orderStore, orderDetail));
    manager.execute(new TrackOrderCommand(orderStore, orderDetail));
    manager.execute(new CancelOrderCommand(orderStore, orderDetail));
}

main();
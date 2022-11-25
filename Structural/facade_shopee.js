class Discount {
    calc(val){
        // discount 10%
        return val - val * 0.1;
    }
}

class Fees {
    calc(val){
        // 5% fee;
        return val + val * 0.05;
    }
}

class Shiping{
    calc(){
        return 5;
    }
}

class ShopeeFacadePatern{
    constructor(){
        this.discount = new Discount();
        this.shiping  = new Shiping();
        this.fees     = new Fees();
    }

    calc(price){
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price = price + this.shiping.calc();
        return price;
    }
}

function calcPrice(price){
    const shopee = new ShopeeFacadePatern();
    console.log(`${shopee.calc(price)} vnd`);
}

calcPrice(120000);

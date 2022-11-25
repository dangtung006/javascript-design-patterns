const preOrderPrice = function(originalPrice){
    return originalPrice * 0.8
} 

const promotionPrice = function(originalPrice){
    return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 30;
}

const defaultPrice = function(originalPrice){
    originalPrice
}

const strategyPrice = { preOrderPrice , promotionPrice, defaultPrice };

function getStrategyPrice(originalPrice, type){
    return strategyPrice[type](originalPrice);
}

let price = getStrategyPrice(120000, "preOrderPrice");
console.log("price : " , price);

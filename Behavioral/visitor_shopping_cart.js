class Book {
    constructor(price, isbnNumber){
        this._price = price;
        this._isbnNumber = isbnNumber;
    }

    getPrice(){
        return this._price;
    }

    getIsBnNumber(){
        return this.__isbnNumber;
    }

    accept(visitor){
        return visitor.visit("book", this);
    }
}

class Fruit {
    constructor(pricePerKg, weight, name){
        this._pricePerKg = pricePerKg;
        this._weight     = weight;
        this._name       = name;
    }

    getPricePerKg() 
    {
        return this._pricePerKg;
    }
   
    getWeight() 
    {
        return this._weight;
    }
   
    getName()
    {
        return this._name;
    }

    accept(visitor){
        return visitor.visit("fruit", this);
    }
}

class ShoopingCartVisitor {
    constructor(){
        this._element = ["book", "fruit"]
    }

    visit(type, element){
        if(this._element.includes(type)) {
            if(type == "book") return visitBook(element);
            if(type == "fruit") return visitFruit(element);
        }
    }

    visitBook(book){
        return book.getPrice() > 50 ? (book.getPrice()-5) : book.getPrice();
    }

    visitFruit(fruit){
        return fruit.getPricePerKg()*fruit.getWeight();
    }
}

function main(){
    let items = [ new Book(20, "1234"), Fruit(10, 2, "Banana"), Fruit(5, 5, "Apple")];
    let visitor = new ShoopingCartVisitor();
    let sum   = 0;
    for(let idx = 0; idx < items.length; idx++){
        sum = sum + item.accept(visitor);
    }
    console.log("sum : ", sum);

}
main();
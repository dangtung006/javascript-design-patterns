//Class Iterator : 
function Iterator(items)
{
  this.items = items;
  this.index = 0;
  this.step  = 1;
}

Iterator.prototype = {
    
    hasNext: function()
    {
        return this.index < this.items.length;
    },

    next: function()
    {
        this.index = (this.index + 1 < this.items.length) ? this.index + 1 : this.items.length;
        return this.items[this.index];
    },

    prev : function(){
        this.index  = this.index - 1 < 0 ?  0 : this.index - 1;
        return this.items[this.index];
    },

    current : function(){
        return this.items[this.index];
    },

    first : function(){
        return this.items[0];
    },

    last : function(){
        return this.items[this.item.length -1];
    },
}

// class Collection 
function Collection(){
    const MAX_ITEM = 6;
    var numOfItem = 0;
    var itemList = [];
    var iterator = null;

    return {
        addItem : function(item){
            if(numOfItem > MAX_ITEM ) return console.log("It is Full");
            itemList[numOfItem] = item;
            this.addNumOfItems();
        },

        getNumOfItems : function(){
            return numOfItem;
        },

        getCollection : function(){
            return itemList;
        },

        addNumOfItems : function(){
            numOfItem += 1;
        },

        getIterator : function(){
            if(!iterator) iterator = new Iterator(itemList);
            return iterator;
        }
    }
}

function main(){
    var myCollection = new Collection();
    myCollection.addItem(1);
    myCollection.addItem(false);
    myCollection.addItem("Devsage");
    myCollection.addItem(3.14);

    var iterator = myCollection.getIterator();
    while(iterator.hasNext()){
        console.log(iterator.next());
        console.log(iterator.hasNext());
    }

}

main();



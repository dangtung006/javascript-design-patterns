// convert vietnamese to japanese by translateAdapter

function VietnameseAdaptee(){
    this.send = function(words){
        //.............
        return words
    }
}

function TranslatorAdaptor(adaptee){
    this.wordsStore = { 'xin chao' : 'こんにちは'}
    this.adaptee    = adaptee;

    this.send = function(words){
        console.log("Reading Words ...");
        var convertedWord = this.translate(words);
        console.log("Sending Words ...");
        return this.adaptee.send(convertedWord);
    }

    this.translate = function(words){
        return this.wordsStore[words];
    }
}

function JapaneseTarget(){
    this.receive = function(word){
        console.log("Receiving word from Adapter");
        console.log("the word converted is : ", word);
    }
}

function main(){
    let apdator  = new TranslatorAdaptor(new VietnameseAdaptee());
    let conveted = apdator.send("xin chao");
    let clientJapanese = new JapaneseTarget();
    clientJapanese.receive(conveted);
}

main();
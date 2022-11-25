class office {
    constructor(){
        this.mCountTable = 0;
        this.mCountChair = 0;
        this.mCountLight = 0;
        this.mCountAir   = 0;
        this.mCountFan   = 0;
    }

    getOfficeInfo(){
        return {
            table : this.mCountTable,
            chair : this.mCountChair,
            light : this.mCountLight,
            air   : this.mCountAir  ,
            fan   : this.mCountFan  
        }
    }
}

class officeBuilder {
    constructor(){
        this.office = new office();
    }

    setTable(num){
        this.office.mCountTable = num;
    }

    setChair(num){
        this.office.mCountChair = num;
    }

    get(){
        return this.office;
    }
}

function makeOffice(){
    var Office = new officeBuilder();
    Office.setTable(1);
    Office.setChair(4);
    return Office.get();
}

let myOffice = makeOffice().getOfficeInfo();
console.log("myOffice : " , myOffice);
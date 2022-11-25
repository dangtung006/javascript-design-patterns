//implement claass;
function account(){
    this.openAccount = function(type){
        console.log(type);
    }
}

function checkingAccount() {
    this.account = new account();
    this.openAccount = function(type){
        return this.account.openAccount("open checking account");
    }
}
//abtraction class
function savingAccount() {
    this.account = new account();;
    this.openAccount = function(type){
        return account.openAccount("open saving account");
    }
}

function Bank (){
    this.openAccount = function(account){
        return account.openAccount();
    }
}

function NhaNgeoBank(account){
    this.bank = new Bank();

    this.openAccount = function(){
        return this.bank.openAccount(account);
    }
}

const nhangeoBank = new NhaNgeoBank(new savingAccount());
nhangeoBank.openAccount();
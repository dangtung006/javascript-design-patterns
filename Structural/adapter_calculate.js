class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    sub(num1, num2){
        return num1 - num2;
    }

    div(num1, num2) {
        return num1 / num2;
    }
    
    mul(num1, num2) {
        return num1 * num2;
    }
}

class CalculatorAdapter {
    constructor(calculator) {
        this.calculator = new calculator();
    }

    calc(num_1, num_2, operation){
        switch(operation){
            case "add" : return this.calculator.add(num_1, num_2);
            case "sub" : return this.calculator.sub(num_1, num_2);
            case "mul" : return this.calculator.mul(num_1, num_2);
            case "div" : return  his.calculator.div(num_1, num_2);
            default : return NaN;
        }
    }
}

const calcAdapter = new CalculatorAdapter(Calculator);
const sumAdapter = calcAdapter.calc(2, 2, "mul");
console.log("sumAdapter : " , sumAdapter);
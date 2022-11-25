function Employee(name, salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary : function(){
        return this.salary;
    },

    setSalary : function(sal){
        this.salary = sal;
    },

    accept : function(visitor){
        return visitor(this);
    }
}

const extraSalary  = function(employee){
    employee.setSalary(employee.getSalary() * 2);
}

let kien = new Employee("kien", 2000);

console.log(kien.getSalary());
kien.accept(extraSalary);
console.log(kien.getSalary());

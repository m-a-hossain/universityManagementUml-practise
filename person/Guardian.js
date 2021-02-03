const Person = require('./Person')

const _profession = Symbol('profession')
const _income = Symbol('income')

class Guardian extends Person{
    constructor(id, name, profession, income){
       super(id,name);
    this[_income] =null
    this[_profession] = null
    }
     
    get income(){
        return this[_income]
    }

    set income(value){
        this[_income] =value
    }

    get profession(){
        return this[_profession]
    }

    set profession(value){
        this[_profession] = value 
    }

    toString(){
        super.toString();
        console.log('Accounts= ${this[_account]}')
        console.log('Professin= ${this[_profession]}')
    }
}

module.exports = Guardian
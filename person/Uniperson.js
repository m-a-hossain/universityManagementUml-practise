const Person= require('./Person')

const _department =Symbol('department')
const _account =Symbol('account')

class UnyPerson extends Person{
    constructor(id,name, department, account){
        super(id,name)
      this[_department] =null;
      this[_account] =null;
    }
  
    get department(){
        return this[_department]
    }

    set department(value){
        this[_department]=value
    }

    get account(){
        this[_account]= account
    }

    set account(value){
        this[_account]=value
    }

    toString(){
      super.toString()
      console.log('Deartment= ${this[_department]}')
      console.log('Account= ${this[_account]}')
    }
}

export default UnyPerson;
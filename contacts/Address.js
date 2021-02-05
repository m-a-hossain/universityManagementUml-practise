
const _id = Symbol('id')
const _roadNo =Symbol('roadNo')
const _city =Symbol('city')
const _region=Symbol('region')
const _country =Symbol('country')
const _postalCode =Symbol('postalCode')

class Address{
    constructor({id,roadNo,city,region,country,postalCode}){
        this[_id] = id
        this[_roadNo] = roadNo || ""
        this[_city]=   city || ""
        this[_region] =region || ""
        this[_address] =address || ''
        this[_postalCode]=postalCode || ""
    }
    get id(){
        return this[_id]
    }
   /*  set id(value){
        this[_id]= value
    } */
    get roadNo(){
        return this[_roadNo]
    }
    set roadNo(value){
        this[_roadNo]
    }
    get city(){
        return this[_city]
    }
    set city(value){
        this[_city]
    }
    get region(){
        return this[_region]
    }
    set region(value){
        this[_region]
    }
    get address(){
        return this[_address]
    }
    set address(value){
        this[_address]
    }
    get postalCode(){
        return this[_postalCode]
    }
    set postalCode(value){
        this[_postalCode]
    }

    toString(){
        return `roadNo : ${this[_roadNo]}, city: ${this[_city]}, region:${this[_region]}, address: ${this[_address]}, postalCode:${this[_postalCode]}`
    }
}

module.exports = Address
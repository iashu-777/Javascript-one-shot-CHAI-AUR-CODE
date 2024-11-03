//propeties wale me function banake getter setter deka , yahan pe object banake lagayenge

const User={
    _email:'h@hc.com',
    _password:"abcdef",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}
const chai=Object.create(User)

chai.email='ashish@gmail.com'
console.log(chai.email)
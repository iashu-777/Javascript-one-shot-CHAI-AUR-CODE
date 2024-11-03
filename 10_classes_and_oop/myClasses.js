
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(){
    this.password+='abc'
    return this.password;
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const chai=new User("ashish","chai@gmail.com","123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

//behind the scene**********************************************

function UserBTS(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

UserBTS.prototype.encryptPassword=function(){
    this.password+='abc'
    return this.password;
}

UserBTS.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const chaiBTS=new UserBTS("ashish","chai@gmail.com","123")

console.log(chaiBTS.encryptPassword())
console.log(chaiBTS.changeUsername())

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
}

const chai=new User("ashish","chai@gmail.com","123")
console.log(chai.encryptPassword())
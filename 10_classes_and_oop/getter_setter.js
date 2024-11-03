//getter setter use _ ke sath karte hai use , to matlab kuch private properties hai unka access normal users ko nai hona chaiye
//getter ke sath hamesa , setter use karte hai
//class ke bahar se koi value get karna chahte ho isliye getter hota hai , koi value fir class ke andar set karna chahte ho to setter hota hai
//constructor bhi value set kar raha aur setter bhi value set kar raha , to dono me race lag jati hai , that race is problematic , and throw error `maximum  call stack size exceeded` , to bas ek underscore maar dete hai setter aur getter me
//value override kar dete hai

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    // return this._password.toUpperCase();
    return `${this._password}hitesh`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const ashu = new User("hitesh@hites.ai", "abcd");
console.log(ashu.password);
console.log(ashu.email);

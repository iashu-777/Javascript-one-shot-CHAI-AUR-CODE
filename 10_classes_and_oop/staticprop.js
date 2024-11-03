// ******************************************************
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username ${this.username}`);
    }
    static createId(){ //ye static keyword createID ka access rok dega
        return Math.random().toString(36).substr(2, 9);
    }
}

const hitesh=new User("hitesh")
// console.log(hitesh.createId()) throws error bcz static keyword restrict access of createID function

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new Teacher("ipphone","i@phone.com")
iphone.logMe()
// iphone.createId() //child bhi nai kar sakta static ki wajah se access


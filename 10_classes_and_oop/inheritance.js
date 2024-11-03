// *********************************************************
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Hello, I am ${this.username}`) 
    }
}

class Teacher extends User{ //user ki saari functionality Teacher me a gayi
    constructor(username,email,password){
        super(username) //parent class me ayega , .call nai karna padega faltu me
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chaiTeacher=new Teacher('chai','chai@teacher.com','233232sd')

chaiTeacher.addCourse()
chaiTeacher.logMe()

const masalaChai=new User("masala")
masalaChai.logMe()

console.log(chaiTeacher === Teacher) //false
console.log(chaiTeacher instanceof Teacher) //true
console.log(chaiTeacher instanceof User) //true

//**********************************************************************

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//promise banana sikh rahe
//promise take a function , which have two parts first is resolve and another is reject
//matlab ya to promise pura hoga ya nai hoga

//*****************************************************

//promise created
const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //DB calls, cryptography ,network
  setTimeout(function () {
    console.log("async task is complete");
    resolve(); //ab  ye jo resolve likha hai , ab ye connect hoga 'then' se
  }, 5000);
});

//******************************************************
//promise consumption

promiseOne.then(function () {
  console.log("promiseOne consumed");
}); //promiseOne.then ka connection hai seedha resolve ke sath

//*******************************************************

//now we see promise making without variable

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 is complete");
    resolve();
  }, 8000);
}).then(function () {
  console.log("promise 2 consumed");
});

//******************************************************
//resolve ke andar jo parameter pass kiya , wahi 'then' ke andar retrieve kar liya
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//******************************************************

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error) {
      reject("error: something went wrong");
    } else {
      resolve({ username: "ashu", email: "ashu@example.com" });
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("the promise is either resolved or rejected");
  }); //jab promise reject hoga to catch me chalega,warna then me chalta hai,kaam khatam hogaya ya nai , wo finally me ayega

//******************************************************

//promise five , with use of async await ,try and catch

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error) {
      reject("error: JS went wrong");
    } else {
      resolve({ username: "javascript", password: "ulelelele" });
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//********************************************************

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); //time lagega isko fetch karne me to await ka use karenge
//     const data =await response.json(); //response ko json me covert kar diya ,isko bhi convert hone me time lagta hai
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

//convertng above function in .then.catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //upar wale then ne jo value bhezi hai wo yahan wale then me value retrieve hoti hai . iss chaining ko thenable bolte hai
    console.log(data);
  })
  .catch((error) => {
    console.log("E: ", error);
  });

  //********************************************************

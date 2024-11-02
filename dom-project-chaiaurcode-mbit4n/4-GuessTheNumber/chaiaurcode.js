let randomNumber=(parseInt(Math.random()*100+1))
const submit=(document.querySelector('#subt'))
const UserInput=(document.querySelector('#guessField'))
const guessSlot=(document.querySelector('.guesses'))
const remaining=(document.querySelector('.lastResult'))
const lowOrHi=(document.querySelector('.lowOrHi'))
const startOver=(document.querySelector('.resultParas'))

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(UserInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){ //check that the value is between 1 and 100 and it is a number or not

    if(isNaN(guess)||guess<1||guess>100){
        alert('please enter a valid number between 1 and 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over: Random number was ${randomNumber}`)
            playGame=false
            endGame()
        }
        else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){ //checks that value is equal , lesser and greater than random number or not

    if(guess===randomNumber){
        displayMessage('Congratulations! You guessed it right')
        playGame=false
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage('Too low')
    }
    else{
        displayMessage('Too high')
    }
    
}
function displayGuess(guess){ //clean current value , update previous guesses ,and guesses remaining

    UserInput.value=''
    guessSlot.innerHTML+=`${guess}   `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){//display msg whether input value is higher greater 
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
    UserInput.value=''
    UserInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        e.preventDefault()
        randomNumber=(parseInt(Math.random()*100+1))
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML='10'
        UserInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML=''
        UserInput.value=''
        
        playGame=true

    })
}

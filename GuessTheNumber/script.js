let random_number=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const inputField=document.querySelector('#guessField')
const guesses=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lohi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');
let prevguess=[];
let numguess=1
let playgame=true
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(inputField.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }else if(guess<1){
        alert('Please enter number greater than 1')
    }else if(guess>100){
        alert('Please enter number less than 100')
    }else{
        prevguess.push(guess);
        if(numguess==11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random_number}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===random_number){
        displayMessage("You Guessed it right");
        endGame()
    }else if(guess<random_number){
        displayMessage('Number is TOO Low');
    }
    else if(guess>random_number){
        displayMessage('Number is TOO High');
    }
}

function displayGuess(guess){
    inputField.value= '';
    guesses.innerHTML+=`${guess} `
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
}

function displayMessage(message){
    lohi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
    let newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        random_number=parseInt(Math.random()*100+1);
        prevguess=[]
        numguess=1;
        guesses.innerHTML=''
        remaining.innerHTML=`${11-numguess}`;
        inputField.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame=true
    })
}
function endGame(){
    inputField.value=''
    inputField.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playgame=false;
    newGame()
}

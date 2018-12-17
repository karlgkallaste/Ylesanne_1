const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const results = document.querySelector('.results');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let randomNumber = Math.floor(Math.random()* 100) +1;

let guessCount = 1;

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  
  if (guessCount === 1){
    guesses.textContent = 'Eelnevad pakkumised: '  
  }
  guesses.textContent += `${userGuess} `;
  
  if(userGuesses ===randomNumber){
    //kood
  }
  else if (guessCount === 10){
    //10 arvamist.
  }
  else{
    if (userGuesses < randomNumber){
      //liigakõrhe
    }
    else if (userGuesses > randomNumber){
      //liiga madal
    
    }
  }
    guessCount ++;
};
guessSubmit.addEventListener('click', checkGuess);

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const results = document.querySelector('.results');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const uus = document.querySelector('.uus');

let randomNumber = Math.floor(Math.random()* 100) +1;

let guessCount = 1;

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  
  if (guessCount === 1){
    guesses.textContent = 'Eelnevad pakkumised: '  
  }
  guesses.textContent += `${userGuess} `;
  
  if(userGuess ===randomNumber){
    //success
    lastResult.textContent = 'Palju õnne sa võitsid!'
    lastResult.style.backgroundColor = 'green'
    lowOrHigh.textContent = '';
  }
  else if (guessCount === 10){
    //10 arvamist.
    lastResult.textContent = 'Mäng läbi!'
    lastResult.style.backgroundColor = 'red'
    guesses.textContent = ''
    lowOrHigh.textContent = ""
  }
  else{
    lastResult.textContent = 'Vale vastus'
        lastResult.style.backgroundColor = 'red'
    if (userGuess < randomNumber){
      //liigakõrhe
      lowOrHigh.textContent = "Liiga madal"
    }
    else if (userGuess > randomNumber){
      //liiga madal
            lowOrHigh.textContent = "Liiga kõrge"
    
    }
  }

    guessCount ++;
    guessField.value = '';
    guessField.focus ();
};

guessSubmit.addEventListener('click', checkGuess);
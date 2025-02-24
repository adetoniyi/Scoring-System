#!/usr/bin/env node

// Number Guessing Game without Math.floor() and Math.random()

// random number generator LCG
function customRandom(seed) {
  const a = 120;
  const c = 11200;
  const m = 2 ** 5;
  seed = (a * seed + c) % m;
  return seed / m; 
}

// floor function using parseInt
function customFloor(number) {
  return parseInt(number.toString());
}

let seed = Date.now(); // Using current timestamp as a seed
let randomNum = customFloor(customRandom(seed) * 50) + 1;
let initialScore = 50;
let numAttempts = 1;
console.log('Guess a number between 1 and 50!');

function guessNumb(userGuess) {
  try {
      if (typeof userGuess !== 'number' || isNaN(userGuess)) {
          throw new Error('Invalid input');
      }

      numAttempts++;

      if (userGuess === randomNum) {
          console.log(`\nCongratulations! You guessed the correct Number: ${randomNum}`);
          console.log(`Attempts: ${numAttempts}, Final Score: ${initialScore}`);
          resetGame();
      } else {
          initialScore -= 2;
          if (initialScore <= 0) {
              console.log('Game Over');
              resetGame();
              return;
          }
          if (userGuess < randomNum) {
              console.log('Too low, Try again');
          } else {
              console.log('Too high, Try again');
          }
          console.log(`Current Score: ${initialScore}`);
      }
  } catch (error) {
      console.error(`Error: ${error.message}`);
  }
}

function resetGame() {
  seed = Date.now();
  randomNum = customFloor(customRandom(seed) * 50) + 1;
  initialScore = 50;
  numAttempts = 1;
  console.log('\nNew Game Started, Guess a number');
}

guessNumb(15) 
guessNumb(12)
guessNumb(20)
guessNumb(40)
guessNumb(1)

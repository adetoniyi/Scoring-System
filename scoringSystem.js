#!/usr/bin/env node

//number guessingn game with scoring system 

let randomNum = Math.floor(Math.random() * 500) + 1
let initialScore = 50 
let numAttempts = 1
console.log('number between 1 and 50!') 

function guessNumb (userGuess) {
    numAttempts++
    if (userGuess === randomNum) {
        console.log(`Congratulations! You guessed the correct Number: ${randomNum}`)
        console.log(`Attempts: ${numAttempts}, final score: ${initialScore}`)
        resetGame()
    } else {
        initialScore -= 4
        if (userGuess < randomNum) {
            console.log('Too low, Try again')
        } else {
            console.log('Too low, Try again')
        }
        console.log(`Current Score: ${initialScore}`)
    }
}
function resetGame() {
    randomNum = Math.floor(Math.random()* 50) + 1
    initialScore = 50
    numAttempts = 1
    console.log('\nNeew Game Started, Guess the a number between 1 and 100')
}

guessNumb(20)
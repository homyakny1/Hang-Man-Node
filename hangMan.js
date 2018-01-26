var fs = require("fs");
var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");

// array with movie names
var words = ["titanic", "avatar", "iron man", "avengers", "it", "matrix", "wonder woman", "logan", "justice league", "star wars", "thor"];

startGame()

//fucntion to start the game
function startGame() {
    //this starts the function to choose a random word
    var choosenWord = ranWord();
    //displays underscores instead of random word
    console.log(choosenWord.display());
    //remaining guesses user has
    var remainingGuesses = 10;
    // array for user guesses
    var myGuesses = [];
    // asks user to input a letter, until he losses or wins
    do {
        console.log(`Guesses Remaining: ${remainingGuesses}`)
        console.log(`Incorrect Guesses: ${myGuesses.join(" ")}`)
        userInput();
        // check the user input
        console.log(myInput.userGuess);
        var found = choosenWord.checkLetters(myInput.userGuess);
        if (!found) {
            myGuesses.push(myInput.userGuess);
            remainingGuesses--;
        }
    }
    while (remainingGuesses > 0 && !choosenWord.complete)
    console.log(choosenWord.display());
};

//function to choose a random word, and brake it in to the letters
function ranWord() {
    var choosenWord = words[Math.floor(Math.random() * words.length)];
    var letterArray = [];
    for (let i = 0; i < choosenWord.length; i++) {
        letterArray.push(new Letter(choosenWord[i]));
    }
    return new Word(letterArray);
};
//function to captire user's input and then check with a letter array
function userInput() {
    return new Promise((resolve, reject) => {
        inquirer.prompt([{
            type: "input",
            message: "Please type your guess",
            name: "userGuess"
        }]).then((result) => {
            resolve(result);
        });
    });
};
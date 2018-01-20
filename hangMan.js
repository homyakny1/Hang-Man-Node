// dependency for inquirer npm package
var inquirer = require("inquirer");

var randomWord = "";
var letters = "";
// constructor function for choosing arandom word
function word(words){
    this.words = words;
    this.randomWordFunction = function(){
    randomWord = this.words[Math.floor(Math.random()*words.length)];
    };
};
function letter(randomWord){
    this.ramWord = randomWord;
    this.lettersFunction = function(){
    letters = this.ramWord.split("");
    }
};

new letter = randomWord;

var words = new word(["titanic","avatar","iron man","avengers","it","matrix", "wonder woman","logan","justice league","star wars","thor",]);
words.randomWordFunction();
console.log(randomWord);
randomWord.lettersFunction();
console.log(letters);
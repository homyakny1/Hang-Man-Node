function Word(letterArray){
	this.letters = letterArray;
	this.length = letterArray.length;
	this.complete = false;
}
Word.prototype.display = function(){
	let result = "";
	this.letters.forEach((item)=>{
		result += item.display() + " ";
	});
	return result;
}
Word.prototype.checkLetters = function(guess){
	let complete = true
	let foundOne = false;
	this.letters.forEach((item)=>{
		let found = item.check(guess);
		if(!item.guessed){
			complete = false;
		}
		if(found){
			foundOne = true;
		}
	});
	this.complete = complete;
	return foundOne;
}



module.exports = Word;
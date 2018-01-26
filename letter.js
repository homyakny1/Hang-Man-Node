function Letter(value){
	this.value = value;
	this.guessed = value === " " ? true : false;
}
Letter.prototype.display = function() {
	if(this.value === " ") return " ";
	return this.guessed ? this.value : "_";
};
Letter.prototype.check = function(guess){

	if(!this.guessed && guess.toLowerCase() === this.value.toLowerCase()){
		this.guessed = true;
		return true;
	}else{
		return false;
	}
}


module.exports = Letter;
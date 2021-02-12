//function named toAlternatingCase, [creating a new method]
String.prototype.toAlternatingCase = function () {
/*return split method with property this param '' no space
so that is splits each letter in the string in to a new
string containing one letter per array, then map method
to apply a function to each letter in the array with 
param of a strick equals [turnary operator] a.toUpperCase()?
a.toLowerCase() : a.toUpperCase().join(''))[join brings it
all back to one string*/
	return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
//function declaration named find_average with parameter array
function find_average(array) {
// variable statement named total assignemt operator 0;
	let total = 0;
//for loop variable i assignemt operator 0; i less than array.length;
// i plus plus
	for(var i = 0; i < array.length; i++){
//total += array at i pointer
		total += array[i];
	}
//return total divided by array.length
	return (total / array.length)

}
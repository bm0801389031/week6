/*function declaration named sumArray with parameter array*/
function sumArray(array) {
/*if array is equal to, operator, null[this will stop the execution
of the code and return me null, cause i cant execute the code proper]*/
	if (array == null) {
/*return 0*/
		return 0;
/*else if array.length is less than, operator, 2 [this too will stop
the execution of the code block and return me 0 cause i cant execute
the code properly with the values provided*/
	} else if (array.length < 2) {
/*return 0*/
		return 0;
/*else[because it is the final code block and theres nothing else 
that will offput it, so no need for an if statement]*/
	} else {
/*grab the array parameter/variable, Assignment operator = [this
gives the parameter/variable a new value, sort method with array
as its property, then parameter of .sort() comparefunction
[that specifies a function that defines the sort order, in this
case (function(a,b) {return a-b;}) wich returns the array
sorted from somallest digit to largest digit]*/
		array = array.sort(function(a,b) {return a - b;});
/*set variable names total assignemt operator = 0*/
		var total = 0;
/*for loop (statement varible i = 1 [ this starts the count
after the first digit which would be the smallest integer];
condition, i is less than array.length -1 [the -1 has it count the
whole array minus the last digit which would be the largest
digit]; final parameter of loop is i++ and this incroment the 
i spot by on digit after every code block execution*/
		for (var i = 1; i < array.length - 1; i++) {
/* total variable with assignemtn operator += array[i][this adds
a new total the the total variable, adding every spot that i hits*/
			total += array[i];
		}
/*return total*/
		return total;
	}
}
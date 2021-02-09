//function statement named arrayPlusArray with parameters
//arr1, arr2
function arrayPlusArray(arr1, arr2) {
/*return concat method with arr1 as first property and arr2 
as parameter then reduce method with accumular(acc)[accumulator
parameter of reduce holds values and the currentValue
parameter is a pointer in the array to the next value that
will be held in the arrray] and
currentValue(cur) arrowfunction[this function will give the reduce
method its logic] accumular plus currentValue
*/
	return arr1.concat(arr2).reduce((acc, cur) => acc + cur)
}





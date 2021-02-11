//fuction statement named firstNonConsecutive and parameter arr
function firstNonConsecutive(arr) {
/*for let variable i assignment operator= 0; i is less than length
method with arr property minus 1[-1 this keeps the return from
becoming undefined when the array is all consecutive numbers,
the code block needs to check a index value above the main pointer.
and leaving it space to check the last index, and terminating the
condition 1 before the end will let the code block check a digit above]
; i plus plus the value given to the pointer each time at the end of
the code block execution*/
  for (let i = 0; i < arr.length - 1; ++i) {
/*if arr at i pointer + 1 comparison operator (is not equal to value
or equal type arr at i index plus another index[this will check 
the value of my given pointer plus 1 with the value of my given
index plus the next index, if a digit skips meaning my array
is not consecutive, it will be known because my next index
should be just a single incroment of 1. in this case making by
block true if my index doesnt match a single incroment of 1]*/
    if (arr[i] + 1 !== arr[i + 1]) {
//and if the above is true return arr at i spot plus 1, giving me
//the last index checked that didnt work with the code block plus
//one which would be the outlier digit
      return arr[i + 1]
    }
  }
//return null if none of the obove worked
  return null
}
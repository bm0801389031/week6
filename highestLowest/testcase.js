// Null or Empty
Test.assertEquals(sumArray(null), 0);
Test.assertEquals(sumArray([ ]), 0);

// Only one Element
Test.assertEquals(sumArray([ 3 ]), 0);

// Only two Element
Test.assertEquals(sumArray([ 3, 5 ]), 0);

// Real Tests
Test.assertEquals(sumArray([ 6, 2, 1, 8, 10 ]), 16);
Test.assertEquals(sumArray([ 6, 0, 1, 10, 10 ]), 17);
Test.assertEquals(sumArray([  -6, -20, -1, -10, -12 ]), -28);
Test.assertEquals(sumArray([ -6, 20, -1, 10, -12 ]), 3);

// Random Tests
for(var i = 0; i < 20; i++)
{
   var arr = new Array();
   var expectedSum = 0;
   var length = Math.floor((Math.random() * 71) + 18);

   for(var j = 0; j < length; j++)
   {
     arr[j] = Math.floor((Math.random() * 33) - 10);
   }

   var testArr = arr.sort((a,b) => a - b);
   for(var j = 1 ; j < length-1; j++)
   {
     expectedSum += testArr[j];
   }

   Test.assertEquals(sumArray(arr), expectedSum);
}
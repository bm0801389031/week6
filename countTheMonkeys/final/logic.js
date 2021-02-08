//declare function monkeyCount with parameter n
function monkeyCount(n) {
/*varible statement named monkeys (= assignment operator) 
(empty array []); */ 
 var monkeys = [];
 /*for loop variable i = 1; i<=n; i++)*/
 for(var i=1; i<=n; i++){
 //monkeys as a property to the push method at [i] location
   monkeys.push(i);
 }
 //return monkeys
 return monkeys;
}
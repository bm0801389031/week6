/* function named count sheep with parameter num*/
var countSheep = function (num){
//let variable named str = "";
  let str = "";
//for loop (variable i = 1; i is less then or equal to num; i++)
//str plus and equals [template literal] 
//'with place holder i as expression'`${i} sheep...`
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
// return str;
  return str;
}
//function statement with parameter x
function grow(x){
//return reduce method with x as property
//parameter accumulator and currentValue
//codeblock:acc times cur, and a, 1 so no bug
 return x.reduce((acc, cur)=> acc*cur, 1)
}
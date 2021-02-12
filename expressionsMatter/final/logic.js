//function statement named expressionMatter param a, b, c
function expressionMatter(a, b, c) {
//return Math.max method with all the math cases as its parameters
	return Math.max(
//there are 6 lines and 6 math cases
//plus plus
		a + b + c,
//multiply multiply
		a * b * c,
//multipy parentheses add
		a * (b + c),
//parenthese add multiply
		(a + b) * c,
//add multiply
		a + b * c,
//multiply add
		a * b + c,
		);
}
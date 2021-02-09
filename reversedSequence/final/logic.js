//arrow function const reverseSeq with n parameter 
const reverseSeq = n => {
//variable named arr =assignment operator to an array;
	let arr = [];
//for loop let i = n; condition: i > 0; i minusminus
	for (let i = n; i > 0; i--) {
//push method with property arr and parameter i
		arr.push(i);
//return arr;
	} return arr;
};
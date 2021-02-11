//function statment with parameters x, n
function countBy(x, n) {
//set variable statment named z = array
	var z = [];
/*for loop let i = 1; i lessorequal n; i++*/
	for (let i = 1; i <= n; i++) {
/*push method with property z and parameter x * i[this multiply x
by one the first time and one more each time ig returning an array
llike [2,4,6,8]*/
		z.push(x * i);
	}
//return z
	return z;
}
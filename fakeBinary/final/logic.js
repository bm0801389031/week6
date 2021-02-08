/*function declaration fakeBin with parameter x*/
function fakeBin(x) {
/*return split method with a property of x, and parameter ('') quotes 
with no space. then map method with a fucntion with parameter n
fate arrow n is less than 5 turnary operator 0 if its true
otherwise(:) 1. then a join method quotes no space, to join it
all in to one string*/
	return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
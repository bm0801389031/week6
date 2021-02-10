//fuction statment with named betterThanAverage with parameters
//classPoint and yourPoint
function betterThanAverage(classPoints, yourPoints) {
/*return yourPoints greater than classPoints[this will return a
true if it is true and a false if my points arent greater]
reduce method with the previous statement as its property
parameters: ((accumulator, currentvalue) arrowfunction acc + cur)
devided by length method with property classPoints;
*/
	return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
/* function statement named getAverage with parameter marks */
function getAverage(marks){
//declare a varible statemen
var total = 0;
/* for loop with the first parameter: variable i assignment operator= 0;
i is less than marks.length; i++ */
for(var i = 0; i < marks.length; i++) {
/* code block: total += marks at he i pointer;*/
    total += marks[i];
		}
//variable avg assignment operator= total divided marks.length
var avg = total / marks.length;{
//return Math.floor function with parameter avg
  return Math.floor(avg)
	}
}


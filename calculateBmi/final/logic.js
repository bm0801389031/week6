//function statement named bmi with param weight, height
function bmi(weight, height) {
//variable squar =assignmentop height * height[this gets me the squarroot]
  let squar = height * height
//variable nweight =assignmentop weight / squar[this gets me BMI]
  let nweight = weight / squar
//if nweight is less equal to 18.5
  if (nweight <= 18.5){
    //return "Underweight"
  return "Underweight";
  }
//if nweight is less than or equal to 25.00
  if (nweight <= 25.00){
    //return "Normal"
  return "Normal";
  }
  //if nweight is less than or equal to 30.00
  if (nweight <= 30.0){
    //return "Overweight"
  return "Overweight";
  }
  //if nweight is greater 30
  if (nweight > 30){
    //return "Obese"
  return "Obese"
  }
}
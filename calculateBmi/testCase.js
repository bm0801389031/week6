Test.assertEquals(bmi(50, 1.80), "Underweight");
Test.assertEquals(bmi(80, 1.80), "Normal");
Test.assertEquals(bmi(90, 1.80), "Overweight");
Test.assertEquals(bmi(110, 1.80), "Obese");

console.log('Random tests')

function sol(weight, height) {
  let v = weight / (height * height);
  
  if(v <= 18.5)
    return "Underweight";
  else if (v <= 25.0)
    return "Normal";
  else if (v <= 30.0)
    return "Overweight";
  else
    return "Obese";
}

for(let i=0; i<25; i++) {
  let target = Math.random()*20+15;
  let height = Math.random()*0.5+1.5;
  let weight = target*height*height;
  Test.assertEquals(bmi(weight, height), sol(weight, height));
}
Test.describe("Basic tests",_=>{
Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
Test.assertEquals(fakeBin('509321967506747'), '101000111101101'); 
Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
Test.assertEquals(fakeBin('15889923'), '01111100'); 
Test.assertEquals(fakeBin('800857237867'), '100111001111'); 
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function myfakeBin(x){
  x = x.split('');
  for (var i = 0; i < x.length; i++) {

    if (x[i] == '0' || x[i] == '1' || x[i] == '2' || x[i] == '3' || x[i] == '4') x[i] = '0';
    else x[i] = '1';
  }
return x.join('');
}
var names=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (var i=0;i<100;i++){
  var x=[],len=randint(1,30);
  for (var k=0;k<len;k++) x.push(names[randint(0,names.length-1)]);
  x=x.join('');
  
  Test.it(`Testing for ${x}`,_=>{
  Test.assertEquals(fakeBin(x),myfakeBin(x),"It should work for random inputs too");
  })
}
})
Test.describe("Basic Tests",function(){
Test.assertSimilar(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
Test.assertSimilar(countBy(2,5), [2,4,6,8,10], "Array does not match")
Test.assertSimilar(countBy(3,7), [3,6,9,12,15,18,21], "Array does not match")
Test.assertSimilar(countBy(50,5), [50,100,150,200,250], "Array does not match")
Test.assertSimilar(countBy(100,6), [100,200,300,400,500,600], "Array does not match")
})
Test.describe("Random Tests",function(){
function randint(a,b){return Math.floor(Math.random()*(b-a)+a);}
function countSol(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
for (k=0;k<20;k++){
  x=randint(1, 100);
  n=randint(1, 20);
  Test.it('Testing for result with count_by('+x.toString()+', '+n.toString()+')',function(){
    Test.assertSimilar(countBy(x, n), countSol(x,n),'Did not work for this random test')
  })
}
})
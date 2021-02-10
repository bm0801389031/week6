Test.describe('Fixed tests', function() {
  Test.assertEquals(hero(10, 5), true);
  Test.assertEquals(hero(7, 4), false);
  Test.assertEquals(hero(4, 5), false);
  Test.assertEquals(hero(100, 40), true);
  Test.assertEquals(hero(1500, 751), false);
  Test.assertEquals(hero(0, 1), false);
});

function sol(bullets, dragons) {
  return bullets/2>=dragons;
}

Test.describe('Random tests', function() {
  for(let i=0; i<100; i++) {
    let bullets=Math.random()*1000|0;
    let dragons=Math.random()*bullets|0;
    Test.assertEquals(hero(bullets,dragons),sol(bullets,dragons));
  }
});
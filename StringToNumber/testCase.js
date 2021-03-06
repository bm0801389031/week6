describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
  it("should work for random strings", function(){
    var i, t;
    for(i = 0; i < 100; ++i){
      t = Math.round(Math.random() * 1e6 - 5e5);
      Test.assertEquals(stringToNumber(t.toString(10)), t);
    }
  });
});
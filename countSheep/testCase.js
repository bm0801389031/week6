describe("Fixed tests", function(){
  Test.assertEquals(countSheep(1), "1 sheep...");
  Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
  Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
});

const solution = n => Array.from("_".repeat(n), (_, i) => `${i+1} sheep...`).join("");

describe("Random tests", function() {
  it("", function() {
    for (let x of Test.randomize(Array.from("_".repeat(100), (_, i) => i+1)))
      Test.assertEquals(countSheep(x), solution(x));
  });
});
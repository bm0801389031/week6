describe("Basic tests",_=>{
  Test.assertEquals(greet("Ryan"), "Hello, Ryan how are you doing today?");
  Test.assertEquals(greet("Shingles"), "Hello, Shingles how are you doing today?");
})

describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=n=>`Hello, ${n} how are you doing today?`;
const base="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i=0;i<40;i++){
  const s=Array.from({length:randint(1,30)},a=>base[randint(0,base.length-1)]).join("");
  it(`Testing for '${s}'`,_=>{
  Test.assertEquals(greet(s),sol(s),"It should work for random inputs too")
  })
}
})
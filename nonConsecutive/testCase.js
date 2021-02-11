Test.describe('a simple example', function() {
  const first = firstNonConsecutive([1,2,3,4,6,7,8])
  Test.assertEquals(first, 6)
})

Test.describe('a zero example', function() {
  const first = firstNonConsecutive([-3,-2,0,1,2])
  Test.assertEquals(first, 0)
})

Test.describe('a negetive example', function() {
  const first = firstNonConsecutive([-3,-1,0,1,2])
  Test.assertEquals(first, -1)
})

Test.describe('all sequential', function() {
  const first = firstNonConsecutive([1,2,3,4])
  Test.assertEquals(first, null)
})

function refFirstNonConsecutive (arr) {
  let index = 1
  
  while(index < arr.length) {
    if (arr[index-1] !== arr[index]-1) return arr[index]
    index++
  }
  
  return null
}

Test.describe('random cases', function() {
  for(let i=0; i<10; i++) {
    let testArr = []
    let offset = Math.floor(Math.random() * 20) - 10
    for(let j=0; j<20; j++) { testArr.push(offset + Math.floor(Math.random() * 10))}
    testArr = testArr.sort((a,b) => a-b).filter((item, pos, ary) => {
      return !pos || item != ary[pos - 1];
    })
    console.log(testArr)
    const first = firstNonConsecutive(testArr.map(x => x))
    const expected = refFirstNonConsecutive(testArr.map(x => x))
    Test.assertEquals(first, expected)
  }
});
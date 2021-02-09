//function statement bonusTime with parameter
//salary, bonus
function bonusTime(salary, bonus) {
//if bonus is equal to true
    if (bonus === true){
//return unicode for pound '\u00A3' + salery
      // times 10
      return '\u00A3' + salary * 10
//else, if the previous did not apply
    } else {
//return pound unicode '\u00A3' + salary
      return '\u00A3' + salary
    }
}
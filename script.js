function add(x) {
  var sum = x + 2;
  return sum;
}

function multiply(sum) {
  var mult = sum * 3;
  return mult;
}

function subtract(mult) {
  var bonusanswer = mult - 4;
  return bonusanswer;
}

console.log(subtract(multiply(add(400))));

console.log("Well what do ya know, I figured it out!");

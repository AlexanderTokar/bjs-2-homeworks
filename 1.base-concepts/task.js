"use strict";
function solveEquation(a, b, c) {
  let arr;
  arr = [];

  let discriminant = (b ** 2) - (4 * a * c);

  if (discriminant === 0) {
      let root1 = -b / (2 * a);
      arr.push(root1);
  }
  if (discriminant > 0) {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(root1);
      arr.push(root2);
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

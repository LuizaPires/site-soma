function soma(a, b) {
  num1 = parseFloat(a);
  num2 = parseFloat(b);
    return num1 + num2;
  }

function subtrae(a, b){
      return a - b;
  }

function multi(a, b){
      return a * b;
  }

function divide(a, b){
      return a/b;
  }

  module.exports = {
      soma, subtrae, multi, divide
  };
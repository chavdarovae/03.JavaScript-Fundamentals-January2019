function solve() {
  let firstNumber = +document.getElementById('num1').value;
  let secondNumber = +document.getElementById('num2').value;
  let resultEl = document.getElementById('result');
  resultEl.innerHTML = listMultiplication(firstNumber, secondNumber);

  function listMultiplication(firstNum, secondNum) {
    let result = '';
    if (firstNum > secondNum) {
      result = "Try with other numbers.";
    } else {
      for (let i = firstNum; i <= secondNum; i++) {
        result += `<p>${i} * ${secondNum} = ${i * secondNum}</p>`;
      }
    }
    return result;
  }
}
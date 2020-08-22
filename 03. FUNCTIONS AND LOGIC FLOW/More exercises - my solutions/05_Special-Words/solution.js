function solve() {
  let firstNumber = +document.getElementById('firstNumber').value;
  let secondNumber = +document.getElementById('secondNumber').value;
  let firstString = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let resultEl = document.getElementById('result');

  resultEl.innerHTML = itterateBtwStartAndEnd(firstNumber, secondNumber, firstString, secondString, thirdString);


  function itterateBtwStartAndEnd(start, end, firstStr, secondStr, thirdStr) {
    let result = '';

    for (let i = start; i <= end; i++) {     
      if (i % 5 === 0 && i % 3 === 0) {
        result += `<p>${i} ${firstStr}-${secondStr}-${thirdStr}</p>`;
      } else if (i % 5 === 0) {
        result += `<p>${i} ${thirdStr}</p>`;
      } else if (i % 3 === 0) {
        result += `<p>${i} ${secondStr}</p>`;
      } else {
        result += `<p>${i}</p>`;
      }      
    }
    return result;
  }
}
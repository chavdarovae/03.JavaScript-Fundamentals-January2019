function solve() {
  let number = +document.getElementById('num1').value;
  let type = document.getElementById('type').value;
  let resultEl = document.getElementById('result');
  resultEl.textContent=convertTemperature(number, type)

  function convertTemperature(degrees, scale) {
    let scaleIsValid = scale.toLowerCase() === 'fahrenheit' || scale.toLowerCase() === 'celsius' ? true : false;
    if (scaleIsValid) {
      if (scale.toLowerCase() === 'fahrenheit') {
        degrees = (degrees - 32) * 5 / 9;
      } else if (scale.toLowerCase() === 'celsius') {
        degrees = (degrees * 9) / 5 + 32;
      }
      return Math.round(degrees);
    }
    if (!scaleIsValid) {
      return 'Error!';
    }
  }
}
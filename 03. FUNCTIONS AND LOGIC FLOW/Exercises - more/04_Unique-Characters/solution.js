function solve() {
  let string = document.getElementById('string').value;
  let resultEl = document.getElementById('result');
  resultEl.textContent=getUniqueCharacters(string);

  function getUniqueCharacters(string) {
    let uniqueCharStrng = [];
    let whiteSpacePattern = /[ \t\r\n\f]/g;

    for (let char of string) {
      if (char.match(whiteSpacePattern) === null) {
        if (!uniqueCharStrng.includes(char)) uniqueCharStrng.push(char)
      } else {
        uniqueCharStrng.push(char)
      }
    }
    return uniqueCharStrng.join('');
  }
}
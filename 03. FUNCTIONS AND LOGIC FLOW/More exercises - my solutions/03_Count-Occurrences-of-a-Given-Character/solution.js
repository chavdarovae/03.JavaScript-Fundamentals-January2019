function solve() {
  let string=document.getElementById('string').value;
  let character=document.getElementById('character').value;
  let result=document.getElementById('result');
  result.textContent=isCountCharEvenOrOdd(string, character);

  function isCountCharEvenOrOdd(string, char) {
    let count=0;
    for (let letter of string) {
        if(letter===char) count++
    }
    return `Count of ${char} is ${count%2===0? 'even.':'odd.'}`;
  }
}
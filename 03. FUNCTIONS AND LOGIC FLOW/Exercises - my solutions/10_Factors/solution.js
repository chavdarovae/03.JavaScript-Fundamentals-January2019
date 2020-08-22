function solve() {
  let number=+document.getElementById('num').value;
  let factors=[];
  for (let i = number; i >=1; i--) {
     if(!factors.includes(i) && number%i===0) factors.push(i);     
  }
  document.getElementById('result').textContent=factors.reverse().join(' ');
}
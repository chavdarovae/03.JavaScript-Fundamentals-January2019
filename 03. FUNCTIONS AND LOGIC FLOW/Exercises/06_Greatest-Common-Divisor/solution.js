function greatestCD() {
    let fisrtNum=Math.abs(+document.getElementById('num1').value);
    let secondNum=Math.abs(+document.getElementById('num2').value);
    let lesserNum=Math.min(fisrtNum,secondNum);
    let greaterNum=Math.max(fisrtNum,secondNum);
    let lesserNumDivisors=[];
    let greaterNumDivisors=[];

    if(lesserNum===0) return greaterNum;
    if(greaterNum===0) return lesserNum;
    
    for (let i = 1; i <= greaterNum; i++) {
        if(i<=lesserNum && lesserNum%i===0) lesserNumDivisors.push(i);
        if(greaterNum%i===0) greaterNumDivisors.push(i);        
    }
    
    lesserNumDivisors.reverse();  

    for (let divisor of lesserNumDivisors) {
        if(greaterNumDivisors.includes(divisor)){
            return document.getElementById('result').innerHTML= divisor;
        }
    }
}
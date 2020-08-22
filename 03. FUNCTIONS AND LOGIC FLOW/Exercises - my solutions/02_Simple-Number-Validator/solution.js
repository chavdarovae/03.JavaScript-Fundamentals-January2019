function validate() {
    document.querySelector('#exercise button').addEventListener('click',checkValidity);
    let digitWeight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    

    function checkValidity() {
        let digitSequence=document.querySelector('#exercise input').value;        
        let isDigitNumberValid = digitSequence.length === 10;        
        let lastDigit = +digitSequence[digitSequence.length - 1];

        let remainder = 0;    
        for (let i = 0; i < digitSequence.length - 1; i++) {
            remainder += Number(digitSequence[i]) * digitWeight[i];
        }
        remainder %= 11;
        if (remainder === 10) remainder = 0;
        
        document.getElementById('response').innerHTML= isDigitNumberValid && lastDigit === remainder ?  'This number is Valid!' : 'This number is NOT Valid!';
    }
}
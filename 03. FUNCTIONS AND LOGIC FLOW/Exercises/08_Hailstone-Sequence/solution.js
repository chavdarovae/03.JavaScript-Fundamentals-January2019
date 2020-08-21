function getNext() {
    let number = +document.querySelector('#num').value;
    let sequence=[];
    sequence.push(number);
    while(number>1){
        if(number%2===0){
            number/=2
        }else{
            number=number*3+1;
        }
        sequence.push(number);
    }
    document.querySelector('#result').textContent = sequence.join(' ');
}
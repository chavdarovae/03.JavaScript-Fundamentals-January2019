function solve(input) {
    let rotNumb=input.pop();
    rotNumb%=input.length;
    console.log(rotNumb);
    for (let i = 0; i < rotNumb; i++) {
        let rotEl=input.pop();
        input.unshift(rotEl);        
    }
    console.log(input.join(' '));
}

solve([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);
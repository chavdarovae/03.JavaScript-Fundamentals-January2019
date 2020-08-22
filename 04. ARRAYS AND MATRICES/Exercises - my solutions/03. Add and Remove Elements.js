function solve(input) {
    let counter = 0;
    let resultArr = [];
    for (let command of input) {
        counter++;
        command === 'remove' ? resultArr.pop() : resultArr.push(counter);
    }
    resultArr.length > 0 ? resultArr.forEach(e => console.log(e)):console.log('Empty');
}

solve([
    'remove',
    'remove',
    'remove',
    'remove',
    'remove'
]);
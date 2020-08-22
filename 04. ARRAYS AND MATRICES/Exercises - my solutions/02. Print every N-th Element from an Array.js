function solve(input) {
    let step = +input.pop();
    input.unshift('0');
    for (let i = 1; i < input.length; i += step) {
        console.log(input[i]);
    }
}

solve([
    '1',
    '2',
    '3',
    '4',
    '5',
    '4'
]);
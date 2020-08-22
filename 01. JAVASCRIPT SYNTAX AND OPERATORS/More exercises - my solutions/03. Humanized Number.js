function solve(input) {
    let pattern = /[0-9]+/g;
    let numbersToHumanize = input.match(pattern);
    for (const el of numbersToHumanize) {
        let lastDigit = el[el.length - 1];
        
        switch (lastDigit) {
            case '1': console.log(el + 'st'); break;
            case '2': console.log(el + 'nd'); break;
            case '3': console.log(el + 'rd'); break;
            default: console.log(el + 'th'); break;
        }
    }
}

solve('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.')
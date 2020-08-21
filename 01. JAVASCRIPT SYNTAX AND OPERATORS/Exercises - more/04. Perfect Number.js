function solve(arr) {
    let arrOfPerfectNumbers = [];
    for (let num of arr) {
        if (num === 0) {
            arrOfPerfectNumbers[0]=0;
        } else {
            let arrOfDivisors = getAnArryOfPositiveDivisors(num);
            if (num === arrOfDivisors.reduce((a, b) => a + b)) {
                arrOfPerfectNumbers.push(num);
            }
        }

    }

    if (arrOfPerfectNumbers[0] === undefined) {
        console.log(`No perfect number`);
    } else {
        console.log(arrOfPerfectNumbers.join(', '));
    }

    function getAnArryOfPositiveDivisors(number) {
        let arrOfPosDivisors = [];
        for (let i = 1; i < number; i++) {
            if (number % i === 0) arrOfPosDivisors.push(i);
        }
        return arrOfPosDivisors;
    }
}

solve([0, 7, 82]);
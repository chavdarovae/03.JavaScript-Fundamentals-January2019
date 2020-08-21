function solve(input) {
    let object = {};
    input.map(x => {
        let line=x.split(' <-> ')
        if (!object.hasOwnProperty(line[0])) {
            object[line[0]] = Number(line[1])
        } else {
            object[line[0]] += Number(line[1])
        }
    });
    Object.entries(object).forEach(line=>console.log(`${line[0]} : ${line[1]}`));
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
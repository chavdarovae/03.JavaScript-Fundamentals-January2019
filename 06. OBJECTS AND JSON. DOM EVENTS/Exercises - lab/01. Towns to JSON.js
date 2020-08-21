function sovle(input) {
    let valueInput = input.map(line => line.split('|').filter(Boolean).map(x => x.trim()));
    let objArr = [];
    for (let i = 1; i < valueInput.length; i++) {
        let currObj = {
            [valueInput[0][0]]: valueInput[i][0],
            [valueInput[0][1]]: Number(valueInput[i][1]),
            [valueInput[0][2]]: Number(valueInput[i][2]),
        };
        objArr.push(currObj)
    }
    let print=objArr.map(x=>JSON.stringify(x)).join(',')
    console.log(`[${print}]`);
}

sovle([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])
function solve(input) {
    let object = {};
    for (let i = 0; i < input.length - 1; i += 2) {
        if (object.hasOwnProperty(input[i])) {
            object[input[i]] += Number(input[i + 1]);
        } else {
            object[input[i]] = Number(input[i + 1]);
        }
    }
    console.log(JSON.stringify(object));
}
// solve({"Sofia":25,"Varna":7})
solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])
function solve(input) {
    
    let wordPattern = /[\w\d_]+/g;
    let words = new Map();
    let match;
    while ((match = wordPattern.exec(input.toLowerCase())) !== null) {
        if (!words.has(match[0])) {
            words.set(match[0], 1)
        } else {
            let count = words.get(match[0]) + 1;
            words.set(match[0], count)
        }
    }
    [...words].sort((a,b)=>a[0].localeCompare(b[0]))
        .forEach(x => console.log(`'${x[0]}' -> ${x[1]} times`));
}

solve("JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --")
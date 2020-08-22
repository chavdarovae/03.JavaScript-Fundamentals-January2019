function solve(input) {
    input
        .sort((a, b) => a.length - b.length ||
        a.localeCompare(b, 'en', {sensitivity: 'base'}))
        .forEach(e => console.log(e));
}

solve([
    'Dest',
    'Deny',
    'omen',
    'Default'
]);
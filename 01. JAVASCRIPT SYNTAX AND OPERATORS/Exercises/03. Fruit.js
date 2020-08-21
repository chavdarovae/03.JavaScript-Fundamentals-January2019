function solve(fruitType, quantity, pricePerKilogram) {
    quantity /= 1000;
    let money = quantity * pricePerKilogram;
    console.log(`I need ${money.toFixed(2)} leva to buy ${quantity.toFixed(2)} kilograms ${fruitType}.`);
}

solve('apple', 1563, 2.35);
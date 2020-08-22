function solve(input) {
    let income = 0;
    for (let line of input) {
        let price = 0.8;

        line = line.split(', ');
        let budget = +line.shift();
        let drink = line.shift();;
        let sugar = +line.pop();
        let milkPrice = 0;
        if (line.includes('decaf')) {
            price += 0.1;
        }
        if (line.includes('milk')) {
            let milk = 0.1 * price;
            milkPrice = Number(milk.toFixed(1));
            price += milkPrice;
        }
        if (sugar > 0) {
            price += 0.1;
        }

        let change = budget - price;
        if (change >= 0) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            income += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${Math.abs(change).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${income.toFixed(2)}$`);
}

solve([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
])
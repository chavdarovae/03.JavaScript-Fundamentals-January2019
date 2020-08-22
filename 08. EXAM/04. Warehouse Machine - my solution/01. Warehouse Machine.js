function solve(input) {
    let storedCoffee = [];

    input.forEach(line => {
        if (line.startsWith('IN,') || line.startsWith('OUT,')) {
            let [command, nameOfBrand, coffeeName, expireDate, quantity] = line.split(', ');
            quantity = Number(quantity);

            let foundBrand = storedCoffee.find(x => x.nameOfBrand === nameOfBrand);

            if (command === 'IN') {
                if (foundBrand !== undefined) {
                    let foundCoffee = foundBrand.coffee.find(x => x.coffeeName === coffeeName);
                    if (foundCoffee !== undefined) {
                        if (foundCoffee.expireDate === expireDate) {
                            foundCoffee.quantity += quantity;
                        } else if (foundCoffee.expireDate < expireDate) {
                            foundCoffee.quantity = quantity;
                            foundCoffee.expireDate = expireDate;
                        }
                    } else {
                        foundBrand.coffee.push({ coffeeName, expireDate, quantity });
                    }
                } else {
                    let coffeeObj = {
                        nameOfBrand: nameOfBrand,
                        coffee: [{ coffeeName, expireDate, quantity }]
                    };
                    storedCoffee.push(coffeeObj);
                }
            } else if (command === 'OUT') {
                if (foundBrand !== undefined) {
                    let foundCoffee = foundBrand.coffee.find(x => x.coffeeName === coffeeName);
                    if (foundCoffee !== undefined) {
                        if (foundCoffee.expireDate > expireDate && foundCoffee.quantity > quantity) {
                            foundCoffee.quantity -= quantity;
                        }
                    }
                }
            }
        } else if (line.startsWith('REPORT')) {
            console.log('>>>>> REPORT! <<<<<');
            storedCoffee.forEach(x => {
                console.log(`Brand: ${x.nameOfBrand}:`);
                x.coffee.forEach(c => {
                    console.log(`-> ${c.coffeeName} -> ${c.expireDate} -> ${c.quantity}.`);
                })
            });
        } else if (line.startsWith('INSPECTION')) {
            console.log('>>>>> INSPECTION! <<<<<');
            storedCoffee.sort((a, b) => a.nameOfBrand.localeCompare(b.nameOfBrand)).forEach(x => {
                console.log(`Brand: ${x.nameOfBrand}:`);
                x.coffee.sort((a, b) => b.quantity - a.quantity).forEach(c => {
                    console.log(`-> ${c.coffeeName} -> ${c.expireDate} -> ${c.quantity}.`);
                })
            });
        }
    });
}

solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "OUT, Batdorf & Bronson, Espresso, 2025-05-26, 10",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "IN, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "IN, Batdorf & Bronson, Extra Strong, 2025-05-25, 20",
    "REPORT",
    "INSPECTION"
]);
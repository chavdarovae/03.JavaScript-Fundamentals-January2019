function solve(input) {
    let productArr = [];
    for (let line of input) {
        line = line.split(' | ');
        let foundProduct = productArr.find(o => o.productName === line[1]);

        if (foundProduct === undefined) {
            let townObj = { townName: line[0], productPrice: Number(line[2]) }
            let townArr = [townObj];
            let productObj = { productName: line[1], productPlacement: townArr };
            productArr.push(productObj);
        } else {
            let foundTown = foundProduct.productPlacement.find(o => o.townName === line[0]);
            if (foundTown === undefined) {
                let townObj = { townName: line[0], productPrice: Number(line[2]) }
                foundProduct.productPlacement.push(townObj);
            } else {
                foundTown.townName=line[0];
                foundTown.productPrice=Number(line[2]);
            }
        }
    }
    
    for (let obj of productArr) {
        obj.productPlacement.sort((a,b)=>a.productPrice-b.productPrice);
        console.log(`${obj.productName} -> ${obj.productPlacement[0].productPrice} (${obj.productPlacement[0].townName})`);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])
function solve(arr) {
    let drinkPrice =0;
    let income=0;
    for (const line of arr) {
        if (line.includes('coffee')) {
            if (line.includes('caffeine')) {
                drinkPrice = 0.80;
            } else if (line.includes('decaf')) {
                drinkPrice = 0.90;
            }
        } else if (line.includes('tea')) {
            drinkPrice = 0.80;
        }

        if (line.includes('milk')) {
            drinkPrice +=Number((0.1 * drinkPrice).toFixed(1));
        }

        if(line[line.length-1]!=='0'){
            drinkPrice += 0.1;
        }
        
        
        let array=line.split(', ');
        let budget=Number(array[0]);
        if(budget>=drinkPrice){
            console.log(`You ordered ${array[1]}. Price: ${drinkPrice.toFixed(2)}$ Change: ${(budget-drinkPrice).toFixed(2)}$`);
            income+=drinkPrice;
        }else{
            console.log(`Not enough money for ${array[1]}. Need ${(drinkPrice-budget).toFixed(2)}$ more.`);
        }
    }    
    console.log(`Income Report: ${income.toFixed(2)}$`);
}

solve([
'8.00, coffee, decaf, 4',
'1.00, tea, 2'
]);
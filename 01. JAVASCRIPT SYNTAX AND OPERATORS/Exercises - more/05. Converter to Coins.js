function solve(amount,typeOfCoins) {
    typeOfCoins.sort((a,b)=>b>a);
    let coinSequence=[];
    
    for (let coinType of typeOfCoins) {
        while(amount>0 && amount/coinType>=1){
            amount-=coinType;
            coinSequence.push(coinType)
        }
    }
    console.log(coinSequence.join(', '));
}

solve(46, [10, 25, 5, 1, 2] )
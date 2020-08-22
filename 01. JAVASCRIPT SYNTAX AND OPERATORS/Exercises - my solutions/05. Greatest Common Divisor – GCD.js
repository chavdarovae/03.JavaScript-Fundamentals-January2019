function solve(fiNum, secNum) {
    let limit=Math.min(fiNum, secNum);
    let gcd=0;
    for (let i = 0; i <= limit; i++) {
        if(fiNum%i===0 && secNum%i===0) gcd=i        
    }
    console.log(gcd);
}

solve(2154, 458);
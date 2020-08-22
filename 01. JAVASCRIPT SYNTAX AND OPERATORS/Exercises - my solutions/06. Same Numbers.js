function solve(num) {
    num=num.toString();
    let consistsOfSameDigit=true;
    let digitToCompare=num[0];
    let sum=Number(num[0]);

    for (let i = 1; i < num.length; i++) {
        if (digitToCompare!==num[i]) {
            consistsOfSameDigit=false;
        }
        sum+=Number(num[i]);        
    }
    console.log(consistsOfSameDigit);
    console.log(sum);
}

solve(1234);
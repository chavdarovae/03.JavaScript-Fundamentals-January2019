function solve(input) {
    let currBiggestNum=input[0];
    for (let i = 1; i < input.length; i++) {
        if(currBiggestNum>input[i]){
            input.splice(i,1);
            i--;
        }else{
            currBiggestNum=input[i];
        }       
    }
    input.forEach(e => console.log(e));
}

solve([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
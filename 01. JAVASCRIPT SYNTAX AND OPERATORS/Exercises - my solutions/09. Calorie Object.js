function solve(arr) {
    let stringToPrint='{ ';
    for (let i= 0; i<arr.length; i+=2) {
        if(i!==arr.length-2){
            stringToPrint+=arr[i]+': '+arr[i+1]+', ';
        }else{
            stringToPrint+=arr[i]+': '+arr[i+1]+' }';
        }                
    }
    console.log(stringToPrint);

}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
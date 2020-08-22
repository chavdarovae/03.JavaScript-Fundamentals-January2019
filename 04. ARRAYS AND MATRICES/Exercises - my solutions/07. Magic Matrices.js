function solve(input) { 
    let isMagical = checksIfMagical(input);
    let transponsedMat=transposeArray(input, input.length);
    isMagical = checksIfMagical(transponsedMat);
    console.log(isMagical);


    function checksIfMagical(arr) {
        let rowSum = arr[0].reduce((a, b) => a + b);
        for (let i = 1; i < arr.length; i++) {
            if (rowSum !== arr[i].reduce((a, b) => a + b,0)) return false;
        }
        return true;
    }   

    function transposeArray(array, arrayLength) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push([]);
        }

        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < arrayLength; j++) {
                newArray[j].push(array[i][j]);
            }
        }

        return newArray;
    }
}

solve([
    [4, 7, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
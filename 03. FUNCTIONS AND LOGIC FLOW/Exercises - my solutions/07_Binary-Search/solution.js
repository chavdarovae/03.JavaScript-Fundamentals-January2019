function binarySearch() {
    let numberArray = document.getElementById('arr').value;
    let number = document.getElementById('num').value;
    let resultSpanEl = document.getElementById('result');
    resultSpanEl.innerHTML = findIndex(numberArray, number)

    function findIndex(numbArray, numb) {
        let numberPattern = /[-]*[0-9]+[.]*[0-9]*/g;
        numbArray = numbArray.match(numberPattern);
        let index = numbArray.indexOf(numb);
        return index === -1 ? `${numb} is not in the array` : `Found ${numb} at index ${index}`
    }
}
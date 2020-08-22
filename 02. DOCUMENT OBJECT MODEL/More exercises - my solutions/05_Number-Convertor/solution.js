function solve() {
    let firstOption = document.createElement('option');
    firstOption.value = "binary"
    firstOption.textContent = "Binary"

    let secondOption = document.createElement('option');
    secondOption.value = "hexadecimal"
    secondOption.textContent = "Hexadecimal"

    let selectElement=document.getElementById('selectMenuTo');
    selectElement.appendChild(firstOption);
    selectElement.appendChild(secondOption);

    let button = document.getElementsByTagName('button');
    button[0].addEventListener('click', convertIt);

    function convertIt() {
        let number = +document.getElementById('input').value;
       
        let biConvertion = document.querySelector('#selectMenuTo option[value="binary"]').selected;
        let heConvertion = document.querySelector('#selectMenuTo option[value="hexadecimal"]').selected;
       
        let result;
        if (biConvertion) {
            result=(+number).toString(2);
            document.getElementById('result').value = result.toUpperCase();
        } else if (heConvertion) {
            result=(+number).toString(16);
            document.getElementById('result').value = result.toUpperCase();
        }
    }
}
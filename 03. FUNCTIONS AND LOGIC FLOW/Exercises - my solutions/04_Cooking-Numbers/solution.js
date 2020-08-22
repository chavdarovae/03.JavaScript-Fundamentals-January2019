function solve() {
    let buttons = Array.from(document.querySelectorAll('#operations button'));
    buttons.forEach(b => b.addEventListener('click', clickEvent));
    let outputEl = document.getElementById('output');
    let clickCOunter = 0;

    function clickEvent(e) {
        clickCOunter++;
        let inputNumber = +document.querySelector('#exercise input').value;
        if (typeof (inputNumber) !== 'number' || inputNumber === '') inputNumber = 0
        let outputNumber = +outputEl.innerHTML;
        let number = clickCOunter === 1 ? inputNumber : outputNumber;

        let btn = e.target;
        let operation = btn.innerHTML.toLowerCase();

        outputEl.textContent = cookTheNumber(number, operation);
    }

    function cookTheNumber(number, operation) {
        switch (operation) {
            case 'chop': number = number / 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number = number + 1; break;
            case 'bake': number = number * 3; break;
            case 'fillet': number = number * 0.8; break;
        }
        return number;
    }
}



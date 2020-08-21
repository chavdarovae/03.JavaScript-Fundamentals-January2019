function solve() {
    document.querySelector('#exercise button').addEventListener('click', getMyCards);
    let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSectionEl = document.getElementById('cards');

    function getMyCards() {
        let fromInput = document.getElementById('from');
        let toInput = document.getElementById('to');

        let fromIndex = cardValues.indexOf(fromInput.value);
        let toIndex = cardValues.indexOf(toInput.value);
        
        let isValidInput = cardValues.includes(fromInput.value) && cardValues.includes(toInput.value) && fromIndex <= toIndex;

        let suitSelectEl = document.querySelector('#exercise select');
        let suitName = suitSelectEl.options[suitSelectEl.selectedIndex].value;
        let suit=suitName.split(' ')[1];

        if (isValidInput) {
            for (let i = fromIndex; i <= toIndex; i++) {
                let cardContent = `<div class="card"><p>${suit}</p><p>${cardValues[i]}</p><p>${suit}</p></div>`;
                cardSectionEl.innerHTML += cardContent;
            }
        }
        fromInput.value='';
        toInput.value='';
    }
}
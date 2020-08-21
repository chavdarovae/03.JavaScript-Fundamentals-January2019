function solve() {
    Array.from(document.getElementsByTagName('img'))
        .forEach((img) => {
            img.addEventListener('click', clickEvent)
        });

    function clickEvent(e) {
        let card = e.target;
        card.src = './images/whiteCard.jpg'
        card.removeEventListener('click', clickEvent)
        let parent = card.parentNode;

        let spans = document.getElementById('result').children;

        if (parent.id === 'player1Div') {
            spans[0].textContent = card.name;
        } else if (parent.id === 'player2Div') {
            spans[2].textContent = card.name;
        }

        if (spans[0].textContent && spans[2].textContent) {
            let leftSpan = +spans[0].textContent;
            let rigthSpan = +spans[2].textContent;

            let winner;
            let loser;

            if (leftSpan > rigthSpan) {
                winner = document.querySelector(`#player1Div img[name="${leftSpan}"]`);
                loser = document.querySelector(`#player2Div img[name="${rigthSpan}"]`);
            } else {
                loser = document.querySelector(`#player1Div img[name="${leftSpan}"]`);
                winner = document.querySelector(`#player2Div img[name="${rigthSpan}"]`);
            }

            winner.style.border = '2px solid green';
            loser.style.border = '2px solid darkred';

            document.getElementById('history').textContent += `[${leftSpan} vs ${rigthSpan}] `;

            spans[0].textContent = '';
            spans[2].textContent = '';
        }
    }
}
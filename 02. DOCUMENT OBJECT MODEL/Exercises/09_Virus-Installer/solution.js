function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons[0].addEventListener('click', nextAction);
    buttons[1].addEventListener('click', cancelAction);
    let nextClicksCount = 0;
    let agreeRadioBtn = document.querySelector('#firstStep input[value="agree"]');

    function cancelAction(e) {
        document.querySelector('#exercise section').style.display = 'none';
    }

    function nextAction(e) {
        let btn = e.target;
        nextClicksCount++;
        let steps = Array.from(document.getElementById('content').children);
        if (nextClicksCount === 1) {
            firstStep()
        } else if (nextClicksCount === 2&&agreeRadioBtn.checked === true) {
            secondStep()
        } else if (nextClicksCount === 3) {
            thirdStep()
        }
    }

    function firstStep(e) {
        console.log('1');
        document.getElementById('content').style.backgroundImage = 'none';
        document.getElementById('firstStep').style.display = 'block';
    }

    function secondStep(e) {
        console.log('2');
        document.getElementById('firstStep').style.display = 'none';
        document.getElementById('secondStep').style.display = 'block';
        buttons[0].style.display = 'none';
        setTimeout (()=>buttons[0].style.display = 'inline',3000);
    }

    function thirdStep(e) {
        console.log('3');
        document.getElementById('secondStep').style.display = 'none';
        document.getElementById('thirdStep').style.display = 'block';
        buttons[0].style.display = 'none';
        buttons[1].textContent = 'Finish';
    }
}
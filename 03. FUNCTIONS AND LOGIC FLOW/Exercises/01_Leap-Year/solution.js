function leapYear() {
    document.querySelector('#main button').addEventListener('click', checkThisYear);

    function checkThisYear() {
        let year = +document.querySelector('#exercise input').value;
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            document.querySelector('#year h2').textContent = 'Leap Year';

        } else {
            document.querySelector('#year h2').textContent = 'Not Leap Year';
        }
        document.querySelector('#year div').textContent = year;
        document.querySelector('#exercise input').value='';
    }
}
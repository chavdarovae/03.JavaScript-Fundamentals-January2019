function solve() {
    let seats = Array.from(document.querySelectorAll('.seat'));
    seats.forEach(b => b.addEventListener('click', takeSeat))
    let outputEl = document.getElementById('output');
    let summaryEl = document.querySelector('#summary span');

    let totalProfit = 0;
    let fans = 0;
    let ticketPrice = [[10, 25], [7, 15], [5, 0]];

    function takeSeat(e) {
        let seat = e.target;
        let seatIndex = seat.parentNode.cellIndex;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode;
        let sector = Array.from(zone.querySelectorAll('th'));

        if (seat.style.backgroundColor !== "rgb(255, 0, 0)") {
            seat.style.backgroundColor = "rgb(255, 0, 0)";
            fans++;
            totalProfit += ticketPrice[seatIndex][zone.className === 'VIP' ? 1 : 0];
            summaryEl.textContent = `${totalProfit} leva, ${fans} fans.`
            outputEl.value += ` Seat ${seat.textContent} in zone ${zone.className} sector ${sector[seatIndex].textContent} was taken.\n`
        } else {
            outputEl.value += ` Seat ${seat.textContent} in zone ${zone.className} sector ${sector[seatIndex].textContent} is unavailable.\n`
        }
    }
}
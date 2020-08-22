function solve() {
	document.querySelector('#myNumbers button').addEventListener('click', clickAction);

	function clickAction(e) {
		let btn = e.target;
		let input = document.querySelector('#myNumbers input');
		let numbers = input.value
			.trim()
			.split(' ')
			.map(Number)
			.filter(num => num > 0 && num < 50 && num * 10 % 10 === 0);

		if (numbers.length === 6) {
			let allNumbersElement = document.getElementById('allNumbers');
			for (let i = 1; i <= 49; i++) {
				let divElement = document.createElement('div');
				divElement.className = 'numbers';
				divElement.textContent = i;
				if (numbers.includes(i)) {
					divElement.style.backgroundColor = 'orange';
				}
				allNumbersElement.appendChild(divElement)
			}
		} else {
			return;
		}

		btn.disabled=true;
		input.disabled=true;
	}
}
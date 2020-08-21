function solve() {

	let buttons = Array.from(document.getElementsByTagName('button'))
	buttons.forEach((btn) => { btn.addEventListener('click', clickEvent) });
	let sections = Array.from(document.getElementById('exercise').children);
	let correctAnsNumber = 0;

	function clickEvent(e) {
		let button = e.target;
		let selector = '';
		let currSectNumber;
		let correctAnswer;

		if (button === buttons[0]) {
			selector = 'input[name="softUniYear"]';
			currSectNumber = 0;
			correctAnswer = '2013';
		} else if (button === buttons[1]) {
			selector = 'input[name="popularName"]';
			currSectNumber = 1;
			correctAnswer = 'Pesho';
		} else if (button === buttons[2]) {
			selector = 'input[name="softUniFounder"]';
			currSectNumber = 2;
			correctAnswer = 'Nakov';
		}

		let radioInputs = Array.from(document.querySelectorAll(selector));
		let answerChecked = false;
		let answer;

		for (let i = 0; i < radioInputs.length; i++) {
			if (radioInputs[i].checked === true) {
				answer = radioInputs[i];

				if (correctAnswer === answer.value) {
					correctAnsNumber++;
				}
				answerChecked = true;
				break;
			}
		}

		if (answerChecked && button !== buttons[2]) {
			sections[currSectNumber + 1].style.display = 'block';
			button.disableEventListener('click', clickEvent)
		} else if (answerChecked && button === buttons[2]) {
			let result = '';
			if (correctAnsNumber === 3) {
				result = 'You are recognized as top SoftUni fan!';
			} else {
				result = `You have ${correctAnsNumber} right answers`;
			}
			let pElement = document.createElement('p');
			pElement.textContent = result;
			document.getElementById('result').style.display = 'block';
			document.getElementById('result').appendChild(pElement);
			button.disableEventListener('click', clickEvent);
		}
	}
}
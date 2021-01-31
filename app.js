const pinGenerator = () => {
	const pin = Math.ceil(Math.random() * 10000);
	if ((pin + '').length == 4) {
		return pin;
	} else {
		return pinGenerator();
	}
};

const verifyPin = (userPin, systemPin) => {
	if (systemPin.length == 4 && userPin.length == 4 && userPin === systemPin) {
		return true;
	} else {
		return false;
	}
};

// DOM operation
let displayPin = document.querySelector('#systemPinDisplay');
let userPinDisplay = document.querySelector('#userPinDisplay');
const getPin = () => {
	const systemPin = pinGenerator();
	displayPin.value = systemPin;
};

// Display User Input
document.querySelector('#numberPad').addEventListener('click', (e) => {
	if (isNaN(parseInt(e.target.innerText)) != true) {
		userPinDisplay.value = userPinDisplay.value + e.target.innerText;
	}
});

//Clear the input field
const clearInput = () => {
	userPinDisplay.value = '';
};

// Delete Single Item
const deleteSingleItem = () => {
	let arr = [...userPinDisplay.value];
	arr.pop(arr.length - 1);
	userPinDisplay.value = arr.join('');
};

// max try Count
let maxTry = 4;
let tryCount = document.querySelector('#tryCount');
tryCount.innerText = maxTry;
const tyrCountRest = () => {
	maxTry = 4;
	tryCount.innerText = maxTry;
};

// Getting The result
const getResult = () => {
	if (maxTry === 1) {
		userPinDisplay.value = '';
		displayPin.value = '';
		tyrCountRest();
	} else {
		if (verifyPin(displayPin.value, userPinDisplay.value)) {
			document.querySelector('#successMsg').style.display = 'block';
			userPinDisplay.value = '';
			displayPin.value = '';
			tyrCountRest();
			setTimeout(() => {
				document.querySelector('#successMsg').style.display = 'none';
			}, 3000);
		} else {
			document.querySelector('#errorMsg').style.display = 'block';
			maxTry = --maxTry;
			tryCount.innerText = maxTry;
			setTimeout(() => {
				document.querySelector('#errorMsg').style.display = 'none';
			}, 3000);
		}
	}
};

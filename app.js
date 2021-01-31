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
// Getting The result
const getResult = () => {
	if (verifyPin(displayPin.value, userPinDisplay.value)) {
		document.querySelector('#successMsg').style.display = 'block';
		setTimeout(() => {
			document.querySelector('#successMsg').style.display = 'none';
		}, 3000);
	} else {
		document.querySelector('#errorMsg').style.display = 'block';
		setTimeout(() => {
			document.querySelector('#errorMsg').style.display = 'none';
		}, 3000);
	}
};

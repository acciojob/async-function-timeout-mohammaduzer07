//your JS code here. If required.
let text = document.getElementById('text');
let delay = document.getElementById('delay');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

async function display(){
	const message = text.value;
	const delayVal = delay.value;
	await new Promise((resolve) => setTimeout(resolve, delayVal));
	output.innerText = message;
}

btn.addEventListener('click', display);

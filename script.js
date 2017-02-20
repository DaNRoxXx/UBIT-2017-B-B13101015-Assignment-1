// JavaScript Document

var box = document.getElementById('display');

function set(num) {
	if(box.value == '') {
		if(num == '+' || num == '-' || num == '*' || num == '/') {
			return;	
		}
	}
		box.value += num;

	if (num == 'C') {
		box.value = '';
	}
}

function decimal(dec) {
	
	var display = document.getElementById("display");

	
	for (i = 0; i < display.value.length; i++) {
		if (display.value.charAt(i) == '.') {
			return;
		}
	}
		
	display.value += dec;
}

function calculate() {
	if(box.value == '')
	{
		return;
	} else {
		x = box.value;
		x = eval(x);
		box.value = x;
	}
}

function power(y) {
	x = box.value;
	x = Math.pow(x, y);
	box.value = x;
}

function backspace() {
	var num = box.value;
	var len = num.length - 1;
	var newnum = num.substring(0, len);
	box.value = newnum;
}

'use strict';

var output = document.getElementById('script-output');
var button = document.getElementById('greeter-button');
var buttonv2 = document.getElementById('button-F-to-C');

var log = function (text) {
	output.innerHTML += (text + '<br>');
};


var tempCelsToFahr = function (temperature) {
	var newFahr = (temperature * 1.8 + 32);
	return newFahr;
};

var tempFahrToCels = function (temperature) {
	var newCels = ((temperature - 32) / 1.8);
	return newCels;
};

var info = function (temperature) {
	if (temperature > 100) {
		return '<strong>W tej temperaturze woda przyjmuje stan pary wodnej</strong><br>';
	} else if (temperature < 0) {
		return '<strong>W tej temperaturze woda zmienia się w lód</strong><br>';
	} else {
		return '';
	}
};


button.addEventListener('click', function () {
	var cels;
	var newFahr;

	cels = parseFloat(window.prompt('Ile wynosi temperatura w stopniach Celsjusza?'));

	if (isNaN(cels)) {
		log('Podano złą wartość! Wpisz liczbę! <br><br>');
	} else {
		newFahr = tempCelsToFahr(cels);
		log('Temperatura w stopniach Celsjusza to: ' + cels + '! <br><br> Natomiast w stopniach Fahrenheita to: ' + newFahr + '<br><br>');
		log(info(cels));
	}
});


buttonv2.addEventListener('click', function () {
	var fahr;
	var newCels;

	fahr = parseFloat(window.prompt('Ile wynosci temperatura w stopniach Fahrenheita?'));

	if (isNaN(fahr)) {
		log('Podano złą wartość! Wpisz liczbę!' + '<br><br>');
	} else {
		newCels = tempFahrToCels(fahr);
		log('Temperatura w stopniach Fahrenheita to: ' + fahr + '! <br><br> Natomiast w stopniach Celsjusza to: ' + newCels + '<br>');
		log(info(newCels));
	}
});
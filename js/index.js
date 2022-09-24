'use strict';

const output = document.getElementById('script-output');
const button = document.getElementById('greeter-button');
const buttonv2 = document.getElementById('button-F-to-C');

const bad = '<strong>Podano złą wartość! Wpisz liczbę!</strong><br><br>';
const question = 'Ile wynosi temperatura w stopniach';

let log = function (text) {
    output.innerHTML += text + '<br>';
};

let tempCelsToFahr = function (temperature) {
    let newFahr = temperature * 1.8 + 32;
    return newFahr;
};

let tempFahrToCels = function (temperature) {
    let newCels = (temperature - 32) / 1.8;
    return newCels;
};

let info = function (temperature) {
    if (temperature > 100) {
        return '<strong class="hot">W tej temperaturze woda przyjmuje stan pary wodnej</strong><br><br>';
    } else if (temperature < 0) {
        return '<strong class="cold">W tej temperaturze woda zmienia się w lód</strong><br><br>';
    } else {
        return '';
    }
};

button.addEventListener('click', function () {
    let cels;
    let newFahr;

    cels = parseFloat(window.prompt(question + ' Celsjusza?'));

    if (isNaN(cels)) {
        log(bad);
    } else {
        newFahr = tempCelsToFahr(cels);
        log(
            'Temperatura w stopniach <strong>Celsjusza</strong> to: <strong>' +
                cels +
                '</strong> ! <br><br> Natomiast w stopniach <strong>Fahrenheita</strong> to: <strong>' +
                newFahr.toFixed(1) +
                '</strong> !<br>'
        );
        log(info(cels));
    }
});

buttonv2.addEventListener('click', function () {
    let fahr;
    let newCels;

    fahr = parseFloat(window.prompt(question + ' Fahrenheita?'));

    if (isNaN(fahr)) {
        log(bad);
    } else {
        newCels = tempFahrToCels(fahr);
        log(
            'Temperatura w stopniach <strong>Fahrenheita</strong> to: <strong>' +
                fahr +
                '</strong> ! <br><br> Natomiast w stopniach <strong>Celsjusza</strong> to: <strong>' +
                newCels.toFixed(1) +
                '</strong> !<br>'
        );
        log(info(newCels));
    }
});

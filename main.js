const prompt = require('prompt-sync')();

let menuCal = 0;
do {
    console.log(`--------------------`);
    console.log(`| 1 - start        |`);
    console.log(`| 2 - stop         |`);
    console.log(`| Hit 'x' to exit  |`);
    console.log(`====================\n`);
    menuCal = prompt(``);

    switch (menuCal) {
        case 'x':
        case '2': stop();
            break;
        case '1': calculate();
            break;
        default:
            break;
    }
} while (menuCal != 'x' && menuCal != '2');

function calculate() {
    const operator = prompt('\nscegli un operazione (either+,-,*,/): ');
    const num1 = parseFloat(prompt('scegli un numero: '));
    const num2 = parseFloat(prompt('scegli un altro numero: '));

    inputMe(operator, num1, num2);
}

function inputMe(operator, num1, num2) {

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;

        default:
            console.log('invalid operator')
            break;
    }

    console.log(`\n${num1} ${operator} ${num2} = ${result}`);
}

function stop() {
    console.log('♥');
}
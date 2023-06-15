const prompt = require('prompt-sync')();

let menuCal = 0;
do {
    console.log (`1 - start`);
    console.log (`2 - stop`);
    console.log (`Hit 'x' to exit`); 
    menuCal= prompt(``);

    switch (menuCal) {
        case 'x': out();
            
            break;
            
            case '2': stop();
            
            break;
    
        default:
            break;
    }
} while (menuCal != '1');

function stop(){
    console.log('♥');
}

function out(){
    console.log('See you soon');
}

const operator = prompt('scegli un operazione (either+,-,*,/):');
const num1 = parseFloat (prompt('scegli un numero'));
const num2 = parseFloat (prompt(' scegli un altro numero'));

inputMe(operator,num1, num2);

function inputMe(operator, num1,num2) {
    
    switch (operator){
        case '+':
            result = num1 + num2;
            console.log (`${num1} + ${num2} = ${result}`);
            break;
        
        case '-':
            result = num1 - num2;
            console.log (`${num1} - ${num2} = ${result}`);
            break;
        
        case '*':
            result = num1 * num2;
            console.log (`${num1} * ${num2} = ${result}`);
            break;
        
        case '/':
            result = num1 / num2;
            console.log (`${num1} / ${num2} = ${result}`)
        
        default:
            console.log('invalid operator')
            break;
    }
}
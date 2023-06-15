const prompt = require('prompt-sync')();

const operator = prompt('scegli un operazione (either+,-,*,/):');
const num1 = parseFloat (prompt('scegli un numero'));
const num2 = parseFloat (prompt(' scegli un altro numero'));

inputMe(operator,num1, num2)

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
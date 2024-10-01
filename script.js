// Get all the necessary elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        // Clear display if "C" is pressed
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            result = '';
            display.textContent = '0';
            return;
        }

        // Perform calculation if "=" is pressed
        if (value === '=') {
            if (currentInput && previousInput && operator) {
                result = calculate(previousInput, currentInput, operator);
                display.textContent = result;
                previousInput = result;
                currentInput = '';
                operator = '';
            }
            return;
        }

        // Handle operators
        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
            return;
        }

        // Handle number and decimal input
        if (value !== '=' && value !== 'C') {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

// Function to perform basic calculations
function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

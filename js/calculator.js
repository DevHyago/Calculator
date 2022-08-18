const currentOperation = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons button');

const calculator = new CalculatorController(currentOperation, buttons);

window.onload = function() {
    document.getElementById('num1').focus();
    };

    let activeElement = document.getElementById('num1');
    
    let calculatorData = {
        num1: '',
        num2: '',
        operator: ''
    };

    document.getElementById('num1').addEventListener('input', (e) => {
        calculatorData.num1 = e.target.value;
    });

    document.getElementById('num2').addEventListener('input', (e) => {
        calculatorData.num2 = e.target.value;
    });

    document.getElementById('operator').addEventListener('input', (e) => {
        calculatorData.operator = e.target.value;
    });

    function saveToCache() {
        let valueToCache;
        let focusedElement = document.getElementById(activeElement.id);

        if(focusedElement.id === 'num1') {
            valueToCache = calculatorData.num1;
        } else if(focusedElement.id === 'num2') {
            valueToCache = calculatorData.num2;
        }

        localStorage.setItem("cachedValue", valueToCache);

        document.getElementById(activeElement.id).focus;
    }

    function logCache() {
        console.log(localStorage.getItem("cachedValue"));

        document.getElementById(activeElement.id).focus;
    }

    function addToInput(value) {
        document.getElementById(activeElement.id).focus;
        let focusedElement = document.getElementById(activeElement.id);

        if (focusedElement.id === 'num1' || focusedElement.id === 'num2') {
            focusedElement.value += value;
            focusedElement.dispatchEvent(new Event('input'));
        }
        
        document.getElementById(activeElement.id).focus;
    }

    function setOperator(operator) {
        document.getElementById('operator').value = operator;
        document.getElementById('operator').dispatchEvent(new Event('input'));
        activeElement = document.getElementById('num2');
        document.getElementById('num2').focus();
    }

    function calculate() {
        const { num1, num2, operator } = calculatorData;

        if (!num1 || !num2 || !operator) {
            alert('Введіть обидва числа та оператор.');
            return;
        }

        let result;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            alert('Введені значення повинні бути числами.');
            return;
        }

        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    alert('Ділення на нуль неможливе.');
                    return;
                }
                result = number1 / number2;
                break;
            default:
                alert('Невірний оператор.');
                return;
        }

        alert('Результат: ' + result);

        calculatorData.num1 = '';
        calculatorData.num2 = '';
        calculatorData.operator = '';

        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('operator').value = '';

        activeElement = document.getElementById('num1');
        document.getElementById('num1').focus();
    }
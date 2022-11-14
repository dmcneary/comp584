!function() {
    
    const buttons = document.getElementsByTagName("button");
    const result = document.getElementById("result");

    const NUMBERS_REGEX = /[0-9]/;
    const OPERATORS_REGEX = /[\+\-\*\/]/;

    let inputA = "", inputB = "", operator = "";

    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            handleInput(e.target.value);
        })

        button.addEventListener("keydown", (e) => {
            handleInput(e.key);
        })
    }

    const handleInput = value => {
        if (NUMBERS_REGEX.test(value)) {
            handleNumberInput(value);
        } else if (OPERATORS_REGEX.test(value)) {
            handleOperation(value);
        } else if (value === "Clear") {
            clearCalculator();
        } else if (value === "Backspace") {
            if (inputB) {
                inputB = popInput(inputB);
                result.innerText = inputB;
            } else {
                inputA = popInput(inputA);
                result.innerText = inputA;
            }
        } else if (value === "=" || value === "Enter") {
            inputA = solveEquation();
            inputB = "";
            operator = "=";
            result.innerText = inputA;
        } else {
            return;
        }
    }

    const handleNumberInput = number => {
        if (operator === "=" || !inputA) {
            operator = "";
            inputA = number;
        }
        else if (operator) inputB += number;
        else inputA += number;
        result.innerText = (inputB) ? inputB : inputA;
    }
    
    const handleOperation = op => {
        if (!inputA) {
            inputA = "0";
            operator = op;
        } else if (inputA && operator) {
            operator = op;
        } else if (inputB) {
            inputA = solveEquation();
            inputB = "";
            result.innerText = inputA;
            operator = op
        } else {
            operator = op;
        }
    }

    const solveEquation = () => {
        if (!inputB) return inputA;
        else {
            switch(operator) {
                case "+": return addInputs(inputA, inputB);
                case "-": return subInputs(inputA, inputB);
                case "*": return mulInputs(inputA, inputB);
                case "/": return divInputs(inputA, inputB);
            }
        }
    }

    const addInputs = (a, b) => parseFloat(a, 10) + parseFloat(b, 10);
    const subInputs = (a, b) => parseFloat(a, 10) - parseFloat(b, 10);
    const mulInputs = (a, b) => parseFloat(a, 10) * parseFloat(b, 10);
    const divInputs = (a, b) => {
        if (b !== "0") {
            return parseFloat(a, 10) / parseFloat(b, 10);
        } else {
            alert("ERROR: Divide by zero - clearing...");
            clearCalculator();
        }
    }

    const clearCalculator = () => {
        inputA = "";
        inputB = "";
        operator = "";
        result.innerText = 0;
    }

    const popInput = input => {
        return input.substring(0, input.length - 1);
    }

}();
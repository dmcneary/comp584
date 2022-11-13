!function() {
    
    const buttons = document.getElementsByTagName("button");
    const result = document.getElementById("result");

    let currentInput = "";
    let equationArray = [];

    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            handleButtonClick(e.target.value);
        })

        button.addEventListener("keydown", (e) => {
            handleKeyDown(e.key);
        })
    }

    const handleButtonClick = value => {
        if (value.test(/[0-9]/)) {
            currentInput += handleNumberInput(value);
        } else {
            handleOperation(value)
        }
    }

    const handleKeyDown = e => {
        //todo: add backspace key
        if (value.test(/[0-9]/)) {
            currentInput += handleNumberInput(value);
        } else {
            handleOperation(value)
        }
    }

    const handleNumberInput = number => {
        return (!currentInput) ? 
            (number !== "0") ? 
                number : 
                "" :
            number;
    }
    
    const handleOperation = op => {
        if (op === "b") {
            currentInput = currentInput.substring(0, currentInput.length - 1);
        } else if (op === "c") {
            currentInput = "";
        } else if (op ==="=") {
            solveEquation(currentInput)
        } else {
            currentInput += (currentInput) ? 
                (currentInput.charAt(currentInput.length - 1).test(/[0-9]/)) ? 
                    op :
                    currentInput.substring(0, currentInput.length - 1) + op :
                "0" + op;
        }
    }


    

}();
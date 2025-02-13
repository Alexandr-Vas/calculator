const displayOutput = document.querySelector(".calc_output");
const buttons = document.querySelectorAll(".btn");
const solutionHistory = document.querySelector(".solution_history");

let expression = '';

let result = '';

function getOperationResult(a, operator, b) {
    a = Number(a);
    b = Number(b);
  
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return b;
    }
}

function getCalculateResult(expression) {
    const tokens = expression.split(/([\+\-\*\/])/);
    const numbers = [];
    const operators = [];
    
  
    tokens.forEach((token) => {
        if (['+', '-', '*', '/'].includes(token)) {
            operators.push(token);
        } else {
            numbers.push(token);
        }  
    });

    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === '*' || operators[i] === '/') {
        const result = getOperationResult(numbers[i], operators[i], numbers[i + 1]);
        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        i--;
      }
    }
  
    
    let total = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      total = getOperationResult(total, operators[i], numbers[i + 1]);
    }
  
    return total;
}



buttons.forEach((button) => {
    button.addEventListener("click", function(event){
        let buttonValue = event.target.innerHTML;

        switch (buttonValue) {
            case "AC":
                displayOutput.value= "0";
                solutionHistory.value = '';
                break;

            case "+/-":
                displayOutput.value = parseFloat(displayOutput.value) * -1;
                break;

            case "%":
                displayOutput.value= parseFloat(displayOutput.value) / 100;
                break;

            case "/":
                if (displayOutput.value == 0){
                    break;
                }else if(!['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
                    displayOutput.value += buttonValue;
                }
                break;

            case "*":
                if (displayOutput.value == 0){
                    break;
                }else if(!['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
                    displayOutput.value += buttonValue;
                }
                break;
            
            case "-":
                if (displayOutput.value == 0){
                    break;
                }else if(!['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
                    displayOutput.value += buttonValue;
                }
                break;

            case "+":
                if (displayOutput.value == 0){
                    break;
                }else if(!['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
                    displayOutput.value += buttonValue;
                }
                break;

            case "=":
                result = String(getCalculateResult(expression));
                displayOutput.value = result;
                solutionHistory.value = expression;

                break;            


            

            default:
                if (displayOutput.value === "0" && buttonValue !==".") {
                    displayOutput.value = buttonValue;
                    } else {
                    displayOutput.value += buttonValue
                    }
        }

        expression = displayOutput.value;
    })
});

const output = document.querySelector(".calc_output");
const buttons = document.querySelectorAll(".btn");

let arraySolutionChars = [];

let equation = [];

buttons.forEach((button) => {
    button.addEventListener("click", function(event){
        let btnValue = event.target.innerHTML;

        function changeOperatorInOutput(arraySolution){
            let last_item = arraySolution[arraySolution.length - 1];
        
                if(["/", "*", "+", "-"].includes(last_item)) {
                    arraySolution.pop();
                    arraySolution.push(btnValue);
                    output.value = arraySolution.join("");
                } else {
                    arraySolution.push(btnValue);
                    output.value = arraySolution.join("");
                }
        }

        switch (btnValue) {
            case "AC":
                output.value= "0";
                arraySolutionChars = [];
                break;

            case "+/-":
                output.value = parseFloat(output.value) * -1;
                break;

            case "%":
                output.value= parseFloat(output.value) / 100;
                break;

            case "/":
                changeOperatorInOutput(arraySolutionChars)
                break;

            case "*":
                changeOperatorInOutput(arraySolutionChars);
                break;
            
            case "-":
                changeOperatorInOutput(arraySolutionChars);
                break;

            case "+":
                changeOperatorInOutput(arraySolutionChars);
                break;

            case "=":
                result = eval(output.value);
                
                break;            


            

            default:
                if (output.value === "0" && btnValue !==".") {
                    output.value = btnValue;
                    } else {
                    output.value += btnValue
                    }
                arraySolutionChars.push(btnValue);    
        }
    })
});

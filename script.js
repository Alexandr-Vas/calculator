const output = document.querySelector(".calc_output");
const buttons = document.querySelectorAll(".btn");

let arraySolutionChars = [];

let solutionArray = [];

let result;


buttons.forEach((button) => {
    button.addEventListener("click", function(event){
        let btnValue = event.target.innerHTML;

        function changeOperatorInOutput(arraySolutionChars){
            let last_item = arraySolutionChars[arraySolutionChars.length - 1];
        
                if(["/", "*", "+", "-"].includes(last_item)) {
                    arraySolutionChars.pop();
                    arraySolutionChars.push(btnValue);
                    output.value = arraySolutionChars.join("");
                } else {
                    arraySolutionChars.push(btnValue);
                    output.value = arraySolutionChars.join("");
                }
        }

        function getSolutionArray(arraySolutionChars, solutionArray){
            let number = "";
            arraySolutionChars.forEach((element,index) => {
                if (["/", "*", "+", "-"].includes(arraySolutionChars[index])) {
                    solutionArray.push(number);
                    number = "";
                    solutionArray.push(element);
                }
                if(Number(element)){
                    number += element;
                }        
            });
            solutionArray.push(number);
            
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
                getSolutionArray(arraySolutionChars,solutionArray);
                console.log(solutionArray);

                let startNumber = Number(solutionArray[0]);
                for (let i = 0; i < solutionArray.length; i++) {
                    if (["/", "*", "+", "-"].includes(solutionArray[i])) {
                        switch (solutionArray[i]) {
                            case "+":
                                startNumber += Number(solutionArray[i+1]);
                                result = startNumber;
                                break;
                            case "-":
                                startNumber -= Number(solutionArray[i+1]);
                                result = startNumber;
                            case "*":
                                startNumber *= Number(solutionArray[i+1]);
                                result = startNumber;
                            case "/":
                                startNumber /= Number(solutionArray[i+1]);
                                result = startNumber;
                            default:
                                break;
                        }
                    }
                }

                output.value = result;

                solutionArray = [];
                arraySolutionChars = [];
                arraySolutionChars.push(output.value);
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

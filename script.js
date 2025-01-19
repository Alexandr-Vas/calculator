const out = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", function(event){
        let btnValue = event.target.innerHTML;

        switch (btnValue) {
            case "AC":
                out.innerHTML= "0"
                break;
        
            default:
                if (out.innerHTML === "0" && btnValue !==".") {
                    out.innerHTML = btnValue;
                    } else {
                    out.innerHTML += btnValue
                    }
        }
    })
});

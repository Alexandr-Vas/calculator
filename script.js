const out = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", function(event){
        let trgInner = event.target.innerHTML;

        switch (trgInner) {
            case "AC":
                out.innerHTML= "0"
                break;
        
            default:
                if (out.innerHTML === "0" && trgInner !==".") {
                    out.innerHTML = trgInner;
                    } else {
                    out.innerHTML += trgInner
                    }
        }
    })
});

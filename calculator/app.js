const btn = document.querySelectorAll(".btn");
const display = document.createElement("input");
document.querySelector(".container").prepend(display);
let screen = "";
btn.forEach(btn => {
    btn.addEventListener("click", () => {


        const value = btn.innerText;

        if (value == "=") {
            screen = eval(screen);
            display.value = screen
        }
        else {
            screen += value;
            display.value = screen
        }





    });
});


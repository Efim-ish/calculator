const calc = document.getElementById("calc");
const display = document.getElementById("display");
const plusMinusButton = document.getElementById("plusminus");
const calcButtonResult = document.getElementById("calcButtonResult");
const calcButtonClear = document.getElementById("calcButtonClear");

calc.addEventListener("click", ev => {
    const element = ev.target
    if (element.classList.contains("calc-btn") && !element.id) {
        if (display.innerText === "0")
            display.innerText = element.innerText;
        else
            display.innerText += element.innerText;
    }
});

function onPlusMinusButtonClick(ev) {
    display.innerText = eval(`(${display.innerText}) * -1`)
}

plusMinusButton.addEventListener("click", onPlusMinusButtonClick)

function onRusultButtonClick(ev) {
    display.innerText = eval(display.innerText)
}

calcButtonResult.addEventListener("click", onRusultButtonClick)

function onClearButtonClick(ev) {
    display.innerText = "0"
}

calcButtonClear.addEventListener("click", onClearButtonClick)
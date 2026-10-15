
let firstNumber = null;
let operator = null;
let secondNumber = null;


// Number buttons logic 

const numberButton = document.querySelectorAll(".number");

numberButton.forEach(button => {
    button.addEventListener("click",() => {
        const number = button.textContent;
        
        if(display.value ==="0" || waitingForSecondNumber)
            display.value = number;
            waitingForSecond
    }
    )

 });


 // operators logic

 const operatorButtons = document.querySelectorAll(".operator");

 operatorButtons.forEach(buttons =>{
    firstNumber = number(display.value);
    operator = button.textContent;


 });
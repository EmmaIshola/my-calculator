class Calculator{ constructor(currentScreen,previousScreen){
    this.currentScreen = currentScreen;
    this.previousScreen = previousScreen;
    this.clear()
}
clear(){
    this.currentOperation = ""
    this.previousOperation = ""
    this.operation = undefined;
}
delete(){
    this.currentOperation = this.currentOperation.toString().slice(0,-1)
}
addIt(number){
    if(this.currentOperation.toString().includes(".") && number === ".")return
this.currentOperation = this.currentOperation + number;
}
chooseOperation(operation){
    if(this.currentOperation === "" )return
    if(this.previousOperation !== ""){
        this.computeMe()
    }
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    this.currentOperation = ""
}
computeMe(){
    let result;
    let prev = parseFloat(this.previousOperation)
    let current = parseFloat(this.currentOperation)
    
    switch(this.operation){
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "/":
            result = prev / current;
            break;
        case "*":
            result = prev * current;
            break;
        default:
            return;
    }
    this.currentOperation = result;
    this.previousOperation = ""
    this.operation = undefined;
}
updateDisplay(){
    this.currentScreen.innerText = this.currentOperation;
    this.previousScreen.innerText = this.previousOperation;
}
}
const numberButton = document.querySelectorAll("[numberButton]")
const operationButton = document.querySelectorAll("[operationButton]")
const equalsButton = document.querySelector("[equalsButton]")
const allClear = document.querySelector("[allClear]")
const deleteButton = document.querySelector("[deleteButton]")
const currentScreen = document.querySelector('[currentScreen]')
const previousScreen = document.querySelector("[previousScreen]")

var calculator = new Calculator(currentScreen,previousScreen)

numberButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.addIt(button.innerText),
        calculator.updateDisplay()
    })
})
operationButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText),
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener("click", ()=>{
    calculator.computeMe(),
    calculator.updateDisplay()
})
allClear.addEventListener("click", ()=>{
    calculator.clear(),
    calculator.updateDisplay()
})
deleteButton.addEventListener("click", () =>{
    calculator.delete(),
    calculator.updateDisplay()
})
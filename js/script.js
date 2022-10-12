class Calculator
{
    constructor(previousOperandTxt,currentOperandTxt){
        this.currentOperandTxt=currentOperandTxt;
        this.previousOperandTxt=previousOperandTxt;
        this.clear();
    }
    clear(){
         this.currentOperand="";
         this.previousOperand="";
         this.operation=undefined;
    }

    appendNumbers(numbers){
        if(numbers==="." && this.currentOperand.includes("."))return
        this.currentOperand=this.currentOperand.toString() + numbers.toString();
    }

    chooseOperations(operation)
    {
        this.operation=operation;
        this.previousOperand=this.currentOperand+operation.toString();
        this.currentOperand=''
    } 

    computeNumbers(){

    }

    updateDisplay(){
        this.currentOperandTxt.innerText=this.currentOperand;
        this.previousOperandTxt.innerText=this.previousOperand;
    }

}

const numbers=document.querySelectorAll("[data-number]");
const operators=document.querySelectorAll("[data-op]");
const deleteBtn=document.querySelector("[data-delete]");
const clearBtn=document.querySelector("[data-clear]");
const equals=document.querySelector("[data-equal]");
const previousOperandTxt=document.querySelector("[data-previous-operand]");
const currentOperandTxt=document.querySelector("[data-current-operand]");

const calculator=new Calculator(previousOperandTxt,currentOperandTxt);
numbers.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumbers(button.innerText);
        calculator.updateDisplay();
    })
})

operators.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperations(button.innerText);
        calculator.updateDisplay();
    })
})


    clearBtn.addEventListener('click',()=>{
        calculator.clear();
        calculator.updateDisplay();
    })

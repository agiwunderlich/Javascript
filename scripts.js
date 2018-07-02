// konstansok

const STATUS_FIRSTNUM = 'firstnum',
      STATUS_SECONDNUM = 'secondnum',
      STATUS_OPERAND = 'operand',
      STATUS_DONE = 'done';

// változók

let number1 = null;
let operand = null;
let number2 = null;
let status = STATUS_FIRSTNUM;


let displayNumber1 = document.getElementById('displayNumber1');
let displayOperand = document.getElementById('displayOperand');
let displayNumber2 = document.getElementById('displayNumber2');


let button0 = document.getElementById('button0');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');


let buttonAdd = document.getElementById('Add');
let buttonMinus = document.getElementById('Minus');
let buttonTimes = document.getElementById('Times');
let buttonDivide = document.getElementById('Divide');
let buttonEquals = document.getElementById('Equals');

let buttonDel = document.getElementById('Del');


// Eseményekre feliratkozás

button0.addEventListener('click', OnNumberClick);
button1.addEventListener('click', OnNumberClick);
button2.addEventListener('click', OnNumberClick);
button3.addEventListener('click', OnNumberClick);
button4.addEventListener('click', OnNumberClick);
button5.addEventListener('click', OnNumberClick);
button6.addEventListener('click', OnNumberClick);
button7.addEventListener('click', OnNumberClick);
button8.addEventListener('click', OnNumberClick);
button9.addEventListener('click', OnNumberClick);

buttonAdd.addEventListener('click', OnOperandClick);
buttonMinus.addEventListener('click', OnOperandClick);
buttonTimes.addEventListener('click', OnOperandClick);
buttonDivide.addEventListener('click', OnOperandClick);
buttonEquals.addEventListener('click', OnOperandClick);

buttonDel.addEventListener('click', OnDeleteClick);



function OnNumberClick(){
    let currentElement = this;
    let currentNumber = +currentElement.innerText;

    switch(status){
        case STATUS_DONE:
        SetNumber1(currentNumber);
        status = STATUS_FIRSTNUM;
        break;

        case STATUS_FIRSTNUM:
        SetNumber1(number1*10 + currentNumber);
        break;

        case STATUS_OPERAND:
        SetNumber2(currentNumber);
        status = STATUS_SECONDNUM;
        break;

        case STATUS_SECONDNUM:
        SetNumber2(number2*10 + currentNumber);
        break;



    }
    console.log('status: ',status);
}

function OnOperandClick(){
    let currentElement = this;
    let currentOperand = currentElement.innerText;

    switch(status){
        case STATUS_FIRSTNUM:
        if(currentOperand == '='){
            break;
        } else {
        SetOperand(currentOperand);
        status = STATUS_OPERAND;
        break;
        }


        case STATUS_SECONDNUM:
        let answer = Math.round(eval(number1 + operand + number2)*1000)/1000;
        SetNumber1(answer);
        SetNumber2(null);
        
        if (currentOperand == '='){
            status = STATUS_DONE;
        SetOperand(null);
        } else {
            SetOperand(currentOperand);
            status = STATUS_OPERAND;
        }
        break;

        case STATUS_DONE:
        if(currentOperand == '='){
            break;
        }
        status = STATUS_FIRSTNUM;

        case STATUS_FIRSTNUM:
        if(currentOperand == '='){
            break;
        }
        SetOperand(currentOperand);
        status = STATUS_OPERAND;
        
        case STATUS_OPERAND:
        if(currentOperand == '='){
            break;
        }
    }
    console.log('status: ',status);
}

function OnDeleteClick(){
    SetNumber1(0);
    SetNumber2(null);
    SetOperand(null);
    switch(status){
        case STATUS_FIRSTNUM, STATUS_OPERAND, STATUS_SECONDNUM:
        status = STATUS_DONE;
    }
    console.log('status: ',status);
}

// Értékadó függvények

function SetNumber1(value){
    number1 = value;
    displayNumber1.innerText = value;

}

function SetNumber2(value){
    number2 = value;
    displayNumber2.innerText = value;

}

function SetOperand(value){
    operand = value;
    displayOperand.innerText = value;

}


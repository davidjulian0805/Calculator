
const BUTTONS = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
const OPERATOR_BUTTONS = document.querySelectorAll('.btn-operator');
let clear_btn = document.querySelectorAll('.btn-function-clear');
let delete_btn = document.querySelectorAll('.btn-function-delete');
let operators = document.querySelectorAll('.btn-operator')
let buttons = document.querySelectorAll('.btn-number');
let equal_btn = document.querySelectorAll('.btn-equals');
let decimal_btn = document.querySelectorAll('btn-decimal');



let firstNumber = '';
let secondNumber = '';
let operator = '';

//button function to display the numbers
for (let i=0; i < buttons.length; i++){
  let button = buttons[i];
  button.addEventListener('click' , () => {
   if(display.innerHTML === '0'){
        display.innerHTML = button.innerHTML;
   }
   else{
    display.innerHTML += button.innerHTML;
   }
  })
}

clear_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        display.innerHTML = '0';
    })
})

delete_btn.forEach(btn => {
        btn.addEventListener('click', () =>
        {
            display.innerHTML = display.innerHTML.slice(0, -1);
            if(display.innerHTML === ''){
                display.innerHTML = '0';
            }
        })

})


operators.forEach(btn => {
    btn.addEventListener('click', () => {
        firstNumber = display.innerHTML;
        operator = btn.innerHTML;
        display.innerHTML = '0'; 
        shouldResetDisplay = true;
    })
})

equal_btn.forEach(btn => {
    btn.addEventListener('click', () => {
    secondNumber = display.innerHTML;
    let result = operations(firstNumber, secondNumber, operator);
    display.innerHTML = result;
    firstNumber = '';
    secondNumber = '';
       })
})

document.addEventListener('keydown', (event) =>{
const key = event.key;


    if (key >= '0' && key <= '9') {
        if (display.innerHTML === '0') {
            display.innerHTML = key;
        } else {
            display.innerHTML += key;
        }
    }
  if (key === '.') {
        if (!display.innerHTML.includes('.')) {
            display.innerHTML += '.';
        }
    }

    if (key === '+' || key === '-' || key === '*' || key === '/') {
        firstNumber = display.innerHTML;
        
        if (key === '*') {
            operator = '×';
        } else if (key === '/') {
            operator = '÷';
        } else if (key === '-') {
            operator = '−';
        } else {
            operator = key;
        }
        
        display.innerHTML = '0';
        shouldResetDisplay = true;
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        secondNumber = display.innerHTML;
        let result = operations(firstNumber, secondNumber, operator);
        display.innerHTML = result;
        firstNumber = '';
        secondNumber = '';
        operator = '';
        shouldResetDisplay = true;
    }

  
    if (key === 'Escape' || key.toLowerCase() === 'c') {
        display.innerHTML = '0';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        shouldResetDisplay = false;
    }

   
    if (key === 'Backspace') {
        display.innerHTML = display.innerHTML.slice(0, -1);
        if (display.innerHTML === '') {
            display.innerHTML = '0';
        }
    }
})


function operations(a, b, op) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let result;

    switch(op) {
        case '+':
            result = num1 + num2;
            break;
        case '−': 
            result = num1 - num2;
            break;
        case '×': 
            result = num1 * num2;
            break;
        case '÷': 
            result = num2 !== 0 ? num1 / num2 : 0;
            break;
        case '%': 
            result = num2 !== 0 ? num1 % num2 : 0;
            break;
        default:
            result = 0;
    }

    return result;
}
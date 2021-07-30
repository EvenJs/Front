const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = document.querySelector('.screen')

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'plus') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'substract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
}


keys.addEventListener('click', e=> {
  if(e.target.matches('button')){
    //console.log('worked')
    const key = e.target;
    //console.log(key);
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if(!action){
      if(displayedNum === '0' || previousKeyType ==='operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if(action === 'decimal') {
      display.textContent = displayedNum + '.';
    }

    if (
      action === 'plus' ||
      action === 'substract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = 'operator';
      console.log('worked')
    }

    if (action ==='clear') {
      console.log('clear');
    }

    
    if (action ==='calculate') {
      const firstValue  = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      
      display.textContent = calculate(firstValue, operator, secondValue);
    } 

  }
})
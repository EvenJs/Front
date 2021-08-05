const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('.screen')


const pressNumber = (currentInput,previousKeyType)=> {
  if(currentInput=== '0' || previousKeyType ==='operator'|| previousKeyType ==='calculate') {
    return keyContent;
  } else {
    return currentInput + keyContent;
  }
  calculator.dataset.previousKeyType = 'number';
}

//calculate function for + - * %;
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

 // decimal function;
 const pressDecimal = (currentInput, previousKeyType) => {
  if (currentInput.includes('.')) {
    console.log('included .')
    return currentInput;
  }

  if (previousKeyType === 'operator' || currentInput === 0) {
    console.log('type is operator or input is 0')
    return '0.';
  }

  console.log('normal case, previous input is number')
  return currentInput = currentInput + '.';
}

//operator function;
//const pressOperator = () => {
//  if(displayedNum === 0 || ) {}

//}



keys.addEventListener('click', e => {
  if(e.target.matches('button')){
    //console.log('worked')
    const key = e.target;
    //console.log(key);
    const action = key.dataset.action;
    const keyContent = key.textContent;
    let displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // below codes are for blabla confition, logic is like blabla;
    if(!action){
      if(displayedNum === '0' || previousKeyType ==='operator'|| previousKeyType ==='calculate') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }

      calculator.dataset.previousKeyType = 'number';
      //console.log(calculator.dataset.previousKeyType);
    }

    //when user click decimal button
    if(action === 'decimal') {
      // console.log(0,'decimal');
      // //only can have one decimal
      // if (!displayedNum.includes('.')) {
      //   display.textContent = displayedNum + '.';
      //   console.log(1, display.textContent);
      // } else if (previousKeyType === 'operator') {
      //   display.textContent = '0.';
      // }
      
      // calculator.dataset.previousKeyType = 'decimal';
      displayedNum = pressDecimal(displayedNum, previousKeyType);
      display.textContent = displayedNum;
      // if (currentInput.includes('.')) {
      //   return currentInput;
      // }

      // if (previousKeyType === 'operator' || currentInput === 0) {
      //   return '0.';
      // }

      // return currentInput = currentInput + '.';
    }

    //if user click operator button (+,-,*,%)
    if (
      action === 'plus' ||
      action === 'substract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      calculator.dataset.firstValue = Number(displayedNum);
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = 'operator';
     // console.log(calculator.dataset.previousKeyType);
      //console.log('worked')
    }
    //when user click clear button
    if (action ==='clear') {
      display.textContent = '0';

      calculator.dataset.previousKeyType = 'clear';
      //console.log(calculator.dataset.previousKeyType);
    }

    
    if (action ==='calculate') {
      const firstValue  = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = 'calculate';
      //console.log(calculator.dataset.previousKeyType);
    } 

  }
})


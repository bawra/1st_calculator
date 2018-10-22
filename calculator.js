const calculator = document.querySelector(".calculator")
const display = document.querySelector('.calculator__display')
const action_display = document.querySelector('.action__display')
const keys = calculator.querySelector(".calculator__keys")
keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    if (!action){
      if (display.textContent == '0' || calculator.dataset.previousKeyType == 'operator'){
        display.textContent = key.textContent
        action_display.textContent = action_display.textContent + key.textContent
        calculator.dataset.previousKeyType = 'deciml'
      }
      else{
        display.textContent = display.textContent + key.textContent
        action_display.textContent = action_display.textContent + key.textContent
        calculator.dataset.previousKeyType = 'deciml'
      }
    }
    if (action == 'decimal'){
      display.textContent = display.textContent  + '.'
      action_display.textContent = action_display.textContent + '.'
      calculator.dataset.previousKeyType = 'deciml'
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      firstNumber = display.textContent
      firstNumber = Number(firstNumber)
      operator = action
      if (operator === 'add') {
        action_display.textContent = action_display.textContent + '+'
      }
      else if (operator === 'subtract') {
        action_display.textContent = action_display.textContent + '-'
      }
      else if (operator === 'multiply') {
        action_display.textContent = action_display.textContent + '✕';
      }
      else if (operator === 'divide') {
        action_display.textContent = action_display.textContent + '/'
      }
    }
    if (
      action === 'calculate'
    ) {
      calculator.dataset.previousKeyType = 'operator'
      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
      secondNumber = display.textContent
      secondNumber = Number(secondNumber)
      if (operator === 'add') {
        result = firstNumber + secondNumber
      }
      else if (operator === 'subtract') {
        result = firstNumber - secondNumber
      }
      else if (operator === 'multiply') {
        result = firstNumber * secondNumber
      }
      else if (operator === 'divide') {
        result = firstNumber / secondNumber
      }
      display.textContent = (result).toFixed(3)
      firstNumber = result
      action_display.textContent = action_display.textContent  + '=' + display.textContent
    }

    if (
      action === 'clear'
    ) {
      operator = 'none'
      firstNumber = 0
      secondNumber = 0
      result = 0
      display.textContent = 0
      action_display.textContent = 0
      return
    }
  }
 })

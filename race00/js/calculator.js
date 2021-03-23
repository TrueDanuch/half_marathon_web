let input = document.getElementById('input')
let outputStr = input.value

let caretPos = 1
let shift = false

function update() {
  
  input.value = outputStr.slice(0, caretPos) + '|' + outputStr.slice(caretPos, outputStr.length)
  if (caretPos < 0) caretPos = 0
  console.log(caretPos)
}

function solve() {
  if (checkSkobki() != 0) {
    input.value = "Count your skobki, mudila"
    return
  }
  while (true) {
    let temp = input.value
    input.value = simplify(outputStr)
    input.value = removeSimpleParantheses(outputStr)
    input.value = calculateFuncs(outputStr)
    if (input.value == temp) break
  }
  caretPos = input.value.length
  input.value = outputStr
  // update()
}


function simplify() {
  while (true) {
    let temp = outputStr
    let regexp = /((\d+.\d+)|(\d+))[*/]((\d+.\d+)|(\d+))/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, eval(outputStr.match(regexp)[0]))
    if (temp == outputStr) break
  }
  while (true) {
    let temp = outputStr
    let regexp = /((\d+.\d+)|(\d+))[+-]((\d+.\d+)|(\d+))/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, eval(outputStr.match(regexp)[0]))
    if (temp == outputStr) break
  }
  return outputStr
}

function removeSimpleParantheses() {
  while (true) {
    let temp = outputStr
    let regexp = /[(]((\d+.\d+)|(\d+))[)]/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, eval(outputStr.match(regexp)[0]))
    if (temp == outputStr) break
  }
  while (true) {
    let temp = outputStr
    let regexp = /[(][)]/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, '')
    if (temp == outputStr) break
  }

  return outputStr
}

function calculateFuncs() {
  while (true) {
    let temp = outputStr
    let regexp = /sqrt((\d+.\d+)|(\d+))/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, Math.sqrt(outputStr.match(regexp)[0].match(/(\d+.\d+)|(\d+)/)[0]))
    if (temp == outputStr) break
  }
  while (true) {
    let temp = outputStr
    let regexp = /((\d+.\d+)|(\d+))\^((\d+.\d+)|(\d+))/g
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, (m, n) => { return pow(m) })
    if (temp == outputStr) break
  }
  while (true) {
    let temp = outputStr
    let regexp = /((\d+.\d+)|(\d+))!/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, fact(outputStr.match(/((\d+.\d+)|(\d+))/)[0]))
    if (temp == outputStr) break
  }
  while (true) {
    let temp = outputStr
    let regexp = /%/
    if (outputStr.match(regexp))
      outputStr = outputStr.replace(regexp, "/100")
    if (temp == outputStr) break
  }
}
function fact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * fact( num - 1 ); }
}
function pow(mathstr) {
  let nums = mathstr.split('^')
  return Math.pow(nums[0], nums[1])
}

function addSymbol(symbol, override = false) {
  if (outputStr == '0') outputStr = ''
  if (isOp(outputStr[caretPos - 1]) && isOp(symbol)) return
  if (symbol == '.' && input.value.slice(input.value.length - 2, input.value.length - 1) == '.') return
  if (symbol == '(_)' && !override) {
    if (checkSkobki() > 0) addSymbol(')')
    else if (checkSkobki() < 0) addSymbol('(')
    else addSymbol('()')
    return
  }
  outputStr = outputStr.slice(0, caretPos) + symbol + outputStr.slice(caretPos, outputStr.length)
  if (symbol.match(/sqrt/)) caretPos += 5
  else caretPos++
  update()
}

function clearInput() {
  outputStr = "0"
  caretPos = 1
  update()
}

function backspace() {
  outputStr = outputStr.slice(0, caretPos - 1) + outputStr.slice(caretPos, outputStr.length)
  caretPos--
  update()
}

function del() {
  outputStr = outputStr.slice(0, caretPos) + outputStr.slice(caretPos + 1, outputStr.length)
  update()
}

window.addEventListener('keydown', (key) => {
  console.log(key.code)
  if (key.code === 'Backspace') {
    backspace()
  } else if (key.code.match(/\w+\d/) && !shift) {
    addSymbol(key.code.slice(-1, key.code.length))
  } else if (key.code == 'ArrowLeft') {
    if (outputStr.slice(caretPos - 5, caretPos).match(/sqrt\(/))
      caretPos -= 4
    caretPos--
    if (caretPos < 0) caretPos = 0
    update()
  } else if (key.code == 'ArrowRight') {
    if (outputStr.slice(caretPos, caretPos + 5).match(/sqrt\(/))
      caretPos += 4
    caretPos++
    if (caretPos >= outputStr.length) caretPos = outputStr.length
    update()
  } else if (key.code == 'Enter') {
    solve()
  } else if (key.code.match(/Shift/)) {
    shift = true
  } else if (key.code == 'Equal' && shift || key.code.match(/add/i)) {
    addSymbol('+')
  } else if (key.code == 'Digit5' && shift) {
    addSymbol('%')
  } else if (key.code == 'Minus' && !shift || key.code.match(/subtract/i)) {
    addSymbol('-')
  } else if (key.code == 'Digit8' && shift || key.code == 'NumpadMultiply') {
    addSymbol('*')
  } else if (key.code == 'Slash' && !shift || key.code == 'NumpadDivide') {
    addSymbol('/')
  } else if (key.code == 'Digit6' && shift) {
    addSymbol('^')
  } else if (key.code.match(/del/i)) {
    del()
  } else if (key.code.match(/period/i) || key.code.match(/decimal/i)) {
    addSymbol('.')
  } else if (key.code == 'Digit9' && shift) {
    addSymbol('(', true)
  } else if (key.code == 'Digit0' && shift) {
    addSymbol(')', true)
  } else if (key.code == 'Digit1' && shift) {
    addSymbol('!', true)
  }
})

window.addEventListener('keyup', (key) => {
  if (key.code.match(/Shift/)) {
    shift = false
    console.log('Shift released!')
  }
})

function checkSkobki() {
  let counter = 0
  for (let i = 0; i < outputStr.length; i++) {
    if (outputStr[i] == '(') counter++
    if (outputStr[i] == ')') counter--
  }
  return counter
}

function isOp(op) {
  return op == '+' || op == '-' || op == '*' || op == '/' || op == '^' || op == '%'
}

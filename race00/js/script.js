let modeEnum = {
  'calculator': 0,
  'converter': 1,
}
let systemEnum = {
  'binary': 0,
  'decimal': 1,
  'hex': 2,
}
let state = {
  'mode': modeEnum.calculator,
  'system': systemEnum.decimal,
}
function load() {
  if (state.mode === modeEnum.calculator)
    loadCalculator()
  else
    loadConverter()
}
function loadCalculator() {
  /* loads #input_div which's containing buttons for calculator */
  state.mode = modeEnum.calculator
  let buttons_div = document.getElementById('buttons_div')
  let buttons = document.createElement('table')
  buttons.setAttribute('id', 'table1')
  buttons.setAttribute('onload', 'update()')
  buttons.innerHTML = `
    <tr>
      <td id="num1" onclick="addSymbol('1')">1</td>
      <td id="num2" onclick="addSymbol('2')">2</td>
      <td id="num3" onclick="addSymbol('3')">3</td>
      <td id="plus" onclick="addSymbol('+')">+</td>
      <td id="minus" onclick="addSymbol('-')">-</td>
      <td id="toggle">+/-</td>
    </tr>
    <tr>
      <td id="num4" onclick="addSymbol('4')">4</td>
      <td id="num5" onclick="addSymbol('5')">5</td>
      <td id="num6" onclick="addSymbol('6')">6</td>
      <td id="multiply" onclick="addSymbol('*')">*</td>
      <td id="divide" onclick="addSymbol('/')">/</td>
      <td id="noHover">
        <table id="systemTable">
          <td id="binary"height="30px"> bin</td>
          <td id="decimal">dec</td>
          <td id="hex">hex</td>
        </table>
      </td>
    </tr>
    <tr>
      <td id="num7" onclick="addSymbol('7')">7</td>
      <td id="num8" onclick="addSymbol('8')">8</td>
      <td id="num9" onclick="addSymbol('9')">9</td>
      <td id="sqrt" onclick="addSymbol('sqrt()')">√</td>
      <td id="power" onclick="addSymbol('^')">^</td>
      <td id="clear" onclick="clearInput()">C</td>
    </tr>
    <tr>      
      <td id="num0" onclick="addSymbol('0')">0</td>
      <td id="dot" onclick="addSymbol('.')">.</td>
      <td id="brackets" onclick="addSymbol('(_)')">()</td>
      <td id="factorial" onclick="addSymbol('!')">!</td>
      <td id="percent" onclick="addSymbol('%')">%</td>
      <td id="backspace" onclick="backspace()"><img src="./assets/images/backspace.png" width="90px"></td>
    </tr>
      <tr>
      <td id="converter">...</td>
      <td id="MR">MR</td>
      <td id="MC">MC</td>
      <td id="M+">M+</td>
      <td id="M-">M-</td>
      <td id="solve" onclick="solve()">=</td>
    </tr>
  `
  buttons_div.appendChild(buttons)
}

function loadConverter() {
  /* loads #input_div which's containing buttons for converter */
  state.mode = modeEnum.converter
  // let buttons_div = document.getElementById('buttons_div')
  // let buttons = document.createElement('table')
  // buttons.setAttribute('id', 'table1')
  // buttons.innerHTML = `
  //   <tr>
  //     <td id="num1">1</td>
  //     <td id="num2">2</td>
  //     <td id="num3">3</td>
  //     <td id="toggle">+/-</td>
  //     <td id="plus">+</td>
  //     <td id="minus">-</td>
  //     <td id="">MR</td>
  //   </tr>
  //   <tr>
  //     <td id="num4">4</td>
  //     <td id="num5">5</td>
  //     <td id="num6">6</td>
  //     <td id="noHover">
  //       <table id="systemTable">
  //         <td id="binary"height="30px"> bin</td>
  //         <td id="decimal">dec</td>
  //         <td id="hex">hex</td>
  //       </table>
  //     </td>
  //     <td id="multiply">*</td>
  //     <td id="divide">/</td>
  //     <td id="">MC</td>
  //   </tr>
  //   <tr>
  //     <td id="num7">7</td>
  //     <td id="num8">8</td>
  //     <td id="num9">9</td>
  //     <td id="">√</td>
  //     <td id="power">^</td>
  //     <td id="percent">%</td>
  //     <td id="">M+</td>
  //   </tr>
  //   <tr>
  //     <td id="changeMode">...</td>
  //     <td id="0">0</td>
  //     <td id="point">.</td>
  //     <td id="clear">C</td>
  //     <td id="backspace"><img src="./assets/images/backspace.png" width="90px"></td>
  //     <td id="solve">=</td>
  //     <td id="">M-</td>
  //   </tr> 
  // `
  // buttons_div.appendChild(buttons)
}

function moveStones() {
  let stones = document.getElementById('stones');
  let state = {
    offsetX: 0,
    offsetY: 0,
    target: null
  };
  stones.addEventListener('on_click', event => {
    const new_target = event.target;
    if (new_target && new_target.classList.contains('stone')) {
      if (new_target.getAttribute('value') === 'on') {
        new_target.setAttribute('value', 'off');
      } else {
        new_target.setAttribute('value', 'on');
      }
    }
  });
  stones.addEventListener('mousedown', event => {
    if (event.target && event.target.classList.contains('stone') && event.target.getAttribute('value') === 'on') {
      state.target = event.target;
      state.offsetX = event.offsetX; 
      state.offsetY = event.offsetY;
    }
  });
  stones.addEventListener('mouseup', () => {
    state.target = null;
  });
  stones.addEventListener("dblclick", event => {
    if (event.target && event.target.classList.contains("stone")) {
        if (event.target.getAttribute("value") == "on") {
            event.target.setAttribute("value", "off")
        } else {
            event.target.setAttribute("value", "on")
        }
    }
  });
  stones.addEventListener('mousemove', e => {
    if (state.target) {
      state.target.style.left = (e.pageX - state.offsetX) + 'px';
      state.target.style.top = (e.pageY - state.offsetY) + 'px';
    }
  });
}

moveStones();
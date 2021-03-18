function addToStorage() {
    let val = document.getElementById('text_input').value + 
    ' [' + new Date().toLocaleDateString() + 
    ', ' + new Date().toLocaleTimeString() + ']';
    localStorage.setItem('LocalStorage',  val);
    document.getElementById('history').value = val;
}

function clearStorage() {
    localStorage.removeItem('LocalStorage');
    document.getElementById('history').value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('history').value = localStorage.getItem('LocalStorage');
});
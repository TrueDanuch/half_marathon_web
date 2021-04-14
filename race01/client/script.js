let socket = io('http://10.11.4.6:7070');

socket.on('connection', () => {
  console.log('--> Connected to server.')
})

socket.on('error', () => {
  console.log('--> Connection failed.')
})

let LoginPage = document.getElementsByClassName("login")[0];
let registrationPage = document.getElementsByClassName("reg")[0];
function changePage(option) {
    switch(option){
        case 'login': 
            registrationPage.style.display = "none";
            LoginPage.style.display = "block";
            break;
        case 'reg': 
            LoginPage.style.display = "none";
            registrationPage.style.display = "block";
            break;
    }
}

let loginReg = document.getElementById("login");
let passReg = document.getElementById("password");
let passConf = document.getElementById("confirm");
function regUser() {
  console.log(loginReg.value);
  console.log(passReg.value);
  console.log(typeof passReg.value);
  console.log(passConf.value);
  console.log(typeof passConf.value);
  if(passReg !== passConf){
    alert("Passwords does not match");
  }
  socket.emit('check_login', {login: loginUser.value})
  socket.on('check_login_result', (data) => {
    console.log(data)
  })
  
  socket.emit('try_register', {login: loginReg.value, password_hash: passReg.value});
  socket.on('login_result', (data) => {
    console.log(data)
  })
}

let loginUser = document.getElementById("login2");
let passUser = document.getElementById("password2");
function checkUser(){
  console.log(loginUser.value);
  console.log(passUser.value);
  socket.emit('check_login', {login: loginUser.value})
  socket.on('check_login_result', (data) => {
    console.log(data)
  })
  socket.emit('try_login', {login: loginUser.value, password_hash: passUser.value});
  setTimeout(() => {
    socket.emit('logout')
  }, 5000)
  socket.on('register_result', (data) => {
    console.log(data)
  })
}

function change(){
  window.open('main.html');
}
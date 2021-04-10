let password = document.getElementById("password");
let cPassword = document.getElementById("cPassword");
function checkPass(){
    if (password.value !== cPassword.value){
        alert("Passwords does not match!");
    }
}
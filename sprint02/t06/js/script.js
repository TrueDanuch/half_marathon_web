var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

if (isNaN(firstName) === true && isNaN(lastName) === true){
	if(typeof firstName === "string" && typeof lastName === "string"){
		var firstNameCap = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		var lastNameCap = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		alert("Greetings, " + firstNameCap + " " + lastNameCap);
		console.log("Greetings, " + firstNameCap + " " + lastNameCap);
	}
	
} else{
		console.log("Wrong input!");
		alert("Wrong input!");
}
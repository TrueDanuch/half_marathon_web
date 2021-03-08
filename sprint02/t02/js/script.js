var animal = prompt("What animal is the superhero most similar to");

if (animal !== " " && !animal.includes(" ") && animal.length <=20){
	var gender = prompt("Is the superhero male or female? Leave blank if unknown or other");

	if(gender === "male" || gender === "female" || gender === ""){
		var age = prompt("How old is a superhero");
		if(age.length <= 5 && (age / 10) > 0){

		    var name;

            if (gender === "male") {
                if (age > 18) {
                    name = "man";
                }
                else {
                    name = "boy";
                }
            }

            else if (gender === "female") {
                if (age > 18) {
                    name = "woman";
                }
                else {
                    name = "girl";
                }
            }

            else if (gender === "") {
                if (age > 18) {
                    name = "hero";
                }
                else {
                    name = "kid";
                }
            }

            alert("The superhero name is: " + animal + "-" + name + "!");

        }
        else {
            alert("Incorrect age input");
        }
    }
    else {
        alert("Incorrect gender input");
    }
}
else {
    alert("Incorrect animal input");
}
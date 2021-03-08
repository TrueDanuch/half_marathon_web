var beginRange = prompt("Enter start of range");
var endRange = prompt("Enter end of range");

checkDivision(beginRange, endRange);

function checkDivision(beginRange = 1, endRange = 100){
	for (let i = beginRange; i <= endRange; i++) {
        var result = i + " is";

	if(+i % 2 === 0){
		result += "even";
	}

	if (+i % 3 === 0) {
        if (result.length > 6) {
            result += ",";
        }
        result += " a multiple of 3";
    }

    if (+i % 10 === 0) {
        if (result.length > 6) {
            result += ",";
        }
        result += " a multiple of 10";
    }

    if (result.length <= 6) {
        result = i + " -";
    }

    console.log(result + "\n");
    }
}
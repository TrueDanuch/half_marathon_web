let addCount = 0;
let addPrice = 0;
let currentTotal = 0;

total(addCount, addPrice, currentTotal)

function total(addCount, addPrice, currentTotal){
	if(currentTotal === undefined){
		currentTotal = 0;
	}
	test = currentTotal + ( addCount * addPrice );
	return test;
}

let sum = total(1, 0.1);
sum= total(1, 0.2, sum);
sum= total(1, 0.78, sum);
console.log(sum);
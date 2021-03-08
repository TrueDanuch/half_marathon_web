const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

sortEvenOdd(arr);

function sortEvenOdd(arr) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number"){ // ignore if its not a number
      if ((arr[i] % 2) === 1) {
          odds.push(parseInt(arr[i]));
      }
      else {
          evens.push(parseInt(arr[i]));
      }
    }
  }
  let numsArray = evens.sort((a, b) => a - b).concat(odds.sort((a, b) => a - b));
  return numsArray;
}
console.log(sortEvenOdd(arr));
function* stepGenerator() {
    this.num = 1;
    while(1) {
        var numInput = prompt("Previous resilt: " + this.num + ". Enter a new number");
        if (Number(numInput) > 10000) {
            this.num = 1;
          } 
          else if (isNaN(numInput) || numInput === null) {
            yield errorInput = 'Invalid number!';
          } 
          this.num += Number(numInput);
    }
}

const generator = stepGenerator();
console.error(generator.next().value);
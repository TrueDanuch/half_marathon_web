class Timer {
	constructor(title, delay, stopCount) {
		this.title = title;
		this.delay = Number(delay);
		this.stopCount = Number(stopCount);
	}

	start() {
		console.log("Timer" + this.title + "started (delay=" + this.delay + ", stopCount=" + this.stopCount);
		this.cyclesLeft = this.stopCount - 1;
        this.timer = setInterval(()=>this.tick(), this.delay);
	}

	tick() {
        if (this.cyclesLeft < 0) {
            this.stop();
        } 
        else {
            console.log("Timer "+ this.title + " Tick! | cycles left " + this.cyclesLeft);
            this.cyclesLeft--;
        }
    }

    stop() {
        clearInterval(this.timer);
        console.log("Timer " + this.title + " stopped");
    }
}

function runTimer(id, delay, counter) {
    var timer = new Timer(id, delay, counter);
    timer.start();
}

runTimer("Bleep", 1000, 5);
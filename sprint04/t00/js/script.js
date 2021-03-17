let changer = 1;

function transformation(){
	if (changer === 1){
		let lab = document.getElementById("lab");
        lab.style.background = "#70964b";
        let hero = document.getElementById("hero");
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = '6px';
        hero.textContent = "Hulk";
        changer = 0;
	}
    else {
        let lab = document.getElementById("lab");
        lab.style.background = "#ffb300";
        let hero = document.getElementById("hero");
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = '2px';
        hero.textContent = "Bruce Banner";
        changer = 1;
    }
}
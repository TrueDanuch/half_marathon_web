class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName || "unknown";
        this.lastName = lastName || "unknown";
        this.gender = gender || "unknown";
        this.age = age || "unknown";
        this.calories = calories || 250;

        this.intervals();
    }

    intervals() {
        this.id1 = setInterval(() => {
            this.calories -= 200;

            if (this.calories < 0) {
                this.calories = 0;
            }

        }, 60000)

        this.id2 = setInterval(() => {
            let status = document.getElementById("human_status").innerHTML;

            if (status !== "I'm sleeping..." && status !== "Nom nom nom") {
                if (this.calories < 500) {
                    document.getElementById("human_status").innerHTML="I'm hungry!";
                }
                else {
                    document.getElementById("human_status").innerHTML="I'm not hungry!";
                }
            }
        }, 5000)

        this.id3 = setInterval(() => {
            document.getElementById("firstName").innerHTML=this.firstName;
            document.getElementById("lastName").innerHTML=this.lastName;
            document.getElementById("gender").innerHTML=this.gender;
            document.getElementById("age").innerHTML=this.age;
            document.getElementById("calories").innerHTML=this.calories;

            if (this.calories < 500) {
                document.getElementById("superheroButton").disabled=true;
            }
            else {
                document.getElementById("superheroButton").disabled=false;
            }
        }, 500)
    }

    sleepFor() {
        document.getElementById("human_status").innerHTML="I'm sleeping..."  ; 
        document.getElementById("feed_button").disabled=true;
        let seconds = document.getElementById("seconds").value;

        setTimeout(() => {
            document.getElementById("human_status").innerHTML="I'm awake up!";
            document.getElementById("feed_button").disabled=false;
        }, seconds * 1000)

    }

    feed() {
        document.getElementById("human_status").innerHTML = "Nom nom nom";
        document.getElementById("sleep_button").disabled=true;

        setTimeout(() => {
            this.calories += 200;
            document.getElementById("sleep_button").disabled=false;
            document.getElementById("human_status").innerHTML="I'm awake up!";
        }, 10 * 1000)
    }

    cleanAll() {
        setTimeout(() => { 
            clearInterval(id1);
            clearInterval(id2);
            clearInterval(id3);
        }, 1)
    }

}

class Superhero extends Human { 
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
        this.cleanAll();
    }

    fly() {
        status = document.getElementById("superhero_status").innerHTML = "I'm flying!";

        document.getElementById("sleep_button_super").disabled = true;
        document.getElementById("feed_button_super").disabled = true;
        document.getElementById("fight_button").disabled = true;

        setTimeout(() => {
            document.getElementById("sleep_button_super").disabled = false;
            document.getElementById("feed_button_super").disabled = false;
            document.getElementById("fight_button").disabled = false;
            status = document.getElementById("superhero_status").innerHTML = "I'm awake up!";
        }, 10 * 1000)
    }

    fightWithEvil() {
        document.getElementById("sleep_button_super").disabled = true;
        document.getElementById("feed_button_super").disabled = true;
        document.getElementById("fly_button").disabled = true;
        status = document.getElementById("superhero_status").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        setTimeout(() => {
            document.getElementById("sleep_button_super").disabled = false;
            document.getElementById("feed_button_super").disabled = false;
            document.getElementById("fly_button").disabled = false;
            status = document.getElementById("superhero_status").innerHTML = "I'm awake up!";
        }, 10 * 1000);
    }
    intervals() {
        this.id1 = setInterval(() => {
            this.calories -= 200;

            if (this.calories < 0) {
                this.calories = 0;
            }

        }, 60000)

        this.id3 = setInterval(() => {
            document.getElementById("firstNameSuper").innerHTML=this.firstName;
            document.getElementById("lastNameSuper").innerHTML=this.lastName;
            document.getElementById("genderSuper").innerHTML=this.gender;
            document.getElementById("ageSuper").innerHTML=this.age;
            document.getElementById("caloriesSuper").innerHTML=this.calories;
        }, 500)
    }

    sleepFor() {
        document.getElementById("superhero_status").innerHTML="I'm sleeping..."; 
        document.getElementById("feed_button_super").disabled=true;
        document.getElementById("fly_button").disabled = true;
        document.getElementById("fight_button").disabled = true;
        let seconds_super = document.getElementById("seconds_super").value;

        setTimeout(() => {
            document.getElementById("superhero_status").innerHTML="I'm awake up!";
            document.getElementById("feed_button_super").disabled=false;
            document.getElementById("fly_button").disabled = false;
            document.getElementById("fight_button").disabled = false;
        }, seconds_super * 1000)

    }

    feed() {
        document.getElementById("superhero_status").innerHTML = "Nom nom nom";
        document.getElementById("sleep_button_super").disabled=true;
        document.getElementById("fly_button").disabled = true;
        document.getElementById("fight_button").disabled = true;

        setTimeout(() => {
            this.calories += 200;
            document.getElementById("sleep_button_super").disabled=false;
            document.getElementById("fly_button").disabled = false;
            document.getElementById("fight_button").disabled = false;
            document.getElementById("superhero_status").innerHTML="I'm awake up!";
        }, 10 * 1000)
    }


}

function turnIntoSuperheroButton(human) {
    human.cleanAll();
    superhero = new Superhero(human.firstName, human.lastName, 
                human.gender, human.age, human.calories);   

    document.getElementById("image").src = "assets/images/superman.jpg";

    document.getElementById("superhero_info").style.display = "block";
    document.getElementById("superhero_info").disabled = false;

    document.getElementById("human_info").style.display = "none";
    document.getElementById("human_info").disabled = true;

}

human = new Human(prompt("Enter firstname"), prompt("Enter lastname"), prompt("Enter gender"), Number(prompt("Enter age")), Number(prompt("Enter calories")));
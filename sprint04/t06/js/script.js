let counter = 0;
let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.0) {
                img = entry.target;
                if (img.getAttribute("src") == "http://pm1.narvii.com/6539/4c2bf06ad9108083eb459bf3b2ec43667ea1609c_00.jpg") {
                    counter++;
                    console.log(counter);
                    temp = img.getAttribute("data-src");
                    img.setAttribute("src", temp);

                    document.getElementById("counter").innerHTML = counter + " images loaded from 20";
                    if (counter == 20) {
                        document.getElementById("counter").style.background = "lightgreen";
                        setTimeout(() => {
                            document.getElementById("counter").style.visibility = false;
                            document.getElementById("counter").style.display = "none";
                        }, 3000)
                    }
                }
            }
        });
    },
)
for (let img of document.getElementsByTagName("img")) {
    observer.observe(img);
}
var slideshowIndex = 1;
showSlides(slideshowIndex);

function plusSlides(n) { 
    slideshowIndex += n
    showSlides(slideshowIndex);
}

t = setInterval(function(){
    showSlides(++slideshowIndex)
}, 3000)

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideshowIndex = 1
    }

    if (n < 1) {
        slideshowIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideshowIndex - 1].style.display = "block";
}
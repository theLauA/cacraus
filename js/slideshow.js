var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
showSlides1();
showSlides2();
showSlides3();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex1++;
    
	if (slideIndex1> slides.length) {slideIndex1 = 1}
   
   
    slides[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 4000); // Change image every 4 seconds
}

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex2++;
    
	if (slideIndex2> slides.length) {slideIndex2 = 1}
   
   
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 4000); // Change image every 4 seconds
}

function showSlides3() {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex3++;
    
	if (slideIndex3> slides.length) {slideIndex3 = 1}
   
   
    slides[slideIndex3-1].style.display = "block";
    setTimeout(showSlides3, 4000); // Change image every 4 seconds
}
let slideIndex = 1;
showSlides(slideIndex);

// shuffling through slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//  dispalying current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
//   if statements for slide numbers
  if (n > slides.length) 
  {
    slideIndex = 1
}
  if (n < 1) {
    slideIndex = slides.length
}
// if statement to skip through slides
  for (i = 0; i < slides.length; i++)
   {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
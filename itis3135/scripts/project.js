// Club Board SlideShow
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// Member Form 
document.getElementById('addMemberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var grade = document.getElementById('grade').value;

   
    var li = document.createElement('li');
    li.textContent = firstName + ' ' + lastName + ' - Grade: ' + grade;

    
    document.getElementById('memberList').appendChild(li);

   
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('grade').value = '';
});
 
let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
}
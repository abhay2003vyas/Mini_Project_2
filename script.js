const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".carousel-item");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const offset = slideIndex * -100; // Calculate offset for sliding
  document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
  setTimeout(showSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}
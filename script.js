let currentSlide = 0;

const slides = document.querySelectorAll('.question-slide');

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? 'block' : 'none';
  });
}

function nextQuestion(slideIndex) {
  currentSlide = slideIndex;
  showSlide(currentSlide);
}

function finishQuiz() {
  alert('Thank you for filling out the form yeah! Lets make our days together and forever 💖');
  // Here, you can handle storing answers or anything else you need to do.
}

// Initial call to display the first question
showSlide(currentSlide);

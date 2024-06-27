const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.carousel-nav button');

let currentIndex = 0;

function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
}

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    goToSlide(index);
    updateNavButtons();
  });
});

function updateNavButtons() {
  navButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

updateNavButtons();

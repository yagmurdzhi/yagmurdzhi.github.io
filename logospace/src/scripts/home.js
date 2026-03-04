//slider
const slidesContainer = document.querySelector('.slides');
const originalSlides = [...document.querySelectorAll('.slide')];
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const visibleSlides = 3;
const transitionDuration = 500; // ms
let currentIndex = visibleSlides;
let autoSlideInterval;

const cloneSlides = () => {
  const firstClones = originalSlides.slice(0, visibleSlides).map(slide => slide.cloneNode(true));
  const lastClones = originalSlides.slice(-visibleSlides).map(slide => slide.cloneNode(true));

  lastClones.reverse().forEach(clone => slidesContainer.prepend(clone));
  firstClones.forEach(clone => slidesContainer.append(clone));
};

const totalOriginal = originalSlides.length;
const totalSlides = totalOriginal + visibleSlides * 2;

const updateSlider = (animate = true) => {
  slidesContainer.style.transition = animate ? `transform ${transitionDuration}ms ease-in-out` : 'none';
  const offset = currentIndex * (100 / visibleSlides);
  slidesContainer.style.transform = `translateX(-${offset}%)`;
};

const jumpToIndex = (index) => {
  currentIndex = index;
  updateSlider(false);
};

const nextSlide = () => {
  currentIndex++;
  updateSlider();

  if (currentIndex >= totalSlides - visibleSlides) {
    setTimeout(() => jumpToIndex(visibleSlides), transitionDuration + 10);
  }
};

const prevSlide = () => {
  currentIndex--;
  updateSlider();

  if (currentIndex <= 0) {
    setTimeout(() => jumpToIndex(totalOriginal), transitionDuration + 10);
  }
};

const init = () => {
  cloneSlides();
  updateSlider(false);
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  autoSlideInterval = setInterval(nextSlide, 3000);
};

init();

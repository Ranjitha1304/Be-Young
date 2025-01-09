const track6 = document.querySelector('.carousel-track6');
const slides6 = Array.from(track6.children);
const nextButton6 = document.querySelector('.next6');
const prevButton6 = document.querySelector('.prev6');
const slideWidth6 = slides6[0].getBoundingClientRect().width;
const slideMargin6 = parseFloat(getComputedStyle(slides6[0]).marginRight);
const totalSlideWidth6 = slideWidth6 + slideMargin6;
let currentIndex6 = 4;
const clonesStart6 = slides6.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd6 = slides6.slice(-4).map(slide => slide.cloneNode(true));
clonesEnd6.forEach(clone => track6.insertBefore(clone, slides6[0]));
clonesStart6.forEach(clone => track6.appendChild(clone));
const totalSlides6 = Array.from(track6.children);
totalSlides6.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth6 * index}px`;
});
track6.style.transform = `translateX(-${totalSlideWidth6 * currentIndex6}px)`;
const moveToSlide6 = (index) => {
  track6.style.transition = 'transform 0.3s ease-in-out';
  track6.style.transform = `translateX(-${totalSlideWidth6 * index}px)`;
  currentIndex6 = index;
  if (index >= totalSlides6.length - 4) {
    setTimeout(() => {
      track6.style.transition = 'none';
      currentIndex6 = 4;
      track6.style.transform = `translateX(-${totalSlideWidth6 * currentIndex6}px)`;
    }, 300);
  } else if (index < 4) {
    setTimeout(() => {
      track6.style.transition = 'none';
      currentIndex6 = totalSlides6.length - 6;
      track6.style.transform = `translateX(-${totalSlideWidth6 * currentIndex6}px)`;
    }, 300);
  }
};
nextButton6.addEventListener('click', () => { moveToSlide6(currentIndex6 + 1); });
prevButton6.addEventListener('click', () => { moveToSlide6(currentIndex6 - 1); });

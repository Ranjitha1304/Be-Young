const track3 = document.querySelector('.carousel-track3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.next3');
const prevButton3 = document.querySelector('.prev3');
const slideWidth3 = slides3[0].getBoundingClientRect().width;
const slideMargin3 = parseFloat(getComputedStyle(slides3[0]).marginRight);
const totalSlideWidth3 = slideWidth3 + slideMargin3;
let currentIndex3 = 4;
const clonesStart3 = slides3.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd3 = slides3.slice(-4).map(slide => slide.cloneNode(true));
clonesEnd3.forEach(clone => track3.insertBefore(clone, slides3[0]));
clonesStart3.forEach(clone => track3.appendChild(clone));
const totalSlides3 = Array.from(track3.children);
totalSlides3.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth3 * index}px`;
});
track3.style.transform = `translateX(-${totalSlideWidth3 * currentIndex3}px)`;
const moveToSlide3 = (index) => {
  track3.style.transition = 'transform 0.3s ease-in-out';
  track3.style.transform = `translateX(-${totalSlideWidth3 * index}px)`;
  currentIndex3 = index;
  if (index >= totalSlides3.length - 4) {
    setTimeout(() => {
      track3.style.transition = 'none';
      currentIndex3 = 4;
      track3.style.transform = `translateX(-${totalSlideWidth3 * currentIndex3}px)`;
    }, 300);
  } else if (index < 4) {
    setTimeout(() => {
      track3.style.transition = 'none';
      currentIndex3 = totalSlides3.length - 10;
      track3.style.transform = `translateX(-${totalSlideWidth3 * currentIndex3}px)`;
    }, 300);
  }
};
nextButton3.addEventListener('click', () => { moveToSlide3(currentIndex3 + 1); });
prevButton3.addEventListener('click', () => { moveToSlide3(currentIndex3 - 1); });

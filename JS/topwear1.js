const track5 = document.querySelector('.carousel-track5');
const slides5 = Array.from(track5.children);
const nextButton5 = document.querySelector('.next5');
const prevButton5 = document.querySelector('.prev5');
const slideWidth5 = slides5[0].getBoundingClientRect().width;
const slideMargin5 = parseFloat(getComputedStyle(slides5[0]).marginRight);
const totalSlideWidth5 = slideWidth5 + slideMargin5;
let currentIndex5 = 4;
const clonesStart5 = slides5.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd5 = slides5.slice(-4).map(slide => slide.cloneNode(true));
clonesEnd5.forEach(clone => track5.insertBefore(clone, slides5[0]));
clonesStart5.forEach(clone => track5.appendChild(clone));
const totalSlides5 = Array.from(track5.children);
totalSlides5.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth5 * index}px`;
});
track5.style.transform = `translateX(-${totalSlideWidth5 * currentIndex5}px)`;
const moveToSlide5 = (index) => {
  track5.style.transition = 'transform 0.3s ease-in-out';
  track5.style.transform = `translateX(-${totalSlideWidth5 * index}px)`;
  currentIndex5 = index;
  if (index >= totalSlides5.length - 4) {
    setTimeout(() => {
      track5.style.transition = 'none';
      currentIndex5 = 4;
      track5.style.transform = `translateX(-${totalSlideWidth5 * currentIndex5}px)`;
    }, 300);
  } else if (index < 4) {
    setTimeout(() => {
      track5.style.transition = 'none';
      currentIndex5 = totalSlides5.length - 6;
      track5.style.transform = `translateX(-${totalSlideWidth5 * currentIndex5}px)`;
    }, 300);
  }
};
nextButton5.addEventListener('click', () => { moveToSlide5(currentIndex5 + 1); });
prevButton5.addEventListener('click', () => { moveToSlide5(currentIndex5 - 1); });

const track4 = document.querySelector('.carousel-track4');
const slides4 = Array.from(track4.children);
const nextButton4 = document.querySelector('.next4');
const prevButton4 = document.querySelector('.prev4');
const slideWidth4 = slides4[0].getBoundingClientRect().width;
const slideMargin4 = parseFloat(getComputedStyle(slides4[0]).marginRight);
const totalSlideWidth4 = slideWidth4 + slideMargin4;
let currentIndex4 = 4;
const clonesStart4 = slides4.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd4 = slides4.slice(-4).map(slide => slide.cloneNode(true));
clonesEnd4.forEach(clone => track4.insertBefore(clone, slides4[0]));
clonesStart4.forEach(clone => track4.appendChild(clone));
const totalSlides4 = Array.from(track4.children);
totalSlides4.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth4 * index}px`;
});
track4.style.transform = `translateX(-${totalSlideWidth4 * currentIndex4}px)`;
const moveToSlide4 = (index) => {
  track4.style.transition = 'transform 0.3s ease-in-out';
  track4.style.transform = `translateX(-${totalSlideWidth4 * index}px)`;
  currentIndex4 = index;
  if (index >= totalSlides4.length - 4) {
    setTimeout(() => {
      track4.style.transition = 'none';
      currentIndex4 = 4;
      track4.style.transform = `translateX(-${totalSlideWidth4 * currentIndex4}px)`;
    }, 300);
  } else if (index < 4) {
    setTimeout(() => {
      track4.style.transition = 'none';
      currentIndex4 = totalSlides4.length - 5;
      track4.style.transform = `translateX(-${totalSlideWidth4 * currentIndex4}px)`;
    }, 300);
  }
};
nextButton4.addEventListener('click', () => { moveToSlide4(currentIndex4 + 1); });
prevButton4.addEventListener('click', () => { moveToSlide4(currentIndex4 - 1); });

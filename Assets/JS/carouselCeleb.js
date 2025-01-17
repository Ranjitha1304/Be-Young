const track7 = document.querySelector('.carousel-track7');
const slides7 = Array.from(track7.children);
const nextButton7 = document.querySelector('.next7');
const prevButton7 = document.querySelector('.prev7');
const slideWidth7 = slides7[0].getBoundingClientRect().width;
const slideMargin7 = parseFloat(getComputedStyle(slides7[0]).marginRight);
const totalSlideWidth7 = slideWidth7 + slideMargin7;
let currentIndex7 = 4;
const clonesStart7 = slides7.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd7 = slides7.slice(-4).map(slide => slide.cloneNode(true));
clonesEnd7.forEach(clone => track7.insertBefore(clone, slides7[0]));
clonesStart7.forEach(clone => track7.appendChild(clone));
const totalSlides7 = Array.from(track7.children);
totalSlides7.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth7 * index}px`;
});
track7.style.transform = `translateX(-${totalSlideWidth7 * currentIndex7}px)`;
const moveToSlide7 = (index) => {
  track7.style.transition = 'transform 0.3s ease-in-out';
  track7.style.transform = `translateX(-${totalSlideWidth7 * index}px)`;
  currentIndex7 = index;
  if (index >= totalSlides7.length - 4) {
    setTimeout(() => {
      track7.style.transition = 'none';
      currentIndex7 = 4;
      track7.style.transform = `translateX(-${totalSlideWidth7 * currentIndex7}px)`;
    }, 300);
  } else if (index < 4) {
    setTimeout(() => {
      track7.style.transition = 'none';
      currentIndex7 = totalSlides7.length - 9;
      track7.style.transform = `translateX(-${totalSlideWidth7 * currentIndex7}px)`;
    }, 300);
  }
};
nextButton7.addEventListener('click', () => { moveToSlide7(currentIndex7 + 1); });
prevButton7.addEventListener('click', () => { moveToSlide7(currentIndex7 - 1); });

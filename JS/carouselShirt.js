const track2 = document.querySelector('.carousel-track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.next2');
const prevButton2 = document.querySelector('.prev2');

// Dynamically calculate slide width, including margin
const slideWidth2 = slides2[0].getBoundingClientRect().width;
const slideMargin2 = parseFloat(getComputedStyle(slides2[0]).marginRight);
const totalSlideWidth2 = slideWidth2 + slideMargin2;

let currentIndex2 = 4; // Start with the 5th slide after clones

// Clone first and last 4 slides for seamless looping
const clonesStart2 = slides2.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd2 = slides2.slice(-4).map(slide => slide.cloneNode(true));

// Add clones to the track
clonesEnd2.forEach(clone => track2.insertBefore(clone, slides2[0]));
clonesStart2.forEach(clone => track2.appendChild(clone));

// Arrange slides in a line
const totalSlides2 = Array.from(track2.children);
totalSlides2.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth2 * index}px`;
});

// Set initial position
track2.style.transform = `translateX(-${totalSlideWidth2 * currentIndex2}px)`;

// Move the carousel
const moveToSlide2 = (index) => {
  track2.style.transition = 'transform 0.3s ease-in-out';
  track2.style.transform = `translateX(-${totalSlideWidth2 * index}px)`;
  currentIndex2 = index;

  // Handle seamless looping
  if (index >= totalSlides2.length - 4) {
    setTimeout(() => {
      track2.style.transition = 'none';
      currentIndex2 = 4; // Reset to real first slides
      track2.style.transform = `translateX(-${totalSlideWidth2 * currentIndex2}px)`;
    }, 300); // Match transition duration
  } else if (index < 4) {
    setTimeout(() => {
      track2.style.transition = 'none';
      currentIndex2 = totalSlides2.length - 10; // Jump to real last slides
      track2.style.transform = `translateX(-${totalSlideWidth2 * currentIndex2}px)`;
    }, 300);
  }
};

// Add button functionality
nextButton2.addEventListener('click', () => {
  moveToSlide2(currentIndex2 + 1);
});

prevButton2.addEventListener('click', () => {
  moveToSlide2(currentIndex2 - 1);
});


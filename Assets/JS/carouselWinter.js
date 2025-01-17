const track1 = document.querySelector('.carousel-track1');
const slides1 = Array.from(track1.children);
const nextButton1 = document.querySelector('.next1');
const prevButton1 = document.querySelector('.prev1');

// Dynamically calculate slide width, including margin
const slideWidth1 = slides1[0].getBoundingClientRect().width;
const slideMargin1 = parseFloat(getComputedStyle(slides1[0]).marginRight);
const totalSlideWidth1 = slideWidth1 + slideMargin1;

let currentIndex1 = 4; // Start with the 5th slide after clones

// Clone first and last 4 slides for seamless looping
const clonesStart1 = slides1.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd1 = slides1.slice(-4).map(slide => slide.cloneNode(true));

// Add clones to the track
clonesEnd1.forEach(clone => track1.insertBefore(clone, slides1[0]));
clonesStart1.forEach(clone => track1.appendChild(clone));

// Arrange slides in a line
const totalSlides1 = Array.from(track1.children);
totalSlides1.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth1 * index}px`;
});

// Set initial position
track1.style.transform = `translateX(-${totalSlideWidth1 * currentIndex1}px)`;

// Move the carousel
const moveToSlide1 = (index) => {
  track1.style.transition = 'transform 0.3s ease-in-out';
  track1.style.transform = `translateX(-${totalSlideWidth1 * index}px)`;
  currentIndex1 = index;

  // Handle seamless looping
  if (index >= totalSlides1.length - 4) {
    setTimeout(() => {
      track1.style.transition = 'none';
      currentIndex1 = 4; // Reset to real first slides
      track1.style.transform = `translateX(-${totalSlideWidth1 * currentIndex1}px)`;
    }, 300); // Match transition duration
  } else if (index < 4) {
    setTimeout(() => {
      track1.style.transition = 'none';
      currentIndex1 = totalSlides1.length - 10; // Jump to real last slides
      track1.style.transform = `translateX(-${totalSlideWidth1 * currentIndex1}px)`;
    }, 300);
  }
};

// Add button functionality
nextButton1.addEventListener('click', () => {
  moveToSlide1(currentIndex1 + 1);
});

prevButton1.addEventListener('click', () => {
  moveToSlide1(currentIndex1 - 1);
});

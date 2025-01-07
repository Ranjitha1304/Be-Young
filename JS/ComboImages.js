const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// Dynamically calculate slide width, including margin
const slideWidth = slides[0].getBoundingClientRect().width;
const slideMargin = parseFloat(getComputedStyle(slides[0]).marginRight);
const totalSlideWidth = slideWidth + slideMargin;

let currentIndex = 4; // Start with the 5th slide after clones

// Clone first and last 4 slides for seamless looping
const clonesStart = slides.slice(0, 4).map(slide => slide.cloneNode(true));
const clonesEnd = slides.slice(-4).map(slide => slide.cloneNode(true));

// Add clones to the track
clonesEnd.forEach(clone => track.insertBefore(clone, slides[0]));
clonesStart.forEach(clone => track.appendChild(clone));

// Arrange slides in a line
const totalSlides = Array.from(track.children);
totalSlides.forEach((slide, index) => {
  slide.style.left = `${totalSlideWidth * index}px`;
});

// Set initial position
track.style.transform = `translateX(-${totalSlideWidth * currentIndex}px)`;

// Move the carousel
const moveToSlide = (index) => {
  track.style.transition = 'transform 0.3s ease-in-out';
  track.style.transform = `translateX(-${totalSlideWidth * index}px)`;
  currentIndex = index;

  // Handle seamless looping
  if (index >= totalSlides.length - 4) {
    setTimeout(() => {
      track.style.transition = 'none';
      currentIndex = 4; // Reset to real first slides
      track.style.transform = `translateX(-${totalSlideWidth * currentIndex}px)`;
    }, 300); // Match transition duration
  } else if (index < 4) {
    setTimeout(() => {
      track.style.transition = 'none';
      currentIndex = totalSlides.length - 10; // Jump to real last slides
      track.style.transform = `translateX(-${totalSlideWidth * currentIndex}px)`;
    }, 300);
  }
};

// Add button functionality
nextButton.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

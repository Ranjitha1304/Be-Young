const shirtPrev = document.getElementById('shirtPrev');
const shirtNext = document.getElementById('shirtNext');
const poloPrev = document.getElementById('poloPrev');
const poloNext = document.getElementById('poloNext');
const shirtTrack = document.getElementById('shirtCarouselTrack');
const poloTrack = document.getElementById('poloCarouselTrack');
const shirtButton = document.getElementById('shirtProductButton');
const poloButton = document.getElementById('poloProductButton');

let shirtIndex = 0;
let poloIndex = 0;

function updateCarousel(track, index) {
  const itemWidth = track.children[0].offsetWidth + 10; // Include margin-right
  const offset = -(index * itemWidth);
  track.style.transform = `translateX(${offset}px)`;
}

shirtNext.addEventListener('click', () => {
  shirtIndex = (shirtIndex + 1) % 10; // Loop back to start
  updateCarousel(shirtTrack, shirtIndex);
});

shirtPrev.addEventListener('click', () => {
  shirtIndex = (shirtIndex - 1 + 10) % 10; // Loop back to last
  updateCarousel(shirtTrack, shirtIndex);
});

poloNext.addEventListener('click', () => {
  poloIndex = (poloIndex + 1) % 10; // Loop back to start
  updateCarousel(poloTrack, poloIndex);
});

poloPrev.addEventListener('click', () => {
  poloIndex = (poloIndex - 1 + 10) % 10; // Loop back to last
  updateCarousel(poloTrack, poloIndex);
});

shirtButton.addEventListener('click', () => {
  shirtButton.classList.add('active');
  poloButton.classList.remove('active');
  document.getElementById('shirtCarousel').classList.add('active');
  document.getElementById('poloCarousel').classList.remove('active');
});

poloButton.addEventListener('click', () => {
  poloButton.classList.add('active');
  shirtButton.classList.remove('active');
  document.getElementById('poloCarousel').classList.add('active');
  document.getElementById('shirtCarousel').classList.remove('active');
});
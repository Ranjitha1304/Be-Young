document.getElementById('cargosProductButton').addEventListener('click', function() {
    document.getElementById('cargosCarousel').classList.add('active');
    document.getElementById('oversizedCarousel').classList.remove('active');
    this.classList.add('active');
    document.getElementById('oversizedProductButton').classList.remove('active');
  });

  document.getElementById('oversizedProductButton').addEventListener('click', function() {
    document.getElementById('oversizedCarousel').classList.add('active');
    document.getElementById('cargosCarousel').classList.remove('active');
    this.classList.add('active');
    document.getElementById('cargosProductButton').classList.remove('active');
  });

  let cargosIndex = 0;
  const cargosTrack = document.getElementById('cargosCarouselTrack');
  const cargosPrevButton = document.getElementById('cargosPrev');
  const cargosNextButton = document.getElementById('cargosNext');

  cargosPrevButton.addEventListener('click', function() {
    cargosIndex = (cargosIndex > 0) ? cargosIndex - 1 : 9;
    cargosTrack.style.transform = `translateX(-${cargosIndex * 280}px)`;
  });

  cargosNextButton.addEventListener('click', function() {
    cargosIndex = (cargosIndex < 9) ? cargosIndex + 1 : 0;
    cargosTrack.style.transform = `translateX(-${cargosIndex * 280}px)`;
  });

  let oversizedIndex = 0;
  const oversizedTrack = document.getElementById('oversizedCarouselTrack');
  const oversizedPrevButton = document.getElementById('oversizedPrev');
  const oversizedNextButton = document.getElementById('oversizedNext');

  oversizedPrevButton.addEventListener('click', function() {
    oversizedIndex = (oversizedIndex > 0) ? oversizedIndex - 1 : 9;
    oversizedTrack.style.transform = `translateX(-${oversizedIndex * 280}px)`;
  });

  oversizedNextButton.addEventListener('click', function() {
    oversizedIndex = (oversizedIndex < 9) ? oversizedIndex + 1 : 0;
    oversizedTrack.style.transform = `translateX(-${oversizedIndex * 280}px)`;
  });
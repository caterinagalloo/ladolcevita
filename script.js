function cambiaStile() {
  const link = document.getElementById('stylesheet');
  const btn = document.querySelector('.accessibile-btn');
  const currentHref = link.getAttribute('href');

  if (currentHref === 'style.css') {
    link.setAttribute('href', 'accessibile.css');
    btn.textContent = 'Versione Normale';
    localStorage.setItem('tema', 'accessibile');
  } else {
    link.setAttribute('href', 'style.css');
    btn.textContent = 'Versione Accessibile';
    localStorage.setItem('tema', 'normale');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const tema = localStorage.getItem('tema');
  const link = document.getElementById('stylesheet');
  const btn = document.querySelector('.accessibile-btn');

  if (tema === 'accessibile') {
    link.setAttribute('href', 'accessibile.css');
    if (btn) btn.textContent = 'Versione Normale';
  } else {
    link.setAttribute('href', 'style.css');
    if (btn) btn.textContent = 'Versione Accessibile';
  }
});

let currentSlide = 2;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

window.addEventListener("DOMContentLoaded", () => {
  showSlide(2);
});
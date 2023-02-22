//Mostrar/ocultar navbar
const toggleBtn = document.querySelector('.toggle-btn');
const navbarUl = document.querySelector('.navbar > ul');

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('open');
  navbarUl.classList.toggle('show');
});

//Rolagem suave da página
const anchorTags = document.querySelectorAll('a[href^="#"]');

anchorTags.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    toggleBtn.classList.remove('open');
    navbarUl.classList.remove('show');
  });
});

//Slider de imagens
const images = document.querySelectorAll('.slider img');
let index = 0;

function changeImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(changeImage, 5000);

//Botão voltar ao topo
var scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
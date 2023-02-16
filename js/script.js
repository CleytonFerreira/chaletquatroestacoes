//Mostrar/ocultar menu
const toggleBtn = document.querySelector('.toggle-btn');
const menuUl = document.querySelector('.menu > ul');

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('open');
  menuUl.classList.toggle('show');
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
    menuUl.classList.remove('show');
  });
});



const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});


const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});


const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, 
        behavior: 'smooth'
      });
    }

    
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

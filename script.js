/*========= Menü ein-/ausklappen =====*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    isMenuOpen = !isMenuOpen;
};

/*========= Abschnitt scrollen =====*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    /*========= Navbar =====*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========= Menü einklappen =====*/

    if (!isMenuOpen) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*========= Menü schließen beim Klicken auf Nav-Link =====*/

document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false;
    });
});


/*========= scroll reveal =====*/

ScrollReveal({ 
    distance: '80px',
    duration:  2000,
    delay: 200
}).reveal('.home-content, .heading', { origin: 'top' })
  .reveal('.home-image, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });



/*========= typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Flutter Developer', 'Grafik Designerin'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}); =====*/ 
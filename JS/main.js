// scroll reveal
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

// navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
        document.body.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('scrolled');
        document.body.classList.remove('navbar-scrolled');
    }
}, { passive: true });

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// parallax
const bannerImagens = document.getElementById('bannerImagens');

if (bannerImagens) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight * 1.2) {
            bannerImagens.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    }, { passive: true });
}

// formulário de contato
const form = document.getElementById('contatoForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;

        btn.textContent = 'Mensagem Enviada';
        btn.style.background = 'var(--cream)';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}

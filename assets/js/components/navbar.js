/* assets/js/components/navbar.js */

export const initNavbar = () => {
    const navContainer = document.getElementById('nav-container');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!navContainer || !mobileToggle) return;

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            document.body.style.overflow = '';
        }
    };

    mobileToggle.addEventListener('click', () => toggleMenu(true));
    mobileClose.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navContainer.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
            navContainer.querySelector('.container').classList.remove('py-4');
            navContainer.querySelector('.container').classList.add('py-3');
        } else {
            navContainer.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
            navContainer.querySelector('.container').classList.remove('py-3');
            navContainer.querySelector('.container').classList.add('py-4');
        }
    });
};


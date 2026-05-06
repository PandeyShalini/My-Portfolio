/* assets/js/components/navbar.js */

export const initNavbar = () => {
    const navContainer = document.getElementById('nav-container');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!navContainer || !mobileToggle) return;

    let isMenuOpen = false;
    const toggleMenu = (show) => {
        isMenuOpen = show;
        if (show) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-full');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
            document.body.classList.add('no-scroll');
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-full');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            document.body.classList.remove('no-scroll');
        }
    };

    mobileToggle.addEventListener('click', () => toggleMenu(true));
    mobileClose.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    window.addEventListener('scroll', () => {
        if (isMenuOpen) return;

        if (window.scrollY > 50) {
            navContainer.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
            const container = navContainer.querySelector('.container');
            if (container) {
                container.classList.remove('py-4');
                container.classList.add('py-3');
            }
        } else {
            navContainer.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
            const container = navContainer.querySelector('.container');
            if (container) {
                container.classList.remove('py-3');
                container.classList.add('py-4');
            }
        }
    });
};


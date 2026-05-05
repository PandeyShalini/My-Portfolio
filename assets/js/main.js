/* assets/js/main.js */
import { initNavbar } from './components/navbar.js';
import { initHero } from './components/hero.js';
import { initAbout } from './components/about.js';
import { initSkills } from './components/skills.js';
import { initProjects } from './components/projects.js';
import { initExperience } from './components/experience.js';
import { initCertificates } from './components/certificates.js';
import { initTestimonials } from './components/testimonials.js';
import { initContact } from './components/contact.js';
import { initFooter } from './components/footer.js';
import { observeElements } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initHero();
    initAbout();
    initSkills();
    initProjects();
    initExperience();
    initCertificates();
    initTestimonials();
    initContact();
    initFooter();

    // Initialize Animations
    initBackgroundOrbs();
    initCustomCursor();
    initScrollReveal();
});


/**
 * Background Orbs Animation
 */
function initBackgroundOrbs() {
    const bg = document.createElement('div');
    bg.className = 'bg-animation-container';
    bg.innerHTML = `
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
        <div class="noise-overlay"></div>
    `;
    document.body.appendChild(bg);

    // CSS for Orbs (putting it here or in style.css)
    const style = document.createElement('style');
    style.textContent = `
        .bg-animation-container {
            position: fixed;
            inset: 0;
            overflow: hidden;
            z-index: -10;
            background: var(--bg-slate-950);
            pointer-events: none;
        }
        .orb {
            position: absolute;
            border-radius: 9999px;
            filter: blur(120px);
            opacity: 0.2;
            transition: background-color 1s ease;
        }
        .orb-1 { width: 45vw; height: 45vw; left: -10%; top: 5%; background: #6366f1; animation: orb-move-1 25s linear infinite; }
        .orb-2 { width: 40vw; height: 40vw; left: 60%; top: 40%; background: #a855f7; animation: orb-move-2 30s linear infinite; }
        .orb-3 { width: 35vw; height: 35vw; left: 15%; top: 65%; background: #3b82f6; animation: orb-move-3 28s linear infinite; }
        .orb-4 { width: 50vw; height: 50vw; left: 45%; top: -15%; background: #818cf8; animation: orb-move-4 35s linear infinite; }
        
        .noise-overlay {
            position: absolute;
            inset: 0;
            opacity: 0.04;
            mix-blend-mode: overlay;
            background-image: url('https://grainy-gradients.vercel.app/noise.svg');
        }

        @keyframes orb-move-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(60px, -100px) scale(1.3); } 66% { transform: translate(-60px, 100px) scale(0.8); } }
        @keyframes orb-move-2 { 0%, 100% { transform: translate(0, 0) scale(1.3); } 33% { transform: translate(-60px, 100px) scale(0.8); } 66% { transform: translate(60px, -100px) scale(1); } }
        @keyframes orb-move-3 { 0%, 100% { transform: translate(60px, -100px) scale(0.8); } 33% { transform: translate(0, 0) scale(1); } 66% { transform: translate(-60px, 100px) scale(1.3); } }
        @keyframes orb-move-4 { 0%, 100% { transform: translate(-60px, 100px) scale(1); } 33% { transform: translate(60px, -100px) scale(1.3); } 66% { transform: translate(0, 0) scale(0.8); } }
    `;
    document.head.appendChild(style);

    // Scroll effect (smooth color shifts)
    window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const orb1 = document.querySelector('.orb-1');
        const orb2 = document.querySelector('.orb-2');
        
        if (orb1) orb1.style.backgroundColor = scrollPercent > 0.3 ? '#f43f5e' : '#6366f1';
        if (orb2) orb2.style.backgroundColor = scrollPercent > 0.6 ? '#10b981' : '#a855f7';
    });
}

/**
 * Custom Cursor Logic
 */
function initCustomCursor() {
    if (window.innerWidth < 1024) return;

    const outer = document.createElement('div');
    const inner = document.createElement('div');
    outer.className = 'cursor-outer';
    inner.className = 'cursor-inner';
    document.body.appendChild(outer);
    document.body.appendChild(inner);

    const style = document.createElement('style');
    style.textContent = `
        .cursor-outer {
            position: fixed;
            top: 0; left: 0;
            width: 28px; height: 28px;
            border-radius: 50%;
            border: 2px solid rgba(99, 102, 241, 0.5);
            pointer-events: none;
            z-index: 1000;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, background-color 0.3s;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
        }
        .cursor-inner {
            position: fixed;
            top: 0; left: 0;
            width: 6px; height: 6px;
            background-color: #818cf8;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1001;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 8px rgba(129, 140, 248, 0.8);
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', (e) => {
        inner.style.left = `${e.clientX}px`;
        inner.style.top = `${e.clientY}px`;
        
        // Outer smoothing
        outer.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 150, fill: "forwards" });
    });
}

/**
 * Intersection Observer for Reveal Animations
 */
function initScrollReveal() {
    observeElements('.reveal-up');
    observeElements('.reveal-left');
    observeElements('.reveal-right');

    const style = document.createElement('style');
    style.textContent = `
        .reveal-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .visible { opacity: 1; transform: translate(0, 0); }
    `;
    document.head.appendChild(style);
}

/* assets/js/utils.js */

/**
 * Throttles a function to run at most once every `limit` milliseconds.
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

/**
 * Debounces a function to run after `delay` milliseconds of inactivity.
 */
export const debounce = (func, delay) => {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
};

/**
 * Helper to escape HTML characters.
 */
export const escapeHTML = (str) => {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
};

/**
 * Helper to observe elements for scroll entrance animations.
 */
export const observeElements = (selector, className = 'visible') => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
};

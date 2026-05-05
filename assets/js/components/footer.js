/* assets/js/components/footer.js */

export const initFooter = () => {
    // Footer logic (if any) goes here
    // The HTML is now static in index.html
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.innerHTML = `© ${new Date().getFullYear()} Shalini Pandey. All rights reserved.`;
    }
};


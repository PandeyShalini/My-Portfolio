/* assets/js/components/certificates.js */
import certificates from '../data/certificates.js';

export const initCertificates = () => {
    const grid = document.getElementById('certificates-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear grid before populating
    certificates.forEach((cert, index) => {
        const certEl = document.createElement('div');
        certEl.className = 'glass-card p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-indigo-500/30 transition-all duration-300 reveal-up';
        certEl.style.transitionDelay = `${index * 50}ms`;
        
        certEl.innerHTML = `
            <div class="flex items-center gap-5">
                <div class="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:scale-110 transition-all">
                    <i class="fas fa-certificate text-2xl"></i>
                </div>
                <div>
                    <h3 class="font-bold text-white group-hover:text-indigo-300 transition-colors">${cert.title}</h3>
                    <p class="text-slate-400 text-sm">${cert.platform} • ${cert.year}</p>
                </div>
            </div>
            <a href="${cert.pdf || cert.link}" target="_blank" class="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-500 transition-all">
                <i class="fas fa-external-link-alt text-xs"></i>
            </a>
        `;
        grid.appendChild(certEl);
    });
};


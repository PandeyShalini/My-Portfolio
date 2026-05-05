/* assets/js/components/testimonials.js */
import testimonials from '../data/testimonials.js';

export const initTestimonials = () => {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear grid before populating
    testimonials.forEach((tm, index) => {
        const tmEl = document.createElement('div');
        tmEl.className = 'glass-card p-8 sm:p-10 rounded-[2.5rem] relative group reveal-up';
        tmEl.style.transitionDelay = `${index * 100}ms`;
        
        tmEl.innerHTML = `
            <div class="absolute -top-4 -left-4 h-12 w-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-all">
                <i class="fas fa-quote-left"></i>
            </div>
            
            <div class="space-y-6">
                <p class="text-slate-300 leading-relaxed text-lg italic">"${tm.content}"</p>
                <div class="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div class="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
                        <div class="h-full w-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                            ${tm.name.charAt(0)}
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-bold flex items-center gap-2">
                            ${tm.name}
                            ${tm.url ? `<a href="${tm.url}" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors" title="View Reference"><i class="fas fa-external-link-alt text-xs"></i></a>` : ''}
                        </h4>
                        <p class="text-slate-500 text-sm">${tm.role} @ ${tm.company}</p>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(tmEl);
    });
};


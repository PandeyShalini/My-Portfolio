/* assets/js/components/experience.js */
import experience from '../data/experience.js';

export const initExperience = () => {
    const list = document.getElementById('experience-list');
    if (!list) return;

    list.innerHTML = ''; // Clear list before populating
    experience.forEach((exp, index) => {
        const expEl = document.createElement('div');
        expEl.className = 'glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 reveal-left';
        expEl.style.transitionDelay = `${index * 100}ms`;
        
        expEl.innerHTML = `
            <div class="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <i class="fas fa-briefcase fa-4x"></i>
            </div>
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div class="space-y-1">
                    <h3 class="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        ${exp.role}
                    </h3>
                    <p class="text-indigo-300 font-semibold">${exp.company}</p>
                </div>
                <span class="shrink-0 inline-flex items-center px-4 py-1.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-indigo-100 shadow-sm">
                    ${exp.period}
                </span>
            </div>
            <p class="text-slate-400 leading-relaxed text-sm md:text-base max-w-2xl">
                ${exp.desc}
            </p>
        `;
        list.appendChild(expEl);
    });
};


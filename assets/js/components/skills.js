/* assets/js/components/skills.js */
import skills from '../data/skills.js';

export const initSkills = () => {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Ensure grid is empty before populating
    skills.forEach((skill, index) => {
        const skillEl = document.createElement('div');
        skillEl.className = 'glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 group hover:border-indigo-500/40 transition-all duration-300 reveal-up';
        skillEl.style.transitionDelay = `${index * 50}ms`;
        
        skillEl.innerHTML = `
            <div class="h-12 w-12 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <img src="${skill.icon}" alt="${skill.name}" class="h-full w-full object-contain">
            </div>
            <span class="text-sm font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-wider">${skill.name}</span>
        `;
        grid.appendChild(skillEl);
    });
};


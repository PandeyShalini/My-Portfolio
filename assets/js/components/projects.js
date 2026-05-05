/* assets/js/components/projects.js */
import projects from '../data/projects.js';

export const initProjects = () => {
    const grid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');

    if (!grid || !modal) return;

    const openModal = (project) => {
        modalBody.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="space-y-4">
                    <h3 class="text-3xl sm:text-4xl font-black text-white">
                        ${project.title}
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.tech.map(t => `
                            <span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 uppercase">
                                ${t}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <button id="close-modal" class="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="space-y-6">
                <p class="text-slate-200 text-lg leading-relaxed">
                    ${project.desc}
                </p>
                
                <div class="grid gap-6 pt-6">
                    ${project.challenge ? `
                        <div class="p-6 rounded-3xl bg-red-500/5 border border-red-500/10 space-y-3">
                            <h4 class="font-bold text-white flex items-center gap-2">
                                <span class="text-red-400 text-xl">🧩</span> The Challenge
                            </h4>
                            <p class="text-sm text-slate-400 leading-relaxed">
                                ${project.challenge}
                            </p>
                        </div>
                    ` : ''}
                    
                    ${project.solution ? `
                        <div class="p-6 rounded-3xl bg-green-500/5 border border-green-500/10 space-y-3">
                            <h4 class="font-bold text-white flex items-center gap-2">
                                <span class="text-green-400 text-xl">💡</span> The Solution
                            </h4>
                            <p class="text-sm text-slate-400 leading-relaxed">
                                ${project.solution}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 pt-8">
                ${project.live ? `<a href="${project.live}" target="_blank" class="primary-button text-center flex-1 py-3 text-base">Live Demo</a>` : ''}
                ${project.code ? `<a href="${project.code}" target="_blank" class="secondary-button text-center flex-1 py-3 text-base">View Source Code</a>` : ''}
            </div>
        `;

        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-90');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden';

        document.getElementById('close-modal').onclick = closeModal;
    };

    const closeModal = () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-90');
        document.body.style.overflow = '';
    };

    modalOverlay.onclick = closeModal;

    grid.innerHTML = ''; // Clear grid before populating
    projects.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'glass-card rounded-3xl overflow-hidden group cursor-pointer h-full flex flex-col reveal-up';
        card.style.transitionDelay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="p-8 flex flex-col h-full space-y-6">
                <div class="flex items-start justify-between">
                    <div class="space-y-1">
                        <h3 class="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            ${project.title}
                        </h3>
                        <div class="flex gap-2">
                            ${project.tech.slice(0, 2).map(t => `
                                <span class="text-[10px] uppercase tracking-wider text-indigo-400 font-bold">${t}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>

                <p class="text-slate-400 leading-relaxed line-clamp-3 text-sm flex-grow">
                    ${project.desc}
                </p>

                <div class="flex gap-3 pt-4 border-t border-white/5 items-center justify-between">
                    <button class="text-xs font-bold text-indigo-300 hover:text-white transition-colors">View Details</button>
                    <div class="flex gap-2">
                        ${project.code ? `
                            <a href="${project.code}" target="_blank" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                                <i class="fab fa-github"></i>
                            </a>
                        ` : ''}
                        ${project.live ? `
                            <a href="${project.live}" target="_blank" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        card.onclick = () => openModal(project);
        
        // Prevent event bubbling for links and buttons inside the card
        const links = card.querySelectorAll('a, button');
        links.forEach(link => {
            link.onclick = (e) => {
                e.stopPropagation();
            };
        });

        grid.appendChild(card);
    });
};


const skills = [
    "Chemical Process Optimization", "Quality Control & Assurance", 
    "Spectroscopy (UV-Vis, FTIR)", "Chromatography (HPLC, GC)",
    "Industrial Chemical Sales", "Technical Product Presentation",
    "Laboratory Safety & GMP", "Polymer Chemistry", 
    "Water Treatment Chemistry", "Formulation Development",
    "Data Analysis & Reporting", "Client Relationship Management"
];

const projects = [
    {
        title: "Process Optimization Project",
        desc: "Improved production efficiency by 18% through optimized chemical dosing and reaction parameters in a manufacturing plant.",
        link: "#",
        tech: "Industrial Chemistry • Lean Methods"
    },
    {
        title: "Technical Sales Campaign",
        desc: "Successfully introduced new specialty chemicals to 12 manufacturing clients, resulting in significant revenue growth.",
        link: "#",
        tech: "Sales Engineering • Relationship Building"
    },
    {
        title: "Water Treatment Solution",
        desc: "Developed and implemented an effective industrial wastewater treatment protocol that met regulatory standards.",
        link: "#",
        tech: "Analytical Chemistry • Environmental Compliance"
    }
];

// Render Functions
function renderSkills() {
    const container = document.getElementById('skills-grid');
    container.innerHTML = skills.map(skill => `
        <div class="bg-white dark:bg-gray-700 p-6 rounded-2xl text-center font-medium shadow-sm">
            ${skill}
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = projects.map(project => `
        <div class="project-card bg-white dark:bg-gray-700 rounded-3xl overflow-hidden shadow-sm">
            <div class="h-52 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                <span class="text-5xl">🧪</span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${project.desc}</p>
                <p class="text-sm text-blue-600 dark:text-blue-400 mb-4">${project.tech}</p>
                <a href="${project.link}" class="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600">
                    Learn More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Navigation (same as before)
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navHeight = 80;
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    function updateActiveLink() {
        let current = '';
        const scrollY = window.scrollY + 150;
        sections.forEach(section => {
            if (scrollY >= section.offsetTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    initNavigation();
});
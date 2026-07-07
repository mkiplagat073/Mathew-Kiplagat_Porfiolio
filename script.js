// Data
const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js",
    "Python", "Git", "Figma", "TypeScript", "Next.js", "MongoDB"
];

const projects = [
    {
        title: "Project One",
        desc: "Short description of your first project. What problem it solves and technologies used.",
        link: "#",
        tech: "React • Tailwind"
    },
    {
        title: "Project Two",
        desc: "Short description of your second project.",
        link: "#",
        tech: "Next.js • Node.js"
    },
    {
        title: "Project Three",
        desc: "Short description of your third project.",
        link: "#",
        tech: "Python • Django"
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
            <div class="h-52 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <span class="text-6xl text-gray-400">📸</span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${project.desc}</p>
                <p class="text-sm text-blue-600 dark:text-blue-400 mb-4">${project.tech}</p>
                <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Navigation (Smooth Scroll + Active Link)
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Click → Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navHeight = 80;
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll → Update Active Link
    function updateActiveLink() {
        let current = '';
        const scrollY = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    initNavigation();
});
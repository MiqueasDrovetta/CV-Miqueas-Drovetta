document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // --- DICCIONARIO DE TRADUCCIONES ---
    const translations = {
        es: {
            hero_subtitle: "Software Developer | Performance Optimization",
            profile_text: "Desarrollador con 3 años en el rubro IT y experiencia en mantenimiento y desarrollo de software ERP. Amplio conocimiento de circuitos empresariales, gestión de requerimientos, resolución de incidencias, permisos de usuario, vistas personalizadas e informes. Fuerte dominio de .NET, Git/GitHub y automatización de procesos.",
            experience_title: "Experiencia Laboral",
            education_title: "Educación",
            job1_title: "Backend Developer - Flexxus",
            job1_date: "may. 2023 – actualidad",
            job1_desc1: "Resolución de incidentes en módulos ERP y análisis de causa raíz.",
            job1_desc2: "Relevamiento y diseño de mejoras para optimizar workflows.",
            job1_desc3: "Desarrollo backend en Delphi y optimización de consultas SQL en Firebird.",
            job1_desc4: "Implementación de pruebas automatizadas con TestComplete.",
            job1_desc5: "Participación activa en sprints bajo metodología Scrum.",
            job2_title: "Profesor - Inst. Téc. Superior Córdoba",
            job2_date: "jun. 2025 – actualidad",
            job2_desc: "A cargo de la cátedra 'Elementos de Matemática y Lógica', impartiendo clases de lógica y programación a estudiantes de nivel terciario y planificando el contenido educativo.",
            job3_title: "Voluntario Educativo - Coderdojo Córdoba",
            job3_date: "jun. 2024 – actualidad",
            job3_desc: "Formación de niños y adolescentes en programación (Scratch, Desarrollo Web/Móvil), diseñando sesiones educativas y fomentando un ambiente de aprendizaje creativo e inclusivo.",
            education1_title: "Técnico en Desarrollo de Software - Instituto Técnico Superior Córdoba",
            education1_date: "mar. 2022 – dic. 2023",
            education1_desc: "Formación técnica completa en desarrollo de software, cubriendo Frontend (HTML, CSS, JS), Backend (C#, Python) y bases de datos (SQL Server, MySQL). Sólida experiencia en APIs REST, control de versiones con Git y metodologías ágiles. Proyecto final destacado: un sistema de gestión de portafolios con .NET, Entity Framework y React.",
            education2_title: "Técnico en Electricidad y Electrónica - IPET Nº250",
            education2_date: "mar. 2008 – dic. 2013",
            education2_desc: "Formación técnica en electricidad y electrónica, con énfasis en programación de bajo nivel (C++), microcontroladores (PIC, Arduino) y sistemas de control industrial (PLC).",
            skills_title: "Habilidades Técnicas",
            skill_cat1_title: "Backend/API",
            skill_cat1_desc: "Python, Django, FastAPI, Node.js, C# .NET, RESTful, Java, Spring Boot, Delphi",
            skill_cat2_title: "Frontend/UI",
            skill_cat2_desc: "HTML5, CSS3 (Flexbox, Grid), JavaScript ES6+, React.js, Bootstrap",
            skill_cat3_title: "Automatización",
            skill_cat3_desc: "TestComplete (VisualBasic), Selenium, Beautiful Soup, Cypress",
            skill_cat4_title: "ERP",
            skill_cat4_desc: "Gestión de requerimientos, Informes y vistas, Permisos de usuario, Módulos",
            skill_cat5_title: "Metodologías",
            skill_cat5_desc: "Scrum, Resolución de incidencias, Análisis de circuitos empresariales",
            projects_title: "Proyectos Destacados",
            project1_title: "Portafolio Dinámico",
            project1_desc: "Gestor de CVs con roles y CRUD. Hecho con ASP.NET Core y React.",
            project2_title: "Chat de Voz",
            project2_desc: "Salas de voz con moderación por votos. Creado con React y Vite.",
            project3_title: "Prototipo con Bootstrap",
            project3_desc: "Prototipo de web para instituto técnico usando Bootstrap.",
            project_link: "Ver en GitHub",
            project_preview: "Vista Previa",
            contact_title: "Contacto",
            contact_subtitle: "Conectemos y creemos algo increíble.",
            contact_email: "Email",
            contact_cv: "CV Completo",
            nav_home: "Home",
            nav_experience: "Experiencia",
            nav_skills: "Habilidades",
            nav_projects: "Proyectos",
            nav_contact: "Contacto"
        },
        en: {
            hero_subtitle: "Software Developer | Performance Optimization",
            profile_text: "Developer with 3 years in the IT industry, experienced in ERP software maintenance and development. Broad knowledge of business circuits, requirements management, incident resolution, user permissions, custom views, and reports. Strong command of .NET, Git/GitHub, and process automation.",
            experience_title: "Work Experience",
            education_title: "Education",
            job1_title: "Backend Developer - Flexxus",
            job1_date: "May 2023 – Present",
            job1_desc1: "Incident resolution in ERP modules and root cause analysis.",
            job1_desc2: "Requirements gathering and design of improvements to optimize workflows.",
            job1_desc3: "Backend development in Delphi and SQL query optimization in Firebird.",
            job1_desc4: "Implementation of automated tests with TestComplete.",
            job1_desc5: "Active participation in sprints under the Scrum methodology.",
            job2_title: "Professor - Higher Technical Inst. Córdoba",
            job2_date: "Jun 2025 – Present",
            job2_desc: "In charge of the 'Elements of Mathematics and Logic' course, teaching logic and programming to higher education students and planning educational content.",
            job3_title: "Educational Volunteer - Coderdojo Córdoba",
            job3_date: "Jun 2024 – Present",
            job3_desc: "Training children and teenagers in programming (Scratch, Web/Mobile Development), designing educational sessions, and fostering a creative and inclusive learning environment.",
            education1_title: "Technician in Software Development - Instituto Técnico Superior Córdoba",
            education1_date: "Mar 2022 – Dec 2023",
            education1_desc: "Comprehensive technical training in software development, covering Frontend (HTML, CSS, JS), Backend (C#, Python), and databases (SQL Server, MySQL). Solid experience in REST APIs, version control with Git, and agile methodologies. Featured final project: a portfolio management system using .NET, Entity Framework, and React.",
            education2_title: "Technician in Electricity and Electronics - IPET Nº250",
            education2_date: "Mar 2008 – Dec 2013",
            education2_desc: "Technical training in electricity and electronics, with an emphasis on low-level programming (C++), microcontrollers (PIC, Arduino), and industrial control systems (PLC).",
            skills_title: "Technical Skills",
            skill_cat1_title: "Backend/API",
            skill_cat1_desc: "Python, Django, FastAPI, Node.js, C# .NET, RESTful, Java, Spring Boot, Delphi",
            skill_cat2_title: "Frontend/UI",
            skill_cat2_desc: "HTML5, CSS3 (Flexbox, Grid), JavaScript ES6+, React.js, Bootstrap",
            skill_cat3_title: "Automation",
            skill_cat3_desc: "TestComplete (VisualBasic), Selenium, Beautiful Soup, Cypress",
            skill_cat4_title: "ERP",
            skill_cat4_desc: "Requirements management, Reports and views, User permissions, Modules",
            skill_cat5_title: "Methodologies",
            skill_cat5_desc: "Scrum, Incident resolution, Business circuit analysis",
            projects_title: "Featured Projects",
            project1_title: "Dynamic Portfolio",
            project1_desc: "CV manager with roles and CRUD. Made with ASP.NET Core and React.",
            project2_title: "Voice Chat",
            project2_desc: "Voice rooms with moderation by votes. Created with React and Vite.",
            project3_title: "Bootstrap Prototype",
            project3_desc: "Prototype of a website for a technical institute using Bootstrap.",
            project_link: "View on GitHub",
            project_preview: "Live Preview",
            contact_title: "Contact",
            contact_subtitle: "Let's connect and create something incredible.",
            contact_email: "Email",
            contact_cv: "Full CV",
            nav_home: "Home",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact"
        }
    };

    // --- LÓGICA DE CAMBIO DE TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.body.classList.remove('light-mode');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    };

    // Evento para el botón de tema
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-mode');
        const newTheme = isLight ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // --- LÓGICA DE CAMBIO DE IDIOMA ---
    const languageToggle = document.getElementById('language-toggle');
    let currentLang = 'es';

    // Función para actualizar textos
    const updateTexts = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            el.textContent = translations[lang][key] || el.textContent;
        });
        languageToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    };

    // Evento para el botón de idioma
    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateTexts(currentLang);
        localStorage.setItem('language', currentLang);
    });

    // Cargar idioma guardado
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    updateTexts(currentLang);

    // --- CÓDIGO EXISTENTE ---

    // --- NAVEGACIÓN SUAVE Y FEEDBACK TÁCTIL ---
    const navButtons = document.querySelectorAll('.bottom-nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                app.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
            }
        });
        button.addEventListener('mousedown', () => button.classList.add('active-tap'));
        button.addEventListener('mouseup', () => button.classList.remove('active-tap'));
        button.addEventListener('mouseleave', () => button.classList.remove('active-tap'));
    });

    // --- TIMELINE DESPLEGABLE ---
    const timelineHeaders = document.querySelectorAll('.timeline-header');
    timelineHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.style.maxHeight && content.style.maxHeight !== '0px';
            // Cerrar todos los items antes de abrir el nuevo
            document.querySelectorAll('.timeline-content').forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = '0px';
                }
            });
            if (!isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = '0px';
            }
        });
        // Iniciar todos cerrados
        header.nextElementSibling.style.maxHeight = '0px';
    });

    // --- EFECTO DE ENTRADA CON INTERSECTION OBSERVER ---
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { root: app, threshold: 0.2 });
    fadeInElements.forEach(element => observer.observe(element));
});

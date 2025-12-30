function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';

    // Title
    const title = document.createElement('h3');
    title.textContent = project.name || 'Untitled Project';
    card.appendChild(title);

    // Meta line (category • status • date)
    const meta = document.createElement('p');
    meta.className = 'project-meta';

    if (project.category) {
        const cat = document.createElement('span');
        cat.textContent = project.category;
        meta.appendChild(cat);
    }

    // STATUS (colored)
    if (project.status) {
        const status = document.createElement('span');
        status.textContent = project.status;

        if (project.status.toLowerCase() === 'completed') {
            status.className = 'status-completed';
        } else {
            status.className = 'status-other';
        }

        if (meta.children.length > 0) meta.append(' • ');
        meta.appendChild(status);
    }

    // DATE
    if (project.date) {
        if (meta.children.length > 0) meta.append(' • ');
        const date = document.createElement('span');
        date.textContent = project.date;
        meta.appendChild(date);
    }

    card.appendChild(meta);


    // Description
    if (project.descriptionHtml) {
        const description = document.createElement('div');
        description.className = 'project-description';
        description.innerHTML = project.descriptionHtml; // allows <strong>, <ul>, etc.
        card.appendChild(description);
    } else if (project.description) {
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;
        card.appendChild(description);
    }


    // Optional link button
    if (project.link) {
        const link = document.createElement('a');
        link.className = 'project-link';
        // Add protocol if you only stored the domain
        link.href = project.link.startsWith('http')
            ? project.link
            : `https://${project.link}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'View project →';
        card.appendChild(link);
    }

    return card;
}

// Load and display projects
function loadProjects() {
    const projectSection = document.querySelector('#projects');
    if (!projectSection) return;

    const projectsGrid = projectSection.querySelector('.projects-grid');
    if (!projectsGrid) return;

    // Filter to featured projects
    const featuredProjects = (projectData?.Projects || []).filter(
        (project) => project.feature === true
    );

    // If none, hide the section
    if (featuredProjects.length === 0) {
        projectSection.style.display = 'none';
        return;
    }

    // Sort by date (newest first) if dates exist
    featuredProjects.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date) - new Date(a.date);
    });

    // Clear any placeholder HTML
    projectsGrid.innerHTML = '';

    // Add all featured projects
    featuredProjects.forEach((project) => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);

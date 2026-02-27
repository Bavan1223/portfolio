/* ==========================================
   Portfolio — Main Script
   ========================================== */

// ---- Default Data ----
const DEFAULT_DATA = {
  personal: {
    name: 'Your Name',
    tagline: 'Creative Developer & Designer',
    description: 'I craft beautiful digital experiences with clean code and creative design.',
    bio: "I'm a passionate developer who loves building things for the web. I enjoy creating elegant solutions to complex problems, transforming ideas into beautiful, functional digital experiences.",
    age: '25',
    location: 'Earth',
    education: 'Computer Science',
    email: 'hello@example.com',
    languages: 'English, Tamil',
    image: 'assets/profile-avatar.png',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    statProjects: 5,
    statYears: 3,
    statTech: 10,
    statCoffee: 100
  },
  skills: [
    { name: 'HTML & CSS', icon: '🌐', level: 'Advanced', progress: 90 },
    { name: 'JavaScript', icon: '⚡', level: 'Intermediate', progress: 75 },
    { name: 'React', icon: '⚛️', level: 'Intermediate', progress: 70 },
    { name: 'Python', icon: '🐍', level: 'Intermediate', progress: 65 },
    { name: 'Node.js', icon: '🟢', level: 'Beginner', progress: 50 },
    { name: 'UI/UX Design', icon: '🎨', level: 'Advanced', progress: 85 }
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack online store with cart, payments, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      icon: '🛒',
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization with interactive maps and graphs.',
      tags: ['JavaScript', 'API', 'Charts'],
      icon: '🌤️',
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A creative personal portfolio with dynamic content management.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: '🎯',
      liveUrl: '#',
      repoUrl: '#'
    }
  ],
  interests: [
    { title: 'Coding', icon: '💻', description: 'Building creative solutions' },
    { title: 'Gaming', icon: '🎮', description: 'Exploring virtual worlds' },
    { title: 'Music', icon: '🎵', description: 'Listening & creating beats' },
    { title: 'Photography', icon: '📷', description: 'Capturing moments' },
    { title: 'Reading', icon: '📚', description: 'Learning new things' },
    { title: 'Travel', icon: '✈️', description: 'Discovering new places' }
  ],
  contact: {
    email: 'hello@example.com',
    phone: '+1 234 567 890',
    message: 'Have a project in mind? Let\'s create something amazing together.'
  }
};

// ---- State ----
let portfolioData = loadData();

function loadData() {
  try {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveData() {
  localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

// ---- Render Functions ----
function renderAll() {
  renderPersonal();
  renderSkills();
  renderProjects();
  renderInterests();
  renderContact();
}

function renderPersonal() {
  const p = portfolioData.personal;
  const [firstName, ...lastParts] = p.name.split(' ');
  const lastName = lastParts.join(' ') || '';

  document.querySelector('.hero__name-first').textContent = firstName;
  document.querySelector('.hero__name-last').textContent = lastName || 'Name';
  document.getElementById('heroTagline').textContent = p.tagline;
  document.getElementById('heroDescription').textContent = p.description;
  document.getElementById('heroImage').src = p.image;
  document.getElementById('navName').textContent = firstName || 'Portfolio';
  document.getElementById('footerName').textContent = p.name;

  // About
  document.getElementById('aboutBio').textContent = p.bio;
  document.getElementById('aboutName').textContent = p.name;
  document.getElementById('aboutAge').textContent = p.age;
  document.getElementById('aboutLocation').textContent = p.location;
  document.getElementById('aboutEducation').textContent = p.education;
  document.getElementById('aboutEmail').textContent = p.email;
  document.getElementById('aboutLanguages').textContent = p.languages;

  // Social
  document.getElementById('socialGithub').href = p.github || '#';
  document.getElementById('socialLinkedin').href = p.linkedin || '#';
  document.getElementById('socialTwitter').href = p.twitter || '#';

  // Stats
  updateStatTarget('statProjects', p.statProjects);
  updateStatTarget('statYears', p.statYears);
  updateStatTarget('statTech', p.statTech);
  updateStatTarget('statCoffee', p.statCoffee);
}

function updateStatTarget(id, value) {
  const el = document.getElementById(id);
  el.setAttribute('data-target', value);
  el.textContent = value;
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = portfolioData.skills.map((skill, i) => `
    <div class="skill-card reveal" style="transition-delay: ${i * 0.1}s">
      <div class="skill-card__header">
        <span class="skill-card__icon">${skill.icon}</span>
        <span class="skill-card__level">${skill.level}</span>
      </div>
      <h3 class="skill-card__name">${skill.name}</h3>
      <div class="skill-card__bar">
        <div class="skill-card__progress" data-progress="${skill.progress}"></div>
      </div>
    </div>
  `).join('');

  observeElements();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = portfolioData.projects.map((project, i) => `
    <div class="project-card reveal" style="transition-delay: ${i * 0.15}s">
      <div class="project-card__image-placeholder">${project.icon || '🚀'}</div>
      <div class="project-card__body">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__tags">
          ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
        </div>
        <div class="project-card__links">
          ${project.liveUrl ? `<a href="${project.liveUrl}" class="project-card__link" target="_blank">🔗 Live Demo</a>` : ''}
          ${project.repoUrl ? `<a href="${project.repoUrl}" class="project-card__link" target="_blank">📂 Source</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  observeElements();
}

function renderInterests() {
  const grid = document.getElementById('interestsGrid');
  grid.innerHTML = portfolioData.interests.map((interest, i) => `
    <div class="interest-card reveal" style="transition-delay: ${i * 0.1}s">
      <span class="interest-card__icon">${interest.icon}</span>
      <h3 class="interest-card__title">${interest.title}</h3>
      <p class="interest-card__description">${interest.description}</p>
    </div>
  `).join('');

  observeElements();
}

function renderContact() {
  const c = portfolioData.contact;
  document.getElementById('contactEmail').textContent = c.email;
  document.getElementById('contactPhone').textContent = c.phone;
  document.getElementById('contactLocation').textContent = portfolioData.personal.location;
  document.getElementById('contactMessage').textContent = c.message;
}

// ---- Particles Background ----
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212'
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.05 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.fill();
    });

    drawConnections();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  init();
  animate();
}

// ---- Intersection Observer (reveal & progress bars) ----
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate skill bars
        const progressBar = entry.target.querySelector('.skill-card__progress');
        if (progressBar) {
          setTimeout(() => {
            progressBar.style.width = progressBar.dataset.progress + '%';
          }, 300);
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Counter Animation ----
function animateCounters() {
  const counters = document.querySelectorAll('.stat-card__number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased);
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target;
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ---- Navigation ----
function initNav() {
  const nav = document.getElementById('mainNav');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav__link');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Active link
  const sections = document.querySelectorAll('.section, .hero');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = '#' + section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === current);
    });
  });

  // Mobile menu
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ---- Cursor Glow ----
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animate);
  }

  animate();

  // Hide on mobile
  if ('ontouchstart' in window) {
    glow.style.display = 'none';
  }
}

// ---- Contact Form ----
function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! (Demo)');
    form.reset();
  });
}

// ---- Toast ----
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMessage').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- Modal / Config Editor ----
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const configBtn = document.getElementById('configBtn');
  const closeBtn = document.getElementById('modalClose');
  const saveBtn = document.getElementById('saveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const tabs = document.querySelectorAll('.modal__tab');

  configBtn.addEventListener('click', () => {
    populateModal();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.modal__tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });

  // Add buttons
  document.getElementById('addSkillBtn').addEventListener('click', () => addSkillEntry());
  document.getElementById('addProjectBtn').addEventListener('click', () => addProjectEntry());
  document.getElementById('addInterestBtn').addEventListener('click', () => addInterestEntry());

  // Save
  saveBtn.addEventListener('click', () => {
    collectModalData();
    saveData();
    renderAll();
    closeModal();
    showToast('✨ Portfolio updated successfully!');
  });

  // Reset
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all data to defaults?')) {
      portfolioData = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveData();
      renderAll();
      populateModal();
      showToast('🔄 Reset to defaults');
    }
  });
}

function populateModal() {
  const p = portfolioData.personal;
  document.getElementById('editName').value = p.name;
  document.getElementById('editTagline').value = p.tagline;
  document.getElementById('editDescription').value = p.description;
  document.getElementById('editBio').value = p.bio;
  document.getElementById('editAge').value = p.age;
  document.getElementById('editLocation').value = p.location;
  document.getElementById('editEducation').value = p.education;
  document.getElementById('editLanguages').value = p.languages;
  document.getElementById('editImage').value = p.image;
  document.getElementById('editGithub').value = p.github;
  document.getElementById('editLinkedin').value = p.linkedin;
  document.getElementById('editTwitter').value = p.twitter;
  document.getElementById('editStatProjects').value = p.statProjects;
  document.getElementById('editStatYears').value = p.statYears;
  document.getElementById('editStatTech').value = p.statTech;
  document.getElementById('editStatCoffee').value = p.statCoffee;

  // Contact
  const c = portfolioData.contact;
  document.getElementById('editContactEmail').value = c.email;
  document.getElementById('editContactPhone').value = c.phone;
  document.getElementById('editContactMessage').value = c.message;

  // Dynamic sections
  populateSkillsEditor();
  populateProjectsEditor();
  populateInterestsEditor();
}

// ---- Skill Editor ----
function populateSkillsEditor() {
  const container = document.getElementById('skillsEditor');
  container.innerHTML = '';
  portfolioData.skills.forEach((skill, i) => addSkillEntry(skill, i));
}

function addSkillEntry(skill = null, index = -1) {
  const container = document.getElementById('skillsEditor');
  const div = document.createElement('div');
  div.className = 'editor-item';
  div.innerHTML = `
    <button class="editor-item__remove" title="Remove">&times;</button>
    <div class="form-row">
      <div class="form-group">
        <label class="modal__label">Skill Name</label>
        <input type="text" class="modal__input skill-name" value="${skill ? skill.name : ''}" placeholder="e.g. JavaScript" />
      </div>
      <div class="form-group">
        <label class="modal__label">Icon (emoji)</label>
        <input type="text" class="modal__input skill-icon" value="${skill ? skill.icon : ''}" placeholder="⚡" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="modal__label">Level</label>
        <input type="text" class="modal__input skill-level" value="${skill ? skill.level : 'Beginner'}" placeholder="Beginner / Intermediate / Advanced" />
      </div>
      <div class="form-group">
        <label class="modal__label">Progress (0-100)</label>
        <input type="number" class="modal__input skill-progress" value="${skill ? skill.progress : 50}" min="0" max="100" />
      </div>
    </div>
  `;
  div.querySelector('.editor-item__remove').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

// ---- Project Editor ----
function populateProjectsEditor() {
  const container = document.getElementById('projectsEditor');
  container.innerHTML = '';
  portfolioData.projects.forEach((project, i) => addProjectEntry(project, i));
}

function addProjectEntry(project = null, index = -1) {
  const container = document.getElementById('projectsEditor');
  const div = document.createElement('div');
  div.className = 'editor-item';
  div.innerHTML = `
    <button class="editor-item__remove" title="Remove">&times;</button>
    <div class="form-row">
      <div class="form-group">
        <label class="modal__label">Project Title</label>
        <input type="text" class="modal__input project-title" value="${project ? project.title : ''}" placeholder="My Awesome Project" />
      </div>
      <div class="form-group">
        <label class="modal__label">Icon (emoji)</label>
        <input type="text" class="modal__input project-icon" value="${project ? (project.icon || '') : ''}" placeholder="🚀" />
      </div>
    </div>
    <div class="form-group">
      <label class="modal__label">Description</label>
      <textarea class="modal__input modal__textarea project-desc" placeholder="Brief project description...">${project ? project.description : ''}</textarea>
    </div>
    <div class="form-group">
      <label class="modal__label">Tags (comma separated)</label>
      <input type="text" class="modal__input project-tags" value="${project ? project.tags.join(', ') : ''}" placeholder="React, Node.js, MongoDB" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="modal__label">Live Demo URL</label>
        <input type="text" class="modal__input project-live" value="${project ? (project.liveUrl || '') : ''}" placeholder="https://..." />
      </div>
      <div class="form-group">
        <label class="modal__label">Source Code URL</label>
        <input type="text" class="modal__input project-repo" value="${project ? (project.repoUrl || '') : ''}" placeholder="https://..." />
      </div>
    </div>
  `;
  div.querySelector('.editor-item__remove').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

// ---- Interest Editor ----
function populateInterestsEditor() {
  const container = document.getElementById('interestsEditor');
  container.innerHTML = '';
  portfolioData.interests.forEach((interest, i) => addInterestEntry(interest, i));
}

function addInterestEntry(interest = null, index = -1) {
  const container = document.getElementById('interestsEditor');
  const div = document.createElement('div');
  div.className = 'editor-item';
  div.innerHTML = `
    <button class="editor-item__remove" title="Remove">&times;</button>
    <div class="form-row">
      <div class="form-group">
        <label class="modal__label">Interest</label>
        <input type="text" class="modal__input interest-title" value="${interest ? interest.title : ''}" placeholder="Photography" />
      </div>
      <div class="form-group">
        <label class="modal__label">Icon (emoji)</label>
        <input type="text" class="modal__input interest-icon" value="${interest ? interest.icon : ''}" placeholder="📷" />
      </div>
    </div>
    <div class="form-group">
      <label class="modal__label">Short Description</label>
      <input type="text" class="modal__input interest-desc" value="${interest ? interest.description : ''}" placeholder="Capturing beautiful moments" />
    </div>
  `;
  div.querySelector('.editor-item__remove').addEventListener('click', () => div.remove());
  container.appendChild(div);
}

// ---- Collect Data from Modal ----
function collectModalData() {
  // Personal
  portfolioData.personal = {
    name: document.getElementById('editName').value || 'Your Name',
    tagline: document.getElementById('editTagline').value || 'Creative Developer',
    description: document.getElementById('editDescription').value || '',
    bio: document.getElementById('editBio').value || '',
    age: document.getElementById('editAge').value || '',
    location: document.getElementById('editLocation').value || '',
    education: document.getElementById('editEducation').value || '',
    email: document.getElementById('editContactEmail').value || '',
    languages: document.getElementById('editLanguages').value || '',
    image: document.getElementById('editImage').value || 'assets/profile-avatar.png',
    github: document.getElementById('editGithub').value || '#',
    linkedin: document.getElementById('editLinkedin').value || '#',
    twitter: document.getElementById('editTwitter').value || '#',
    statProjects: parseInt(document.getElementById('editStatProjects').value) || 0,
    statYears: parseInt(document.getElementById('editStatYears').value) || 0,
    statTech: parseInt(document.getElementById('editStatTech').value) || 0,
    statCoffee: parseInt(document.getElementById('editStatCoffee').value) || 0
  };

  // Skills
  portfolioData.skills = [];
  document.querySelectorAll('#skillsEditor .editor-item').forEach(item => {
    const name = item.querySelector('.skill-name').value.trim();
    if (name) {
      portfolioData.skills.push({
        name,
        icon: item.querySelector('.skill-icon').value || '💡',
        level: item.querySelector('.skill-level').value || 'Beginner',
        progress: parseInt(item.querySelector('.skill-progress').value) || 50
      });
    }
  });

  // Projects
  portfolioData.projects = [];
  document.querySelectorAll('#projectsEditor .editor-item').forEach(item => {
    const title = item.querySelector('.project-title').value.trim();
    if (title) {
      portfolioData.projects.push({
        title,
        description: item.querySelector('.project-desc').value || '',
        icon: item.querySelector('.project-icon').value || '🚀',
        tags: item.querySelector('.project-tags').value.split(',').map(t => t.trim()).filter(t => t),
        liveUrl: item.querySelector('.project-live').value || '',
        repoUrl: item.querySelector('.project-repo').value || ''
      });
    }
  });

  // Interests
  portfolioData.interests = [];
  document.querySelectorAll('#interestsEditor .editor-item').forEach(item => {
    const title = item.querySelector('.interest-title').value.trim();
    if (title) {
      portfolioData.interests.push({
        title,
        icon: item.querySelector('.interest-icon').value || '⭐',
        description: item.querySelector('.interest-desc').value || ''
      });
    }
  });

  // Contact
  portfolioData.contact = {
    email: document.getElementById('editContactEmail').value || '',
    phone: document.getElementById('editContactPhone').value || '',
    message: document.getElementById('editContactMessage').value || ''
  };
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNav();
  initCursorGlow();
  initContactForm();
  initModal();
  renderAll();
  animateCounters();

  // Make sections reveal-able
  document.querySelectorAll('.section').forEach(section => {
    const children = section.querySelectorAll('.glass-card, .skill-card, .project-card, .interest-card');
    children.forEach(child => {
      if (!child.classList.contains('reveal')) child.classList.add('reveal');
    });
  });

  observeElements();
});

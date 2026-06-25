const translations = {
  vi: {},
  en: {
    navHome: "Overview", navExperience: "Experience", navWork: "Projects", navSkills: "Skills", contact: "Contact", moveDown: "Move down",
    available: "Open to opportunities · HCMC",
    heroLine1: "Le Duy Quan", heroLine2: "Backend Developer.",
    heroLead: "Final-year IT student at Saigon University with hands-on backend, frontend and automation experience. My strengths are flexibility, clear communication and system-minded problem solving.",
    aiBelief: "In the AI era, I believe a developer value is not just writing code, but identifying the right problem, designing resilient systems and turning strong ideas into products that can actually run.",
    snapshotRole: "Role", snapshotExp: "Experience", snapshotFocus: "Strengths", snapshotStrength: "Flexible · Problem solving · Communication",
    viewWork: "View projects", viewCv: "Open résumé", portraitLabel: "Engineer / Builder", currently: "CURRENT FOCUS",
    publicRepos: "Public repositories", yearsBuilding: "Years building products", liveTools: "Live automation tools", signalNote: "From requirements to API, UI, testing and deployment.",
    showcaseTitle: "A few personal tools deployed in real usage.",
    showcaseLead: "A short demo of how I turn repetitive actions into simple automation workflows.",
    workTitle: "Work projects<br />and academic projects.",
    workIntro: "Real products, automation tools and academic systems that show how I build, connect and ship software.",
    skillsUsedLabel: "Skills used",
    skillsPageTitle: "Core skills<br />and contact.",
    skillsPageLead: "I focus on backend, automation and system understanding to turn requirements into working solutions.",
    toolsDesc: "A set of personal tools on ldqtool.click focused on automating repetitive actions across TikTok, Facebook, ChatGPT and Google Flow/VEO.",
    factType: "Type", factRole: "Role", factScope: "Scope",
    toolsFactType: "Personal product / Chrome extensions", toolsFactRole: "User need analysis, automation logic, UI and tool publishing",
    commerceFactType: "Academic project / microservices", commerceFactScope: "Auth, products, orders, payment and realtime chat",
    footballFactType: "Academic project / management system", footballFactScope: "CRUD, fixtures, results, standings and authorization",
    salesBotDesc: "Built a sales website and Telegram bot to support ordering flow, customer responses and community operations with more than 1000 users.",
    salesBotFactType: "Real product / web & bot", salesBotFactScope: "Website, Telegram bot, sales flow and user support",
    commerceDesc: "An academic multi-vendor e-commerce project that separates Auth, Product, Order, Payment and Chat into independent services to understand larger system structure.",
    footballDesc: "An academic football championship management system covering teams, players, fixtures, results, standings, search and user authorization.",
    allRepos: "Explore all 31 repositories",
    aboutTitle: "Who am I?", location: "LOCATION",
    aboutLead: "I'm Le Duy Quan — a final-year Information Technology student at Saigon University, oriented toward backend development.",
    aboutBody: "I have worked as a backend developer at TMA Solutions, a frontend developer at Jung Talents and built several personal automation tools. I do not want to describe myself with exaggerated claims; what I want recruiters to remember is that I am adaptable, communicate clearly and tend to break problems down before writing code.",
    aiKicker: "My view in the AI era",
    aiMindset: "As AI becomes stronger at helping people write code, a developer's key value is not only typing code faster. I focus on understanding systems, asking the right questions, decomposing problems, reading machine logic and turning human requirements into solutions that can actually run.",
    principleOne: "Flexibility", principleOneDesc: "Able to work across backend, frontend and automation while adapting quickly to new requirements.",
    principleTwo: "Problem solving", principleTwoDesc: "I prioritize understanding root causes, data flow and system impact before choosing a solution.",
    principleThree: "Clear communication", principleThreeDesc: "Comfortable discussing requirements, collaborating with teams and presenting issues in an understandable way.",
    experienceTitle: "Where have I<br />worked?",
    
    tmaDesc: "Contributed to REST APIs with FastAPI, optimized database queries, handled concurrency issues in Django Admin, supported AI/PDF automation tooling and Nginx deployment configuration.",
    jungDesc: "Built UI for English assessment and learning platforms; collaborated with local/international teammates and supported HTML, CSS and JavaScript training.",
    degree: "Engineering Degree · Information Technology", degreeDesc: "Building a computer science foundation and turning knowledge into web systems, automation tools and independent products.",
    toolboxTitle: "Core skills<br />I use.",
    contactTitle: "Thank you<br /><em>for viewing my portfolio.</em>",
    contactLead: "If my profile fits a Backend Developer, Full-stack Intern/Fresher or Automation Developer role, I would be happy to discuss further.",
    footerNote: "Built as a concise portfolio."
  }
};

const langButton = document.querySelector('.lang-toggle');
let lang = localStorage.getItem('portfolioLang') || 'vi';

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!el.dataset.original) el.dataset.original = el.innerHTML;
    const value = lang === 'en' ? translations.en[el.dataset.i18n] : el.dataset.original;
    if (value) el.innerHTML = value;
  });
  langButton.textContent = lang === 'vi' ? 'EN' : 'VI';
  localStorage.setItem('portfolioLang', lang);
}

langButton.addEventListener('click', () => setLanguage(lang === 'vi' ? 'en' : 'vi'));
setLanguage(lang);

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const delay = Number(entry.target.dataset.delay || 0);
    window.setTimeout(() => entry.target.classList.add('visible'), delay);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const counter = document.querySelector('[data-count]');
const countObserver = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) return;
  const target = Number(counter.dataset.count);
  let value = 0;
  const timer = window.setInterval(() => {
    value += 1;
    counter.textContent = `${value}+`;
    if (value >= target) window.clearInterval(timer);
  }, 35);
  countObserver.disconnect();
});
countObserver.observe(counter);

const orb = document.querySelector('.cursor-orb');
window.addEventListener('pointermove', (event) => {
  orb.style.left = `${event.clientX}px`;
  orb.style.top = `${event.clientY}px`;
}, { passive: true });

document.querySelectorAll('.magnetic').forEach((element) => {
  element.addEventListener('pointermove', (event) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    element.style.transform = `translate(${x}px, ${y}px)`;
  });
  element.addEventListener('pointerleave', () => { element.style.transform = ''; });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    document.activeElement?.blur();
    if (!snapSections?.length) return;
    const href = anchor.getAttribute('href');
    const target = href === '#top' ? snapSections[0] : document.querySelector(href);
    const targetIndex = snapSections.indexOf(target);
    if (targetIndex >= 0) {
      event.preventDefault();
      goToSnap(targetIndex);
    }
  });
});



const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress span');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  progressBar.style.transform = `scaleX(${progress})`;
  header.classList.toggle('scrolled', window.scrollY > 18);
}, { passive: true });

const canvas = document.getElementById('starfield');
const context = canvas.getContext('2d');
let stars = [];
let width = 0;
let height = 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeStars() {
  const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.min(150, Math.floor((width * height) / 9000));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.35,
    a: Math.random() * 0.75 + 0.2,
    s: Math.random() * 0.35 + 0.08,
    hue: Math.random() > 0.75 ? '94,231,255' : Math.random() > 0.55 ? '200,255,53' : '255,255,255'
  }));
}

function drawStars() {
  context.clearRect(0, 0, width, height);
  stars.forEach((star) => {
    star.y += star.s;
    star.x += Math.sin((star.y + star.r) * 0.01) * 0.06;
    if (star.y > height + 8) {
      star.y = -8;
      star.x = Math.random() * width;
    }
    context.beginPath();
    context.fillStyle = `rgba(${star.hue},${star.a})`;
    context.shadowColor = `rgba(${star.hue},.6)`;
    context.shadowBlur = 10;
    context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    context.fill();
  });
  context.shadowBlur = 0;
  if (!prefersReducedMotion) requestAnimationFrame(drawStars);
}

resizeStars();
drawStars();
window.addEventListener('resize', resizeStars, { passive: true });

document.querySelectorAll('.tilt-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 7;
    const ry = (px - 0.5) * 9;
    card.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
});

let lastSpark = 0;
window.addEventListener('pointermove', (event) => {
  if (prefersReducedMotion || performance.now() - lastSpark < 55) return;
  lastSpark = performance.now();
  const spark = document.createElement('span');
  spark.className = 'spark-burst';
  spark.style.left = `${event.clientX}px`;
  spark.style.top = `${event.clientY}px`;
  spark.style.setProperty('--x', `${(Math.random() - 0.5) * 42}px`);
  spark.style.setProperty('--y', `${18 + Math.random() * 38}px`);
  document.body.appendChild(spark);
  spark.addEventListener('animationend', () => spark.remove(), { once: true });
}, { passive: true });




const snapSections = Array.from(document.querySelectorAll('.hero.section-shell, #experience, #work, #skills'));
const navLinks = Array.from(document.querySelectorAll('.nav a'));
let snapIndex = 0;
let snapLocked = false;
let lastSnapTime = 0;

function getClosestSnapIndex() {
  let closest = 0;
  let bestVisible = -1;
  snapSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    if (visible > bestVisible) {
      bestVisible = visible;
      closest = index;
    }
  });
  return closest;
}

function setActiveNav(index) {
  if (!snapSections.length || !navLinks.length) return;
  snapIndex = Math.max(0, Math.min(index, snapSections.length - 1));
  const activeSection = snapSections[snapIndex];
  const activeId = activeSection.id || 'top';
  navLinks.forEach((link) => {
    const targetId = (link.getAttribute('href') || '').replace('#', '') || 'top';
    link.classList.toggle('active', targetId === activeId);
    if (targetId === activeId) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function updateActiveNav() {
  setActiveNav(getClosestSnapIndex());
}

function goToSnap(index) {
  if (!snapSections.length || snapLocked) return;
  const nextIndex = Math.max(0, Math.min(index, snapSections.length - 1));
  if (nextIndex === snapIndex && Math.abs(window.scrollY - snapSections[nextIndex].offsetTop) < 8) return;
  snapIndex = nextIndex;
  snapLocked = true;
  lastSnapTime = performance.now();
  snapSections[nextIndex].scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start'
  });
  setActiveNav(nextIndex);
  const nextId = snapSections[nextIndex].id || 'top';
  history.replaceState(null, '', `#${nextId}`);
  window.setTimeout(() => {
    snapLocked = false;
    updateActiveNav();
  }, prefersReducedMotion ? 120 : 620);
}

function isInsideProjectSlider(target) {
  return Boolean(target?.closest?.('.project-slider'));
}

window.addEventListener('wheel', (event) => {
  if (window.innerWidth < 701 || snapLocked || event.ctrlKey || Math.abs(event.deltaY) < 24) return;
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
  event.preventDefault();
  if (performance.now() - lastSnapTime < 520) return;
  const current = getClosestSnapIndex();
  goToSnap(current + (event.deltaY > 0 ? 1 : -1));
}, { passive: false });

let touchStartY = null;
let touchStartX = null;
window.addEventListener('touchstart', (event) => {
  touchStartY = event.touches[0]?.clientY ?? null;
  touchStartX = event.touches[0]?.clientX ?? null;
}, { passive: true });

window.addEventListener('touchmove', (event) => {
  if (window.innerWidth < 701 || snapLocked || touchStartY === null) return;
  const delta = touchStartY - (event.touches[0]?.clientY ?? touchStartY);
  const deltaX = touchStartX === null ? 0 : touchStartX - (event.touches[0]?.clientX ?? touchStartX);
  if (Math.abs(deltaX) > Math.abs(delta)) return;
  if (Math.abs(delta) < 28) return;
  event.preventDefault();
  const current = getClosestSnapIndex();
  touchStartY = null;
  touchStartX = null;
  goToSnap(current + (delta > 0 ? 1 : -1));
}, { passive: false });


window.addEventListener('keydown', (event) => {
  if (snapLocked || ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName || '')) return;
  if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
    event.preventDefault();
    goToSnap(getClosestSnapIndex() + 1);
  }
  if (['ArrowUp', 'PageUp'].includes(event.key)) {
    event.preventDefault();
    goToSnap(getClosestSnapIndex() - 1);
  }
});
window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', updateActiveNav, { passive: true });
updateActiveNav();
window.setTimeout(updateActiveNav, 260);










// snap initial hash to the exact slide after local/file load
window.addEventListener('load', () => {
  const target = window.location.hash ? document.querySelector(window.location.hash) : null;
  if (target && snapSections.includes(target)) {
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      updateActiveNav();
    }, 120);
  }
});

const projectSlider = document.querySelector('.project-slider');
const projectPrev = document.querySelector('.project-slide-prev');
const projectNext = document.querySelector('.project-slide-next');

function moveProjectSlide(direction) {
  if (!projectSlider) return;
  projectSlider.scrollBy({
    left: direction * projectSlider.clientWidth,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
}

projectPrev?.addEventListener('click', () => moveProjectSlide(-1));
projectNext?.addEventListener('click', () => moveProjectSlide(1));

if (projectSlider) {
  let isDraggingProjects = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let dragDistance = 0;

  projectSlider.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    isDraggingProjects = true;
    dragStartX = event.clientX;
    dragStartScroll = projectSlider.scrollLeft;
    dragDistance = 0;
    projectSlider.classList.add('is-dragging');
    projectSlider.setPointerCapture(event.pointerId);
  });

  projectSlider.addEventListener('pointermove', (event) => {
    if (!isDraggingProjects) return;
    event.preventDefault();
    dragDistance = event.clientX - dragStartX;
    projectSlider.scrollLeft = dragStartScroll - dragDistance;
  });

  const stopProjectDrag = (event) => {
    if (!isDraggingProjects) return;
    isDraggingProjects = false;
    projectSlider.classList.remove('is-dragging');
    if (projectSlider.hasPointerCapture(event.pointerId)) {
      projectSlider.releasePointerCapture(event.pointerId);
    }
  };

  projectSlider.addEventListener('pointerup', stopProjectDrag);
  projectSlider.addEventListener('pointercancel', stopProjectDrag);
  projectSlider.addEventListener('pointerleave', stopProjectDrag);
  projectSlider.addEventListener('click', (event) => {
    if (Math.abs(dragDistance) > 8) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
}

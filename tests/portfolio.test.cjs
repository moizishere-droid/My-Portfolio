const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, VirtualConsole } = require('jsdom');

const bundleFile = () => path.join('dist/assets', fs.readdirSync('dist/assets').find(file => file.endsWith('.js')));
const sourceHtml = fs.readFileSync('Abdul Moiz — AI_ML Engineer.html', 'utf8');

async function render({ width = 1440, height = 900, cardHeight = 0, reducedMotion = true } = {}) {
  const errors = [];
  const console = new VirtualConsole();
  console.on('jsdomError', error => errors.push(error.message));
  console.on('error', (...args) => errors.push(args.join(' ')));
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost:5173/', runScripts: 'outside-only', pretendToBeVisual: true,
    virtualConsole: console,
  });
  const { window } = dom;
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
  Object.defineProperty(window, 'innerHeight', { value: height });
  Object.defineProperty(window.HTMLElement.prototype, 'offsetHeight', { configurable: true, get() { return this.classList.contains('work-gallery-card') ? cardHeight : 0; } });
  window.matchMedia = query => ({
    matches: (!query.includes('min-width') || width >= Number(query.match(/min-width:\s*(\d+)/)?.[1])) &&
      (!query.includes('max-width') || width <= Number(query.match(/max-width:\s*(\d+)/)?.[1])) &&
      (!query.includes('min-height') || height >= Number(query.match(/min-height:\s*(\d+)/)?.[1])) &&
      (!query.includes('no-preference') || !reducedMotion) &&
      (!query.includes('reduce)') || reducedMotion),
    media: query, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {},
  });
  window.ResizeObserver = class {
    constructor(callback) { this.callback = callback; }
    observe() { this.callback([{ contentRect: { width } }]); }
    disconnect() {}
  };
  window.IntersectionObserver = class {
    constructor(callback) { this.callback = callback; }
    observe(target) { this.callback([{ target, isIntersecting: true }]); }
    unobserve() {}
    disconnect() {}
  };
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.setPointerCapture = () => {};
  window.HTMLElement.prototype.hasPointerCapture = () => false;
  window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  window.HTMLDialogElement.prototype.close = function () { this.open = false; };
  window.scrollTo = () => {};
  Object.defineProperty(window.navigator, 'clipboard', { value: { writeText: async text => { window.copiedText = text; } } });
  window.eval(fs.readFileSync(bundleFile(), 'utf8'));
  const settle = () => new Promise(resolve => setTimeout(resolve, 80));
  await settle();
  return { dom, document: window.document, window, errors, settle };
}

test('preserves every original project, practice project, skill and education detail', async () => {
  const { projects, skills, education } = await import('../src/data/portfolio.js');
  const original = new JSDOM(sourceHtml.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<script[\s\S]*?<\/script>/g, ''));
  const text = el => el.textContent.trim().replace(/\s+/g, ' ');
  const originalCards = [...original.window.document.querySelectorAll('.pcard')];
  assert.equal(projects.length, originalCards.length);
  projects.forEach((project, index) => {
    const card = originalCards[index];
    assert.equal(project.title, text(card.querySelector('h3')));
    assert.equal(project.description, text(card.querySelector('.pc-body>p')));
    assert.deepEqual(project.tags, [...card.querySelectorAll('.chips .chip')].map(text));
    assert.deepEqual(project.links.map(link => link.href), [...card.querySelectorAll('.pc-links a')].map(el => el.getAttribute('href')));
    assert.deepEqual(project.practice.map(item => item.description), [...card.querySelectorAll('.sub-card p')].map(text));
  });
  assert.equal(projects.reduce((total, project) => total + project.practice.length, 0), 15);
  assert.equal(skills.reduce((total, group) => total + group.items.length, 0), 30);
  assert.deepEqual(education.map(item => item.description), [...original.window.document.querySelectorAll('.tl-body>p')].map(text));
  const encoded = sourceHtml.match(/data:application\/pdf;base64,([^"\s]+)/)[1];
  assert.deepEqual(fs.readFileSync('dist/Abdul-Moiz-Resume.pdf'), Buffer.from(encoded, 'base64'));
  original.window.close();
});

test('filters work, opens projects and exposes original practice details and links', async () => {
  const page = await render();
  const { document: d, settle, errors } = page;
  try {
    assert.equal(d.querySelectorAll('.work-gallery-card').length, 5);
    assert.equal(d.querySelectorAll('.work-external-links a.demo-link').length, 2);
    assert.ok(d.querySelector('.work-external-links a[href="https://abdulmoiz123-loan-risk-app.hf.space"]'));
    const filter = [...d.querySelectorAll('.work-filters button')].find(el => el.textContent === 'LLM Fine-tuning');
    filter.click(); await settle();
    assert.equal(d.querySelectorAll('.work-gallery-card').length, 1);
    assert.match(d.querySelector('.work-info h3').textContent, /CodeMentor/);
    d.querySelector('.work-info .button').click(); await settle();
    assert.ok(d.querySelector('dialog').open);
    assert.match(d.querySelector('#dialog-project-title').textContent, /CodeMentor/);
    assert.equal(d.querySelectorAll('.practice-section details').length, 4);
    assert.ok(d.querySelector('dialog a[href="https://abdulmoiz123-codementor-llm-combined.hf.space"]'));
    assert.ok(d.querySelector('dialog a.button-primary[href="https://abdulmoiz123-codementor-llm-combined.hf.space"]'));
    d.querySelector('[aria-label="Close project"]').click(); await settle();
    assert.equal(d.querySelector('dialog').open, false);
    assert.equal(d.body.style.overflow, '');
    d.querySelector('.work-filters button').click(); await settle();
    assert.equal(d.querySelectorAll('.work-gallery-card').length, 5);
    d.querySelector('.view-toggle').click(); await settle();
    assert.ok(d.querySelector('.work-gallery').classList.contains('work-list'));
    assert.deepEqual(errors, []);
  } finally { page.dom.window.close(); }
});

test('editor controls, theme persistence, resume, copy email, and navigation work on mobile', async () => {
  const page = await render({ width: 375 });
  const { document: d, window: w, settle, errors } = page;
  try {
    assert.equal(d.querySelector('[aria-label="Mobile preview"]').getAttribute('aria-pressed'), 'true');
    d.querySelector('[aria-label="Desktop preview"]').click(); await settle();
    assert.equal(d.querySelector('[aria-label="Desktop preview"]').getAttribute('aria-pressed'), 'true');
    d.querySelector('[aria-label="Mobile preview"]').click(); await settle();
    assert.ok(d.querySelector('.project-editor').classList.contains('device-mobile'));
    d.querySelector('[aria-label="Collapse editor panels"]').click(); await settle();
    assert.equal(d.querySelectorAll('.editor-panel').length, 0);
    d.querySelector('[aria-label="Expand editor panels"]').click(); await settle();
    assert.equal(d.querySelectorAll('.editor-panel').length, 2);
    d.querySelector('[aria-label="Pause project strip"]').click(); await settle();
    assert.ok(d.querySelector('[aria-label="Play project strip"]'));
    d.querySelector('[aria-label="Toggle canvas theme"]').click(); await settle();
    assert.equal(d.documentElement.dataset.theme, 'light');
    assert.equal(w.localStorage.getItem('portfolio-theme'), 'light');
    d.querySelector('[aria-label="Open menu"]').click(); await settle();
    assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'true');
    d.querySelector('.nav-menu a[href="#skills"]').click(); await settle();
    assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'), 'false');
    d.querySelector('#resume button').click(); await settle();
    assert.ok(d.querySelector('#resume-viewer iframe'));
    assert.equal(d.querySelector('#resume-viewer iframe').getAttribute('src'), './Abdul-Moiz-Resume.pdf');
    d.querySelector('[aria-label="Close resume"]').click(); await settle();
    assert.equal(d.querySelector('#resume-viewer'), null);
    d.querySelector('[aria-label="Copy email address"]').click(); await settle();
    assert.equal(w.copiedText, 'abdulmoiz.aiml.dev@gmail.com');
    assert.equal(d.querySelector('#contact [role="status"]').textContent, 'Email address copied');
    d.querySelector('.editor-shot').click(); await settle();
    assert.ok(d.querySelector('dialog').open);
    assert.match(d.querySelector('#dialog-project-title').textContent, /Loan Risk/);
    assert.deepEqual(errors, []);
  } finally { page.dom.window.close(); }
});

test('animation setup renders at desktop width without runtime errors', async () => {
  const page = await render({ width: 1440, height: 800, cardHeight: 1200, reducedMotion: false });
  try {
    assert.equal(page.document.querySelectorAll('.gradient-bars>span').length, 30);
    assert.equal(page.document.querySelectorAll('.skill-card').length, 6);
    assert.equal(page.document.querySelectorAll('.work-gallery-card').length, 5);
    assert.equal(page.document.querySelector('[aria-label="Desktop preview"]').getAttribute('aria-pressed'), 'true');
    assert.ok(page.document.querySelector('.work-gallery.is-pinned'));
    const nextCardTransform = page.document.querySelectorAll('.work-gallery-card')[1].style.transform;
    assert.ok(Number(nextCardTransform.match(/translate\(0%,\s*([\d.]+)%\)/)?.[1]) > 110);
    assert.equal(page.document.querySelectorAll('.work-gallery-card')[2].style.visibility, 'hidden');
    assert.equal(page.document.querySelector('.work-info[data-lenis-prevent]'), null);
    assert.equal(page.document.querySelector('.work-gallery-card').style.opacity, '1');
    page.document.querySelector('.view-toggle').click();
    await page.settle();
    assert.equal(page.document.querySelector('.work-gallery.is-pinned'), null);
    assert.equal(page.document.querySelectorAll('.work-gallery-card[inert]').length, 0);
    assert.equal(page.document.querySelectorAll('.work-gallery-card')[1].style.visibility, '');
    assert.deepEqual(page.errors, []);
  } finally { page.dom.window.close(); }
});

test('navbar keeps clicked destination highlighted during scrolling and follows manual scrolling', async () => {
  const page = await render();
  const { document: d, window: w, settle } = page;
  const tops = { hero: -400, about: 700, projects: 1400, skills: 2200, education: 3000, resume: 4000 };
  try {
    for (const [id] of Object.entries(tops)) {
      d.getElementById(id).getBoundingClientRect = () => ({ top: tops[id] });
    }
    d.querySelector('.nav-menu a[href="#about"]').click(); await settle();
    w.dispatchEvent(new w.Event('scroll')); await settle();
    assert.equal(d.querySelector('.nav-menu a[aria-current="location"]').getAttribute('href'), '#about');
    tops.about = 112;
    w.dispatchEvent(new w.Event('scroll')); await settle();
    assert.equal(d.querySelector('.nav-menu a[aria-current="location"]').getAttribute('href'), '#about');
    tops.about = -400; tops.projects = 100;
    w.dispatchEvent(new w.Event('wheel'));
    w.dispatchEvent(new w.Event('scroll')); await settle();
    assert.equal(d.querySelector('.nav-menu a[aria-current="location"]').getAttribute('href'), '#projects');
    assert.deepEqual(page.errors, []);
  } finally { page.dom.window.close(); }
});

test('preview follows resizing and orientation changes after loading', async () => {
  const page = await render({ width: 1440 });
  const { document: d, window: w, settle } = page;
  try {
    w.innerWidth = 338;
    w.dispatchEvent(new w.Event('resize')); await settle();
    assert.equal(d.querySelector('[aria-label="Mobile preview"]').getAttribute('aria-pressed'), 'true');
    d.querySelector('[aria-label="Desktop preview"]').click(); await settle();
    w.innerWidth = 360;
    w.dispatchEvent(new w.Event('resize')); await settle();
    assert.equal(d.querySelector('[aria-label="Mobile preview"]').getAttribute('aria-pressed'), 'true');
    w.innerWidth = 1024;
    w.dispatchEvent(new w.Event('orientationchange')); await settle();
    assert.equal(d.querySelector('[aria-label="Desktop preview"]').getAttribute('aria-pressed'), 'true');
    assert.deepEqual(page.errors, []);
  } finally { page.dom.window.close(); }
});

test('mobile and tablet use accessible unpinned project lists with all original links', async () => {
  for (const width of [320, 768, 1024]) {
    const page = await render({ width, reducedMotion: false });
    try {
      assert.equal(page.document.querySelector('.work-gallery.is-pinned'), null);
      assert.equal(page.document.querySelectorAll('.work-gallery-card[inert]').length, 0);
      assert.equal(page.document.querySelectorAll('.work-external-links a.demo-link').length, 2);
      assert.equal(page.document.querySelectorAll('.work-gallery-card').length, 5);
      assert.deepEqual(page.errors, []);
    } finally { page.dom.window.close(); }
  }
});

test('press-and-hold previews release cleanly and dragging does not open a dialog', async () => {
  const page = await render({ width: 768 });
  const { document: d, window: w, settle, errors } = page;
  const pointer = (element, type, x, y = 100) => element.dispatchEvent(new w.MouseEvent(type, { bubbles: true, button: 0, clientX: x, clientY: y }));
  try {
    let shot = d.querySelector('.editor-shot');
    pointer(shot, 'pointerdown', 100);
    await new Promise(resolve => setTimeout(resolve, 650));
    assert.ok(d.querySelector('.hold-preview'));
    pointer(shot, 'pointerup', 100); await settle();
    assert.equal(d.querySelector('.hold-preview'), null);
    assert.equal(d.querySelector('dialog').open, false);
    shot = d.querySelector('.editor-shot');
    pointer(shot, 'pointerdown', 100);
    pointer(shot, 'pointermove', 160);
    pointer(shot, 'pointerup', 160); await settle();
    assert.equal(d.querySelector('dialog').open, false);
    pointer(shot, 'pointerdown', 100);
    pointer(shot, 'pointerup', 100); await settle();
    assert.equal(d.querySelector('dialog').open, true);
    d.querySelector('dialog').dispatchEvent(new w.Event('cancel', { cancelable: true })); await settle();
    assert.equal(d.querySelector('dialog').open, false);
    assert.deepEqual(errors, []);
  } finally { page.dom.window.close(); }
});

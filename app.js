// ─── Main Application ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ── Dark / Light Theme Toggle ──────────────────────────────────────────
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('snake-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('snake-theme', next);
  });

  // ── Mobile Nav ─────────────────────────────────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ── Render US Map ──────────────────────────────────────────────────────
  const mapContainer = document.getElementById('us-map');
  const mapSvg = renderUSMap(mapContainer);

  // ── Info Panel ─────────────────────────────────────────────────────────
  const infoPanel = document.getElementById('info-panel');
  const infoPanelContent = document.getElementById('info-panel-content');

  function showStateInfo(stateAbbr) {
    const data = stateSnakeData[stateAbbr];
    if (!data) return;

    const letters = ['A', 'B', 'C'];
    infoPanelContent.innerHTML = `
      <h3>🐍 ${data.name}</h3>
      ${data.snakes.map((s, i) => `
        <div class="snake-card">
          <div class="snake-card-rank">${i + 1}</div>
          <h4>${s.name}</h4>
          <p>${s.desc}</p>
          <a href="${s.wiki}" target="_blank" rel="noopener noreferrer">
            Learn more on Wikipedia →
          </a>
        </div>
      `).join('')}
    `;
  }

  function resetInfoPanel() {
    infoPanelContent.innerHTML = `
      <div class="info-panel-placeholder">
        <div class="icon">🗺️</div>
        <p>Hover over a state to discover<br>its top 3 snake species</p>
      </div>
    `;
  }

  // Calculate precise geometric center for each state using getBBox
  // We do this instead of CSS transform-box to prevent Safari/Webkit rendering bugs
  setTimeout(() => {
    mapSvg.querySelectorAll('path').forEach(path => {
      try {
        const bbox = path.getBBox();
        const cx = bbox.x + bbox.width / 2;
        const cy = bbox.y + bbox.height / 2;
        path.style.transformOrigin = `${cx}px ${cy}px`;
      } catch (e) {
        // Fallback for paths if getBBox fails for any reason
        path.style.transformOrigin = 'center';
      }
    });
  }, 100);

  // Attach map events using event delegation
  mapContainer.addEventListener('mouseover', (e) => {
    const path = e.target.closest('path[data-state]');
    if (path) {
      const abbr = path.getAttribute('data-state');
      showStateInfo(abbr);
      mapSvg.querySelectorAll('path').forEach(p => p.classList.remove('active-state'));
      path.classList.add('active-state');
      path.parentNode.appendChild(path); // Bring to front
    }
  });

  mapContainer.addEventListener('click', (e) => {
    const path = e.target.closest('path[data-state]');
    if (path) {
      const abbr = path.getAttribute('data-state');
      showStateInfo(abbr);
      mapSvg.querySelectorAll('path').forEach(p => p.classList.remove('active-state'));
      path.classList.add('active-state');
      path.parentNode.appendChild(path); // Bring to front
    }
  });

  mapContainer.addEventListener('touchstart', (e) => {
    const path = e.target.closest('path[data-state]');
    if (path) {
      const abbr = path.getAttribute('data-state');
      showStateInfo(abbr);
      mapSvg.querySelectorAll('path').forEach(p => p.classList.remove('active-state'));
      path.classList.add('active-state');
      path.parentNode.appendChild(path); // Bring to front
    }
  }, { passive: true });

  // On mouse leave the entire map, reset
  mapContainer.addEventListener('mouseleave', () => {
    resetInfoPanel();
    mapSvg.querySelectorAll('path').forEach(p => p.classList.remove('active-state'));
  });

  // ── Quiz ───────────────────────────────────────────────────────────────
  const quizContainer = document.getElementById('quiz-content');
  let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    wrong: 0,
    answered: false,
    started: false
  };

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startQuiz() {
    quizState = {
      questions: shuffleArray(quizQuestions).slice(0, 10),
      currentIndex: 0,
      score: 0,
      wrong: 0,
      answered: false,
      started: true
    };
    renderQuizQuestion();
  }

  function renderQuizStart() {
    quizContainer.innerHTML = `
      <div class="quiz-start">
        <div class="icon">🧠</div>
        <p>Test your knowledge with 10 random questions<br>about snakes in the United States!</p>
        <button class="quiz-start-btn" id="start-quiz-btn">Start the Quiz 🐍</button>
      </div>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
  }

  function renderQuizQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    const num = quizState.currentIndex + 1;
    const total = quizState.questions.length;
    const progress = (num / total) * 100;
    const optionLetters = ['A', 'B', 'C', 'D'];

    quizContainer.innerHTML = `
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progress}%"></div>
        </div>
        <span class="quiz-progress-text">${num} / ${total}</span>
      </div>
      <div class="quiz-score">
        <div class="quiz-score-item quiz-score-correct">✓ ${quizState.score}</div>
        <div class="quiz-score-item quiz-score-wrong">✗ ${quizState.wrong}</div>
      </div>
      <div class="quiz-card">
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" data-index="${i}" id="quiz-opt-${i}">
              <span class="quiz-option-letter">${optionLetters[i]}</span>
              ${opt}
            </button>
          `).join('')}
        </div>
        <div id="quiz-feedback"></div>
      </div>
    `;

    quizState.answered = false;

    quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });
  }

  function handleAnswer(selectedIndex) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];
    const isCorrect = selectedIndex === q.answer;

    if (isCorrect) quizState.score++;
    else quizState.wrong++;

    // Highlight options
    quizContainer.querySelectorAll('.quiz-option').forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.answer) btn.classList.add('correct');
      if (i === selectedIndex && !isCorrect) btn.classList.add('wrong');
    });

    // Show fact
    const feedback = document.getElementById('quiz-feedback');
    feedback.innerHTML = `
      <div class="quiz-fact">
        <strong>${isCorrect ? '🎉 Correct!' : '❌ Not quite!'}</strong><br>
        ${q.fact}
      </div>
      ${quizState.currentIndex < quizState.questions.length - 1
        ? '<button class="quiz-next-btn" id="quiz-next">Next Question →</button>'
        : '<button class="quiz-next-btn" id="quiz-next">See Results 🏆</button>'
      }
    `;

    document.getElementById('quiz-next').addEventListener('click', () => {
      quizState.currentIndex++;
      if (quizState.currentIndex < quizState.questions.length) {
        renderQuizQuestion();
      } else {
        renderQuizResults();
      }
    });
  }

  function renderQuizResults() {
    const total = quizState.questions.length;
    const pct = Math.round((quizState.score / total) * 100);
    let message = '';
    if (pct === 100) message = "🏆 Perfect score! You're a true snake expert!";
    else if (pct >= 80) message = "🌟 Excellent! You really know your snakes!";
    else if (pct >= 60) message = "👏 Great job! You've got solid snake knowledge!";
    else if (pct >= 40) message = "🐍 Not bad! Keep learning about these fascinating creatures!";
    else message = "📚 Looks like there's more to discover about snakes!";

    quizContainer.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-results">
          <h3>Quiz Complete!</h3>
          <div class="score-big">${quizState.score}/${total}</div>
          <p>${message}</p>
          <div class="quiz-score" style="margin-bottom:1.5rem">
            <div class="quiz-score-item quiz-score-correct">✓ ${quizState.score} correct</div>
            <div class="quiz-score-item quiz-score-wrong">✗ ${quizState.wrong} wrong</div>
          </div>
          <button class="quiz-restart-btn" id="quiz-restart">Try Again 🔄</button>
        </div>
      </div>
    `;

    document.getElementById('quiz-restart').addEventListener('click', () => {
      startQuiz();
    });
  }

  renderQuizStart();

  // ── Snake Cursor ───────────────────────────────────────────────────────
  const cursor = document.getElementById('snake-cursor');
  const trailDots = [];
  const TRAIL_LENGTH = 12;
  const positions = [];

  // Create trail dots
  for (let i = 0; i < TRAIL_LENGTH; i++) {
    const dot = document.createElement('div');
    dot.className = 'snake-trail-dot';
    dot.style.width = `${Math.max(3, 8 - i * 0.5)}px`;
    dot.style.height = `${Math.max(3, 8 - i * 0.5)}px`;
    dot.style.background = `hsl(${140 + i * 3}, 40%, ${40 + i * 2}%)`;
    dot.style.opacity = `${Math.max(0.1, 0.6 - i * 0.04)}`;
    document.body.appendChild(dot);
    trailDots.push(dot);
    positions.push({ x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;
  let cursorVisible = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      cursor.style.display = 'block';
      trailDots.forEach(d => d.style.opacity = '');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorVisible = false;
    cursor.style.display = 'none';
    trailDots.forEach(d => d.style.opacity = '0');
  });

  function animateCursor() {
    cursor.style.left = `${mouseX - 4}px`;
    cursor.style.top = `${mouseY - 4}px`;

    // Trail follows with delay
    positions.unshift({ x: mouseX, y: mouseY });
    positions.length = TRAIL_LENGTH + 1;

    trailDots.forEach((dot, i) => {
      const pos = positions[Math.min(i + 3, positions.length - 1)];
      if (pos) {
        dot.style.left = `${pos.x - parseInt(dot.style.width) / 2}px`;
        dot.style.top = `${pos.y - parseInt(dot.style.height) / 2}px`;
      }
    });

    requestAnimationFrame(animateCursor);
  }

  cursor.style.display = 'none';
  animateCursor();

  // ── Scroll Animations ──────────────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));

  // ── Scroll to Top ─────────────────────────────────────────────────────
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Floating hero snakes ──────────────────────────────────────────────
  const hero = document.querySelector('.hero');
  const snakeEmojis = ['🐍', '🪱', '🌿', '🍃', '🌱'];
  for (let i = 0; i < 8; i++) {
    const span = document.createElement('span');
    span.className = 'hero-snake';
    span.textContent = snakeEmojis[i % snakeEmojis.length];
    span.style.left = `${10 + Math.random() * 80}%`;
    span.style.top = `${10 + Math.random() * 80}%`;
    span.style.animationDelay = `${Math.random() * 6}s`;
    span.style.animationDuration = `${4 + Math.random() * 4}s`;
    span.style.fontSize = `${1.5 + Math.random() * 2}rem`;
    hero.appendChild(span);
  }
});

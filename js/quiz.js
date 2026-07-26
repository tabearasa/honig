// Bienen-Buzz-Facts quiz: 6 random multiple-choice questions drawn from the
// bank below, one question at a time. The score only ever lives in this
// page's memory (no localStorage/sessionStorage/cookies), so nothing is
// tracked across visits or tied to a visitor.
import { QUESTIONS } from './questions.js';

(function () {
  const LABELS = {
    de: {
      progress: function (i, total) { return 'Frage ' + i + ' von ' + total; },
      result: function (score, total) { return 'Du hast ' + score + ' von ' + total + ' Fragen richtig beantwortet!'; }
    },
    en: {
      progress: function (i, total) { return 'Question ' + i + ' of ' + total; },
      result: function (score, total) { return 'You answered ' + score + ' out of ' + total + ' questions correctly!'; }
    }
  };

  const QUIZ_LENGTH = 6;
  const ADVANCE_DELAY = 1000;

  const startView = document.getElementById('quizStart');
  const questionView = document.getElementById('quizQuestion');
  const resultView = document.getElementById('quizResult');
  if (!startView || !questionView || !resultView) return;

  const progressEl = document.getElementById('quizProgress');
  const questionTextEl = document.getElementById('quizQuestionText');
  const answersEl = document.getElementById('quizAnswers');
  const scoreTextEl = document.getElementById('quizScoreText');
  const startBtn = document.getElementById('quizStartBtn');
  const restartBtn = document.getElementById('quizRestartBtn');
  const celebrationEl = document.getElementById('celebration');

  let session = null; // { rounds, index, score, answered, selectedIndex } - in-memory only

  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function buildRound(question) {
    return {
      de: { q: question.de.q, choices: question.de.choices },
      en: { q: question.en.q, choices: question.en.choices },
      correct: question.correct
    };
  }

  function currentLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'de';
  }

  function showView(view) {
    [startView, questionView, resultView].forEach(function (el) {
      el.classList.toggle('d-none', el !== view);
    });
  }

  function startQuiz() {
    const rounds = shuffle(QUESTIONS).slice(0, QUIZ_LENGTH).map(buildRound);
    session = { rounds: rounds, index: 0, score: 0, answered: false, selectedIndex: null };
    if (celebrationEl) celebrationEl.innerHTML = '';
    showView(questionView);
    renderQuestion();
  }

  function renderQuestion() {
    if (!session) return;
    const lang = currentLang();
    const round = session.rounds[session.index];

    progressEl.textContent = LABELS[lang].progress(session.index + 1, session.rounds.length);
    questionTextEl.textContent = round[lang].q;

    answersEl.innerHTML = '';
    round[lang].choices.forEach(function (choice, i) {
      const col = document.createElement('div');
      col.className = 'col';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-outline-secondary w-100 quiz-answer';
      btn.textContent = choice;
      btn.disabled = session.answered;
      btn.addEventListener('click', function () { selectAnswer(i, btn); });

      col.appendChild(btn);
      answersEl.appendChild(col);
    });
  }

  function selectAnswer(index, btn) {
    if (session.answered) return;
    session.answered = true;
    session.selectedIndex = index;

    Array.prototype.forEach.call(answersEl.querySelectorAll('.quiz-answer'), function (b) {
      b.disabled = true;
    });

    const round = session.rounds[session.index];
    const isCorrect = index === round.correct;
    btn.classList.remove('btn-outline-secondary');
    btn.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
    if (isCorrect) session.score++;

    setTimeout(advance, ADVANCE_DELAY);
  }

  function advance() {
    session.index++;
    session.answered = false;
    session.selectedIndex = null;
    if (session.index < session.rounds.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    showView(resultView);
    renderResult();
    celebrate();
  }

  function renderResult() {
    if (!session) return;
    const lang = currentLang();
    scoreTextEl.textContent = LABELS[lang].result(session.score, session.rounds.length);
  }

  function celebrate() {
    if (!celebrationEl) return;
    celebrationEl.innerHTML = '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    ['🐝', '🐝', '🐝', '🌼', '🌸', '🌻'].forEach(function (emoji) {
      const span = document.createElement('span');
      span.className = 'celebration-item';
      span.textContent = emoji;
      span.style.top = (5 + Math.random() * 80) + '%';
      span.style.animationDelay = (Math.random() * 1.2) + 's';
      span.style.animationDuration = (2.2 + Math.random() * 1.2) + 's';
      celebrationEl.appendChild(span);
    });

    setTimeout(function () { celebrationEl.innerHTML = ''; }, 3600);
  }

  startBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', startQuiz);

  new MutationObserver(function () {
    if (!session) return;
    if (!questionView.classList.contains('d-none')) renderQuestion();
    else if (!resultView.classList.contains('d-none')) renderResult();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();

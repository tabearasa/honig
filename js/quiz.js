// Bienen-Buzz-Facts quiz: 6 random multiple-choice questions drawn from the
// bank below, one question at a time. The score only ever lives in this
// page's memory (no localStorage/sessionStorage/cookies), so nothing is
// tracked across visits or tied to a visitor.
(function () {
  // Hand-authored from data/buzz-facts.csv - the CSV only has facts, not
  // quiz answer options, so `id` (matching Print-Nr) is just for
  // traceability back to the source fact. New facts added to the CSV need
  // a matching entry added here by hand.
  const QUESTIONS = [
    {
      id: 1,
      de: { q: 'Wie viel Prozent aller Bienenarten sind soziale Bienen, die im Volk leben?', choices: ['5 %', '25 %', '50 %', '95 %'], correct: 0 },
      en: { q: 'What percentage of all bee species are social bees that live in a colony?', choices: ['5%', '25%', '50%', '95%'], correct: 0 }
    },
    {
      id: 2,
      de: { q: 'Was passiert am Ende des Sommers mit den Drohnen im Bienenvolk?', choices: ['Sie überwintern zusammen mit den Winterbienen im Stock.', 'Sie werden von den Arbeiterinnen nicht mehr in den Stock gelassen und sterben.', 'Sie fliegen aus, um eine neue Königin zu begatten.', 'Sie verwandeln sich in Arbeiterinnen.'], correct: 1 },
      en: { q: 'What happens to the drones at the end of summer?', choices: ['They overwinter in the hive together with the winter bees.', 'The worker bees stop letting them into the hive, and they die.', 'They fly out to mate with a new queen.', 'They turn into worker bees.'], correct: 1 }
    },
    {
      id: 3,
      de: { q: 'Nach wie vielen Tagen schlüpft eine Bienenkönigin aus ihrer Zelle?', choices: ['16 Tage', '21 Tage', '24 Tage', '35 Tage'], correct: 0 },
      en: { q: 'After how many days does a queen bee hatch from her cell?', choices: ['16 days', '21 days', '24 days', '35 days'], correct: 0 }
    },
    {
      id: 4,
      de: { q: 'Warum sind Drohnen anfälliger für Varroa-Milben als Arbeiterinnen?', choices: ['Weil sie größere Facettenaugen haben.', 'Weil sie keinen Stachel zur Verteidigung besitzen.', 'Weil sie öfter zwischen verschiedenen Völkern wechseln.', 'Weil ihre Brutzeit länger dauert.'], correct: 3 },
      en: { q: 'Why are drones more prone to Varroa mite infestations than worker bees?', choices: ['Because they have larger compound eyes.', 'Because they have no stinger to defend themselves.', 'Because they move between different colonies more often.', 'Because their brood stage takes longer.'], correct: 3 }
    },
    {
      id: 5,
      de: { q: 'Wie viele Bienen leben im Sommer etwa in einem starken Bienenvolk?', choices: ['5.000', '20.000', '50.000', '100.000'], correct: 2 },
      en: { q: 'Roughly how many bees live in a strong colony during summer?', choices: ['5,000', '20,000', '50,000', '100,000'], correct: 2 }
    },
    {
      id: 6,
      de: { q: 'Wie viele Tage leben Sommerbienen im Durchschnitt, bevor sie sterben?', choices: ['16 Tage', '21 Tage', '24 Tage', '35 Tage'], correct: 3 },
      en: { q: 'On average, how many days do summer bees live before they die?', choices: ['16 days', '21 days', '24 days', '35 days'], correct: 3 }
    },
    {
      id: 7,
      de: { q: 'Wie alt kann eine Bienenkönigin höchstens werden?', choices: ['3 Jahre', '5 Jahre', '7 Jahre', '10 Jahre'], correct: 1 },
      en: { q: "What's the maximum age a queen bee can reach?", choices: ['3 years', '5 years', '7 years', '10 years'], correct: 1 }
    },
    {
      id: 8,
      de: { q: 'Wie viel Honig verbrauchen Bienen etwa, um 1 kg Wachs auszuschwitzen?', choices: ['1 kg', '3 kg', '6 kg', '10 kg'], correct: 2 },
      en: { q: 'About how much honey do bees consume to produce 1 kg of beeswax?', choices: ['1 kg', '3 kg', '6 kg', '10 kg'], correct: 2 }
    },
    {
      id: 9,
      de: { q: 'Wofür verwenden Bienen das harzähnliche Propolis?', choices: ['Um Waben mit Honig zu verschließen.', 'Um Eindringlinge im Stock zu betäuben.', 'Um Pollen für den Winter haltbar zu machen.', 'Um ihren Bau abzudichten und zu verkitten.'], correct: 3 },
      en: { q: 'What do bees use the resin-like substance propolis for?', choices: ['To cap honeycomb cells filled with honey.', 'To stun intruders inside the hive.', 'To preserve pollen for winter.', 'To seal and caulk cracks and gaps in their hive.'], correct: 3 }
    },
    {
      id: 10,
      de: { q: 'Was teilen sich Bienen mit dem sogenannten Schwänzeltanz mit?', choices: ['Die Temperatur im Bienenstock.', 'Die Lage von Futterquellen.', 'Die Gesundheit der Königin.', 'Den bevorstehenden Schwarmzeitpunkt.'], correct: 1 },
      en: { q: 'What do bees communicate to each other with the waggle dance?', choices: ['The temperature inside the hive.', 'The location of food sources.', 'The health of the queen.', 'The upcoming time to swarm.'], correct: 1 }
    },
    {
      id: 11,
      de: { q: "Wie groß ist die kleinste Bienenart der Welt, die 'Eye-Licking Bee'?", choices: ['2 mm', '5 mm', '8 mm', '12 mm'], correct: 0 },
      en: { q: "How big is the world's smallest bee species, the 'eye-licking bee'?", choices: ['2 mm', '5 mm', '8 mm', '12 mm'], correct: 0 }
    },
    {
      id: 12,
      de: { q: 'Welche Farbe können Bienen nicht sehen, dafür aber ultraviolettes Licht wahrnehmen?', choices: ['Blau', 'Grün', 'Rot', 'Gelb'], correct: 2 },
      en: { q: 'Which color can bees not see, while being able to perceive ultraviolet light instead?', choices: ['Blue', 'Green', 'Red', 'Yellow'], correct: 2 }
    }
  ];

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
    const order = shuffle([0, 1, 2, 3]);
    return {
      de: { q: question.de.q, choices: order.map(function (i) { return question.de.choices[i]; }) },
      en: { q: question.en.q, choices: order.map(function (i) { return question.en.choices[i]; }) },
      correct: order.indexOf(question.de.correct)
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
      if (session.answered && i === session.selectedIndex) btn.classList.add('selected');
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
    btn.classList.add('selected');

    const round = session.rounds[session.index];
    if (index === round.correct) session.score++;

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

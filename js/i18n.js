// Simple DE/EN text swap for elements marked with [data-i18n]. Legal
// pages (Impressum, Datenschutz) are intentionally German-only and
// don't use this.
(function () {
  const dict = {
    de: {
      'nav.products': 'Produkte',
      'nav.gallery': 'Galerie',
      'nav.quiz': 'Quiz',
      'footer.impressum': 'Impressum',
      'footer.datenschutz': 'Datenschutz',
      'index.lead': 'Eine Co-Produktion von Sophia, mir und ganz vielen Bienen.',
      'index.intro': 'Dieser Honig stammt aus Aachen: Produziert wurde er von fleißigen Bienen, geimkert von Sophia und von mir bekommen diese Gläser noch eine coole Website, da ich mich beim Imkern nicht besonders nützlich mache. Auf jedem Etikett findet ihr einen Bienen-Buzz-Fact. Wenn ihr genügend gesammelt habt, schafft ihr vielleicht das Quiz hier! Falls nicht und ihr frustriert seid, könnt ihr euch noch ein paar Bilder von dem Bienenstock anschauen, aus dem dieser Honig stammt.',
      'products.ffl': 'Frühjahrs-Blüte Flüssig',
      'products.sfl': 'Sommer-Blüte Flüssig',
      'products.ffe': 'Frühjahrs-Blüte Fest',
      'products.sfe': 'Sommer-Blüte Fest',
      'products.price': 'Preis auf Anfrage',
      'gallery.videoConsentPre': 'Video laden (lädt Inhalte von Vimeo – siehe ',
      'gallery.videoConsentLink': 'Datenschutzerklärung',
      'gallery.videoConsentPost': ')',
      'quiz.heading': 'Bienen-Buzz-Facts-Quiz',
      'quiz.intro': 'Wie gut kennst du dich mit Bienen aus? Beantworte 6 kurze Fragen und finde es heraus!',
      'quiz.start': 'Quiz starten',
      'quiz.resultHeading': 'Geschafft!',
      'quiz.playAgain': 'Nochmal spielen'
    },
    en: {
      'nav.products': 'Products',
      'nav.gallery': 'Gallery',
      'nav.quiz': 'Quiz',
      'footer.impressum': 'Imprint',
      'footer.datenschutz': 'Privacy Policy',
      'index.lead': 'A co-production of Sophia, me and countless bees.',
      'index.intro': 'This honey comes from Aachen: made by busy bees, beekept by Sophia and from me, these jars get a cool website, since I’m not particularly useful when it comes to the beekeeping part. On every label you’ll find a Bee Buzz Fact. Once you’ve collected enough of them, you might just be able to beat the quiz here! And if you can’t and you’re getting frustrated, you can always look at some photos of the hive this honey came from.',
      'products.ffl': 'Spring Blossom, liquid',
      'products.sfl': 'Summer Blossom, liquid',
      'products.ffe': 'Spring Blossom, creamed',
      'products.sfe': 'Summer Blossom, creamed',
      'products.price': 'Price on request',
      'gallery.videoConsentPre': 'Load video (loads content from Vimeo – see ',
      'gallery.videoConsentLink': 'privacy policy',
      'gallery.videoConsentPost': ')',
      'quiz.heading': 'Bee Buzz Facts Quiz',
      'quiz.intro': 'How much do you know about bees? Answer 6 quick questions and find out!',
      'quiz.start': 'Start quiz',
      'quiz.resultHeading': 'All done!',
      'quiz.playAgain': 'Play again'
    }
  };

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const text = dict[lang][el.getAttribute('data-i18n')];
      if (text) el.textContent = text;
    });
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  const lang = localStorage.getItem('lang') === 'en' ? 'en' : 'de';
  applyLanguage(lang);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = document.documentElement.lang === 'de' ? 'en' : 'de';
      localStorage.setItem('lang', next);
      applyLanguage(next);
    });
  }
})();

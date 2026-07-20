// Simple DE/EN text swap for elements marked with [data-i18n]. Legal
// pages (Impressum, Datenschutz) are intentionally German-only and
// don't use this.
(function () {
  const dict = {
    de: {
      'nav.products': 'Produkte',
      'nav.gallery': 'Galerie',
      'footer.impressum': 'Impressum',
      'footer.datenschutz': 'Datenschutz',
      'index.lead': 'Eine Co-Produktion von Sophia, Tabea und ganz vielen Bienen.',
      'index.intro': '„Honig“ ist ein Projekt von Sophia und mir, wobei ich zugeben muss, dass der größte Anteil an dieser Produktion von Sophia stammt. Nein, die wahren Heldinnen in diesem Projekt sind zweifellos die Bienen! Zugegeben, ich hege eine kleine Furcht vor diesen fleißigen Insekten und bin daher in der direkten Imkerei eher weniger hilfreich. Aber ich fand meinen Weg in den Bienenstock, indem ich diese Webseite ins Leben rief, um euch am Summen und Brummen teilhaben zu lassen. (Ich habe mich auch an dem Etikett versucht, aber nach meinem stundenlangen Kampf mit InDesign hat Sophia ein deutlich besseres Etikett erstellt.). Aber zurück zum eigentlichen Thema: Sophia und mich verbindet eine tiefgreifende Faszination für Bienen. Diese Kreaturen sind einfach außergewöhnlich und wir sind überglücklich, dass ihr in unsere kleine Web-Ecke geflogen seid, um mehr über sie zu erfahren. Willkommen also! Hier bietet sich euch ein Einblick in die zauberhafte Welt der Bienen und den Entstehungsweg eines Glases Honig. Und während ihr hier seid, lasst euch von verblüffenden Bienenfakten überraschen und inspirieren.',
      'products.ffl': 'Frühjahrs-Blüte Flüssig',
      'products.sfl': 'Sommer-Blüte Flüssig',
      'products.ffe': 'Frühjahrs-Blüte Fest',
      'products.sfe': 'Sommer-Blüte Fest',
      'products.price': 'Preis auf Anfrage',
      'gallery.videoConsentPre': 'Video laden (lädt Inhalte von Vimeo – siehe ',
      'gallery.videoConsentLink': 'Datenschutzerklärung',
      'gallery.videoConsentPost': ')'
    },
    en: {
      'nav.products': 'Products',
      'nav.gallery': 'Gallery',
      'footer.impressum': 'Imprint',
      'footer.datenschutz': 'Privacy Policy',
      'index.lead': 'A co-production of Sophia, Tabea, and countless bees.',
      'index.intro': '"Honig" is a project by Sophia and me, though I have to admit that the greater share of this production comes from Sophia. No, the true heroes of this project are without doubt the bees! I’ll confess I have a bit of a fear of these hard-working insects, so I’m not much help with the actual beekeeping. But I found my way into the hive by creating this website, to let you share in the buzz. (I also tried my hand at the label, but after hours of wrestling with InDesign, Sophia made a much better one.) But back to the heart of the matter: Sophia and I share a deep fascination for bees. These creatures are simply extraordinary, and we’re overjoyed that you’ve flown into our little corner of the web to learn more about them. So, welcome! Here you get a glimpse into the enchanting world of bees and the journey to a jar of honey. And while you’re here, prepare to be amazed and inspired by astonishing bee facts.',
      'products.ffl': 'Spring Blossom, liquid',
      'products.sfl': 'Summer Blossom, liquid',
      'products.ffe': 'Spring Blossom, creamed',
      'products.sfe': 'Summer Blossom, creamed',
      'products.price': 'Price on request',
      'gallery.videoConsentPre': 'Load video (loads content from Vimeo – see ',
      'gallery.videoConsentLink': 'privacy policy',
      'gallery.videoConsentPost': ')'
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

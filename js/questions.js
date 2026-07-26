// Hand-authored from data/buzz-facts.csv - the CSV only has facts, not
// quiz answer options, so `id` (matching Print-Nr) is just for
// traceability back to the source fact. New facts added to the CSV need
// a matching entry added here by hand.
export const QUESTIONS = [
  {
    id: 1,
    correct: 0,
    de: { q: 'Wie viel Prozent aller Bienenarten sind soziale Bienen, die im Volk leben?', choices: ['5 %', '25 %', '50 %', '95 %'] },
    en: { q: 'What percentage of all bee species are social bees that live in a colony?', choices: ['5%', '25%', '50%', '95%'] }
  },
  {
    id: 2,
    correct: 1,
    de: { q: 'Was passiert am Ende des Sommers mit den Drohnen im Bienenvolk?', choices: ['Sie überwintern zusammen mit den Winterbienen im Stock.', 'Sie werden von den Arbeiterinnen nicht mehr in den Stock gelassen und sterben.', 'Sie fliegen aus, um eine neue Königin zu begatten.', 'Sie verwandeln sich in Arbeiterinnen.'] },
    en: { q: 'What happens to the drones at the end of summer?', choices: ['They overwinter in the hive together with the winter bees.', 'The worker bees stop letting them into the hive, and they die.', 'They fly out to mate with a new queen.', 'They turn into worker bees.'] }
  },
  {
    id: 3,
    correct: 0,
    de: { q: 'Nach wie vielen Tagen schlüpft eine Bienenkönigin aus ihrer Zelle?', choices: ['16 Tage', '21 Tage', '24 Tage', '35 Tage'] },
    en: { q: 'After how many days does a queen bee hatch from her cell?', choices: ['16 days', '21 days', '24 days', '35 days'] }
  },
  {
    id: 4,
    correct: 3,
    de: { q: 'Warum sind Drohnen anfälliger für Varroa-Milben als Arbeiterinnen?', choices: ['Weil sie größere Facettenaugen haben.', 'Weil sie keinen Stachel zur Verteidigung besitzen.', 'Weil sie öfter zwischen verschiedenen Völkern wechseln.', 'Weil ihre Brutzeit länger dauert.'] },
    en: { q: 'Why are drones more prone to Varroa mite infestations than worker bees?', choices: ['Because they have larger compound eyes.', 'Because they have no stinger to defend themselves.', 'Because they move between different colonies more often.', 'Because their brood stage takes longer.'] }
  },
  {
    id: 5,
    correct: 2,
    de: { q: 'Wie viele Bienen leben im Sommer etwa in einem starken Bienenvolk?', choices: ['5.000', '20.000', '50.000', '100.000'] },
    en: { q: 'Roughly how many bees live in a strong colony during summer?', choices: ['5,000', '20,000', '50,000', '100,000'] }
  },
  {
    id: 6,
    correct: 3,
    de: { q: 'Wie viele Tage leben Sommerbienen im Durchschnitt, bevor sie sterben?', choices: ['16 Tage', '21 Tage', '24 Tage', '35 Tage'] },
    en: { q: 'On average, how many days do summer bees live before they die?', choices: ['16 days', '21 days', '24 days', '35 days'] }
  },
  {
    id: 7,
    correct: 1,
    de: { q: 'Wie alt kann eine Bienenkönigin höchstens werden?', choices: ['3 Jahre', '5 Jahre', '7 Jahre', '10 Jahre'] },
    en: { q: "What's the maximum age a queen bee can reach?", choices: ['3 years', '5 years', '7 years', '10 years'] }
  },
  {
    id: 8,
    correct: 2,
    de: { q: 'Wie viel Honig verbrauchen Bienen etwa, um 1 kg Wachs auszuschwitzen?', choices: ['1 kg', '3 kg', '6 kg', '10 kg'] },
    en: { q: 'About how much honey do bees consume to produce 1 kg of beeswax?', choices: ['1 kg', '3 kg', '6 kg', '10 kg'] }
  },
  {
    id: 9,
    correct: 3,
    de: { q: 'Wofür verwenden Bienen das harzähnliche Propolis?', choices: ['Um Waben mit Honig zu verschließen.', 'Um Eindringlinge im Stock zu betäuben.', 'Um Pollen für den Winter haltbar zu machen.', 'Um ihren Bau abzudichten und zu verkitten.'] },
    en: { q: 'What do bees use the resin-like substance propolis for?', choices: ['To cap honeycomb cells filled with honey.', 'To stun intruders inside the hive.', 'To preserve pollen for winter.', 'To seal and caulk cracks and gaps in their hive.'] }
  },
  {
    id: 10,
    correct: 1,
    de: { q: 'Was teilen sich Bienen mit dem sogenannten Schwänzeltanz mit?', choices: ['Die Temperatur im Bienenstock.', 'Die Lage von Futterquellen.', 'Die Gesundheit der Königin.', 'Den bevorstehenden Schwarmzeitpunkt.'] },
    en: { q: 'What do bees communicate to each other with the waggle dance?', choices: ['The temperature inside the hive.', 'The location of food sources.', 'The health of the queen.', 'The upcoming time to swarm.'] }
  },
  {
    id: 11,
    correct: 0,
    de: { q: "Wie groß ist die kleinste Bienenart der Welt, die 'Eye-Licking Bee'?", choices: ['2 mm', '5 mm', '8 mm', '12 mm'] },
    en: { q: "How big is the world's smallest bee species, the 'eye-licking bee'?", choices: ['2 mm', '5 mm', '8 mm', '12 mm'] }
  },
  {
    id: 12,
    correct: 2,
    de: { q: 'Welche Farbe können Bienen nicht sehen, dafür aber ultraviolettes Licht wahrnehmen?', choices: ['Blau', 'Grün', 'Rot', 'Gelb'] },
    en: { q: 'Which color can bees not see, while being able to perceive ultraviolet light instead?', choices: ['Blue', 'Green', 'Red', 'Yellow'] }
  }
];

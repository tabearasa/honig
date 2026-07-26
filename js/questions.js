// Hand-authored from data/buzz-facts.csv - the CSV only has facts, not
// quiz answer options, so `id` (matching the CSV's ID column) is just for
// traceability back to the source row. Print-Nr (1-12) identifies the
// underlying FunFact; the same Print-Nr repeats across multiple IDs when a
// fact gets printed on another batch of glasses, so several questions below
// share a fact but ask about it in different ways. New rows added to the
// CSV need a matching entry added here by hand.
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
  },
  {
    id: 13,
    correct: 3,
    de: { q: 'Wie viel Prozent aller Bienenarten sind Einsiedlerbienen und leben nicht im Volk?', choices: ['5 %', '25 %', '75 %', '95 %'] },
    en: { q: "What percentage of all bee species are solitary bees that don't live in a colony?", choices: ['5%', '25%', '75%', '95%'] }
  },
  {
    id: 14,
    correct: 1,
    de: { q: 'Warum sterben viele Drohnen am Ende des Sommers?', choices: ['Weil sie vom Wetter überrascht werden.', 'Weil die Arbeiterinnen sie aus dem Stock aussperren.', 'Weil sie an Altersschwäche sterben.', 'Weil die Königin sie tötet.'] },
    en: { q: 'Why do many drones die at the end of summer?', choices: ['Because they get caught off guard by the weather.', 'Because the worker bees lock them out of the hive.', 'Because they die of old age.', 'Because the queen kills them.'] }
  },
  {
    id: 15,
    correct: 1,
    de: { q: 'Nach wie vielen Tagen schlüpft eine Arbeiterin aus ihrer Zelle?', choices: ['16 Tage', '21 Tage', '24 Tage', '35 Tage'] },
    en: { q: 'After how many days does a worker bee hatch from her cell?', choices: ['16 days', '21 days', '24 days', '35 days'] }
  },
  {
    id: 16,
    correct: 1,
    de: { q: 'Welcher Schädling befällt Drohnenbrut besonders häufig?', choices: ['Der Ohrwurm', 'Die Varroa-Milbe', 'Die Wachsmotte', 'Der Bienenwolf'] },
    en: { q: 'Which pest particularly often infests drone brood?', choices: ['The earwig', 'The Varroa mite', 'The wax moth', 'The bee wolf'] }
  },
  {
    id: 17,
    correct: 2,
    de: { q: 'Wie stark kann ein Bienenvolk im Hochsommer anwachsen?', choices: ['Auf etwa 5.000 Bienen.', 'Auf etwa 20.000 Bienen.', 'Auf etwa 50.000 Bienen.', 'Auf etwa 200.000 Bienen.'] },
    en: { q: 'How large can a bee colony grow during peak summer?', choices: ['To about 5,000 bees.', 'To about 20,000 bees.', 'To about 50,000 bees.', 'To about 200,000 bees.'] }
  },
  {
    id: 18,
    correct: 2,
    de: { q: 'Wie lange können Winterbienen im Vergleich zu Sommerbienen leben?', choices: ['Nur wenige Tage.', 'Etwa genauso lange wie Sommerbienen.', 'Bis zu 9 Monate.', 'Bis zu 5 Jahre.'] },
    en: { q: 'How long can winter bees live compared to summer bees?', choices: ['Only a few days.', 'About the same as summer bees.', 'Up to 9 months.', 'Up to 5 years.'] }
  },
  {
    id: 19,
    correct: 2,
    de: { q: 'Wie viele Eier kann eine Königin im Laufe ihres Lebens legen?', choices: ['Bis zu 5.000 Eier.', 'Bis zu 20.000 Eier.', 'Bis zu 50.000 Eier.', 'Bis zu 200.000 Eier.'] },
    en: { q: 'How many eggs can a queen lay over the course of her life?', choices: ['Up to 5,000 eggs.', 'Up to 20,000 eggs.', 'Up to 50,000 eggs.', 'Up to 200,000 eggs.'] }
  },
  {
    id: 20,
    correct: 2,
    de: { q: 'Was benötigen Bienen in großen Mengen, um Wachs zu produzieren?', choices: ['Wasser', 'Pollen', 'Honig', 'Propolis'] },
    en: { q: 'What do bees need in large quantities to produce wax?', choices: ['Water', 'Pollen', 'Honey', 'Propolis'] }
  },
  {
    id: 21,
    correct: 1,
    de: { q: 'Woraus stellen Bienen Propolis her?', choices: ['Aus Blütenpollen.', 'Aus Harz, das sie von Pflanzen sammeln.', 'Aus Wachs und Wasser.', 'Aus ihrem eigenen Speichel allein.'] },
    en: { q: 'What do bees make propolis from?', choices: ['From flower pollen.', 'From resin they collect from plants.', 'From wax and water alone.', 'From their own saliva alone.'] }
  },
  {
    id: 22,
    correct: 1,
    de: { q: 'Wie nennt man die Tanzform, mit der Bienen die Lage von Futterquellen mitteilen?', choices: ['Kreistanz', 'Schwänzeltanz', 'Zitterlauf', 'Flügelschlagtanz'] },
    en: { q: 'What is the name of the dance bees use to communicate the location of food sources?', choices: ['Round dance', 'Waggle dance', 'Tremble dance', 'Wing-flap dance'] }
  },
  {
    id: 23,
    correct: 1,
    de: { q: 'Wie heißt die kleinste bekannte Bienenart der Welt?', choices: ['Die Riesenhonigbiene.', 'Die Eye-Licking Bee.', 'Die Blaue Holzbiene.', 'Die Mauerbiene.'] },
    en: { q: "What is the name of the world's smallest known bee species?", choices: ['The giant honeybee.', 'The eye-licking bee.', 'The blue carpenter bee.', 'The mason bee.'] }
  },
  {
    id: 24,
    correct: 1,
    de: { q: 'Welches Licht können Bienen wahrnehmen, das für Menschen unsichtbar ist?', choices: ['Infrarotlicht', 'Ultraviolettes Licht', 'Grünes Licht', 'Gedämpftes Licht'] },
    en: { q: 'Which type of light can bees perceive that is invisible to humans?', choices: ['Infrared light', 'Ultraviolet light', 'Green light', 'Dim light'] }
  },
  {
    id: 25,
    correct: 1,
    de: { q: 'Welche Aussage über die meisten Bienenarten weltweit trifft zu?', choices: ['Die meisten leben in großen Völkern.', 'Die meisten sind Einsiedlerbienen.', 'Es gibt nur soziale Bienenarten.', 'Alle Bienenarten produzieren Honig.'] },
    en: { q: 'Which statement about most bee species worldwide is true?', choices: ['Most live in large colonies.', 'Most are solitary bees.', 'All bee species are social.', 'All bee species produce honey.'] }
  },
  {
    id: 26,
    correct: 1,
    de: { q: 'Wer entscheidet darüber, ob Drohnen im Herbst im Bienenstock bleiben dürfen?', choices: ['Die Königin persönlich.', 'Die Arbeiterinnen.', 'Der Imker.', 'Die Drohnen selbst.'] },
    en: { q: 'Who decides whether drones are allowed to stay in the hive in autumn?', choices: ['The queen herself.', 'The worker bees.', 'The beekeeper.', 'The drones themselves.'] }
  },
  {
    id: 27,
    correct: 2,
    de: { q: 'Nach wie vielen Tagen schlüpft eine Drohne aus ihrer Zelle?', choices: ['16 Tage', '21 Tage', '24 Tage', '35 Tage'] },
    en: { q: 'After how many days does a drone hatch from its cell?', choices: ['16 days', '21 days', '24 days', '35 days'] }
  },
  {
    id: 28,
    correct: 1,
    de: { q: 'Warum bevorzugt die Varroa-Milbe Drohnenbrut gegenüber Arbeiterinnenbrut?', choices: ['Weil Drohnenzellen wärmer sind.', 'Weil Drohnenbrut länger verdeckelt bleibt.', 'Weil Drohnen süßer riechen.', 'Weil Drohnenzellen deutlich größer sind.'] },
    en: { q: 'Why does the Varroa mite prefer drone brood over worker brood?', choices: ['Because drone cells are warmer.', 'Because drone brood stays capped longer.', 'Because drones smell sweeter.', 'Because drone cells are noticeably bigger.'] }
  },
  {
    id: 29,
    correct: 2,
    de: { q: 'Welche Größenordnung beschreibt ein starkes Bienenvolk im Sommer am besten?', choices: ['Wenige hundert Bienen.', 'Einige tausend Bienen.', 'Zehntausende Bienen.', 'Mehrere hunderttausend Bienen.'] },
    en: { q: 'Which order of magnitude best describes a strong bee colony in summer?', choices: ['A few hundred bees.', 'A few thousand bees.', 'Tens of thousands of bees.', 'Several hundred thousand bees.'] }
  },
  {
    id: 30,
    correct: 0,
    de: { q: 'Warum leben Winterbienen so viel länger als Sommerbienen?', choices: ['Weil dies für das Überleben des Volkes über den Winter notwendig ist.', 'Weil sie größer sind.', 'Weil sie keine Brut aufziehen müssen.', 'Weil sie nicht fliegen.'] },
    en: { q: 'Why do winter bees live so much longer than summer bees?', choices: ['Because this is necessary for the colony to survive winter.', 'Because they are larger.', "Because they don't raise brood.", 'Because they cannot fly.'] }
  },
  {
    id: 31,
    correct: 1,
    de: { q: 'Welche Aufgabe erfüllt die Königin hauptsächlich im Bienenvolk?', choices: ['Sie sammelt Nektar und Pollen.', 'Sie legt die Eier für das gesamte Volk.', 'Sie verteidigt den Stock.', 'Sie baut die Waben.'] },
    en: { q: "What is the queen's main task within the colony?", choices: ['She collects nectar and pollen.', 'She lays the eggs for the entire colony.', 'She defends the hive.', 'She builds the honeycombs.'] }
  },
  {
    id: 32,
    correct: 1,
    de: { q: 'Wie ist das Verhältnis von verbrauchtem Honig zu erzeugtem Wachs bei Bienen ungefähr?', choices: ['1 kg Honig für 1 kg Wachs.', 'Etwa 6 kg Honig für 1 kg Wachs.', 'Etwa 20 kg Honig für 1 kg Wachs.', 'Wachs wird ganz ohne Honig produziert.'] },
    en: { q: "What's the approximate ratio of honey consumed to wax produced by bees?", choices: ['1 kg of honey per 1 kg of wax.', 'About 6 kg of honey per 1 kg of wax.', 'About 20 kg of honey per 1 kg of wax.', 'Wax is produced without any honey at all.'] }
  },
  {
    id: 33,
    correct: 1,
    de: { q: 'Welche Eigenschaft beschreibt Propolis am besten?', choices: ['Es ist flüssig wie Wasser.', 'Es ist eine harzähnliche, klebrige Masse.', 'Es ist ein feines Pulver.', 'Es ist geschmacklos und geruchlos.'] },
    en: { q: 'Which property best describes propolis?', choices: ['It is liquid like water.', 'It is a resin-like, sticky substance.', 'It is a fine powder.', 'It is tasteless and odorless.'] }
  },
  {
    id: 34,
    correct: 1,
    de: { q: "Welche Sinnesleistung nutzen andere Bienen, um den Schwänzeltanz zu 'lesen'?", choices: ['Sie riechen die Tanzrichtung.', 'Sie folgen den Bewegungen und Vibrationen der Tänzerin.', 'Sie hören spezielle Töne.', 'Sie schmecken die Tänzerin ab.'] },
    en: { q: "What do other bees rely on to 'read' the waggle dance?", choices: ['They smell the direction of the dance.', "They follow the dancer's movements and vibrations.", 'They hear special sounds.', 'They taste the dancer.'] }
  },
  {
    id: 35,
    correct: 1,
    de: { q: "Wie groß ist die winzige 'Eye-Licking Bee' ungefähr im Vergleich zu einem Stecknadelkopf?", choices: ['Deutlich kleiner als ein Stecknadelkopf.', 'Etwa so groß wie ein Stecknadelkopf.', 'Deutlich größer als ein Stecknadelkopf.', 'So groß wie eine Erbse.'] },
    en: { q: "How big is the tiny 'eye-licking bee' roughly compared to a pinhead?", choices: ['Much smaller than a pinhead.', 'About the size of a pinhead.', 'Much larger than a pinhead.', 'About the size of a pea.'] }
  },
  {
    id: 36,
    correct: 1,
    de: { q: 'Warum sehen viele Blüten für Bienen anders aus als für uns Menschen?', choices: ['Weil Bienen nachtaktiv sind.', 'Weil Bienen UV-Muster auf Blütenblättern erkennen können.', 'Weil Bienen keine Farben sehen können.', 'Weil Blüten für Bienen unsichtbar sind.'] },
    en: { q: 'Why do many flowers look different to bees than they do to us?', choices: ['Because bees are nocturnal.', 'Because bees can see UV patterns on petals.', 'Because bees cannot see any colors.', 'Because flowers are invisible to bees.'] }
  },
  {
    id: 37,
    correct: 1,
    de: { q: 'Sind Honigbienen mit ihrem Volksleben typisch für die meisten Bienenarten?', choices: ['Ja, fast alle Bienenarten leben im Volk.', 'Nein, die meisten Bienenarten leben einzeln.', 'Ja, aber nur in Europa.', 'Nein, es gibt nur eine einzige Bienenart.'] },
    en: { q: 'Is the colony life of honeybees typical for most bee species?', choices: ['Yes, almost all bee species live in colonies.', 'No, most bee species live solitarily.', 'Yes, but only in Europe.', 'No, there is only one bee species.'] }
  },
  {
    id: 38,
    correct: 2,
    de: { q: 'Zu welcher Jahreszeit werden Drohnen typischerweise aus dem Stock verstoßen?', choices: ['Im Frühling.', 'Im Frühsommer.', 'Am Ende des Sommers.', 'Mitten im Winter.'] },
    en: { q: 'At which time of year are drones typically expelled from the hive?', choices: ['In spring.', 'In early summer.', 'At the end of summer.', 'In the middle of winter.'] }
  },
  {
    id: 39,
    correct: 0,
    de: { q: 'Welche Biene entwickelt sich am schnellsten - Königin, Arbeiterin oder Drohne?', choices: ['Die Königin.', 'Die Arbeiterin.', 'Die Drohne.', 'Alle drei gleich schnell.'] },
    en: { q: 'Which type of bee develops fastest - queen, worker, or drone?', choices: ['The queen.', 'The worker.', 'The drone.', 'All three at the same speed.'] }
  },
  {
    id: 40,
    correct: 2,
    de: { q: 'Was macht Drohnenzellen für die Varroa-Milbe zur bevorzugten Kinderstube?', choices: ['Die kürzere Brutdauer.', 'Die hellere Zellfarbe.', 'Die längere Brutdauer.', 'Die Nähe zur Stockwand.'] },
    en: { q: "What makes drone cells the Varroa mite's preferred nursery?", choices: ['The shorter brood duration.', 'The lighter cell color.', 'The longer brood duration.', 'The proximity to the hive wall.'] }
  },
  {
    id: 41,
    correct: 2,
    de: { q: 'In welcher Jahreszeit erreicht ein Bienenvolk seine größte Individuenzahl?', choices: ['Im Winter.', 'Im Frühling.', 'Im Sommer.', 'Im Herbst.'] },
    en: { q: 'In which season does a bee colony reach its highest number of individuals?', choices: ['In winter.', 'In spring.', 'In summer.', 'In autumn.'] }
  },
  {
    id: 42,
    correct: 2,
    de: { q: 'Welche Bienen leben deutlich länger - die im Sommer oder die im Winter geborenen?', choices: ['Beide gleich lang.', 'Die im Sommer geborenen.', 'Die im Winter geborenen.', 'Keine von beiden wird alt.'] },
    en: { q: 'Which bees live significantly longer - those born in summer or in winter?', choices: ['Both live equally long.', 'Those born in summer.', 'Those born in winter.', 'Neither lives very long.'] }
  },
  {
    id: 43,
    correct: 2,
    de: { q: 'Wie alt kann eine Bienenkönigin im Vergleich zu einer Arbeiterin höchstens werden?', choices: ['Etwa gleich alt.', 'Deutlich jünger als eine Arbeiterin.', 'Deutlich älter als eine Arbeiterin.', 'Königinnen werden nie alt.'] },
    en: { q: 'How old can a queen bee get compared to a worker bee at most?', choices: ['About the same age.', 'Much younger than a worker.', 'Much older than a worker.', 'Queens never live long.'] }
  },
  {
    id: 44,
    correct: 1,
    de: { q: 'Ist die Wachsproduktion für Bienen energetisch günstig oder aufwendig?', choices: ['Sehr günstig, kaum Honig nötig.', 'Sehr aufwendig, viel Honig nötig.', 'Wachs kostet gar keine Energie.', 'Das hängt nur von der Jahreszeit ab.'] },
    en: { q: 'Is wax production energetically cheap or costly for bees?', choices: ['Very cheap, hardly any honey needed.', 'Very costly, a lot of honey needed.', 'Wax costs no energy at all.', 'It only depends on the season.'] }
  },
  {
    id: 45,
    correct: 1,
    de: { q: 'Wofür nutzen Menschen Propolis häufig, in Anlehnung an seine Funktion im Bienenstock?', choices: ['Als Süßstoff.', 'Als Desinfektions- und Dichtmittel, etwa in der Naturheilkunde.', 'Als Baumaterial für Häuser.', 'Als Futter für Larven.'] },
    en: { q: 'Inspired by its role in the hive, what do humans often use propolis for?', choices: ['As a sweetener.', 'As a disinfectant and sealant, e.g. in natural medicine.', 'As building material for houses.', 'As larval food.'] }
  },
  {
    id: 46,
    correct: 1,
    de: { q: 'Was zeigt die Richtung des Schwänzeltanzes im Vergleich zur Sonne an?', choices: ['Die Windrichtung.', 'Die Richtung zur Futterquelle.', 'Die Temperatur im Stock.', 'Die Position der Königin.'] },
    en: { q: 'What does the direction of the waggle dance indicate relative to the sun?', choices: ['The wind direction.', 'The direction to the food source.', 'The temperature inside the hive.', 'The position of the queen.'] }
  },
  {
    id: 47,
    correct: 0,
    de: { q: 'Welche Körpergröße erreicht die kleinste Bienenart der Welt maximal?', choices: ['2 mm', '5 mm', '10 mm', '15 mm'] },
    en: { q: "What is the maximum body size of the world's smallest bee species?", choices: ['2 mm', '5 mm', '10 mm', '15 mm'] }
  },
  {
    id: 48,
    correct: 1,
    de: { q: 'Welche Farbe können Bienen im Gegensatz zu vielen anderen Farben nicht unterscheiden?', choices: ['Blau', 'Rot', 'Gelb', 'Violett'] },
    en: { q: 'Which color are bees unable to distinguish, unlike many other colors?', choices: ['Blue', 'Red', 'Yellow', 'Violet'] }
  }
];

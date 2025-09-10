export interface FAQItem {
  id: string;
  question: string;
  expanded: boolean;
  answer: string;
}

export interface FAQData {
  en: FAQItem[];
  nl: FAQItem[];
}

export const faqData: FAQData = {
  en: [
    {
      id: 'what-is-hbot',
      question: 'What is Hyperbaric Oxygen Therapy (HBOT)?',
      expanded: true,
      answer: 'Hyperbaric Oxygen Therapy is a medical treatment that involves breathing pure oxygen in a pressurized chamber. This increases the amount of oxygen in your blood, which can help heal wounds, fight infections, and improve various health conditions. At SANSŌ Amsterdam, we use state-of-the-art equipment to provide this therapy.'
    },
    {
      id: 'how-hbot-works',
      question: 'How does HBOT work?',
      expanded: false,
      answer: 'During HBOT, you lie in a pressurized chamber while breathing 100% oxygen. The increased pressure allows your lungs to absorb more oxygen, which is then carried throughout your body via the bloodstream. This enhanced oxygen delivery promotes healing and recovery by stimulating the body\'s natural healing processes.'
    },
    {
      id: 'conditions-treated',
      question: 'What conditions can HBOT treat?',
      expanded: false,
      answer: 'HBOT is used to treat various conditions including chronic wounds, diabetic foot ulcers, radiation injuries, carbon monoxide poisoning, decompression sickness, and certain infections. It\'s also being studied for its potential benefits in neurological conditions, sports recovery, and anti-aging.'
    },
    {
      id: 'pressure-levels',
      question: 'How does 2 ATA pressure increase oxygen levels?',
      expanded: false,
      answer: 'At 2 ATA, the increased pressure allows oxygen to dissolve directly into blood plasma at concentrations 10-15 times higher than normal breathing. This creates a significant oxygen gradient that can reach areas with poor blood flow.'
    },
    {
      id: 'safety',
      question: 'Is HBOT safe for everyone?',
      expanded: false,
      answer: 'HBOT is generally safe when administered by trained professionals. Certain conditions may be contraindications. A medical evaluation is required before treatment. We screen everyone and monitor every session for your safety.'
    },
    {
      id: 'sessions-needed',
      question: 'How many sessions are typically needed?',
      expanded: false,
      answer: 'Acute conditions may require 10-20 sessions, while chronic conditions might need 20-40 sessions. For longevity goals, most people start with 10-20 sessions. Your treatment plan will be customized based on your specific needs and response.'
    },
    {
      id: 'side-effects',
      question: 'Are there any side effects?',
      expanded: false,
      answer: 'Side effects are typically mild and may include ear pressure, temporary vision changes, or claustrophobia. Serious complications are rare. Most people feel relaxed or pleasantly tired afterward; others feel energized.'
    },
    {
      id: 'training-same-day',
      question: 'Can I train the same day?',
      expanded: false,
      answer: 'Yes—most people do. If you feel tired, train lightly or separate training by a few hours from your session. Listen to your body and adjust accordingly.'
    },
    {
      id: 'medical-care',
      question: 'Can HBOT replace my medical care?',
      expanded: false,
      answer: 'No. It complements a healthy routine and, for medical issues, follows clinician guidance. Always consult your healthcare provider for medical conditions.'
    },
    {
      id: 'insurance',
      question: 'Is HBOT covered by insurance?',
      expanded: false,
      answer: 'Some health insurance plans may cover HBOT for specific medical conditions. Please check with your provider for coverage details.'
    },
    {
      id: 'what-included',
      question: 'What is included in a session?',
      expanded: false,
      answer: 'All sessions include a private chamber, professional guidance, and a peaceful environment. No hidden fees. We provide everything you need for a comfortable experience.'
    },
    {
      id: 'booking',
      question: 'How do I book a session?',
      expanded: false,
      answer: 'You can book a session online via our contact page or by calling our clinic. We\'ll help you schedule at a time that works for you.'
    }
  ],
  nl: [
    {
      id: 'what-is-hbot',
      question: 'Wat is Hyperbare Zuurstoftherapie (HBOT)?',
      expanded: true,
      answer: 'Hyperbare Zuurstoftherapie is een medische behandeling waarbij je pure zuurstof inademt in een drukkamer. Dit verhoogt de hoeveelheid zuurstof in je bloed, wat kan helpen bij wondgenezing, het bestrijden van infecties en het verbeteren van verschillende gezondheidsaandoeningen. Bij SANSŌ Amsterdam gebruiken we state-of-the-art apparatuur om deze therapie te bieden.'
    },
    {
      id: 'how-hbot-works',
      question: 'Hoe werkt HBOT?',
      expanded: false,
      answer: 'Tijdens HBOT lig je in een drukkamer terwijl je 100% zuurstof inademt. De verhoogde druk zorgt ervoor dat je longen meer zuurstof kunnen opnemen, die vervolgens door je hele lichaam wordt vervoerd via de bloedbaan. Deze verbeterde zuurstofafgifte bevordert genezing en herstel door de natuurlijke genezingsprocessen van het lichaam te stimuleren.'
    },
    {
      id: 'conditions-treated',
      question: 'Welke aandoeningen kan HBOT behandelen?',
      expanded: false,
      answer: 'HBOT wordt gebruikt om verschillende aandoeningen te behandelen, waaronder chronische wonden, diabetische voetzweren, bestralingsletsel, koolmonoxidevergiftiging, decompressieziekte en bepaalde infecties. Het wordt ook bestudeerd voor de potentiële voordelen bij neurologische aandoeningen, sportherstel en anti-aging.'
    },
    {
      id: 'pressure-levels',
      question: 'Hoe verhoogt 2 ATA druk de zuurstofniveaus?',
      expanded: false,
      answer: 'Bij 2 ATA zorgt de verhoogde druk ervoor dat zuurstof direct in bloedplasma oplost in concentraties 10-15 keer hoger dan normaal ademhalen. Dit creëert een significant zuurstofgradiënt dat gebieden met slechte doorbloeding kan bereiken.'
    },
    {
      id: 'safety',
      question: 'Is HBOT veilig voor iedereen?',
      expanded: false,
      answer: 'HBOT is over het algemeen veilig wanneer toegediend door getrainde professionals. Bepaalde aandoeningen kunnen contra-indicaties zijn. Een medische evaluatie is vereist. We screenen iedereen en monitoren elke sessie voor je veiligheid.'
    },
    {
      id: 'sessions-needed',
      question: 'Hoeveel sessies zijn er doorgaans nodig?',
      expanded: false,
      answer: 'Acute aandoeningen kunnen 10-20 sessies vereisen, terwijl chronische aandoeningen 20-40 sessies nodig kunnen hebben. Voor levensduurdoelen beginnen de meeste mensen met 10-20 sessies. Je behandelplan wordt aangepast op basis van je specifieke behoeften en reactie.'
    },
    {
      id: 'side-effects',
      question: 'Zijn er bijwerkingen?',
      expanded: false,
      answer: 'Bijwerkingen zijn doorgaans mild en kunnen oordruk, tijdelijke veranderingen in het gezichtsvermogen of claustrofobie omvatten. Ernstige complicaties zijn zeldzaam. De meeste mensen voelen zich ontspannen of prettig moe daarna; anderen voelen zich energiek.'
    },
    {
      id: 'training-same-day',
      question: 'Kan ik dezelfde dag trainen?',
      expanded: false,
      answer: 'Ja—de meeste mensen doen dat. Als je je moe voelt, train dan licht of scheid training door een paar uur van je sessie. Luister naar je lichaam en pas je aan.'
    },
    {
      id: 'medical-care',
      question: 'Kan HBOT mijn medische zorg vervangen?',
      expanded: false,
      answer: 'Nee. Het complementeert een gezonde routine en volgt voor medische problemen de richtlijnen van je arts. Raadpleeg altijd je zorgverlener voor medische aandoeningen.'
    },
    {
      id: 'insurance',
      question: 'Wordt HBOT vergoed door de verzekering?',
      expanded: false,
      answer: 'Sommige zorgverzekeringen vergoeden HBOT voor specifieke medische indicaties. Informeer bij je verzekeraar voor vergoedingsdetails.'
    },
    {
      id: 'what-included',
      question: 'Wat is inbegrepen bij een sessie?',
      expanded: false,
      answer: 'Alle sessies zijn inclusief een privé kamer, professionele begeleiding en een rustgevende omgeving. Geen verborgen kosten. We bieden alles wat je nodig hebt voor een comfortabele ervaring.'
    },
    {
      id: 'booking',
      question: 'Hoe boek ik een sessie?',
      expanded: false,
      answer: 'Je kunt online een sessie boeken via onze contactpagina of telefonisch contact opnemen met onze kliniek. We helpen je te plannen op een tijdstip dat voor jou werkt.'
    }
  ]
};

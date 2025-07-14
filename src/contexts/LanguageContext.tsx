
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Navigation
    'nav.science': 'Wetenschap',
    'nav.pricing': 'Prijzen',
    'nav.contact': 'Contact',
    'nav.bookSession': 'Boek een Sessie',
    'nav.about': 'Over',
    
    // Hero
    'hero.title': 'Herstel Versnellen Met Hyperbare Zuurstoftherapie',
    'hero.subtitle': 'Ervaar de kracht van zuurstof onder druk voor versnelde genezing en herstel. Onze geavanceerde HBOT-therapie stimuleert natuurlijke genezingsprocessen.',
    'hero.cta': 'Boek een Sessie',
    
    // Contact
    'contact.title': 'Neem Contact Op',
    'contact.subtitle': 'Klaar om te beginnen met HBOT? Neem contact op voor een gratis consultatie.',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefoonnummer',
    'contact.message': 'Bericht',
    'contact.submit': 'Verzenden',
    'contact.success': 'Bedankt, we nemen binnen 24 uur contact op!',
    'contact.error': 'Formulier versturen mislukt. Probeer opnieuw.',
    'contact.emailRequired': 'E-mail is verplicht',
    'contact.emailInvalid': 'Ongeldig e-mailadres',
    'contact.phoneInvalid': 'Ongeldig telefoonnummer',
    'contact.messageRequired': 'Bericht is verplicht',
    
    // Science page
    'science.title': 'De Wetenschap Achter HBOT',
    'science.intro': 'Hyperbare Zuurstoftherapie gebruikt drukomgevingen van 2 ATA (atmosfeer absoluut) om de zuurstofbeschikbaarheid drastisch te verhogen. Onder deze omstandigheden lost zuurstof direct op in bloedplasma in concentraties <strong>10 keer hoger</strong> dan normale atmosferische druk, wat krachtige therapeutische effecten creëert op cellulair niveau.',
    'science.angiogenesis.title': 'Angiogenese',
    'science.angiogenesis.description': 'HBOT stimuleert de vorming van nieuwe bloedvaten, wat de circulatie en zuurstoftoevoer naar beschadigd weefsel verbetert. Dit verbeterde vasculaire netwerk ondersteunt snellere genezing en weefselregeneratie.',
    'science.stemCell.title': 'Stamcel Mobilisatie',
    'science.stemCell.description': 'Hyperbare zuurstoftherapie verhoogt de afgifte van stamcellen uit beenmerg tot 800%. Deze circulerende stamcellen kunnen differentiëren in verschillende celtypes om beschadigde organen en weefsels te herstellen.',
    'science.antiInflammation.title': 'Anti-Ontsteking',
    'science.antiInflammation.description': 'HBOT vermindert ontstekingsmarkers en moduleert immuunresponsen, wat een optimale genezingsomgeving creëert. Dit anti-ontstekingseffect helpt bij het beheersen van chronische aandoeningen en versnelt herstel.',
    'science.faq.title': 'Veelgestelde Vragen',
    'science.faq.pressure.question': 'Hoe verhoogt 2 ATA druk de zuurstofniveaus?',
    'science.faq.pressure.answer': 'Bij 2 ATA (atmosfeer absoluut) zorgt de verhoogde druk ervoor dat zuurstof direct in bloedplasma oplost in concentraties 10-15 keer hoger dan normaal ademhalen. Deze opgeloste zuurstof kan gebieden bereiken met verminderde circulatie die rode bloedcellen niet kunnen bereiken.',
    'science.faq.safety.question': 'Is HBOT veilig voor iedereen?',
    'science.faq.safety.answer': 'HBOT is over het algemeen veilig wanneer toegediend door getrainde professionals. Bepaalde aandoeningen zoals onbehandelde pneumothorax, bepaalde medicijnen en zwangerschap kunnen echter contra-indicaties zijn. Een grondige medische evaluatie is vereist voor behandeling.',
    'science.faq.sessions.question': 'Hoeveel sessies zijn er doorgaans nodig?',
    'science.faq.sessions.answer': 'Behandelprotocollen variëren afhankelijk van de aandoening die wordt behandeld. Acute aandoeningen kunnen 10-20 sessies vereisen, terwijl chronische aandoeningen 20-40 sessies nodig kunnen hebben. Uw behandelplan wordt aangepast op basis van uw specifieke behoeften en reactie op therapie.',
    'science.faq.conditions.question': 'Bij welke aandoeningen kan HBOT helpen?',
    'science.faq.conditions.answer': 'HBOT heeft voordelen getoond voor wondgenezing, bestralingsletsel, koolmonoxidevergiftiging, decompressieziekte en verschillende off-label toepassingen waaronder traumatisch hersenletsel, beroerteherstel en bepaalde ontstekingsaandoeningen.',
    'science.faq.sideEffects.question': 'Zijn er bijwerkingen?',
    'science.faq.sideEffects.answer': 'Bijwerkingen zijn doorgaans mild en kunnen oordruk (vergelijkbaar met vliegen), tijdelijke veranderingen in het gezichtsvermogen of claustrofobie omvatten. Ernstige complicaties zijn zeldzaam wanneer behandeling goed wordt begeleid door medische professionals.',
    // About page
    'about.title': 'Over Hyperbare Zuurstoftherapie (HBOT)',
    'about.subtitle': 'Ontdek de wetenschap en voordelen achter deze rustgevende, herstellende therapie.',
    'about.card.whatIs.title': 'Wat is HBOT?',
    'about.card.whatIs.desc': 'Hyperbare zuurstoftherapie (HBOT) is een medische behandeling waarbij je pure zuurstof in een drukkamer inademt. Dit verhoogt de hoeveelheid zuurstof die je bloed kan vervoeren, bevordert genezing en vermindert ontstekingen. HBOT wordt gebruikt voor uiteenlopende aandoeningen, van sportherstel en welzijn tot chronische ziekten en wondzorg.',
    'about.card.benefits.title': 'Voordelen van HBOT',
    'about.card.benefits.desc': '• Versnelt herstel en genezing\n• Vermindert ontstekingen en pijn\n• Versterkt het immuunsysteem\n• Verbetert mentale helderheid en energie\n• Ondersteunt algeheel welzijn',
    'about.card.approach.title': 'Onze Aanpak',
    'about.card.approach.desc': 'Bij HBOT Amsterdam bieden we een rustige, moderne omgeving met geavanceerde HBOT-apparatuur en persoonlijke zorg om je te helpen ontspannen en herstellen.',
    'about.faq.title': 'Veelgestelde Vragen',
    'about.faq.safe.q': 'Is HBOT veilig?',
    'about.faq.safe.a': 'Ja, HBOT is over het algemeen veilig wanneer het wordt uitgevoerd door getrainde professionals. Ons team zorgt voor jouw comfort en veiligheid tijdens elke sessie.',
    'about.faq.duration.q': 'Hoe lang duurt een sessie?',
    'about.faq.duration.a': 'Een typische sessie duurt ongeveer een uur, inclusief het op druk brengen en ontluchten van de kamer.',
    'about.faq.first.q': 'Wat kan ik verwachten tijdens mijn eerste sessie?',
    'about.faq.first.a': 'Je ontspant in een comfortabele kamer terwijl je pure zuurstof inademt. Ons personeel begeleidt je door het proces en beantwoordt al je vragen.',
    // Pricing page
    'pricing.title': 'Prijzen',
    'pricing.subtitle': 'Transparante, eenvoudige prijzen voor jouw gemoedsrust bij HBOT Amsterdam. Kies een losse sessie of bespaar met een pakket.',
    'pricing.card.single.title': 'Losse Sessie',
    'pricing.card.single.desc': 'Eén uur in een privé HBOT-kamer bij HBOT Amsterdam met persoonlijke zorg.',
    'pricing.card.package5.title': '5-Sessies Pakket',
    'pricing.card.package5.desc': 'Vijf sessies bij HBOT Amsterdam tegen een gereduceerd tarief. Bespaar €50!',
    'pricing.card.package10.title': '10-Sessies Pakket',
    'pricing.card.package10.desc': 'Tien sessies bij HBOT Amsterdam met extra korting. Bespaar €150!',
    'pricing.faq.insurance.q': 'Wordt HBOT vergoed door de verzekering?',
    'pricing.faq.insurance.a': 'Sommige zorgverzekeringen vergoeden HBOT voor specifieke medische indicaties. Informeer bij je verzekeraar naar de mogelijkheden.',
    'pricing.faq.included.q': 'Wat is inbegrepen bij een sessie?',
    'pricing.faq.included.a': 'Alle sessies bij HBOT Amsterdam zijn inclusief een privé kamer, persoonlijke zorg en een rustgevende omgeving. Geen verborgen kosten.',
    'pricing.faq.booking.q': 'Hoe boek ik een sessie?',
    'pricing.faq.booking.a': 'Je kunt online een sessie boeken via onze contactpagina of telefonisch contact opnemen met onze kliniek.',
    'pricing.cta': 'Boek een Sessie',
  },
  en: {
    // Navigation
    'nav.science': 'Science',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.bookSession': 'Book a Session',
    'nav.about': 'About',
    
    // Hero
    'hero.title': 'Fuel Healing With Hyperbaric Oxygen',
    'hero.subtitle': 'Experience the power of pressurized oxygen for accelerated healing and recovery. Our advanced HBOT therapy stimulates natural healing processes.',
    'hero.cta': 'Book a Session',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your HBOT journey? Get in touch for a free consultation.',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    'contact.success': 'Thanks, we\'ll reach out within 24 hours!',
    'contact.error': 'Failed to submit form. Please try again.',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Invalid email address',
    'contact.phoneInvalid': 'Invalid phone number',
    'contact.messageRequired': 'Message is required',
    
    // Science page
    'science.title': 'The Science Behind HBOT',
    'science.intro': 'Hyperbaric Oxygen Therapy utilizes pressurized environments at 2 ATA (atmospheres absolute) to dramatically increase oxygen bioavailability. Under these conditions, oxygen dissolves directly into blood plasma at concentrations <strong>10 times higher</strong> than normal atmospheric pressure, creating powerful therapeutic effects at the cellular level.',
    'science.angiogenesis.title': 'Angiogenesis',
    'science.angiogenesis.description': 'HBOT stimulates the formation of new blood vessels, improving circulation and oxygen delivery to damaged tissues. This enhanced vascular network supports faster healing and tissue regeneration.',
    'science.stemCell.title': 'Stem Cell Mobilization',
    'science.stemCell.description': 'Hyperbaric oxygen therapy increases the release of stem cells from bone marrow by up to 800%. These circulating stem cells can differentiate into various cell types to repair damaged organs and tissues.',
    'science.antiInflammation.title': 'Anti-Inflammation',
    'science.antiInflammation.description': 'HBOT reduces inflammatory markers and modulates immune responses, creating an optimal healing environment. This anti-inflammatory effect helps manage chronic conditions and accelerates recovery.',
    'science.faq.title': 'Frequently Asked Questions',
    'science.faq.pressure.question': 'How does 2 ATA pressure increase oxygen levels?',
    'science.faq.pressure.answer': 'At 2 ATA (atmospheres absolute), the increased pressure allows oxygen to dissolve directly into blood plasma at concentrations 10-15 times higher than normal breathing. This dissolved oxygen can reach areas with compromised circulation that red blood cells cannot access.',
    'science.faq.safety.question': 'Is HBOT safe for everyone?',
    'science.faq.safety.answer': 'HBOT is generally safe when administered by trained professionals. However, certain conditions like untreated pneumothorax, certain medications, and pregnancy may be contraindications. A thorough medical evaluation is required before treatment.',
    'science.faq.sessions.question': 'How many sessions are typically needed?',
    'science.faq.sessions.answer': 'Treatment protocols vary depending on the condition being treated. Acute conditions may require 10-20 sessions, while chronic conditions might need 20-40 sessions. Your treatment plan will be customized based on your specific needs and response to therapy.',
    'science.faq.conditions.question': 'What conditions can HBOT help with?',
    'science.faq.conditions.answer': 'HBOT has shown benefits for wound healing, radiation injury, carbon monoxide poisoning, decompression sickness, and various off-label applications including traumatic brain injury, stroke recovery, and certain inflammatory conditions.',
    'science.faq.sideEffects.question': 'Are there any side effects?',
    'science.faq.sideEffects.answer': 'Side effects are typically mild and may include ear pressure (similar to flying), temporary vision changes, or claustrophobia. Serious complications are rare when treatment is properly supervised by medical professionals.',
    // About page
    'about.title': 'About Hyperbaric Oxygen Therapy (HBOT)',
    'about.subtitle': 'Discover the science and benefits behind this peaceful, restorative therapy.',
    'about.card.whatIs.title': 'What is HBOT?',
    'about.card.whatIs.desc': 'Hyperbaric Oxygen Therapy (HBOT) is a medical treatment that involves breathing pure oxygen in a pressurized chamber. This process increases the amount of oxygen your blood can carry, promoting healing and reducing inflammation. HBOT is used for a variety of conditions, from sports recovery and wellness to chronic illnesses and wound care.',
    'about.card.benefits.title': 'Benefits of HBOT',
    'about.card.benefits.desc': '• Accelerates recovery and healing\n• Reduces inflammation and pain\n• Boosts immune system function\n• Improves mental clarity and energy\n• Supports overall wellness',
    'about.card.approach.title': 'Our Approach',
    'about.card.approach.desc': 'At HBOT Amsterdam, we provide a peaceful, modern environment with state-of-the-art HBOT machines and personalized care to help you relax and rejuvenate.',
    'about.faq.title': 'Frequently Asked Questions',
    'about.faq.safe.q': 'Is HBOT safe?',
    'about.faq.safe.a': 'Yes, HBOT is generally safe when administered by trained professionals. Our team ensures your comfort and safety throughout each session.',
    'about.faq.duration.q': 'How long does a session last?',
    'about.faq.duration.a': 'A typical session lasts about one hour, including time to pressurize and depressurize the chamber.',
    'about.faq.first.q': 'What should I expect during my first session?',
    'about.faq.first.a': 'You will relax in a comfortable chamber while breathing pure oxygen. Our staff will guide you through the process and answer any questions.',
    // Pricing page
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent, simple pricing for your peace of mind. Choose a single session or save with a package.',
    'pricing.card.single.title': 'Single Session',
    'pricing.card.single.desc': 'One hour in a private HBOT chamber with personalized care.',
    'pricing.card.package5.title': '5-Session Package',
    'pricing.card.package5.desc': 'Five sessions for a discounted rate. Save €50!',
    'pricing.card.package10.title': '10-Session Package',
    'pricing.card.package10.desc': 'Ten sessions for a bigger discount. Save €150!',
    'pricing.faq.insurance.q': 'Is HBOT covered by insurance?',
    'pricing.faq.insurance.a': 'Some health insurance plans may cover HBOT for specific medical conditions. Please check with your provider for details.',
    'pricing.faq.included.q': 'What is included in a session?',
    'pricing.faq.included.a': 'All sessions include a private chamber, personalized care, and a peaceful environment. No hidden fees.',
    'pricing.faq.booking.q': 'How do I book a session?',
    'pricing.faq.booking.a': 'You can book a session online via our contact page or by calling our clinic.',
    'pricing.cta': 'Book Your Session',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

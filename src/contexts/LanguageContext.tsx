
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
    'nav.reservation': 'Reserveren',
    'nav.howItWorks': 'Hoe het Werkt',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'Hyperbare Zuurstoftherapie',
    'hero.subtitle': 'Ervaar de kracht van zuurstof onder druk voor versnelde genezing en herstel.',
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
    'science.intro': 'Hyperbare Zuurstoftherapie gebruikt 2 ATA druk om zuurstofbeschikbaarheid drastisch te verhogen. Onder deze omstandigheden lost zuurstof direct op in bloedplasma in concentraties <strong>10 keer hoger</strong> dan normale atmosferische druk.',
    'science.angiogenesis.title': 'Angiogenese',
    'science.angiogenesis.description': 'HBOT stimuleert de vorming van nieuwe bloedvaten, wat de circulatie en zuurstoftoevoer naar beschadigd weefsel verbetert.',
    'science.stemCell.title': 'Stamcel Mobilisatie',
    'science.stemCell.description': 'Hyperbare zuurstoftherapie verhoogt de afgifte van stamcellen uit beenmerg tot 800%. Deze stamcellen kunnen differentiëren in verschillende celtypes om beschadigde organen te herstellen.',
    'science.antiInflammation.title': 'Anti-Ontsteking',
    'science.antiInflammation.description': 'HBOT vermindert ontstekingsmarkers en moduleert immuunresponsen, wat een optimale genezingsomgeving creëert.',
    'science.faq.title': 'Veelgestelde Vragen',
    'science.faq.pressure.question': 'Hoe verhoogt 2 ATA druk de zuurstofniveaus?',
    'science.faq.pressure.answer': 'Bij 2 ATA zorgt de verhoogde druk ervoor dat zuurstof direct in bloedplasma oplost in concentraties 10-15 keer hoger dan normaal ademhalen.',
    'science.faq.safety.question': 'Is HBOT veilig voor iedereen?',
    'science.faq.safety.answer': 'HBOT is over het algemeen veilig wanneer toegediend door getrainde professionals. Bepaalde aandoeningen kunnen contra-indicaties zijn. Een medische evaluatie is vereist.',
    'science.faq.sessions.question': 'Hoeveel sessies zijn er doorgaans nodig?',
    'science.faq.sessions.answer': 'Acute aandoeningen kunnen 10-20 sessies vereisen, terwijl chronische aandoeningen 20-40 sessies nodig kunnen hebben. Uw behandelplan wordt aangepast op basis van uw specifieke behoeften.',
    'science.faq.conditions.question': 'Bij welke aandoeningen kan HBOT helpen?',
    'science.faq.conditions.answer': 'HBOT heeft voordelen getoond voor wondgenezing, bestralingsletsel, koolmonoxidevergiftiging, decompressieziekte en traumatisch hersenletsel.',
    'science.faq.sideEffects.question': 'Zijn er bijwerkingen?',
    'science.faq.sideEffects.answer': 'Bijwerkingen zijn doorgaans mild en kunnen oordruk, tijdelijke veranderingen in het gezichtsvermogen of claustrofobie omvatten. Ernstige complicaties zijn zeldzaam.',
    // About page
    'about.title': 'Over Hyperbare Zuurstoftherapie (HBOT)',
    'about.subtitle': 'Ontdek de wetenschap en voordelen achter deze rustgevende, herstellende therapie.',
    'about.card.whatIs.title': 'Wat is HBOT?',
    'about.card.whatIs.desc': 'Hyperbare zuurstoftherapie (HBOT) is een medische behandeling waarbij je pure zuurstof in een drukkamer inademt. Dit verhoogt de hoeveelheid zuurstof die je bloed kan vervoeren, bevordert genezing en vermindert ontstekingen.',
    'about.card.benefits.title': 'Voordelen van HBOT',
    'about.card.benefits.desc': '• Versnelt herstel en genezing\n• Vermindert ontstekingen en pijn\n• Versterkt het immuunsysteem\n• Verbetert mentale helderheid en energie\n• Ondersteunt algeheel welzijn',
    'about.card.approach.title': 'Onze Aanpak',
    'about.card.approach.desc': 'Bij SANS&#332; bieden we een rustige, moderne omgeving met geavanceerde HBOT-apparatuur en professionele begeleiding.',
    'about.faq.title': 'Veelgestelde Vragen',
    'about.faq.safe.q': 'Is HBOT veilig?',
    'about.faq.safe.a': 'Ja, HBOT is over het algemeen veilig wanneer het wordt uitgevoerd door getrainde professionals. Ons team zorgt voor jouw comfort en veiligheid.',
    'about.faq.duration.q': 'Hoe lang duurt een sessie?',
    'about.faq.duration.a': 'Een typische sessie duurt ongeveer een uur, inclusief het op druk brengen en ontluchten van de kamer.',
    'about.faq.first.q': 'Wat kan ik verwachten tijdens mijn eerste sessie?',
    'about.faq.first.a': 'Je ontspant in een comfortabele kamer terwijl je pure zuurstof inademt. Ons personeel begeleidt je door het proces.',
    // Pricing page
    'pricing.title': 'Prijzen',
    'pricing.subtitle': 'Transparante, eenvoudige prijzen voor jouw gemoedsrust. Kies een losse sessie of bespaar met een pakket.',
    'pricing.card.single.title': 'Losse Sessie',
    'pricing.card.single.desc': 'Eén uur in een privé HBOT-kamer met professionele begeleiding.',
    'pricing.card.package5.title': '5-Sessies Pakket',
    'pricing.card.package5.desc': 'Vijf sessies tegen een gereduceerd tarief. Bespaar €50!',
    'pricing.card.package10.title': '10-Sessies Pakket',
    'pricing.card.package10.desc': 'Ten sessions for a bigger discount. Save €150!',
    'pricing.card.package20.title': '20-Session Package',
    'pricing.card.package20.desc': 'Twenty sessions for optimal results. Save €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Thirty sessions for deep treatment. Save €700!',
    'pricing.card.package50.title': '50-Session Package',
    'pricing.card.package50.desc': 'Fifty sessions for complete transformation. Save €1,500!',
    'pricing.card.package20.title': '20-Sessies Pakket',
    'pricing.card.package20.desc': 'Twintig sessies voor optimale resultaten. Bespaar €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Dertig sessies voor diepgaande behandeling. Bespaar €700!',
    'pricing.card.package50.title': '50-Sessies Pakket',
    'pricing.card.package50.desc': 'Vijftig sessies voor complete transformatie. Bespaar €1,500!',
    'pricing.card.package20.title': '20-Sessies Pakket',
    'pricing.card.package20.desc': 'Twintig sessies voor optimale resultaten. Bespaar €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Dertig sessies voor diepgaande behandeling. Bespaar €700!',
    'pricing.card.package50.title': '50-Sessies Pakket',
    'pricing.card.package50.desc': 'Vijftig sessies voor complete transformatie. Bespaar €1,500!',
    'pricing.card.package20.title': '20-Session Package',
    'pricing.card.package20.desc': 'Twenty sessions for optimal results. Save €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Thirty sessions for deep treatment. Save €700!',
    'pricing.card.package50.title': '50-Session Package',
    'pricing.card.package50.desc': 'Fifty sessions for complete transformation. Save €1,500!',
    'pricing.faq.insurance.q': 'Wordt HBOT vergoed door de verzekering?',
    'pricing.faq.insurance.a': 'Sommige zorgverzekeringen vergoeden HBOT voor specifieke medische indicaties. Informeer bij je verzekeraar.',
    'pricing.faq.included.q': 'Wat is inbegrepen bij een sessie?',
    'pricing.faq.included.a': 'Alle sessies zijn inclusief een privé kamer, professionele begeleiding en een rustgevende omgeving. Geen verborgen kosten.',
    'pricing.faq.booking.q': 'Hoe boek ik een sessie?',
    'pricing.faq.booking.a': 'Je kunt online een sessie boeken via onze contactpagina of telefonisch contact opnemen.',
    'pricing.cta': 'Boek een Sessie',
  },
  en: {
    // Navigation
    'nav.science': 'Science',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.bookSession': 'Book a Session',
    'nav.about': 'About',
    'nav.reservation': 'Reservation',
    'nav.howItWorks': 'How it Works',
    'nav.faq': 'FAQ',
    
    // Hero
    'hero.title': 'Hyperbaric Oxygen Therapy',
    'hero.subtitle': 'Experience the power of pressurized oxygen for accelerated healing and recovery.',
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
    'science.intro': 'Hyperbaric Oxygen Therapy utilizes 2 ATA pressure to dramatically increase oxygen bioavailability. Under these conditions, oxygen dissolves directly into blood plasma at concentrations <strong>10 times higher</strong> than normal atmospheric pressure.',
    'science.angiogenesis.title': 'Angiogenesis',
    'science.angiogenesis.description': 'HBOT stimulates the formation of new blood vessels, improving circulation and oxygen delivery to damaged tissues.',
    'science.stemCell.title': 'Stem Cell Mobilization',
    'science.stemCell.description': 'Hyperbaric oxygen therapy increases the release of stem cells from bone marrow by up to 800%. These stem cells can differentiate into various cell types to repair damaged organs.',
    'science.antiInflammation.title': 'Anti-Inflammation',
    'science.antiInflammation.description': 'HBOT reduces inflammatory markers and modulates immune responses, creating an optimal healing environment.',
    'science.faq.title': 'Frequently Asked Questions',
    'science.faq.pressure.question': 'How does 2 ATA pressure increase oxygen levels?',
    'science.faq.pressure.answer': 'At 2 ATA, the increased pressure allows oxygen to dissolve directly into blood plasma at concentrations 10-15 times higher than normal breathing.',
    'science.faq.safety.question': 'Is HBOT safe for everyone?',
    'science.faq.safety.answer': 'HBOT is generally safe when administered by trained professionals. Certain conditions may be contraindications. A medical evaluation is required.',
    'science.faq.sessions.question': 'How many sessions are typically needed?',
    'science.faq.sessions.answer': 'Acute conditions may require 10-20 sessions, while chronic conditions might need 20-40 sessions. Your treatment plan will be customized based on your specific needs.',
    'science.faq.conditions.question': 'What conditions can HBOT help with?',
    'science.faq.conditions.answer': 'HBOT has shown benefits for wound healing, radiation injury, carbon monoxide poisoning, decompression sickness, and traumatic brain injury.',
    'science.faq.sideEffects.question': 'Are there any side effects?',
    'science.faq.sideEffects.answer': 'Side effects are typically mild and may include ear pressure, temporary vision changes, or claustrophobia. Serious complications are rare.',
    // About page
    'about.title': 'About Hyperbaric Oxygen Therapy (HBOT)',
    'about.subtitle': 'Discover the science and benefits behind this peaceful, restorative therapy.',
    'about.card.whatIs.title': 'What is HBOT?',
    'about.card.whatIs.desc': 'Hyperbaric Oxygen Therapy (HBOT) is a medical treatment that involves breathing pure oxygen in a pressurized chamber. This increases the amount of oxygen your blood can carry, promoting healing and reducing inflammation.',
    'about.card.benefits.title': 'Benefits of HBOT',
    'about.card.benefits.desc': '• Accelerates recovery and healing\n• Reduces inflammation and pain\n• Boosts immune system function\n• Improves mental clarity and energy\n• Supports overall wellness',
    'about.card.approach.title': 'Our Approach',
    'about.card.approach.desc': 'At SANS&#332;, we provide a peaceful, modern environment with state-of-the-art HBOT machines and professional guidance.',
    'about.faq.title': 'Frequently Asked Questions',
    'about.faq.safe.q': 'Is HBOT safe?',
    'about.faq.safe.a': 'Yes, HBOT is generally safe when administered by trained professionals. Our team ensures your comfort and safety.',
    'about.faq.duration.q': 'How long does a session last?',
    'about.faq.duration.a': 'A typical session lasts about one hour, including time to pressurize and depressurize the chamber.',
    'about.faq.first.q': 'What should I expect during my first session?',
    'about.faq.first.a': 'You will relax in a comfortable chamber while breathing pure oxygen. Our staff will guide you through the process.',
    // Pricing page
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent, simple pricing for your peace of mind. Choose a single session or save with a package.',
    'pricing.card.single.title': 'Single Session',
    'pricing.card.single.desc': 'One hour in a private HBOT chamber with professional guidance.',
    'pricing.card.package5.title': '5-Session Package',
    'pricing.card.package5.desc': 'Five sessions for a discounted rate. Save €50!',
    'pricing.card.package10.title': '10-Session Package',
    'pricing.card.package10.desc': 'Ten sessions for a bigger discount. Save €150!',
    'pricing.card.package20.title': '20-Session Package',
    'pricing.card.package20.desc': 'Twenty sessions for optimal results. Save €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Thirty sessions for deep treatment. Save €700!',
    'pricing.card.package50.title': '50-Session Package',
    'pricing.card.package50.desc': 'Fifty sessions for complete transformation. Save €1,500!',
    'pricing.card.package20.title': '20-Sessies Pakket',
    'pricing.card.package20.desc': 'Twintig sessies voor optimale resultaten. Bespaar €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Dertig sessies voor diepgaande behandeling. Bespaar €700!',
    'pricing.card.package50.title': '50-Sessies Pakket',
    'pricing.card.package50.desc': 'Vijftig sessies voor complete transformatie. Bespaar €1,500!',
    'pricing.card.package20.title': '20-Sessies Pakket',
    'pricing.card.package20.desc': 'Twintig sessies voor optimale resultaten. Bespaar €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Dertig sessies voor diepgaande behandeling. Bespaar €700!',
    'pricing.card.package50.title': '50-Sessies Pakket',
    'pricing.card.package50.desc': 'Vijftig sessies voor complete transformatie. Bespaar €1,500!',
    'pricing.card.package20.title': '20-Session Package',
    'pricing.card.package20.desc': 'Twenty sessions for optimal results. Save €400!',
    'pricing.card.package40.title': '40-Sessies Pakket',
    'pricing.card.package40.desc': 'Veertig sessies voor intensieve behandeling. Bespaar €1,200!',
    'pricing.card.package60.title': '60-Sessies Pakket',
    'pricing.card.package60.desc': 'Zestig sessies voor complete transformatie. Bespaar €1,800!',
    'pricing.card.package30.desc': 'Thirty sessions for deep treatment. Save €700!',
    'pricing.card.package50.title': '50-Session Package',
    'pricing.card.package50.desc': 'Fifty sessions for complete transformation. Save €1,500!',
    'pricing.faq.insurance.q': 'Is HBOT covered by insurance?',
    'pricing.faq.insurance.a': 'Some health insurance plans may cover HBOT for specific medical conditions. Please check with your provider.',
    'pricing.faq.included.q': 'What is included in a session?',
    'pricing.faq.included.a': 'All sessions include a private chamber, professional guidance, and a peaceful environment. No hidden fees.',
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

/* eslint-disable react-refresh/only-export-components */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

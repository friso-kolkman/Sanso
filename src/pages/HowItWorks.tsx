import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Brain, 
  Heart, 
  Clock, 
  Shield, 
  Leaf, 
  Zap, 
  Users, 
  Target,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const HowItWorks = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "How HBOT at SANSŌ Works (for Longevity)",
      intro: "Breathing near-pure oxygen in a pressurized chamber increases dissolved oxygen in your plasma. That extra oxygen may help your body repair, reduce inflammation, and perform better. Useful for energy, recovery, and healthy aging.",
      benefitsTitle: "Benefits you can feel",
      sessionTitle: "What actually happens in a session",
      programsTitle: "Programs for longevity goals",
      faqTitle: "Frequently Asked Questions",
      ctaTitle: "Ready to experience HBOT at SANSŌ?",
      ctaSubtitle: "Book a session or speak with our team about your goals.",
      disclaimerTitle: "Important Disclaimer",
      disclaimerText: "This page is informational and not a substitute for medical advice. Always confirm your personal plan, contraindications, and medication timing with your treating clinician.",
      bookSession: "Book a Session",
      contactTeam: "Contact Our Team",
      benefits: [
        {
          icon: Brain,
          title: "Energy & mental clarity",
          description: "Feel more 'switched on' during the day"
        },
        {
          icon: Clock,
          title: "Deep sleep support",
          description: "Many clients report better sleep quality and morning readiness"
        },
        {
          icon: Zap,
          title: "Faster recovery",
          description: "Bounce back from training, travel, or long workweeks"
        },
        {
          icon: Leaf,
          title: "Skin vitality",
          description: "Oxygen supports tissue repair for a fresher look over time"
        },
        {
          icon: Shield,
          title: "Jet lag reset",
          description: "A practical tool for frequent flyers"
        },
        {
          icon: Heart,
          title: "Active aging",
          description: "Support stamina, mobility, and healthspan goals"
        }
      ],
      sessionSteps: [
        {
          step: "1",
          title: "Arrive and check in",
          description: "Brief screen, vitals as needed"
        },
        {
          step: "2",
          title: "Pressurization (the dive)",
          description: "Ears feel like a plane landing; we coach you to equalize"
        },
        {
          step: "3",
          title: "Oxygen period",
          description: "You relax and breathe oxygen at the prescribed pressure"
        },
        {
          step: "4",
          title: "Decompression",
          description: "Gentle return to normal pressure; back to your day"
        }
      ],
      programs: [
        {
          title: "Starter reset (2-3 weeks)",
          description: "3-5 sessions/week to load oxygen benefits",
          sessions: "3-5/week"
        },
        {
          title: "Deep repair (4-8 weeks)",
          description: "20-40 sessions for recovery and tissue support",
          sessions: "20-40 total"
        },
        {
          title: "Maintenance",
          description: "1-2 sessions/week or targeted blocks around travel, training, or stressful periods",
          sessions: "1-2/week"
        }
      ],
      faqItems: [
        {
          question: "Is it safe?",
          answer: "In accredited settings and for approved indications, HBOT is generally safe; we screen everyone and monitor every session."
        },
        {
          question: "How many sessions do I need?",
          answer: "Longevity goals often start with 10-20 sessions; deeper work may take 30-40. We reassess regularly."
        },
        {
          question: "How will I feel afterward?",
          answer: "Many feel relaxed or pleasantly tired; others feel energized. Listen to your body."
        },
        {
          question: "Can I train the same day?",
          answer: "Yes, most do. If you feel tired, train light or separate training by a few hours."
        },
        {
          question: "Can HBOT replace my medical care?",
          answer: "No. It complements a healthy routine and, for medical issues, follows clinician guidance."
        }
      ]
    },
    nl: {
      title: "Hoe HBOT bij SANSŌ Werkt",
      intro: "Het inademen van bijna-pure zuurstof in een drukkamer verhoogt de opgeloste zuurstof in je plasma. Die extra zuurstof kan je lichaam helpen herstellen, ontstekingen verminderen en beter presteren. Nuttig voor energie, herstel en gezond ouder worden.",
      benefitsTitle: "Voordelen die je kunt voelen",
      sessionTitle: "Wat er daadwerkelijk gebeurt tijdens een sessie",
      programsTitle: "Programma's voor levensduurdoelen",
      faqTitle: "Veelgestelde Vragen",
      ctaTitle: "Klaar om HBOT bij SANSŌ te ervaren?",
      ctaSubtitle: "Boek een sessie of spreek met ons team over je doelen.",
      disclaimerTitle: "Belangrijke Disclaimer",
      disclaimerText: "Deze pagina is informatief en geen vervanging voor medisch advies. Bevestig altijd je persoonlijke plan, contra-indicaties en medicatietiming met je behandelend arts.",
      bookSession: "Boek een Sessie",
      contactTeam: "Neem Contact Op",
      benefits: [
        {
          icon: Brain,
          title: "Energie & mentale helderheid",
          description: "Voel je meer 'aan' gedurende de dag"
        },
        {
          icon: Clock,
          title: "Ondersteuning voor diepe slaap",
          description: "Veel cliënten melden betere slaapkwaliteit en ochtendbereidheid"
        },
        {
          icon: Zap,
          title: "Sneller herstel",
          description: "Herstel van training, reizen of lange werkweken"
        },
        {
          icon: Leaf,
          title: "Huid vitaliteit",
          description: "Zuurstof ondersteunt weefselherstel voor een frissere uitstraling"
        },
        {
          icon: Shield,
          title: "Jetlag reset",
          description: "Een praktisch hulpmiddel voor frequente vliegers"
        },
        {
          icon: Heart,
          title: "Actief ouder worden",
          description: "Ondersteun uithoudingsvermogen, mobiliteit en gezondheidsdoelen"
        }
      ],
      sessionSteps: [
        {
          step: "1",
          title: "Aankomst en inchecken",
          description: "Korte screening, vitale functies indien nodig"
        },
        {
          step: "2",
          title: "Drukverhoging (de duik)",
          description: "Oren voelen aan als bij een vliegtuiglanding; we begeleiden je bij het klaren"
        },
        {
          step: "3",
          title: "Zuurstofperiode",
          description: "Je ontspant en ademt zuurstof in bij de voorgeschreven druk"
        },
        {
          step: "4",
          title: "Drukverlaging",
          description: "Zachte terugkeer naar normale druk; terug naar je dag"
        }
      ],
      programs: [
        {
          title: "Starter reset (2-3 weken)",
          description: "3-5 sessies/week om zuurstofvoordelen te laden",
          sessions: "3-5/week"
        },
        {
          title: "Diep herstel (4-8 weken)",
          description: "20-40 sessies voor herstel en weefselondersteuning",
          sessions: "20-40 totaal"
        },
        {
          title: "Onderhoud",
          description: "1-2 sessies/week of gerichte blokken rond reizen, training of stressvolle periodes",
          sessions: "1-2/week"
        }
      ],
      faqItems: [
        {
          question: "Is het veilig?",
          answer: "In geaccrediteerde omgevingen en voor goedgekeurde indicaties is HBOT over het algemeen veilig; we screenen iedereen en monitoren elke sessie."
        },
        {
          question: "Hoeveel sessies heb ik nodig?",
          answer: "Levensduurdoelen beginnen vaak met 10-20 sessies; dieper werk kan 30-40 vergen. We evalueren regelmatig."
        },
        {
          question: "Hoe zal ik me daarna voelen?",
          answer: "Veel mensen voelen zich ontspannen of prettig moe; anderen voelen zich energiek. Luister naar je lichaam."
        },
        {
          question: "Kan ik dezelfde dag trainen?",
          answer: "Ja—de meeste doen dat. Als je je moe voelt, train dan licht of scheid training door een paar uur."
        },
        {
          question: "Kan HBOT mijn medische zorg vervangen?",
          answer: "Nee. Het complementeert een gezonde routine en volgt voor medische problemen de richtlijnen van je arts."
        }
      ]
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentContent.intro}
              </p>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {currentContent.benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                        <benefit.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Session Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {currentContent.sessionTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.sessionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {currentContent.programsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {currentContent.programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {program.title}
                      </CardTitle>
                      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {program.sessions}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {currentContent.faqTitle}
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {currentContent.faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-blue-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {currentContent.ctaTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {currentContent.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">{currentContent.bookSession}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">{currentContent.contactTeam}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500"
          >
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{currentContent.disclaimerTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {currentContent.disclaimerText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 
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
  const { t } = useLanguage();

  const benefits = [
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
  ];

  const sessionSteps = [
    {
      step: "1",
      title: "Arrive and check in",
      description: "Brief screen, vitals as needed"
    },
    {
      step: "2",
      title: "Change into clinic garments",
      description: "Fire-safety standard cotton garments provided"
    },
    {
      step: "3",
      title: "Pressurization ('the dive')",
      description: "Ears feel like a plane landing; we coach you to equalize"
    },
    {
      step: "4",
      title: "Oxygen period",
      description: "You relax and breathe oxygen at the prescribed pressure"
    },
    {
      step: "5",
      title: "Air breaks",
      description: "Short pauses (if prescribed) to lower oxygen-toxicity risk"
    },
    {
      step: "6",
      title: "Decompression",
      description: "Gentle return to normal pressure; back to your day"
    }
  ];

  const programs = [
    {
      title: "Starter reset (2–3 weeks)",
      description: "3–5 sessions/week to 'load' oxygen benefits",
      sessions: "3-5/week"
    },
    {
      title: "Deep repair (4–8 weeks)",
      description: "20–40 sessions for recovery and tissue support",
      sessions: "20-40 total"
    },
    {
      title: "Maintenance",
      description: "1–2 sessions/week or targeted blocks around travel, training, or stressful periods",
      sessions: "1-2/week"
    }
  ];

  const faqItems = [
    {
      question: "Is it safe?",
      answer: "In accredited settings and for approved indications, HBOT is generally safe; we screen everyone and monitor every session."
    },
    {
      question: "How many sessions do I need?",
      answer: "Longevity goals often start with 10–20 sessions; deeper work may take 30–40. We reassess regularly."
    },
    {
      question: "How will I feel afterward?",
      answer: "Many feel relaxed or pleasantly tired; others feel energized. Listen to your body."
    },
    {
      question: "Can I train the same day?",
      answer: "Yes—most do. If you feel tired, train light or separate training by a few hours."
    },
    {
      question: "Can HBOT replace my medical care?",
      answer: "No. It complements a healthy routine and, for medical issues, follows clinician guidance."
    }
  ];

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
              How HBOT at SANSŌ Works (for Longevity)
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                Breathing near-pure oxygen in a pressurized chamber increases dissolved oxygen in your plasma. 
                That extra oxygen may help your body repair, reduce inflammation, and perform better—useful for energy, recovery, and healthy aging.
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
              Benefits you can feel
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
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
              What actually happens in a session
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessionSteps.map((step, index) => (
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
              Programs for longevity goals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
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
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
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
              Ready to experience HBOT at SANSŌ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a session or speak with our team about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Book a Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Our Team</Link>
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
                <h3 className="font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This page is informational and not a substitute for medical advice. Always confirm your personal plan, 
                  contraindications, and medication timing with your treating clinician.
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
import React from 'react';
import { Brain, Heart, Clock, Shield, Leaf, Sparkles } from 'lucide-react';

export interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

export const benefitCardsByLanguage: { nl: BenefitCard[]; en: BenefitCard[] } = {
  nl: [
    {
      title: "Verbeterde Cognitieve Functie",
      description: "Beter geheugen, focus en mentale helderheid door optimale zuurstofvoorziening.",
      icon: <Brain className="w-6 h-6" />,
      iconBg: "bg-amber/20 text-amber"
    },
    {
      title: "Hart & Vaten Gezondheid",
      description: "Verbeterde bloedcirculatie en cardiovasculaire functie voor optimale gezondheid.",
      icon: <Heart className="w-6 h-6" />,
      iconBg: "bg-clay/20 text-clay"
    },
    {
      title: "Anti-Aging Voordelen",
      description: "Minder oxidatieve stress, gezondere huid en meer vitaliteit.",
      icon: <Clock className="w-6 h-6" />,
      iconBg: "bg-forest/20 text-forest"
    },
    {
      title: "Immuunsysteem Ondersteuning",
      description: "Sterkere afweer en betere natuurlijke bescherming tegen ziekte.",
      icon: <Shield className="w-6 h-6" />,
      iconBg: "bg-amber/20 text-amber"
    },
    {
      title: "Levensduur Verlenging",
      description: "Langere gezondheidsspanne door geoptimaliseerde celwerking.",
      icon: <Leaf className="w-6 h-6" />,
      iconBg: "bg-clay/20 text-clay"
    },
    {
      title: "Algemene Welzijnsboost",
      description: "Meer energie in het dagelijks leven en ondersteuning van herstel na inspanning.",
      icon: <Sparkles className="w-6 h-6" />,
      iconBg: "bg-forest/20 text-forest"
    }
  ],
  en: [
    {
      title: "Improved Cognitive Function",
      description: "Better memory, focus and mental clarity through optimal oxygen delivery.",
      icon: <Brain className="w-6 h-6" />,
      iconBg: "bg-amber/20 text-amber"
    },
    {
      title: "Heart & Vascular Health",
      description: "Improved circulation and cardiovascular function for optimal health.",
      icon: <Heart className="w-6 h-6" />,
      iconBg: "bg-clay/20 text-clay"
    },
    {
      title: "Anti‑Aging Benefits",
      description: "Less oxidative stress, healthier skin and more vitality.",
      icon: <Clock className="w-6 h-6" />,
      iconBg: "bg-forest/20 text-forest"
    },
    {
      title: "Immune Support",
      description: "Stronger defenses and better natural protection against illness.",
      icon: <Shield className="w-6 h-6" />,
      iconBg: "bg-amber/20 text-amber"
    },
    {
      title: "Longevity Support",
      description: "Longer healthspan through optimized cellular function.",
      icon: <Leaf className="w-6 h-6" />,
      iconBg: "bg-clay/20 text-clay"
    },
    {
      title: "General Wellness Boost",
      description: "More daily energy and support for recovery after exertion.",
      icon: <Sparkles className="w-6 h-6" />,
      iconBg: "bg-forest/20 text-forest"
    }
  ]
};

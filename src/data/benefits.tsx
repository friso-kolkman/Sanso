import React from 'react';
import { Brain, Heart, Clock, Shield, Leaf } from 'lucide-react';

export interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

export const benefitCards: BenefitCard[] = [
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
    iconBg: "bg-forest/20 text-forest"
  }
];

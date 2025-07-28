
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Zap, Shield, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import React, { useState } from 'react';

const researchSectionLabels = {
  en: {
    title: 'Recent Scientific Research on HBOT',
    indication: 'Indication',
    evidence: 'Evidence & Effect',
    takehome: 'Take-home',
    reference: 'Reference',
    cross: 'Cross-cutting Observations',
    further: 'Further Reading',
  },
  nl: {
    title: 'Recente Wetenschappelijke Onderzoeken naar HBOT',
    indication: 'Indicatie',
    evidence: 'Bewijs & Effect',
    takehome: 'Belangrijkste Bevinding',
    reference: 'Referentie',
    cross: 'Overkoepelende Observaties',
    further: 'Meer Lezen',
  }
};

const researchTakeawaysNL = [
  'Protocol is belangrijk – De meeste positieve resultaten worden gezien bij 40 sessies op 1.3–2.0 ATA, maar de optimale druk/zuurstofdosis verschilt per indicatie.',
  'Veiligheidsprofiel is goed – Barotrauma en milde, omkeerbare zuurstoftoxiciteit zijn de belangrijkste bijwerkingen; geen ernstige bijwerkingen in recente studies.',
  'Heterogeniteit van bewijs – Sterkste data zijn er voor DFU, SSNHL en post-TBI symptomen; beroerte en radiatiepijn vereisen grotere studies.',
  'Behandelbelasting – 30-40 dagelijkse sessies zijn een drempel. Mobiele of intermitterende protocollen worden onderzocht.'
];

const Science = () => {
  const { t, language } = useLanguage();
  const labels = researchSectionLabels[language] || researchSectionLabels.en;

  // Add missing state for tab switching
  const [activeTab, setActiveTab] = useState<'neuro' | 'wond'>('neuro');

  const scienceCards = [
    {
      icon: Heart,
      title: t('science.angiogenesis.title'),
      description: t('science.angiogenesis.description')
    },
    {
      icon: Zap,
      title: t('science.stemCell.title'),
      description: t('science.stemCell.description')
    },
    {
      icon: Shield,
      title: t('science.antiInflammation.title'),
      description: t('science.antiInflammation.description')
    }
  ];

  const faqItems = [
    {
      question: t('science.faq.pressure.question'),
      answer: t('science.faq.pressure.answer')
    },
    {
      question: t('science.faq.safety.question'),
      answer: t('science.faq.safety.answer')
    },
    {
      question: t('science.faq.sessions.question'),
      answer: t('science.faq.sessions.answer')
    },
    {
      question: t('science.faq.conditions.question'),
      answer: t('science.faq.conditions.answer')
    },
    {
      question: t('science.faq.sideEffects.question'),
      answer: t('science.faq.sideEffects.answer')
    }
  ];

  const researchDigest = [
    {
      category: { en: 'Neuro-cognitive & neuro-psychiatric disorders', nl: 'Neurocognitieve & neuropsychiatrische aandoeningen' },
      studies: [
        {
          condition: { en: 'Persistent post-brain-injury symptoms', nl: 'Aanhoudende klachten na hersenletsel' },
          evidence: {
            en: '49-person double-blind RCT (40 × 1.5 ATA/100 % O₂). Mean Neurobehavioral Symptom Inventory improved 7 points vs. sham at 13 weeks (p = 0.01); gains in anxiety, sleep and vestibular scores persisted to 12 months.',
            nl: 'Dubbelblinde RCT met 49 personen (40 × 1.5 ATA/100 % O₂). Gemiddelde verbetering van 7 punten op de Neurobehavioral Symptom Inventory t.o.v. placebo na 13 weken (p = 0.01); winst in angst, slaap en evenwicht bleef tot 12 maanden.'
          },
          takehome: {
            en: 'Clinically meaningful, durable symptom relief in mild–moderate TBI sequelae.',
            nl: 'Klinisch relevante, langdurige symptoomverlichting bij milde–matige TBI restklachten.'
          },
          link: 'https://www.nature.com/articles/s41598-025-86631-6',
          citation: { en: 'Weaver LK et al. Scientific Reports, 2025.', nl: 'Weaver LK e.a. Scientific Reports, 2025.' }
        },
        {
          condition: { en: 'Post-traumatic stress disorder (PTSD)', nl: 'Posttraumatische stressstoornis (PTSS)' },
          evidence: {
            en: 'Systematic review of 8 trials / 393 patients; 40-60 dives at 1.3–2.0 ATA produced reliable PTSD score reductions with a dose–response relationship; higher doses triggered transient emotional lability in ≈ 30 %.',
            nl: 'Systematische review van 8 studies / 393 patiënten; 40-60 sessies bij 1.3–2.0 ATA gaven betrouwbare PTSS-score dalingen met dosis-respons; hogere doseringen veroorzaakten bij ~30% tijdelijke emotionele labiliteit.'
          },
          takehome: {
            en: 'Consistent symptom benefit but small studies; balance oxygen dose vs. tolerability.',
            nl: 'Consistente symptoomverbetering maar kleine studies; balans tussen zuurstofdosis en verdraagzaamheid.'
          },
          link: 'https://www.frontiersin.org/articles/10.3389/fneur.2024.1360311/full',
          citation: { en: 'Andrews SR, Harch PG. Frontiers in Neurology, 2024.', nl: 'Andrews SR, Harch PG. Frontiers in Neurology, 2024.' }
        },
        {
          condition: { en: 'Long-COVID (“post-COVID condition”)', nl: 'Long-COVID (“post-COVID conditie”)' },
          evidence: {
            en: '31-patient RCT follow-up, 40 dives. Improvements in QoL, sleep, pain and BSI-18 neuro-psychiatric index had moderate–large effect sizes (0.47 – 0.83) and were still present 1 year later.',
            nl: 'RCT-follow-up met 31 patiënten, 40 sessies. Verbeteringen in kwaliteit van leven, slaap, pijn en BSI-18 neuropsychiatrische index (effectgrootte 0.47–0.83) bleven na 1 jaar aanwezig.'
          },
          takehome: {
            en: 'First long-term data showing durability of HBOT gains in long-COVID.',
            nl: 'Eerste langetermijngegevens die duurzaamheid van HBOT-effect bij long-COVID aantonen.'
          },
          link: 'https://www.nature.com/articles/s41598-024-53091-3',
          citation: { en: 'Hadanny A et al. Scientific Reports, 2024.', nl: 'Hadanny A e.a. Scientific Reports, 2024.' }
        },
        {
          condition: { en: 'Acute ischaemic stroke', nl: 'Acuut ischemisch CVA' },
          evidence: {
            en: '8-trial meta-analysis (n = 493). No significant change in NIHSS or Barthel, slight mRS benefit; safety similar to control. Authors do not recommend routine HBOT pending better-timed trials.',
            nl: 'Meta-analyse van 8 studies (n = 493). Geen significante verandering in NIHSS of Barthel, lichte mRS-verbetering; veiligheid vergelijkbaar met controle. Geen aanbeveling voor standaard HBOT tot betere studies.'
          },
          takehome: {
            en: 'Evidence presently inconclusive; window, dose and patient selection likely critical.',
            nl: 'Bewijs nu niet overtuigend; timing, dosis en patiëntselectie waarschijnlijk cruciaal.'
          },
          link: 'https://bmcneurol.biomedcentral.com/articles/10.1186/s12883-024-03555-w',
          citation: { en: 'Li X et al. BMC Neurology, 2024.', nl: 'Li X e.a. BMC Neurology, 2024.' }
        }
      ]
    },
    {
      category: { en: 'Wound healing & tissue repair', nl: 'Wondgenezing & weefselherstel' },
      studies: [
        {
          condition: { en: 'Diabetic foot ulcer (DFU)', nl: 'Diabetische voetulcus (DFU)' },
          evidence: {
            en: '14 RCTs (systematic review), Wagner-stratified. HBOT 2.4 × higher healing rate (RR 2.39); major amputation risk cut by 69 % (RR 0.31), with the largest gains in Wagner III–IV ulcers.',
            nl: '14 RCTs (systematische review), Wagner-stratificatie. HBOT 2,4× hogere genezingskans (RR 2,39); risico op grote amputatie 69% lager (RR 0,31), vooral bij Wagner III–IV ulcera.'
          },
          takehome: {
            en: 'Robust adjunct for advanced DFU; strongest limb-salvage data across HBOT literature.',
            nl: 'Sterke aanvulling bij gevorderde DFU; beste data voor ledemaatbehoud in HBOT-literatuur.'
          },
          link: 'https://pubmed.ncbi.nlm.nih.gov/38528847',
          citation: { en: 'Oley MH et al. PRS Global Open, 2024.', nl: 'Oley MH e.a. PRS Global Open, 2024.' }
        },
        {
          condition: { en: 'Late radiation injury after breast RT', nl: 'Late radiatieschade na borstkankerbestraling' },
          evidence: {
            en: 'Pragmatic Dutch RCT nested in cohort (189 invited, 31 completed). Fibrosis reduced (OR 0.36, ITT); pain fell only in completers (OR 0.34). High treatment burden limited uptake (25 % acceptance).',
            nl: 'Pragmatische Nederlandse RCT in cohort (189 uitgenodigd, 31 afgerond). Fibrose nam af (OR 0,36, ITT); pijn daalde alleen bij voltooide behandeling (OR 0,34). Hoge behandelbelasting, slechts 25% deelname.'
          },
          takehome: {
            en: 'Biologic effect on fibrosis confirmed, but logistics & adherence are hurdles.',
            nl: 'Biologisch effect op fibrose bevestigd, maar logistiek & therapietrouw zijn uitdagingen.'
          },
          link: 'https://pubmed.ncbi.nlm.nih.gov/38329746',
          citation: { en: 'Peters F et al. JAMA Network, 2024.', nl: 'Peters F e.a. JAMA Network, 2024.' }
        }
      ]
    },
    {
      category: { en: 'Chronic pain & systemic disorders', nl: 'Chronische pijn & systemische aandoeningen' },
      studies: [
        {
          condition: { en: 'Fibromyalgia', nl: 'Fibromyalgie' },
          evidence: {
            en: 'Meta-analysis of 9 controlled studies / 185 participants. Pain SMD -1.56; tender-point count, fatigue & sleep all improved; 24 % mild barotrauma/ear discomfort, no serious AEs.',
            nl: 'Meta-analyse van 9 gecontroleerde studies / 185 deelnemers. Pijn SMD -1,56; tenderpoints, vermoeidheid & slaap verbeterden; 24% milde barotrauma/oorklachten, geen ernstige bijwerkingen.'
          },
          takehome: {
            en: 'Promising multi-domain relief with acceptable, largely reversible side-effects.',
            nl: 'Veelzijdige verlichting met acceptabele, grotendeels omkeerbare bijwerkingen.'
          },
          link: 'https://bmjopen.bmj.com/content/13/1/e062322',
          citation: { en: 'Sun Y et al. BMJ Open, 2025.', nl: 'Sun Y e.a. BMJ Open, 2025.' }
        }
      ]
    },
    {
      category: { en: 'Sensorineural otology', nl: 'Sensorineurale otologie' },
      studies: [
        {
          condition: { en: 'Sudden sensorineural hearing loss (SSNHL)', nl: 'Plotselinge sensorineurale gehoorverlies (SSNHL)' },
          evidence: {
            en: '3 RCTs (n = 150). HBOT ± steroids yielded +10 dB greater hearing gain and 4 × higher odds of ≥10 dB recovery vs. medical therapy alone.',
            nl: '3 RCTs (n = 150). HBOT ± steroïden gaf +10 dB meer gehoorwinst en 4× hogere kans op ≥10 dB herstel t.o.v. alleen medicatie.'
          },
          takehome: {
            en: 'Supports HBOT as adjunct—especially when started early or for severe loss.',
            nl: 'Ondersteunt HBOT als aanvulling—vooral bij vroege start of ernstig verlies.'
          },
          link: 'https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/2785483',
          citation: { en: 'Alexander L et al. JAMA Otolaryngol., 2021.', nl: 'Alexander L e.a. JAMA Otolaryngol., 2021.' }
        }
      ]
    },
    {
      category: { en: 'Healthy-aging & mechanistic insights', nl: 'Gezond ouder worden & mechanistische inzichten' },
      studies: [
        {
          condition: { en: 'Healthy aging & mechanisms', nl: 'Gezond ouder worden & mechanismen' },
          evidence: {
            en: '2022 Redox Biology review synthesises rodent, cellular and pilot human work: HBOT up-regulates Nrf2 antioxidant pathways, stimulates angiogenesis, lengthens telomeres (∼20 % in small human series) and reduces senescent-cell burden, all while maintaining a favourable safety window below CNS oxygen-toxicity thresholds.',
            nl: 'Redox Biology review (2022) vat dier-, cel- en pilot-humaan onderzoek samen: HBOT activeert Nrf2-antioxidantpaden, stimuleert angiogenese, verlengt telomeren (∼20% in kleine humane serie) en vermindert senescente cellen, met een gunstig veiligheidsprofiel.'
          },
          takehome: {
            en: 'HBOT counters inflammation, mitochondrial dysfunction and senescence markers.',
            nl: 'HBOT remt ontsteking, mitochondriale disfunctie en verouderingsmarkers.'
          },
          link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9156818/',
          citation: { en: 'Fu Q et al. Redox Biology, 2022.', nl: 'Fu Q e.a. Redox Biology, 2022.' }
        }
      ]
    }
  ];

  const researchTakeaways = [
    'Protocol matters – Most efficacy signals cluster around 40 sessions at 1.3–2.0 ATA, but optimal pressure/O₂ dose differs by indication (PTSD shows clear dose–response; DFU uses 2.0–2.4 ATA).',
    'Safety profile is good – Barotrauma and mild reversible O₂ toxicity are the main issues; no serious events reported in the recent trials above.',
    'Evidence heterogeneity – Strongest data exist for DFU, SSNHL and post-TBI symptoms; stroke and radiation pain need larger, better-timed studies.',
    'Treatment burden – 30-40 daily dives remain a barrier, as illustrated by only 25 % uptake in the Dutch breast-irradiation RCT. Mobile or intermittent protocols are being explored.'
  ];

  const furtherReading = [
    {
      label: 'Persistent symptoms after brain injury – RCT',
      link: 'https://www.nature.com/articles/s41598-025-86631-6'
    },
    {
      label: 'PTSD – systematic review & dosage analysis',
      link: 'https://www.frontiersin.org/articles/10.3389/fneur.2024.1360311/full'
    },
    {
      label: 'Acute ischaemic stroke – meta-analysis of RCTs',
      link: 'https://bmcneurol.biomedcentral.com/articles/10.1186/s12883-024-03555-w'
    },
    {
      label: 'Long-COVID cognitive & fatigue symptoms – RCT follow-up',
      link: 'https://www.nature.com/articles/s41598-024-53091-3'
    },
    {
      label: 'Diabetic foot ulcers – systematic review & meta-analysis',
      link: 'https://pubmed.ncbi.nlm.nih.gov/38528847'
    },
    {
      label: 'Radiation-induced breast tissue injury – randomized clinical trial',
      link: 'https://pubmed.ncbi.nlm.nih.gov/38329746'
    },
    {
      label: 'Fibromyalgia – systematic review & meta-analysis',
      link: 'https://bmjopen.bmj.com/content/13/1/e062322'
    },
    {
      label: 'Sudden sensorineural hearing loss – systematic review',
      link: 'https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/2785483'
    },
    {
      label: 'Healthy ageing review',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9156818/'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {labels.title}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('science.intro') }}
              />
            </div>
          </motion.div>

          {/* Science Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {scienceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="h-full"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-lg w-fit">
                      <card.icon className="h-8 w-8 text-gray-900" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Overkoepelende Observaties at the top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {labels.cross}
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              {researchTakeawaysNL.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Research tables in sequence */}
          {researchDigest.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {category.category[language] || category.category.en}
              </h2>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-semibold text-gray-900 w-1/5">{labels.indication}</th>
                      <th className="p-4 font-semibold text-gray-900 w-2/5">{labels.evidence}</th>
                      <th className="p-4 font-semibold text-gray-900 w-1/5">{labels.takehome}</th>
                      <th className="p-4 font-semibold text-gray-900 w-1/5">{labels.reference}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.studies.map((study, sidx) => (
                      <tr key={sidx} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                        <td className="p-4 align-top text-gray-900 font-medium">{study.condition[language] || study.condition.en}</td>
                        <td className="p-4 align-top text-gray-700 leading-relaxed">{study.evidence[language] || study.evidence.en}</td>
                        <td className="p-4 align-top text-gray-700 leading-relaxed">{study.takehome[language] || study.takehome.en}</td>
                        <td className="p-4 align-top">
                          <a href={study.link} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-black hover:underline flex items-center gap-1 font-medium">
                            {study.citation[language] || study.citation.en} <ExternalLink className="inline h-4 w-4" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Meer Lezen section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{labels.further}</h3>
            <ul className="list-disc pl-6 text-gray-900">
              {furtherReading.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    {item.label} <ExternalLink className="inline h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FAQ at the bottom with extra spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-20 mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {t('science.faq.title')}
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                      <AccordionTrigger className="text-left text-gray-900 hover:text-blue-600 py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Science;

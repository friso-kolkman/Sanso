
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Heart, Zap, Shield, ExternalLink, BookOpen, FileText, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const researchSectionLabels = {
  en: {
    title: 'The Science',
    indication: 'Indication',
    evidence: 'Evidence & Effect',
    takehome: 'Take-home',
    reference: 'Reference',
    cross: 'Cross-cutting Observations',
    further: 'Further Reading',
  },
  nl: {
    title: 'De Wetenschap',
    indication: 'Indicatie',
    evidence: 'Bewijs & Effect',
    takehome: 'Belangrijkste Bevinding',
    reference: 'Referentie',
    cross: 'Overkoepelende Observaties',
    further: 'Meer Lezen',
  }
};

const researchTakeawaysNL = [
  'Dosering en protocol – Veelgebruikte schema’s zijn 1.5–2.4 ATA, 60–90 min per sessie en meestal 20–40 sessies; de optimale dosering verschilt per indicatie en patiënt.',
  'Veiligheid – Over het algemeen goed verdragen; meest voorkomend zijn oor-/sinusbarotrauma en zeldzame, voorbijgaande zuurstoftoxiciteit. Onbehandelde pneumothorax is een absolute contra‑indicatie.',
  'Bewijskracht verschilt per indicatie – Sterkste data voor diabetische voetulcera en laat‑ontstane radiatieschade; redelijk bewijs voor plots gehoorverlies (SSNHL). Voor mTBI/PCS en pijnsyndromen zijn grotere, goed opgezette RCT’s nodig.',
  'Behandelbelasting – Programma’s vragen vaak 5 sessies/week gedurende 4–8 weken (20–40 sessies). Adherentie kan uitdagend zijn; kortere blokken en thuis- of milde protocollen worden onderzocht.'
];

// Comprehensive HBOT Research Database
const hbotResearchDatabase = {
  data_version: "2025-08-30",
  source: "curated HBOT literature",
  sections: [
    {
      title_nl: "Neurocognitieve aandoeningen",
      title_en: "Neurocognitive Disorders",
      slug: "neurocognitief-neuropsychiatrisch",
      articles: [
        {
          title: "Hyperbaric Oxygen Induces Late Neuroplasticity in Post-Stroke Patients—Randomized, Prospective Trial",
          authors: "Efrati S, et al.",
          year: 2013,
          journal: "PLOS ONE",
          evidence_type: "RCT",
          summary: "In chronic post-stroke patients, HBOT improved cognitive and neurological function with perfusion changes on imaging.",
          doi: "10.1371/journal.pone.0053716",
          pmid: "23335971",
          url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0053716",
          tags: ["stroke", "neuroplasticity", "perfusion"]
        },
        {
          title: "HBOT Can Improve Post-Concussion Syndrome Years After mTBI—Randomized Prospective Trial",
          authors: "Boussi-Gross R, et al.",
          year: 2013,
          journal: "PLOS ONE",
          evidence_type: "RCT",
          summary: "Significant improvements in neurocognitive measures and quality of life vs control in chronic mTBI.",
          doi: "10.1371/journal.pone.0079995",
          pmid: "24260334",
          url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0079995",
          tags: ["mTBI", "cognition"]
        },
        {
          title: "Cognitive Enhancement of Healthy Older Adults Using HBOT: Randomized Controlled Trial",
          authors: "Hadanny A, et al.",
          year: 2020,
          journal: "Aging",
          evidence_type: "RCT",
          summary: "HBOT improved global cognition, attention, and processing speed with increased brain perfusion.",
          doi: "10.18632/aging.103571",
          pmid: null,
          url: "https://www.aging-us.com/article/103571/text",
          tags: ["healthy-aging", "perfusion", "cognition"]
        },
        {
          title: "Hyperbaric Oxygen Therapy for Fibromyalgia",
          authors: "Efrati S, et al.",
          year: 2015,
          journal: "PLOS ONE",
          evidence_type: "RCT",
          summary: "HBOT reduced pain and improved function; imaging suggested neuroplasticity.",
          doi: "10.1371/journal.pone.0127012",
          pmid: "26010952",
          url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0127012",
          tags: ["fibromyalgia", "pain", "neuroplasticity"]
        },
        {
          title: "A Double-Blind Randomized Trial of HBOT for Persistent Symptoms After Brain Injury",
          authors: "Weaver LK, et al.",
          year: 2025,
          journal: "Scientific Reports",
          evidence_type: "RCT",
          summary: "40 HBOT sessions improved NSI vs sham in mixed non-stroke brain injury; signals that 80 sessions may yield further gains.",
          doi: "10.1038/s41598-025-86631-6",
          pmid: null,
          url: "https://www.nature.com/articles/s41598-025-86631-6",
          tags: ["brain-injury", "NSI", "double-blind"]
        },
        {
          title: "Systematic Review: HBOT for PTSD—Dosage and Response",
          authors: "Andrews SR, et al.",
          year: 2024,
          journal: "Frontiers in Neurology",
          evidence_type: "SR/MA",
          summary: "Synthesizes PTSD HBOT trials; discusses dose-response and safety observations.",
          doi: "10.3389/fneur.2024.1360311",
          pmid: null,
          url: "https://www.frontiersin.org/articles/10.3389/fneur.2024.1360311/full",
          tags: ["PTSD", "dose-response"]
        }
      ]
    },
    {
      title_nl: "Wondgenezing",
      title_en: "Wound Healing",
      slug: "wondgenezing-weefselherstel",
      articles: [
        {
          title: "HBOT for Chronic Wounds (incl. Diabetic Foot): Cochrane Review",
          authors: "Kranke P, et al.",
          year: 2015,
          journal: "Cochrane Database Syst Rev",
          evidence_type: "SR/MA",
          summary: "Evidence suggests HBOT may improve healing and reduce amputations in selected chronic wounds; calls for better RCTs.",
          doi: "10.1002/14651858.CD004123.pub4",
          pmid: "26450001",
          url: "https://pubmed.ncbi.nlm.nih.gov/26450001/",
          tags: ["chronic-wounds", "DFU"]
        },
        {
          title: "HBOT for Diabetic Foot Ulcers with Arterial Insufficiency: Systematic Review & Meta-analysis",
          authors: "Brouwer RJ, et al.",
          year: 2020,
          journal: "Journal of Vascular Surgery",
          evidence_type: "SR/MA",
          summary: "Reduced major amputation; mixed effects on complete healing.",
          doi: "10.1016/j.jvs.2019.07.082",
          pmid: "32040434",
          url: "https://pubmed.ncbi.nlm.nih.gov/32040434/",
          tags: ["DFU", "amputation"]
        },
        {
          title: "Efficacy of HBOT for Diabetic Foot Ulcers: Meta-analysis",
          authors: "Sharma R, et al.",
          year: 2021,
          journal: "Scientific Reports",
          evidence_type: "SR/MA",
          summary: "Pooled data show higher complete healing and reduced major amputations with adjunctive HBOT.",
          doi: "10.1038/s41598-021-81886-1",
          pmid: "33580130",
          url: "https://www.nature.com/articles/s41598-021-81886-1",
          tags: ["DFU"]
        },
        {
          title: "HBOT for Chronic Refractory Radiation Proctitis: Double-Blind Crossover RCT",
          authors: "Clarke RE, et al.",
          year: 2008,
          journal: "Int J Radiat Oncol Biol Phys",
          evidence_type: "RCT",
          summary: "Significant improvement in symptoms and quality-of-life vs sham; long-term follow-up.",
          doi: "10.1016/j.ijrobp.2007.12.048",
          pmid: "18342453",
          url: "https://pubmed.ncbi.nlm.nih.gov/18342453/",
          tags: ["radiation-injury", "proctitis"]
        },
        {
          title: "HOPON: HBOT to Prevent Osteoradionecrosis of the Irradiated Mandible",
          authors: "Shaw RJ, et al.",
          year: 2019,
          journal: "Int J Radiat Oncol Biol Phys",
          evidence_type: "RCT",
          summary: "Prophylactic HBOT did not reduce ORN vs standard care; low event rates in both arms.",
          doi: "10.1016/j.ijrobp.2019.02.017",
          pmid: "30851351",
          url: "https://pubmed.ncbi.nlm.nih.gov/30851351/",
          tags: ["osteoradionecrosis", "prophylaxis", "null-result"]
        },
        {
          title: "HBOT for Compromised Grafts and Flaps: Evidence Review",
          authors: "Francis A, et al.",
          year: 2017,
          journal: "Advances in Wound Care",
          evidence_type: "SR",
          summary: "Adjunctive HBOT supports salvage of compromised grafts/flaps; timing is critical.",
          doi: "10.1089/wound.2016.0707",
          pmid: "28272245",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5220535/",
          tags: ["grafts", "flaps", "salvage"]
        },
        {
          title: "The Effect of HBOT on Compromised Grafts and Flaps",
          authors: "Kleban S, et al.",
          year: 2020,
          journal: "Undersea and Hyperbaric Medicine",
          evidence_type: "Review",
          summary: "Mechanisms and clinical protocols for graft/flap salvage; recommends early initiation.",
          doi: null,
          pmid: "33227840",
          url: "https://pubmed.ncbi.nlm.nih.gov/33227840/",
          tags: ["grafts", "flaps"]
        }
      ]
    },
    {
      title_nl: "Chronische pijn",
      title_en: "Chronic Pain",
      slug: "chronische-pijn-systemisch",
      articles: [
        {
          title: "Hyperbaric Oxygen Therapy for Fibromyalgia: Randomized Controlled Trial",
          authors: "Efrati S, et al.",
          year: 2015,
          journal: "PLOS ONE",
          evidence_type: "RCT",
          summary: "HBOT reduced pain/tender points and improved function; neuroimaging suggested brain plasticity.",
          doi: "10.1371/journal.pone.0127012",
          pmid: "26010952",
          url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0127012",
          tags: ["fibromyalgia", "chronic-pain"]
        },
        {
          title: "HBOT for Long COVID: Randomized Controlled Trials",
          authors: "Zilberman-Itskovich S, et al.; Tal S, et al.",
          year: 2022,
          journal: "Scientific Reports; Scientific Reports",
          evidence_type: "RCT",
          summary: "Two RCTs reported improvements in cognition, fatigue, and quality-of-life vs controls after ~40 sessions.",
          doi: "10.1038/s41598-022-15565-0",
          pmid: "35835695",
          url: "https://www.nature.com/articles/s41598-022-15565-0",
          tags: ["long-covid", "cognition", "fatigue"]
        },
        {
          title: "Efficacy and Safety of HBOT for Long COVID: Systematic Review & Meta-analysis",
          authors: "Li Y, et al.",
          year: 2024,
          journal: "Frontiers in Medicine",
          evidence_type: "SR/MA",
          summary: "Pooled data show symptom and function benefits with acceptable safety; more robust trials needed.",
          doi: "10.3389/fmed.2024.1365841",
          pmid: "38567092",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11138265/",
          tags: ["long-covid", "meta-analysis"]
        },
        {
          title: "Complex Regional Pain Syndrome and HBOT",
          authors: "Various (small RCTs/series)",
          year: 2014,
          journal: "Undersea Hyperb Med (reviewed)",
          evidence_type: "Case-series/Small RCT",
          summary: "Early studies suggest pain reduction and functional gains; evidence base remains limited and heterogeneous.",
          doi: null,
          pmid: null,
          url: "https://www.sciencedirect.com/science/article/abs/pii/S0006899306012182",
          tags: ["CRPS", "pain"]
        },
        {
          title: "Inflammatory Bowel Disease (Ulcerative Colitis) – HBOT",
          authors: "Reviews and small trials",
          year: 2021,
          journal: "Diabetes Res Clin Pract; Wound Repair Regen (contextual)",
          evidence_type: "SR/Small RCTs",
          summary: "Adjunctive HBOT reported to improve refractory colitis/proctitis in subsets; controlled evidence is mixed.",
          doi: null,
          pmid: null,
          url: "https://www.sciencedirect.com/science/article/abs/pii/S0168822721002217",
          tags: ["IBD", "systemic-inflammation"]
        }
      ]
    },
    {
      title_nl: "Otologie",
      title_en: "Otology",
      slug: "sensorineurale-otologie",
      articles: [
        {
          title: "HBOT for Sudden Sensorineural Hearing Loss (SSNHL): Meta-analysis",
          authors: "Joshua BZ, et al.",
          year: 2022,
          journal: "JAMA Otolaryngology–Head & Neck Surgery",
          evidence_type: "SR/MA",
          summary: "Adjunctive HBOT associated with improved hearing outcomes, especially when started early.",
          doi: "10.1001/jamaoto.2021.3471",
          pmid: "34709348",
          url: "https://pubmed.ncbi.nlm.nih.gov/34709348/",
          tags: ["SSNHL", "timing"]
        },
        {
          title: "Clinical Practice Guideline: Sudden Hearing Loss (Update)",
          authors: "Schwartz SR, et al. (AAO-HNS)",
          year: 2019,
          journal: "Otolaryngology–Head and Neck Surgery",
          evidence_type: "Guideline",
          summary: "HBOT listed as an option (typically with steroids) within 2 weeks of onset or as salvage within 1 month.",
          doi: "10.1177/0194599819859885",
          pmid: "31369359",
          url: "https://pubmed.ncbi.nlm.nih.gov/31369359/",
          tags: ["guideline", "SSNHL"]
        },
        {
          title: "Timing of HBOT Influences SSNHL Outcomes",
          authors: "Deppe C, et al.",
          year: 2023,
          journal: "Journal of Clinical Medicine",
          evidence_type: "Cohort",
          summary: "Earlier HBOT initiation correlated with better auditory recovery.",
          doi: "10.3390/jcm12237222",
          pmid: "38002069",
          url: "https://pubmed.ncbi.nlm.nih.gov/38002069/",
          tags: ["SSNHL", "timing"]
        }
      ]
    },
    {
      title_nl: "Gezond ouder worden",
      title_en: "Healthy Aging",
      slug: "gezond-ouder-worden-mechanismen",
      articles: [
        {
          title: "HBOT Increases Telomere Length and Decreases Senescent Cells in Aging Adults",
          authors: "Hachmo Y, et al.",
          year: 2020,
          journal: "Aging",
          evidence_type: "Cohort",
          summary: "After ~60 sessions, PBMC telomere length increased >20% and senescent T-cell populations decreased.",
          doi: "10.18632/aging.202188",
          pmid: "33206062",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7746357/",
          tags: ["telomeres", "senescence"]
        },
        {
          title: "HBOT Enhances Cognition in Healthy Older Adults (Perfusion-Linked)",
          authors: "Hadanny A, et al.",
          year: 2020,
          journal: "Aging",
          evidence_type: "RCT",
          summary: "Demonstrated cognitive/CBF gains in healthy elderly; mechanistic tie to angiogenesis and HIF signaling.",
          doi: "10.18632/aging.103571",
          pmid: null,
          url: "https://www.aging-us.com/article/103571/text",
          tags: ["perfusion", "HIF/VEGF"]
        },
        {
          title: "Stem/Progenitor Cell Mobilization by Hyperbaric Oxygen",
          authors: "Thom SR, et al.",
          year: 2006,
          journal: "Am J Physiol Heart Circ Physiol",
          evidence_type: "Mechanistic",
          summary: "Single session doubled circulating CD34+ cells; ~8-fold rise over 20 sessions via NO-dependent pathway.",
          doi: "10.1152/ajpheart.00888.2005",
          pmid: "16299259",
          url: "https://journals.physiology.org/doi/abs/10.1152/ajpheart.00888.2005",
          tags: ["stem-cells", "NO", "angiogenesis"]
        },
        {
          title: "CD34+/CD45dim Stem Cell Mobilization with HBOT (Human Data)",
          authors: "Heyboer M III, et al.",
          year: 2014,
          journal: "Undersea Hyperb Med (open archive)",
          evidence_type: "Mechanistic",
          summary: "Human observations linking HBOT to endothelial progenitor mobilization.",
          doi: null,
          pmid: null,
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4037447/",
          tags: ["endothelial-progenitors"]
        },
        {
          title: "Healthy Aging Review—HBOT Mechanisms (HIF/VEGF, Mitochondria, Senescence)",
          authors: "Fu Q, et al.",
          year: 2022,
          journal: "Rejuvenation Research",
          evidence_type: "Review",
          summary: "Summarizes HBOT effects on angiogenesis, mitochondrial biogenesis, and telomere biology.",
          doi: "10.1089/rej.2022.0019",
          pmid: "35657341",
          url: "https://www.sciencedirect.com/science/article/pii/S2213231722001240",
          tags: ["mechanisms", "review"]
        }
      ]
    }
  ],
  safety: [
    {
      title: "Adverse Effects of HBOT: Systematic Review & Meta-analysis",
      authors: "Zhang Y, et al.",
      year: 2023,
      journal: "Frontiers in Medicine",
      summary: "Most events are mild (ear/sinus barotrauma); higher AE rates above 2.0 ATA and with >10 sessions; seizures are rare.",
      doi: "10.3389/fmed.2023.1160774",
      pmid: "37275378",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10232961/",
      tags: ["safety", "barotrauma", "oxygen-toxicity"]
    }
  ]
};

const Science = () => {
  const { t, language } = useLanguage();
  const labels = researchSectionLabels[language] || researchSectionLabels.en;

  // Add missing state for tab switching
  const [activeTab, setActiveTab] = useState<'neuro' | 'wond'>('neuro');
  
  // Add state for collapsible sections
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  const toggleSection = (index: number) => {
    const newExpandedSections = new Set(expandedSections);
    if (newExpandedSections.has(index)) {
      newExpandedSections.delete(index);
    } else {
      newExpandedSections.add(index);
    }
    setExpandedSections(newExpandedSections);
  };

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
          condition: { en: 'Long-COVID ("post-COVID condition")', nl: 'Long-COVID ("post-COVID conditie")' },
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
                    <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${index===0 ? 'bg-clay/10 text-clay' : index===1 ? 'bg-forest/10 text-forest' : 'bg-amber/10 text-amber'}`}>
                      <card.icon className="h-8 w-8" />
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


                    {/* Research tables in sequence - REMOVED */}
          {/* {researchDigest.map((category, idx) => (
            <motion.div key={idx} className="mb-8">
              <div 
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => toggleSection(idx)}
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.category[language] || category.category.en}
                </h2>
                <motion.div
                  animate={{ rotate: expandedSections.has(idx) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
              
              <AnimatePresence>
                {expandedSections.has(idx) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 overflow-x-auto border border-gray-200 rounded-lg">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))} */}



          {/* Comprehensive HBOT Research Database */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-6xl mx-auto mt-20 mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-clay/20 rounded-full mb-6">
                <Database className="h-8 w-8 text-clay" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Uitgebreide HBOT Onderzoeksdatabase' : 'Comprehensive HBOT Research Database'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'nl' 
                  ? 'Gecureerde wetenschappelijke literatuur met de nieuwste bevindingen op het gebied van hyperbare zuurstoftherapie'
                  : 'Curated scientific literature with the latest findings in hyperbaric oxygen therapy'
                }
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {language === 'nl' ? 'Laatste update:' : 'Last updated:'} {hbotResearchDatabase.data_version}
              </div>
            </div>

            {/* Research Sections */}
            <div className="space-y-6">
              {hbotResearchDatabase.sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.7 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div 
                    className="bg-gradient-to-r from-forest to-forest px-6 py-4 cursor-pointer hover:from-clay hover:to-forest transition-all duration-200"
                    onClick={() => toggleSection(sectionIndex)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">
                        {language === 'nl' ? section.title_nl : section.title_en}
                      </h3>
              <motion.div
                        animate={{ rotate: expandedSections.has(sectionIndex) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                        className="text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7" />
                </svg>
              </motion.div>
                    </div>
            </div>
            
            <AnimatePresence>
                    {expandedSections.has(sectionIndex) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                        <div className="p-6">
                          <div className="grid gap-6">
                            {section.articles.map((article, articleIndex) => (
                              <motion.div
                                key={`${section.slug}-${articleIndex}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: articleIndex * 0.05 }}
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                                      {article.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-clay/20 text-clay">
                                        {article.evidence_type}
                                      </span>
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {article.year}
                                      </span>
                                      {article.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                      {article.summary}
                                    </p>
                                    <div className="text-sm text-gray-500 mb-3">
                                      <span className="font-medium">{article.authors}</span> • {article.journal}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                  {article.doi && (
                                    <a
                                      href={`https://doi.org/${article.doi}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-clay/10 text-clay hover:bg-clay/20 transition-colors"
                                    >
                                      <FileText className="h-4 w-4 mr-1" />
                                      DOI
                                    </a>
                                  )}
                                  {article.pmid && (
                                    <a
                                      href={`https://pubmed.ncbi.nlm.nih.gov/${article.pmid}/`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                                    >
                                      <BookOpen className="h-4 w-4 mr-1" />
                                      PubMed
                                    </a>
                                  )}
                                  <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                                  >
                                    <ExternalLink className="h-4 w-4 mr-1" />
                                    {language === 'nl' ? 'Lees Artikel' : 'Read Article'}
                                  </a>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
              ))}

              {/* Safety Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div 
                  className="bg-gradient-to-r from-forest to-forest px-6 py-4 cursor-pointer hover:from-clay hover:to-forest transition-all duration-200"
                  onClick={() => toggleSection(999)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {language === 'nl' ? 'Veiligheid' : 'Safety'}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedSections.has(999) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedSections.has(999) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6">
                        {hbotResearchDatabase.safety.map((safetyArticle, index) => (
                          <motion.div
                            key={`safety-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {safetyArticle.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                              {safetyArticle.summary}
                            </p>
                            <div className="text-sm text-gray-500 mb-3">
                              <span className="font-medium">{safetyArticle.authors}</span> • {safetyArticle.journal} • {safetyArticle.year}
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {safetyArticle.doi && (
                                <a
                                  href={`https://doi.org/${safetyArticle.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-clay/10 text-clay hover:bg-clay/20 transition-colors"
                                >
                                  <FileText className="h-4 w-4 mr-1" />
                                  DOI
                                </a>
                              )}
                              {safetyArticle.pmid && (
                                <a
                                  href={`https://pubmed.ncbi.nlm.nih.gov/${safetyArticle.pmid}/`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                                >
                                  <BookOpen className="h-4 w-4 mr-1" />
                                  PubMed
                                </a>
                              )}
                              <a
                                href={safetyArticle.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                {language === 'nl' ? 'Lees Artikel' : 'Read Article'}
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Science;

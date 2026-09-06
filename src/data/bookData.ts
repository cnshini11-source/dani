import { Pillar, Review, Chapter, BookFeature } from '../types';

export const CORE_PILLARS: Pillar[] = [
  {
    id: 'understand-people',
    icon: 'brain',
    title: 'Understand People',
    description: "See what's really behind the behavior."
  },
  {
    id: 'healthy-relationships',
    icon: 'heart',
    title: 'Build Healthier Relationships',
    description: 'Create more authentic connections.'
  },
  {
    id: 'recognize-patterns',
    icon: 'eye',
    title: 'Recognize Patterns',
    description: 'Notice dynamics earlier.'
  },
  {
    id: 'centered-you',
    icon: 'leaf',
    title: 'A More Centered You',
    description: 'Make choices from clarity, not confusion.'
  }
];

export const BOOK_BULLETS = [
  {
    title: 'Emotional patterns and why they repeat',
    desc: 'Understand why we default to the same emotional cycles and how to rewire unconscious scripts.'
  },
  {
    title: 'Why people become distant',
    desc: 'Decode emotional withdrawal, unspoken fatigue, and self-preservation mechanisms in others.'
  },
  {
    title: 'The psychology of mixed signals',
    desc: 'Unmask ambivalent actions, internal conflict, and the unspoken intentions behind confusing gestures.'
  },
  {
    title: 'How to set and maintain healthier boundaries',
    desc: 'Practical tools to establish firm, compassionate limits without guilt, over-explaining, or defensiveness.'
  },
  {
    title: 'A 30-day program to apply the insights in real life',
    desc: 'Structured daily reflections, mindful micro-experiments, and behavioral observations for lasting growth.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    role: 'Architect & Creative Director',
    location: 'London, UK',
    rating: 5,
    text: "This book really made me see patterns in my life I never noticed before. It's thoughtful, honest, and actually easy to relate to. Highly recommend.",
    verified: true
  },
  {
    id: 'david-r',
    name: 'David R.',
    role: 'Executive Coach',
    location: 'Zurich, Switzerland',
    rating: 5,
    text: "Clear, practical, and surprisingly insightful. I've already started applying some of the ideas and it's made a real difference in how I understand people and myself.",
    verified: true
  },
  {
    id: 'emily-t',
    name: 'Emily T.',
    role: 'Psychology Graduate & Writer',
    location: 'Melbourne, Australia',
    rating: 5,
    text: "A refreshing perspective on human behavior. It explains things in a way that just makes sense. One of the few books I actually finished and enjoyed.",
    verified: true
  },
  {
    id: 'marcus-k',
    name: 'Marcus K.',
    role: 'Founder & Consultant',
    location: 'Stockholm, Sweden',
    rating: 5,
    text: "The chapter on why people become distant gave me goosebumps. Daniel writes without pretense or clinical jargon — just pure, penetrating observation.",
    verified: true
  }
];

export const CHAPTERS: Chapter[] = [
  {
    number: 1,
    title: 'The Silent',
    subtitle: 'Why people hide what they feel most intensely',
    excerpt: `We spend most of our waking hours managing the impression we leave in the minds of others. We curate our tone, soften our dissatisfaction, and conceal the raw edges of our vulnerabilities. Yet underneath this careful choreography runs an unspoken current: the profound longing to be recognized without having to plead.
    
When someone pulls away, becomes quiet, or responds with curt neutrality, our instinctive reflex is either panic or irritation. We wonder: What did I do? But human withdrawal is rarely an aggressive strike; it is almost always a protective armor. Until you grasp the difference between hostility and self-defense, you will continue taking other people's inner wounds personally.`,
    keyTakeaway: "Silence is rarely empty; it is usually full of answers that words are too timid to speak."
  },
  {
    number: 2,
    title: 'The Architecture of Withdrawal',
    subtitle: 'Decoding emotional distance before bridges burn',
    excerpt: `Distance does not happen in an instant; it accumulates in fractions of a degree. A call unreturned, an evasive gaze, a joke that deflects rather than connects. Most people interpret distance as rejection, failing to recognize that when an individual feels emotionally depleted, withdrawal is their only remaining tool of equilibrium.`,
    keyTakeaway: "Do not chase someone into their sanctuary; build a space that feels safe enough for them to step back into."
  },
  {
    number: 3,
    title: 'Mixed Signals & Ambivalence',
    subtitle: 'The truth behind inconsistent behavior',
    excerpt: `When words say 'I want this' but actions say 'I am uncommitted,' you are not witnessing mystery — you are witnessing conflict. Ambivalence is not cruelty; it is the friction between what someone desires and what they fear they are incapable of sustaining.`,
    keyTakeaway: "Inconsistency is never an accident. It is always a reflection of internal divided loyalties."
  },
  {
    number: 4,
    title: 'The Need for Validation',
    subtitle: 'How uncertainty distorts our perception',
    excerpt: `When we lack internal grounding, every ambiguous glance or delayed text becomes an existential trial. We place our peace of mind on loan to people who often do not even know what they feel about themselves. Reclaiming clarity starts with refusing to outsource your dignity.`,
    keyTakeaway: "The moment you demand reassurance from someone confused, you hand them the power to confirm your deepest doubts."
  },
  {
    number: 5,
    title: 'Boundaries Without Guilt',
    subtitle: 'Protecting your energy without building a fortress',
    excerpt: `A boundary is not a threat or an ultimatum. It is simply a statement of what is tolerable for your nervous system. When delivered with calmness rather than indignation, a boundary ceases to be an attack and becomes an invitation to genuine intimacy.`,
    keyTakeaway: "You do not need to raise your voice when your boundaries are rooted in self-respect."
  },
  {
    number: 6,
    title: 'The 30-Day Awareness Practice',
    subtitle: 'Daily exercises for emotional clarity',
    excerpt: `Transforming intellectual knowledge into reflexive wisdom requires daily calibration. Through short, five-minute observational practices, you begin to detect micro-expressions, conversational deflections, and your own reactivity before it takes the wheel.`,
    keyTakeaway: "Observation without judgment is the highest form of emotional intelligence."
  }
];

export const BOOK_DETAILS = {
  title: "THE THINGS PEOPLE FEEL... BUT NEVER SAY",
  subtitle: "A psychological guide to human behavior and relationship dynamics we all experience — but rarely talk about.",
  author: "DANIEL",
  tagline: "HUMAN NATURE. REAL INSIGHTS.",
  price: 19,
  originalPrice: 38,
  discount: "50% Launch Exclusive",
  formats: ["EPUB (Apple Books, Kobo)", "PDF (High-Res Printable & Tablet)", "MOBI (Kindle)", "Audio Excerpt Companion (MP3)"],
  pageCount: "264 pages",
  readingTime: "approx. 4.5 hours",
  releaseDate: "Special Author Edition",
  satisfactionGuarantee: "30-Day Unconditional Refund Policy"
};

const examMeta = {
  title: "GregMat GRE Vocab Group 1 Exam — Day 4",
  day: 4,
  wordRange: "Words 91–120",
  totalWords: 30,
  words: ["Abstain", "Approbation", "Cherish", "Corroborate", "Disparate", "Emulate", "Enervate", "Ephemeral", "Fervid", "Garrulous", "Incendiary", "Inimical", "Intimate", "Invigorate", "Mitigate", "Obsolete", "Opaque", "Paradigmatic", "Pedantic", "Placid", "Polemical", "Precipitate", "Profundity", "Prophetic", "Prudent", "Punctilious", "Recondite", "Scrupulous", "Tranquil", "Vacillate"]
};

const examLevels = {
  basic: {
    key: "basic",
    name: "Basic Easy Recall Exam",
    difficulty: "Easy to lower-medium",
    marks: 40,
    minutes: 25,
    purpose: "Meaning, synonym, antonym, and simple usage recall",
    bestFor: "Best for first revision. This exam checks meaning, GRE synonyms, antonyms, simple usage, and single-blank recall from today’s 30 words.",
    buttonText: "Start Basic Exam",
    partSize: 10,
    questions: [
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "To abstain is to:",
    "options": [
      "participate eagerly",
      "refrain deliberately",
      "approve officially",
      "speak indirectly"
    ],
    "answer": "refrain deliberately",
    "relatedWord": "Abstain",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Approbation most nearly means:",
    "options": [
      "official approval or praise",
      "sudden anger",
      "deep confusion",
      "moral hesitation"
    ],
    "answer": "official approval or praise",
    "relatedWord": "Approbation",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "To corroborate a claim is to:",
    "options": [
      "weaken it",
      "support it with evidence",
      "make it obsolete",
      "avoid discussing it"
    ],
    "answer": "support it with evidence",
    "relatedWord": "Corroborate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Disparate things are:",
    "options": [
      "calm and peaceful",
      "fundamentally different",
      "highly talkative",
      "deeply ethical"
    ],
    "answer": "fundamentally different",
    "relatedWord": "Disparate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Ephemeral means:",
    "options": [
      "short-lived",
      "argumentative",
      "hard to understand",
      "careful and wise"
    ],
    "answer": "short-lived",
    "relatedWord": "Ephemeral",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Garrulous describes someone who is:",
    "options": [
      "very quiet",
      "excessively talkative",
      "morally careful",
      "future-predicting"
    ],
    "answer": "excessively talkative",
    "relatedWord": "Garrulous",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Inimical most nearly means:",
    "options": [
      "harmful or hostile",
      "model-like",
      "peaceful",
      "outdated"
    ],
    "answer": "harmful or hostile",
    "relatedWord": "Inimical",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Opaque language is:",
    "options": [
      "clear",
      "unclear",
      "ethical",
      "obsolete"
    ],
    "answer": "unclear",
    "relatedWord": "Opaque",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Profundity refers to:",
    "options": [
      "depth of thought or meaning",
      "sudden action",
      "official praise",
      "excessive talking"
    ],
    "answer": "depth of thought or meaning",
    "relatedWord": "Profundity",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "To vacillate is to:",
    "options": [
      "strengthen a decision",
      "waver between choices",
      "make something milder",
      "predict the future"
    ],
    "answer": "waver between choices",
    "relatedWord": "Vacillate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of cherish:",
    "options": [
      "treasure",
      "neglect",
      "refute",
      "exacerbate"
    ],
    "answer": "treasure",
    "relatedWord": "Cherish",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of emulate:",
    "options": [
      "imitate",
      "condemn",
      "hide",
      "relax"
    ],
    "answer": "imitate",
    "relatedWord": "Emulate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of enervate:",
    "options": [
      "debilitate",
      "energize",
      "endorse",
      "clarify"
    ],
    "answer": "debilitate",
    "relatedWord": "Enervate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of fervid:",
    "options": [
      "ardent",
      "apathetic",
      "obscure",
      "prudent"
    ],
    "answer": "ardent",
    "relatedWord": "Fervid",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of incendiary:",
    "options": [
      "inflammatory",
      "transparent",
      "tranquil",
      "meticulous"
    ],
    "answer": "inflammatory",
    "relatedWord": "Incendiary",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of mitigate:",
    "options": [
      "alleviate",
      "worsen",
      "vacillate",
      "insinuate"
    ],
    "answer": "alleviate",
    "relatedWord": "Mitigate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of obsolete:",
    "options": [
      "outdated",
      "current",
      "lucid",
      "serene"
    ],
    "answer": "outdated",
    "relatedWord": "Obsolete",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of paradigmatic:",
    "options": [
      "exemplary",
      "reckless",
      "murky",
      "brief"
    ],
    "answer": "exemplary",
    "relatedWord": "Paradigmatic",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of prudent:",
    "options": [
      "judicious",
      "rash",
      "combative",
      "arcane"
    ],
    "answer": "judicious",
    "relatedWord": "Prudent",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the GRE synonym of recondite:",
    "options": [
      "arcane",
      "obvious",
      "peaceful",
      "talkative"
    ],
    "answer": "arcane",
    "relatedWord": "Recondite",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Antonym of enervate:",
    "options": [
      "invigorate",
      "sap",
      "debilitate",
      "exhaust"
    ],
    "answer": "invigorate",
    "relatedWord": "Enervate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Antonym of opaque:",
    "options": [
      "transparent",
      "murky",
      "cryptic",
      "obscure"
    ],
    "answer": "transparent",
    "relatedWord": "Opaque",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Antonym of prudent:",
    "options": [
      "rash",
      "cautious",
      "judicious",
      "sensible"
    ],
    "answer": "rash",
    "relatedWord": "Prudent",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Antonym of tranquil:",
    "options": [
      "chaotic",
      "serene",
      "restful",
      "placid"
    ],
    "answer": "chaotic",
    "relatedWord": "Tranquil",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Antonym of scrupulous:",
    "options": [
      "dishonest",
      "ethical",
      "principled",
      "conscientious"
    ],
    "answer": "dishonest",
    "relatedWord": "Scrupulous",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Antonym of obsolete:",
    "options": [
      "modern",
      "archaic",
      "outmoded",
      "antiquated"
    ],
    "answer": "modern",
    "relatedWord": "Obsolete",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The committee members chose to _____ from voting because of a conflict of interest.",
    "options": [
      "abstain",
      "emulate",
      "vacillate",
      "invigorate"
    ],
    "answer": "abstain",
    "relatedWord": "Abstain",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The evidence did not contradict the witness; it helped _____ her account.",
    "options": [
      "corroborate",
      "enervate",
      "cherish",
      "obscure"
    ],
    "answer": "corroborate",
    "relatedWord": "Corroborate",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The oppressive heat began to _____ the workers before noon.",
    "options": [
      "enervate",
      "invigorate",
      "mitigate",
      "cherish"
    ],
    "answer": "enervate",
    "relatedWord": "Enervate",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The policy was meant to _____ the damage caused by flooding.",
    "options": [
      "mitigate",
      "precipitate",
      "emulate",
      "intimate"
    ],
    "answer": "mitigate",
    "relatedWord": "Mitigate",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The old software became _____ after the new platform was released.",
    "options": [
      "obsolete",
      "prophetic",
      "placid",
      "scrupulous"
    ],
    "answer": "obsolete",
    "relatedWord": "Obsolete",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The scholar’s argument was powerful but buried under _____ terminology.",
    "options": [
      "recondite",
      "tranquil",
      "fervid",
      "current"
    ],
    "answer": "recondite",
    "relatedWord": "Recondite",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The judge was _____ about avoiding even the appearance of bias.",
    "options": [
      "scrupulous",
      "garrulous",
      "ephemeral",
      "rash"
    ],
    "answer": "scrupulous",
    "relatedWord": "Scrupulous",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The leader continued to _____ between two policies, weakening public confidence.",
    "options": [
      "vacillate",
      "decide",
      "corroborate",
      "cherish"
    ],
    "answer": "vacillate",
    "relatedWord": "Vacillate",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: to hint indirectly.",
    "answers": [
      "intimate"
    ],
    "relatedWord": "Intimate",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: to give energy or strength.",
    "answers": [
      "invigorate"
    ],
    "relatedWord": "Invigorate",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: serving as a model example.",
    "answers": [
      "paradigmatic"
    ],
    "relatedWord": "Paradigmatic",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: overly concerned with tiny rules or details.",
    "answers": [
      "pedantic"
    ],
    "relatedWord": "Pedantic",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: strongly argumentative or controversial.",
    "answers": [
      "polemical"
    ],
    "relatedWord": "Polemical",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: extremely careful about details and rules.",
    "answers": [
      "punctilious"
    ],
    "relatedWord": "Punctilious",
    "marks": 1
  }
]
  },
  medium: {
    key: "medium",
    name: "Medium Mixed Exam",
    difficulty: "Medium",
    marks: 35,
    minutes: 25,
    purpose: "Balanced mixed practice with all major question types",
    bestFor: "Best for balanced practice. Includes MCQ, single blank, double blank, triple blank, sentence equivalence, typed answer, and confusing-word questions.",
    buttonText: "Start Medium Exam",
    partSize: 9,
    questions: [
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Which word means formal approval or praise?",
    "options": [
      "approbation",
      "profundity",
      "vacillation",
      "opacity"
    ],
    "answer": "approbation",
    "relatedWord": "Approbation",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Which word means harmful or hostile?",
    "options": [
      "inimical",
      "placid",
      "paradigmatic",
      "prudent"
    ],
    "answer": "inimical",
    "relatedWord": "Inimical",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Which word means excessively talkative?",
    "options": [
      "garrulous",
      "punctilious",
      "opaque",
      "tranquil"
    ],
    "answer": "garrulous",
    "relatedWord": "Garrulous",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Which word means difficult to understand because it is specialized or obscure?",
    "options": [
      "recondite",
      "ephemeral",
      "incendiary",
      "fervid"
    ],
    "answer": "recondite",
    "relatedWord": "Recondite",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the closest synonym of fervid:",
    "options": [
      "zealous",
      "apathetic",
      "obsolete",
      "murky"
    ],
    "answer": "zealous",
    "relatedWord": "Fervid",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the closest synonym of precipitate as an adjective:",
    "options": [
      "rash",
      "deliberate",
      "tranquil",
      "lucid"
    ],
    "answer": "rash",
    "relatedWord": "Precipitate",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the best antonym of punctilious:",
    "options": [
      "careless",
      "meticulous",
      "scrupulous",
      "precise"
    ],
    "answer": "careless",
    "relatedWord": "Punctilious",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "MCQ",
    "question": "Choose the best antonym of polemical:",
    "options": [
      "conciliatory",
      "contentious",
      "combative",
      "argumentative"
    ],
    "answer": "conciliatory",
    "relatedWord": "Polemical",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "Although the village looked _____, the report found deep political tension beneath the surface.",
    "options": [
      "placid",
      "incendiary",
      "obsolete",
      "garrulous"
    ],
    "answer": "placid",
    "relatedWord": "Placid",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The editorial became so _____ that readers seeking balanced analysis dismissed it as an attack.",
    "options": [
      "polemical",
      "tranquil",
      "prudent",
      "ephemeral"
    ],
    "answer": "polemical",
    "relatedWord": "Polemical",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The court considered factors that might _____ the defendant’s responsibility.",
    "options": [
      "mitigate",
      "emulate",
      "vacillate",
      "obscure"
    ],
    "answer": "mitigate",
    "relatedWord": "Mitigate",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The author’s warning about digital surveillance now seems almost _____.",
    "options": [
      "prophetic",
      "pedantic",
      "obsolete",
      "placid"
    ],
    "answer": "prophetic",
    "relatedWord": "Prophetic",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The company made a _____ choice by delaying expansion until reliable data were available.",
    "options": [
      "prudent",
      "precipitate",
      "incendiary",
      "opaque"
    ],
    "answer": "prudent",
    "relatedWord": "Prudent",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The professor’s insistence on trivial definitions made the discussion feel _____.",
    "options": [
      "pedantic",
      "scrupulous",
      "serene",
      "ephemeral"
    ],
    "answer": "pedantic",
    "relatedWord": "Pedantic",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The new evidence helped _____ the hypothesis that the decline was caused by pollution.",
    "options": [
      "corroborate",
      "enervate",
      "abstain",
      "vacillate"
    ],
    "answer": "corroborate",
    "relatedWord": "Corroborate",
    "marks": 1
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "The manager’s public statement was designed to be _____, but its vague language made the policy almost _____.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "reassuring",
          "incendiary",
          "fervid",
          "archaic"
        ],
        "answer": "reassuring"
      },
      {
        "label": "Blank 2",
        "options": [
          "opaque",
          "tranquil",
          "scrupulous",
          "obsolete"
        ],
        "answer": "opaque"
      }
    ],
    "relatedWord": "Opaque",
    "marks": 2
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "The scientist refused to make a _____ claim because the available evidence did not yet _____ the theory.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "precipitate",
          "prudent",
          "placid",
          "polemical"
        ],
        "answer": "precipitate"
      },
      {
        "label": "Blank 2",
        "options": [
          "corroborate",
          "enervate",
          "vacillate",
          "cherish"
        ],
        "answer": "corroborate"
      }
    ],
    "relatedWord": "Corroborate",
    "marks": 2
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "The reformer’s _____ defense of civil rights helped _____ a movement that had grown tired and cautious.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "fervid",
          "pedantic",
          "obsolete",
          "recondite"
        ],
        "answer": "fervid"
      },
      {
        "label": "Blank 2",
        "options": [
          "invigorate",
          "enervate",
          "mitigate",
          "abstain"
        ],
        "answer": "invigorate"
      }
    ],
    "relatedWord": "Invigorate",
    "marks": 2
  },
  {
    "type": "triple",
    "label": "Triple Blank",
    "question": "Because the committee continued to _____ between policies, investors found its strategy _____ rather than transparent, and confidence proved _____.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "vacillate",
          "abstain",
          "cherish"
        ],
        "answer": "vacillate"
      },
      {
        "label": "Blank 2",
        "options": [
          "opaque",
          "placid",
          "scrupulous"
        ],
        "answer": "opaque"
      },
      {
        "label": "Blank 3",
        "options": [
          "ephemeral",
          "paradigmatic",
          "punctilious"
        ],
        "answer": "ephemeral"
      }
    ],
    "relatedWord": "Vacillate",
    "marks": 3
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "The report’s explanation was so _____ that even specialists disagreed about its meaning.",
    "options": [
      "opaque",
      "cryptic",
      "prudent",
      "tranquil",
      "fervid",
      "scrupulous"
    ],
    "answers": [
      "opaque",
      "cryptic"
    ],
    "relatedWord": "Opaque",
    "marks": 2
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "Her handling of the funds was _____, leaving no room for suspicion of corruption.",
    "options": [
      "scrupulous",
      "conscientious",
      "garrulous",
      "incendiary",
      "ephemeral",
      "polemical"
    ],
    "answers": [
      "scrupulous",
      "conscientious"
    ],
    "relatedWord": "Scrupulous",
    "marks": 2
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "The essay is a _____ case of how a single example can represent a broader intellectual movement.",
    "options": [
      "paradigmatic",
      "exemplary",
      "obsolete",
      "inimical",
      "recondite",
      "hasty"
    ],
    "answers": [
      "paradigmatic",
      "exemplary"
    ],
    "relatedWord": "Paradigmatic",
    "marks": 2
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: no longer used because something newer has replaced it.",
    "answers": [
      "obsolete"
    ],
    "relatedWord": "Obsolete",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: peaceful and undisturbed.",
    "answers": [
      "tranquil"
    ],
    "relatedWord": "Tranquil",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: depth of thought or meaning.",
    "answers": [
      "profundity"
    ],
    "relatedWord": "Profundity",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: to value deeply or hold dear.",
    "answers": [
      "cherish"
    ],
    "relatedWord": "Cherish",
    "marks": 1
  },
  {
    "type": "typed",
    "label": "Typed Answer",
    "question": "Type the word that means: to imitate in order to equal or surpass.",
    "answers": [
      "emulate"
    ],
    "relatedWord": "Emulate",
    "marks": 1
  }
]
  },
  hard: {
    key: "hard",
    name: "Hard GRE-Like Exam",
    difficulty: "Hard",
    marks: 30,
    minutes: 20,
    purpose: "Real GRE-style challenge under tighter time pressure",
    bestFor: "Best for serious GRE-style practice. Focuses on sentence logic, double blanks, triple blanks, sentence equivalence, subtle vocabulary choices, tone, and advanced contextual reasoning.",
    buttonText: "Start Hard Exam",
    partSize: 9,
    questions: [
  {
    "type": "single",
    "label": "Single Blank",
    "question": "Although the theory was initially dismissed as _____, later experiments showed that its technical complexity concealed genuine explanatory power.",
    "options": [
      "recondite",
      "obsolete",
      "placid",
      "garrulous"
    ],
    "answer": "recondite",
    "relatedWord": "Recondite",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The leader’s _____ reply avoided inflaming the dispute, but critics still demanded a clearer position.",
    "options": [
      "prudent",
      "incendiary",
      "polemical",
      "precipitate"
    ],
    "answer": "prudent",
    "relatedWord": "Prudent",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The committee’s decision to approve the project without reviewing the new safety data was dangerously _____.",
    "options": [
      "precipitate",
      "scrupulous",
      "tranquil",
      "paradigmatic"
    ],
    "answer": "precipitate",
    "relatedWord": "Precipitate",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The novel’s surface calm is misleading; beneath its _____ tone lies a profound critique of social alienation.",
    "options": [
      "tranquil",
      "fervid",
      "pedantic",
      "obsolete"
    ],
    "answer": "tranquil",
    "relatedWord": "Tranquil",
    "marks": 1
  },
  {
    "type": "single",
    "label": "Single Blank",
    "question": "The witness did not state the accusation directly but _____ that senior officials had altered the records.",
    "options": [
      "intimated",
      "cherished",
      "mitigated",
      "abstained"
    ],
    "answer": "intimated",
    "relatedWord": "Intimate",
    "marks": 1
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "The critic argued that the book’s style was not merely scholarly but _____, since it buried a simple argument beneath needless distinctions; nevertheless, its historical claims showed real _____.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "pedantic",
          "placid",
          "ephemeral",
          "prophetic"
        ],
        "answer": "pedantic"
      },
      {
        "label": "Blank 2",
        "options": [
          "profundity",
          "opacity",
          "vacillation",
          "approbation"
        ],
        "answer": "profundity"
      }
    ],
    "relatedWord": "Pedantic",
    "marks": 2
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "The administration hoped the new evidence would _____ public anger, but the minister’s _____ remarks instead intensified the crisis.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "mitigate",
          "precipitate",
          "emulate",
          "obscure"
        ],
        "answer": "mitigate"
      },
      {
        "label": "Blank 2",
        "options": [
          "incendiary",
          "tranquil",
          "punctilious",
          "obsolete"
        ],
        "answer": "incendiary"
      }
    ],
    "relatedWord": "Incendiary",
    "marks": 2
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "The framework became _____ not because it was old, but because it could no longer explain _____ conditions in contemporary markets.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "obsolete",
          "prophetic",
          "scrupulous",
          "placid"
        ],
        "answer": "obsolete"
      },
      {
        "label": "Blank 2",
        "options": [
          "disparate",
          "tranquil",
          "punctilious",
          "cherished"
        ],
        "answer": "disparate"
      }
    ],
    "relatedWord": "Obsolete",
    "marks": 2
  },
  {
    "type": "double",
    "label": "Double Blank",
    "question": "Although the candidate tried to appear decisive, he continued to _____ between incompatible policies, a habit _____ to effective leadership.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "vacillate",
          "corroborate",
          "abstain",
          "emulate"
        ],
        "answer": "vacillate"
      },
      {
        "label": "Blank 2",
        "options": [
          "inimical",
          "ephemeral",
          "paradigmatic",
          "fervid"
        ],
        "answer": "inimical"
      }
    ],
    "relatedWord": "Vacillate",
    "marks": 2
  },
  {
    "type": "triple",
    "label": "Triple Blank",
    "question": "The review board gave its _____ only after a _____ examination of the data, rejecting a more _____ approval process that would have ignored inconsistencies.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "approbation",
          "vacillation",
          "opacity"
        ],
        "answer": "approbation"
      },
      {
        "label": "Blank 2",
        "options": [
          "punctilious",
          "garrulous",
          "incendiary"
        ],
        "answer": "punctilious"
      },
      {
        "label": "Blank 3",
        "options": [
          "precipitate",
          "prudent",
          "tranquil"
        ],
        "answer": "precipitate"
      }
    ],
    "relatedWord": "Approbation",
    "marks": 3
  },
  {
    "type": "triple",
    "label": "Triple Blank",
    "question": "The speaker’s _____ rhetoric briefly energized supporters, but the enthusiasm was _____, and the movement soon needed a calmer strategy to _____ public fear.",
    "blanks": [
      {
        "label": "Blank 1",
        "options": [
          "fervid",
          "opaque",
          "placid"
        ],
        "answer": "fervid"
      },
      {
        "label": "Blank 2",
        "options": [
          "ephemeral",
          "scrupulous",
          "recondite"
        ],
        "answer": "ephemeral"
      },
      {
        "label": "Blank 3",
        "options": [
          "mitigate",
          "emulate",
          "corroborate"
        ],
        "answer": "mitigate"
      }
    ],
    "relatedWord": "Fervid",
    "marks": 3
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "The committee praised the proposal as a _____ example of evidence-based planning.",
    "options": [
      "paradigmatic",
      "exemplary",
      "opaque",
      "polemical",
      "obsolete",
      "garrulous"
    ],
    "answers": [
      "paradigmatic",
      "exemplary"
    ],
    "relatedWord": "Paradigmatic",
    "marks": 2
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "The treaty negotiations required language that was _____ rather than combative.",
    "options": [
      "conciliatory",
      "pacifying",
      "polemical",
      "incendiary",
      "recondite",
      "rash"
    ],
    "answers": [
      "conciliatory",
      "pacifying"
    ],
    "relatedWord": "Polemical",
    "marks": 2
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "The new training program was designed to _____ a workforce exhausted by years of repetitive procedures.",
    "options": [
      "invigorate",
      "revitalize",
      "enervate",
      "obscure",
      "abstain",
      "vacillate"
    ],
    "answers": [
      "invigorate",
      "revitalize"
    ],
    "relatedWord": "Invigorate",
    "marks": 2
  },
  {
    "type": "se",
    "label": "Sentence Equivalence",
    "question": "The scholar’s treatment of the sources was _____, carefully distinguishing evidence from speculation.",
    "options": [
      "scrupulous",
      "conscientious",
      "ephemeral",
      "incendiary",
      "garrulous",
      "obsolete"
    ],
    "answers": [
      "scrupulous",
      "conscientious"
    ],
    "relatedWord": "Scrupulous",
    "marks": 2
  },
  {
    "type": "mcq",
    "label": "Contextual MCQ",
    "question": "In the sentence, “The policy’s apparent calm belied tensions that would soon erupt,” which Day 4 word best captures the apparent calm?",
    "options": [
      "placid",
      "incendiary",
      "polemical",
      "recondite"
    ],
    "answer": "placid",
    "relatedWord": "Placid",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "Tone MCQ",
    "question": "A speech that deliberately turns disagreement into anger is best described as:",
    "options": [
      "incendiary",
      "tranquil",
      "scrupulous",
      "obsolete"
    ],
    "answer": "incendiary",
    "relatedWord": "Incendiary",
    "marks": 1
  },
  {
    "type": "mcq",
    "label": "Contextual MCQ",
    "question": "A researcher who refuses to overstate early findings is showing which quality?",
    "options": [
      "prudence",
      "vacillation",
      "opacity",
      "garrulity"
    ],
    "answer": "prudence",
    "relatedWord": "Prudent",
    "marks": 1
  }
]
  }
};

let currentLevelKey = null;
let currentLevel = null;
let currentPart = 0;
let answers = {};
let timerInterval = null;
let remainingSeconds = 0;
let studentName = "Student";
let submitted = false;

const screens = {
  menu: document.getElementById("menuScreen"),
  instruction: document.getElementById("instructionScreen"),
  exam: document.getElementById("examScreen"),
  result: document.getElementById("resultScreen"),
  exit: document.getElementById("exitScreen")
};

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active-screen"));
  screens[name].classList.add("active-screen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>\"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function optionLetter(index) { return String.fromCharCode(65 + index); }

function init() {
  renderExamCards();
  document.getElementById("backToMenuFromInstruction").addEventListener("click", () => showScreen("menu"));
  document.getElementById("startExamBtn").addEventListener("click", startExam);
  document.getElementById("prevPartBtn").addEventListener("click", () => changePart(-1));
  document.getElementById("nextPartBtn").addEventListener("click", () => changePart(1));
  document.getElementById("submitExamBtn").addEventListener("click", () => { if (confirm("Submit this exam now?")) submitExam(false); });
  document.getElementById("returnFromExitBtn").addEventListener("click", () => showScreen("menu"));
}

function renderExamCards() {
  const container = document.getElementById("examCards");
  container.innerHTML = Object.values(examLevels).map(level => `
    <article class="exam-card">
      <h3>${escapeHtml(level.name)}</h3>
      <div class="exam-meta">
        <span class="pill">${level.marks} marks</span>
        <span class="pill warn">${level.minutes} minutes</span>
        <span class="pill">${escapeHtml(level.difficulty)}</span>
      </div>
      <p><strong>Purpose:</strong> ${escapeHtml(level.purpose)}</p>
      <p>${escapeHtml(level.bestFor)}</p>
      <button class="primary-btn" onclick="selectExam('${level.key}')">${escapeHtml(level.buttonText)}</button>
    </article>
  `).join("");
}

function selectExam(levelKey) {
  studentName = document.getElementById("studentName").value.trim() || "Student";
  currentLevelKey = levelKey;
  currentLevel = examLevels[levelKey];
  currentPart = 0;
  answers = {};
  submitted = false;
  clearInterval(timerInterval);
  const parts = Math.ceil(currentLevel.questions.length / currentLevel.partSize);
  document.getElementById("instructionContent").innerHTML = `
    <h2>You selected: ${escapeHtml(currentLevel.name)}</h2>
    <p>${escapeHtml(currentLevel.bestFor)}</p>
    <div class="instruction-list">
      <div class="instruction-item"><span>Student</span><strong>${escapeHtml(studentName)}</strong></div>
      <div class="instruction-item"><span>Difficulty</span><strong>${escapeHtml(currentLevel.difficulty)}</strong></div>
      <div class="instruction-item"><span>Total Marks</span><strong>${currentLevel.marks}</strong></div>
      <div class="instruction-item"><span>Time Limit</span><strong>${currentLevel.minutes} minutes</strong></div>
      <div class="instruction-item"><span>Questions</span><strong>${currentLevel.questions.length}</strong></div>
      <div class="instruction-item"><span>Parts</span><strong>${parts}</strong></div>
    </div>
    <p><strong>Instruction:</strong> Answer all questions carefully. You can move between parts. Your answers will be saved. The timer continues globally and will not restart when you change parts.</p>
  `;
  showScreen("instruction");
}

function startExam() {
  remainingSeconds = currentLevel.minutes * 60;
  currentPart = 0;
  showScreen("exam");
  renderCurrentPart();
  updateStatusBar();
  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateStatusBar();
    if (remainingSeconds <= 0) submitExam(true);
  }, 1000);
}

function renderCurrentPart() {
  const start = currentPart * currentLevel.partSize;
  const end = Math.min(start + currentLevel.partSize, currentLevel.questions.length);
  const questions = currentLevel.questions.slice(start, end);
  document.getElementById("questionsContainer").innerHTML = questions.map((q, idx) => renderQuestion(q, start + idx)).join("");
  const totalParts = Math.ceil(currentLevel.questions.length / currentLevel.partSize);
  document.getElementById("prevPartBtn").style.display = currentPart === 0 ? "none" : "inline-flex";
  document.getElementById("nextPartBtn").style.display = currentPart === totalParts - 1 ? "none" : "inline-flex";
  document.getElementById("submitExamBtn").style.display = currentPart === totalParts - 1 ? "inline-flex" : "none";
  updateStatusBar();
}

function renderQuestion(q, index) {
  const qid = `q${index}`;
  let body = "";
  if (q.type === "mcq" || q.type === "single") body = renderOptionButtons(q.options, answers[qid], `selectOption(${index}, '$value')`);
  if (q.type === "typed") body = `<input class="typed-answer" type="text" placeholder="Type your answer" value="${escapeHtml(answers[qid] || "")}" oninput="saveTyped(${index}, this.value)" />`;
  if (q.type === "double" || q.type === "triple") body = renderBlankQuestion(q, index);
  if (q.type === "se") body = renderSentenceEquivalence(q, index);
  return `
    <article class="question-card">
      <div class="question-top">
        <span class="q-number">Question ${index + 1}</span>
        <span class="q-type">${escapeHtml(q.label || "MCQ")}</span>
        <span class="q-marks">${q.marks} mark${q.marks > 1 ? "s" : ""}</span>
      </div>
      <p class="question-text">${escapeHtml(q.question)}</p>
      ${body}
    </article>
  `;
}

function renderOptionButtons(options, selected, handlerTemplate) {
  return `<div class="option-grid">${options.map((opt, i) => {
    const picked = normalize(selected) === normalize(opt);
    const handler = handlerTemplate.replace("$value", escapeJsArg(opt));
    return `<button type="button" class="option-btn ${picked ? "is-picked" : ""}" onclick="${handler}"><span class="option-label">${optionLetter(i)}.</span><span>${escapeHtml(opt)}</span></button>`;
  }).join("")}</div>`;
}

function escapeJsArg(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, " ");
}

function renderBlankQuestion(q, index) {
  const gridClass = q.type === "triple" ? "blank-grid triple" : "blank-grid";
  const stored = answers[`q${index}`] || [];
  return `<div class="${gridClass}">${q.blanks.map((blank, bIdx) => `
    <div class="blank-column">
      <h4>${escapeHtml(blank.label)}</h4>
      ${renderOptionButtons(blank.options, stored[bIdx], `selectBlank(${index}, ${bIdx}, '$value')`)}
    </div>
  `).join("")}</div>`;
}

function renderSentenceEquivalence(q, index) {
  const selected = answers[`q${index}`] || [];
  return `<div class="option-grid">${q.options.map((opt, i) => {
    const picked = selected.map(normalize).includes(normalize(opt));
    return `<button type="button" class="option-btn ${picked ? "is-picked" : ""}" onclick="toggleSE(${index}, '${escapeJsArg(opt)}')"><span class="option-label">${optionLetter(i)}.</span><span>${escapeHtml(opt)}</span></button>`;
  }).join("")}</div><p class="tiny-note">Select exactly two answers.</p>`;
}

function selectOption(index, value) { answers[`q${index}`] = value; renderCurrentPart(); }
function saveTyped(index, value) { answers[`q${index}`] = value; updateStatusBar(); }
function selectBlank(index, blankIndex, value) {
  const qid = `q${index}`;
  const current = Array.isArray(answers[qid]) ? answers[qid] : [];
  current[blankIndex] = value;
  answers[qid] = current;
  renderCurrentPart();
}
function toggleSE(index, value) {
  const qid = `q${index}`;
  const current = Array.isArray(answers[qid]) ? [...answers[qid]] : [];
  const pos = current.map(normalize).indexOf(normalize(value));
  if (pos >= 0) current.splice(pos, 1);
  else {
    if (current.length >= 2) current.shift();
    current.push(value);
  }
  answers[qid] = current;
  renderCurrentPart();
}

function scrollToFirstQuestionOfPart() {
  const questionsContainer = document.getElementById("questionsContainer");
  const firstQuestion = questionsContainer?.querySelector(".question-card");
  if (!questionsContainer || !firstQuestion) return;

  requestAnimationFrame(() => {
    const statusBar = document.getElementById("statusBar");
    const isMobile = window.matchMedia("(max-width: 620px)").matches;
    const stickyOffset = isMobile ? 12 : ((statusBar?.offsetHeight || 0) + 18);
    const targetTop = questionsContainer.getBoundingClientRect().top + window.pageYOffset - stickyOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth"
    });

    firstQuestion.setAttribute("tabindex", "-1");
    try {
      firstQuestion.focus({ preventScroll: true });
    } catch (error) {
      firstQuestion.focus();
    }
  });
}

function changePart(delta) {
  const totalParts = Math.ceil(currentLevel.questions.length / currentLevel.partSize);
  const nextPart = Math.max(0, Math.min(totalParts - 1, currentPart + delta));
  if (nextPart === currentPart) return;
  currentPart = nextPart;
  renderCurrentPart();
  scrollToFirstQuestionOfPart();
}

function answeredCount() {
  return currentLevel.questions.reduce((count, q, i) => {
    const ans = answers[`q${i}`];
    if (q.type === "double" || q.type === "triple") return count + (Array.isArray(ans) && ans.filter(Boolean).length > 0 ? 1 : 0);
    if (q.type === "se") return count + (Array.isArray(ans) && ans.length > 0 ? 1 : 0);
    return count + (String(ans ?? "").trim() ? 1 : 0);
  }, 0);
}

function updateStatusBar() {
  if (!currentLevel) return;
  const totalParts = Math.ceil(currentLevel.questions.length / currentLevel.partSize);
  const start = currentPart * currentLevel.partSize + 1;
  const end = Math.min((currentPart + 1) * currentLevel.partSize, currentLevel.questions.length);
  const mins = Math.max(0, Math.floor(remainingSeconds / 60));
  const secs = Math.max(0, remainingSeconds % 60);
  const timeText = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")} left`;
  const timerClass = remainingSeconds <= 300 ? "status-chip timer warning" : "status-chip timer";
  document.getElementById("statusBar").innerHTML = `
    <span class="status-chip">${escapeHtml(studentName)}</span>
    <span class="status-chip">${escapeHtml(currentLevel.name)}</span>
    <span class="${timerClass}">${timeText}</span>
    <span class="status-chip">Part ${currentPart + 1} of ${totalParts}</span>
    <span class="status-chip">Questions ${start}–${end} of ${currentLevel.questions.length}</span>
    <span class="status-chip">Answered ${answeredCount()}/${currentLevel.questions.length}</span>
    <span class="status-chip">${currentLevel.marks} marks</span>
  `;
}

function submitExam(autoSubmitted) {
  if (submitted) return;
  submitted = true;
  clearInterval(timerInterval);
  const results = currentLevel.questions.map((q, i) => scoreQuestion(q, answers[`q${i}`], i));
  const obtained = results.reduce((sum, r) => sum + r.score, 0);
  renderResults(results, obtained, autoSubmitted);
  showScreen("result");
}

function scoreQuestion(q, ans, index) {
  let score = 0;
  let details = [];
  if (q.type === "mcq" || q.type === "single") {
    score = normalize(ans) === normalize(q.answer) ? 1 : 0;
  } else if (q.type === "typed") {
    const accepted = q.answers || [];
    score = accepted.map(normalize).includes(normalize(ans)) ? 1 : 0;
  } else if (q.type === "double" || q.type === "triple") {
    const arr = Array.isArray(ans) ? ans : [];
    q.blanks.forEach((blank, bIdx) => {
      const ok = normalize(arr[bIdx]) === normalize(blank.answer);
      if (ok) score++;
      details.push({ label: blank.label, student: arr[bIdx] || "Not answered", correct: blank.answer, correctBool: ok, options: blank.options });
    });
  } else if (q.type === "se") {
    const selected = Array.isArray(ans) ? ans : [];
    const correct = q.answers || [];
    score = selected.filter(s => correct.map(normalize).includes(normalize(s))).length;
    if (selected.length !== correct.length) score = Math.min(score, selected.length);
  }
  return { index, q, studentAnswer: ans, score, correct: score === q.marks, details };
}

function performanceLabel(percent) {
  if (percent >= 85) return "Excellent";
  if (percent >= 70) return "Good";
  if (percent >= 50) return "Needs Revision";
  return "Weak — Review Again";
}

function renderResults(results, obtained, autoSubmitted) {
  const percent = Math.round((obtained / currentLevel.marks) * 100);
  const {strong, weak} = calculateWordStrength(results);
  document.getElementById("resultContent").innerHTML = `
    <div class="result-summary">
      <div class="summary-box"><span>Student</span><strong>${escapeHtml(studentName)}</strong></div>
      <div class="summary-box"><span>Score</span><strong>${obtained}/${currentLevel.marks}</strong></div>
      <div class="summary-box"><span>Percentage</span><strong>${percent}%</strong></div>
      <div class="summary-box"><span>Performance</span><strong>${performanceLabel(percent)}</strong></div>
    </div>
    <div class="panel">
      <h2>${escapeHtml(currentLevel.name)} Result</h2>
      <p>${escapeHtml(examMeta.title)} | ${escapeHtml(examMeta.wordRange)}${autoSubmitted ? " | Auto-submitted when time ended" : ""}</p>
    </div>
    <div class="result-section panel">
      <h3>Strong Words</h3>
      <div class="word-tags">${strong.length ? strong.map(w => `<span class="word-tag">${escapeHtml(w)}</span>`).join("") : "<p>No strong words identified yet.</p>"}</div>
    </div>
    <div class="result-section panel">
      <h3>Weak Words</h3>
      <div class="word-tags">${weak.length ? weak.map(w => `<span class="word-tag weak">${escapeHtml(w)}</span>`).join("") : "<p>No weak words identified. Good work.</p>"}</div>
    </div>
    <div class="result-section">
      <h3>Question-wise Review</h3>
      <div class="review-list">${results.map(renderReviewCard).join("")}</div>
    </div>
    <div class="nav-actions">
      <button class="secondary-btn" onclick="backToMenu()">Back to Main Menu</button>
      <button class="primary-btn" onclick="proceedNextLevel()">Proceed to Next Level Exam</button>
      <button class="ghost-btn" onclick="showScreen('exit')">Exit</button>
    </div>
  `;
}

function calculateWordStrength(results) {
  const map = {};
  examMeta.words.forEach(w => map[w] = {score: 0, marks: 0});
  results.forEach(r => {
    const w = r.q.relatedWord;
    if (!map[w]) map[w] = {score: 0, marks: 0};
    map[w].score += r.score;
    map[w].marks += r.q.marks;
  });
  const strong = [], weak = [];
  Object.entries(map).forEach(([word, stat]) => {
    if (stat.marks === 0) { weak.push(word); return; }
    if (stat.score === stat.marks) strong.push(word);
    else weak.push(word);
  });
  return { strong, weak };
}

function renderReviewCard(r) {
  const q = r.q;
  const status = r.correct ? "Correct" : "Not Correct";
  const statusClass = r.correct ? "status-correct" : "status-wrong";
  return `
    <article class="review-card" id="review-${r.index}">
      <button class="review-head" onclick="toggleReview(${r.index})">
        <span class="review-main">
          <strong>Q${r.index + 1}</strong>
          <span class="pill">${escapeHtml(q.label)}</span>
          <span class="pill">${escapeHtml(q.relatedWord)}</span>
          <span class="${statusClass}">${status}</span>
        </span>
        <strong>${r.score}/${q.marks}</strong>
      </button>
      <div class="review-detail">
        <p><strong>Full question:</strong> ${escapeHtml(q.question)}</p>
        ${renderReviewDetail(r)}
      </div>
    </article>
  `;
}

function renderReviewDetail(r) {
  const q = r.q;
  if (q.type === "mcq" || q.type === "single") {
    return `${renderReviewOptions(q.options, r.studentAnswer, q.answer)}<p><strong>Student answer:</strong> ${escapeHtml(r.studentAnswer || "Not answered")}</p><p><strong>Correct answer:</strong> ${escapeHtml(q.answer)}</p><p><strong>Marks:</strong> ${r.score}/${q.marks}</p>`;
  }
  if (q.type === "typed") {
    return `<p><strong>Student answer:</strong> ${escapeHtml(r.studentAnswer || "Not answered")}</p><p><strong>Accepted answer:</strong> ${escapeHtml(q.answers.join(" / "))}</p><p><strong>Marks:</strong> ${r.score}/${q.marks}</p>`;
  }
  if (q.type === "double" || q.type === "triple") {
    const grid = q.type === "triple" ? "blank-review-grid triple" : "blank-review-grid";
    return `<div class="${grid}">${r.details.map(d => `<div class="blank-review-box"><h4>${escapeHtml(d.label)}</h4>${renderReviewOptions(d.options, d.student, d.correct)}<p><strong>Student:</strong> ${escapeHtml(d.student)}</p><p><strong>Correct:</strong> ${escapeHtml(d.correct)}</p><p><strong>Status:</strong> ${d.correctBool ? "Correct" : "Wrong"}</p></div>`).join("")}</div><p><strong>Marks:</strong> ${r.score}/${q.marks}</p>`;
  }
  if (q.type === "se") {
    const selected = Array.isArray(r.studentAnswer) ? r.studentAnswer : [];
    return `${renderSEReviewOptions(q.options, selected, q.answers)}<p><strong>Student selected:</strong> ${escapeHtml(selected.length ? selected.join(" / ") : "Not answered")}</p><p><strong>Correct pair:</strong> ${escapeHtml(q.answers.join(" / "))}</p><p><strong>Marks:</strong> ${r.score}/${q.marks}</p>`;
  }
  return "";
}

function renderReviewOptions(options, student, correct) {
  return `<div class="review-options">${options.map((opt, i) => {
    const isStudent = normalize(student) === normalize(opt);
    const isCorrect = normalize(correct) === normalize(opt);
    const cls = `${isCorrect ? " correct" : ""}${isStudent ? " student" : ""}`;
    return `<div class="review-option${cls}"><strong>${optionLetter(i)}.</strong> ${escapeHtml(opt)}</div>`;
  }).join("")}</div>`;
}

function renderSEReviewOptions(options, selected, correct) {
  return `<div class="review-options">${options.map((opt, i) => {
    const isStudent = selected.map(normalize).includes(normalize(opt));
    const isCorrect = correct.map(normalize).includes(normalize(opt));
    const cls = `${isCorrect ? " correct" : ""}${isStudent ? " student" : ""}`;
    return `<div class="review-option${cls}"><strong>${optionLetter(i)}.</strong> ${escapeHtml(opt)}</div>`;
  }).join("")}</div>`;
}

function toggleReview(index) { document.getElementById(`review-${index}`).classList.toggle("open"); }
function backToMenu() { clearInterval(timerInterval); showScreen("menu"); }
function proceedNextLevel() {
  if (currentLevelKey === "basic") selectExam("medium");
  else if (currentLevelKey === "medium") selectExam("hard");
  else {
    document.getElementById("exitScreen").querySelector("h2").textContent = "You have completed all exam levels for today’s 30 words.";
    showScreen("exit");
  }
}

window.selectExam = selectExam;
window.selectOption = selectOption;
window.saveTyped = saveTyped;
window.selectBlank = selectBlank;
window.toggleSE = toggleSE;
window.toggleReview = toggleReview;
window.backToMenu = backToMenu;
window.proceedNextLevel = proceedNextLevel;
window.showScreen = showScreen;

document.addEventListener("DOMContentLoaded", init);

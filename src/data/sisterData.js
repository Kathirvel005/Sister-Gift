export const WHAT_IS_A_SISTER_ITEMS = [
  { text: "Sometimes…", type: "intro" },
  { text: "She is your biggest supporter.", icon: "🌟", color: "#ffd700" },
  { text: "She is your biggest critic.", icon: "🧐", color: "#ff758c" },
  { text: "She knows your secrets.", icon: "🤫", color: "#b388ff" },
  { text: "She fights with you.", icon: "🥊", color: "#ff4b6e" },
  { text: "She laughs with you.", icon: "😂", color: "#ffe58f" },
  { text: "She annoys you.", icon: "😜", color: "#ff9f43" },
  { text: "She protects you.", icon: "🛡️", color: "#54a0ff" },
  { text: "Whether by blood or chosen by heart…", icon: "✨", color: "#ffd700" },
  { text: "But somehow…", type: "bridge" },
  { text: "She is always there.", icon: "💖", color: "#ff2e93", highlight: true }
];

export const SISTER_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Who usually starts the fight?",
    options: [
      { text: "Obviously me (for fun 😈)", reaction: "Classic sibling chaos! 😂" },
      { text: "Her (over the TV remote or food 😤)", reaction: "The remote war never ends! 📺" },
      { text: "It just happens spontaneously 💥", reaction: "Spontaneous combustion of sibling energy! 🔥" },
      { text: "Nobody knows, but drama was 100/10 🎭", reaction: "Oscar-winning drama guaranteed! 🏆" }
    ]
  },
  {
    id: 2,
    question: "Who steals food first?",
    options: [
      { text: "The moment you turn around, the snacks vanish 🍫", reaction: "Snack ninja strikes again! 🥷" },
      { text: "We share peacefully (just kidding, it's war ⚔️)", reaction: "Peace was never an option with pizza! 🍕" },
      { text: "The midnight fridge raider 🕵️‍♀️", reaction: "Caught in 4K at 2:00 AM! 🌙" },
      { text: "Whoever opens the packet first 😋", reaction: "Rule #1: Possession is 100% ownership! 🍟" }
    ]
  },
  {
    id: 3,
    question: "Who gives the best advice?",
    options: [
      { text: "Her (even when I pretend not to listen 🧠)", reaction: "Wisdom wrapped in sibling sarcasm! 💡" },
      { text: "We give terrible advice together and laugh 🤝", reaction: "Partners in questionable decisions! 🤣" },
      { text: "She gives brutally honest truth with zero filter 🎯", reaction: "Truth hurts, but sisters never lie! 💯" },
      { text: "Both of us after 1 AM deep conversations 🌌", reaction: "Late night therapy sessions hit different! ☕" }
    ]
  },
  {
    id: 4,
    question: "Who knows all the family secrets?",
    options: [
      { text: "She has an entire classified FBI folder 📂", reaction: "Top secret clearance granted! 🕵️" },
      { text: "We are each other's secret vault 🔐", reaction: "Guarded better than Fort Knox! 🛡️" },
      { text: "She knows before the news even happens 📡", reaction: "The ultimate family informant! ⚡" },
      { text: "We took an oath of silence (until the next fight 🤫)", reaction: "The blackmail material is ready! 😜" }
    ]
  },
  {
    id: 5,
    question: "Who says “I'm not angry” while clearly being angry?",
    options: [
      { text: "Her (with the scariest silent death stare 🥶)", reaction: "Danger level: Category 5 Hurricane! ⚠️" },
      { text: "Both of us slamming doors aggressively 🚪", reaction: "The dramatic door slam sound effect! 💥" },
      { text: "“I'm fine” = Everything is definitely NOT fine 🙃", reaction: "Translating: You have 5 seconds to apologize! ⏳" },
      { text: "She says nothing but eats all my chocolate 🍫", reaction: "Passive-aggressive snack consumption! 😋" }
    ]
  },
  {
    id: 6,
    question: "Who would protect the other without thinking twice?",
    options: [
      { text: "Without hesitation, every single time ❤️", reaction: "The purest definition of sibling love! 🛡️" },
      { text: "I can tease her, but no one else dare touch her 🥊", reaction: "Official sister defense protocol activated! ⚔️" },
      { text: "Both of us standing together against the world 🌍", reaction: "Unbreakable bond forever! 💫" },
      { text: "Always. Family comes first always. 🌸", reaction: "The true spirit of Raksha Bandhan! 💖" }
    ]
  }
];

export const SISTER_SUPERPOWERS = [
  {
    id: 'love',
    icon: '❤️',
    title: 'Unlimited Love',
    badge: 'Legendary',
    color: '#ff2e93',
    gradient: 'linear-gradient(135deg, #ff2e93, #ff758c)',
    desc: 'Unconditional care, warm hugs when you need them most, and standing by you through thick and thin.'
  },
  {
    id: 'protective',
    icon: '🛡️',
    title: 'Protective Mode',
    badge: 'Guardian',
    color: '#54a0ff',
    gradient: 'linear-gradient(135deg, #2e86de, #54a0ff)',
    desc: 'Will turn into a ferocious bodyguard the moment anyone dares to trouble or hurt you.'
  },
  {
    id: 'teasing',
    icon: '😂',
    title: 'Professional Teasing',
    badge: 'Masterclass',
    color: '#feca57',
    gradient: 'linear-gradient(135deg, #ff9f43, #feca57)',
    desc: 'Equipped with lifetime black-belt roasting skills and iconic nicknames known only at home.'
  },
  {
    id: 'secrets',
    icon: '🧠',
    title: 'Secret Keeper',
    badge: 'Encrypted',
    color: '#9b59b6',
    gradient: 'linear-gradient(135deg, #8e44ad, #b388ff)',
    desc: 'Holds the deepest secrets, awkward crush stories, and teenage escapades forever safe in the vault.'
  },
  {
    id: 'argument',
    icon: '😤',
    title: 'Argument Champion',
    badge: 'Undefeated',
    color: '#ee5253',
    gradient: 'linear-gradient(135deg, #e63946, #ff6b6b)',
    desc: 'Can bring up evidence from 7 years ago on a Tuesday to win any debate in 3 seconds flat.'
  },
  {
    id: 'snack',
    icon: '🍫',
    title: 'Snack Detector',
    badge: 'Radar 360',
    color: '#1dd1a1',
    gradient: 'linear-gradient(135deg, #10ac84, #1dd1a1)',
    desc: 'Possesses supernatural radar capable of detecting hidden chocolates across three rooms.'
  },
  {
    id: 'emergency',
    icon: '📞',
    title: 'Emergency Support',
    badge: '24/7 Hotline',
    color: '#ff9ff3',
    gradient: 'linear-gradient(135deg, #f368e0, #ff9ff3)',
    desc: 'Always answers the distress call, covers for you at home, and sends instant lifelines.'
  },
  {
    id: 'mood',
    icon: '✨',
    title: 'Mood Booster',
    badge: 'Magic',
    color: '#ffd700',
    gradient: 'linear-gradient(135deg, #d48806, #ffd700)',
    desc: 'Transforms bad days into fits of laughter with single silly dance moves or funny faces.'
  }
];

export const SISTER_TIMELINE = [
  {
    stage: '👶 Childhood',
    title: 'Where the Story Began',
    quote: 'Sharing toys, innocent mischief, and building the first memories together.',
    color: '#ffd700'
  },
  {
    stage: '😂 Crazy Fights',
    title: 'The Great Remote & Snack Wars',
    quote: 'Screaming over who gets the bigger half of the chocolate bar, yet making up 5 minutes later.',
    color: '#ff758c'
  },
  {
    stage: '🎒 Growing Up',
    title: 'School Days & Shared Secrets',
    quote: 'Covering up each other’s mistakes, giving secret codes, and surviving exams together.',
    color: '#b388ff'
  },
  {
    stage: '🤝 Understanding',
    title: 'Becoming Best Friends',
    quote: 'Realizing that beneath all the banter lies the most genuine friend you will ever have.',
    color: '#54a0ff'
  },
  {
    stage: '❤️ Supporting Each Other',
    title: 'Standing Strong',
    quote: 'Cheering for each other’s dreams, wiping tears, and celebrating every triumph.',
    color: '#ff2e93'
  },
  {
    stage: '🌸 Forever',
    title: 'An Unbreakable Bond',
    quote: 'Through distance, busy schedules, and time—the heart always remains connected.',
    color: '#ffd700'
  }
];

export const SISTER_PROMISES = [
  "It's not just a thread.",
  "It's a promise of love.",
  "A promise of support.",
  "A promise of family."
];

export const EMOTIONAL_MESSAGE_LINES = [
  "To every sister…",
  "Whether connected by blood, cousins, or chosen by heart…",
  "You may not hear it every day…",
  "But you matter.",
  "Your presence matters.",
  "Your laughter matters.",
  "Your support matters.",
  "Sisterhood is a connection of the soul, far beyond DNA.",
  "And the memories you create…",
  "Are priceless.",
  "Thank you for being a sister. ❤️"
];

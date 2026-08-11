export interface Project {
  slug: string;
  title: string;
  category: 'AI / ML' | 'Software Engineering' | 'Creative';
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
  thumbLabel: string;
  thumbIcon: string;
  repoUrl: string;
  notebookUrl?: string;
  demoUrl?: string;
  image?: string;
  frame?: 'laptop' | 'terminal';
  fit?: 'cover' | 'contain';
  // Overrides the default 16:9 screen box for this card only, for images
  // whose real proportions are too different to fill without cropping labels.
  frameAspect?: number;
  // Renders a coded pipeline diagram instead of a screenshot image.
  pipeline?: string[];
  // Renders a coded model-comparison card instead of a screenshot image.
  modelComparison?: { name: string; accuracy: number; recall: number }[];
}

const icons = {
  terminal: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8l3 3-3 3"/><path d="M13 14h4"/>',
  browser: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18"/><circle cx="6" cy="5.5" r=".6" fill="currentColor"/>',
  game: '<rect x="2" y="7" width="20" height="10" rx="4"/><path d="M7 11v2M6 12h2"/><circle cx="16" cy="11.5" r=".8" fill="currentColor"/><circle cx="18" cy="13" r=".8" fill="currentColor"/>',
  chart: '<path d="M3 17l6-6 4 4 8-8"/><circle cx="3" cy="17" r="1" fill="currentColor"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="13" cy="15" r="1" fill="currentColor"/><circle cx="21" cy="7" r="1" fill="currentColor"/>',
};

// NOTE: repoUrl currently points to the GitHub profile for all projects.
// Swap in the exact repo link per project once available.
export const projects: Project[] = [
  {
    slug: 'rag-learning-assessment',
    title: 'FYP Multimodal RAG-Based Learning Assessment System',
    category: 'AI / ML',
    period: 'May 2026 – Present',
    summary: 'Multimodal AI system that evaluates voice-based explanations using speech-to-text, RAG, and LLMs.',
    bullets: [
      'Developing a multi-model AI learning assessment system to evaluate voice-based explanations and generate feedback',
      'Orchestrating speech-to-text, retrieval-augmented generation (RAG), and language model components into a single pipeline',
      'Designing data processing pipelines and workflow orchestration across multiple AI components',
    ],
    tech: ['Python', 'RAG', 'LLMs', 'Speech-to-Text'],
    thumbLabel: 'demo screenshot',
    thumbIcon: icons.browser,
    repoUrl: 'https://github.com/srssakthi-dev',
  },
  {
    slug: 'brain-tumour-mri-classification',
    title: 'Brain Tumour MRI Classification',
    category: 'AI / ML',
    period: 'Jan 2026',
    summary: 'CNN-based MRI tumour classification pipeline reaching 96.9% accuracy.',
    bullets: [
      'Built a pipeline using YOLOv8 for localisation and ResNet-18/EfficientNet-B0 for classification, hitting 96.9% accuracy',
      'Designed a preprocessing pipeline for 4,000+ MRI images using OpenCV to improve model generalisation',
      'Applied semi-supervised pseudo-labelling to scale localisation from 250 labelled samples to the full dataset',
    ],
    tech: ['Python', 'PyTorch', 'CNNs', 'OpenCV'],
    thumbLabel: 'notebook plot',
    thumbIcon: icons.chart,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/brain-tumour-mri-detections-v2.png',
    fit: 'contain',
  },
  {
    slug: 'event-management-app',
    title: 'Event Management Web Application',
    category: 'Software Engineering',
    period: 'Jul 2025',
    summary: 'Full-stack event ticketing app with a relational schema and RESTful API.',
    bullets: [
      'Built a full-stack event ticketing app with a Node.js/Express.js backend, EJS frontend, and SQLite database',
      'Designed a relational schema with 5 linked tables and 10+ RESTful API endpoints with full CRUD operations',
      'Applied server-side validation and exception handling to prevent overbooking and invalid bookings',
    ],
    tech: ['Node.js', 'Express.js', 'SQL', 'EJS'],
    thumbLabel: 'app screenshot',
    thumbIcon: icons.browser,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/event-management-webapp-v2.png',
  },
  {
    slug: 'crypto-cli-trading-simulator',
    title: 'Crypto CLI Trading Simulator',
    category: 'Software Engineering',
    period: 'Jan 2025',
    summary: 'OOP-based CLI trading simulator with wallet, auth, and OHLC analytics.',
    bullets: [
      'Built a CLI trading simulator using OOP, with modular classes for authentication, wallet, and transaction processing',
      'Processed historical trading data via file I/O to compute OHLC candlestick summaries across timeframes',
      'Implemented password hashing, access control, and unit testing across transactions and edge cases',
    ],
    tech: ['C++', 'OOP', 'Data Structures'],
    thumbLabel: 'terminal screenshot',
    thumbIcon: icons.terminal,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/crypto-cli-trading-sim-v2.png',
  },
  {
    slug: 'hackathon-scrolling-game',
    title: 'Hackathon Scrolling Game',
    category: 'Creative',
    period: 'Nov 2024',
    summary: 'Browser-based scrolling game built with a team in a 2-day hackathon.',
    bullets: [
      'Collaborated in a 5-member team to design and develop a browser-based scrolling game within a 2-day hackathon',
      'Focused on rapid development, debugging, and task coordination under tight time constraints',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS'],
    thumbLabel: 'gameplay screenshot',
    thumbIcon: icons.game,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/hackathon-scrolling-game-v3.png',
  },
  {
    slug: 'audio-workstation-dj-app',
    title: 'Audio Workstation — Intelligent DJ App',
    category: 'AI / ML',
    period: 'Jul 2026',
    summary: 'Browser-based intelligent signal processing workstation with real-time spectrum analysis, adaptive filtering, and audio effects.',
    bullets: [
      'Built a real-time audio signal processing pipeline with live spectrum visualisation of input and processed output',
      'Implemented adaptive low-pass filtering, reverb, dynamic compression, and waveshaper distortion with live parameter control',
      'Persisted recordings locally via IndexedDB with automatic WAV export of processed audio',
    ],
    tech: ['JavaScript', 'Web Audio API', 'Signal Processing', 'IndexedDB'],
    thumbLabel: 'app screenshot',
    thumbIcon: icons.chart,
    // TODO: swap in the real repo link once this project is uploaded to GitHub.
    repoUrl: '#',
    image: '/projects/audio-workstation-dj-app-v2.png',
  },
  {
    slug: 'comparative-text-classification',
    title: 'Comparative Text Classification',
    category: 'AI / ML',
    period: 'Jan 2026',
    summary: 'Compared statistical and embedding-based text classification models for SMS spam detection, reaching 95.2% accuracy.',
    bullets: [
      'Built and compared statistical and embedding-based text classification models for SMS spam detection on 5,574 labelled messages using TF-IDF, Multinomial Naive Bayes, and GloVe embeddings',
      'Implemented an end-to-end NLP pipeline for text preprocessing, feature extraction, model training, and evaluation',
      'Evaluated models using accuracy, precision, recall, and F1-score, achieving 95.2% accuracy with the statistical (Naive Bayes) model, while the embedding-based model improved recall on spam messages',
    ],
    tech: ['Python', 'NLP', 'Scikit-learn', 'TensorFlow', 'GloVe'],
    thumbLabel: 'notebook plot',
    thumbIcon: icons.chart,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/spam-classification-notebook-v1.png',
    modelComparison: [
      { name: 'Naive Bayes', accuracy: 0.952, recall: 0.638 },
      { name: 'GloVe + LogReg', accuracy: 0.932, recall: 0.678 },
    ],
  },
  {
    slug: 'california-housing-price-prediction',
    title: 'California Housing Price Prediction',
    category: 'AI / ML',
    period: 'Jan 2026',
    summary: 'End-to-end regression analysis on 20,640 California housing records, improving R² from 0.655 to 0.691.',
    bullets: [
      'Performed end-to-end data analysis on a 20,640-record California Housing dataset, including data cleaning, feature engineering, missing value handling, and exploratory data analysis',
      'Built and evaluated Linear Regression and Polynomial Regression models using Python and Scikit-learn, improving R² from 0.655 to 0.691 with polynomial feature engineering, validated using 5-fold cross-validation',
      'Analysed feature relationships using correlation analysis and visualisations, identifying median income as the strongest predictor (r ≈ 0.69) of housing prices',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    thumbLabel: 'notebook plot',
    thumbIcon: icons.chart,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/california-housing-distributions-v4.png',
    fit: 'contain',
  },
  {
    slug: 'resume-personality-traits-bigfive',
    title: 'Analysing Personality Traits in Resumes Using the Big Five Model',
    category: 'AI / ML',
    period: 'Jan 2025',
    summary: 'A computational linguistics and psychology project inferring Big Five personality traits from resume text using NLP.',
    bullets: [
      'Leveraged NLP to infer personality traits from professional text, identifying trait patterns across industries',
      'Built an end-to-end pipeline: CSV data source, text preprocessing (NLTK), feature extraction (sentiment and vocabulary), and Big Five trait mapping (NLP)',
      'Created trait measures based on sentiment and lexical richness, with applications in recruitment support and individual career counselling',
    ],
    tech: ['Python', 'NLTK', 'pandas'],
    thumbLabel: 'notebook plot',
    thumbIcon: icons.chart,
    repoUrl: 'https://github.com/srssakthi-dev',
    image: '/projects/resume-bigfive-traits-v1.png',
    pipeline: ['CSV data', 'Preprocessing (NLTK)', 'Feature extraction', 'Big Five mapping'],
  },
];

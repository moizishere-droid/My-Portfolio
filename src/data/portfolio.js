export const projects = [
  {
    id: 'loan-risk',
    number: '01',
    category: 'Classical ML',
    title: 'Loan Risk Assessment System',
    description:
      "End-to-end ML system for loan risk prediction. Takes an applicant's financial profile and returns an approval decision, predicted interest rate, borrower segment, and plain-English SHAP explanation — backed by ONNX-exported models, FastAPI, and a PostgreSQL audit trail on Neon Cloud.",
    status: 'Live on HF Spaces',
    tags: [
      'LightGBM',
      'RandomForest',
      'GMM',
      'ONNX Runtime',
      'SHAP',
      'Optuna',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'HuggingFace Spaces',
    ],
    metrics: [
      {
        value: 'F1 0.8390',
        label: 'Classification',
      },
      {
        value: 'AUC 0.9471',
        label: 'ROC Score',
      },
      {
        value: 'R² 0.9077',
        label: 'Regression',
      },
      {
        value: '20 phases',
        label: 'Full MLOps',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/moizishere-droid/loan-risk-system',
      },
      {
        label: 'Live Demo',
        href: 'https://abdulmoiz123-loan-risk-app.hf.space',
      },
      {
        label: 'API Docs',
        href: 'https://abdulmoiz123-loan-risk-api.hf.space/docs',
      },
      {
        label: 'Models',
        href: 'https://huggingface.co/Abdulmoiz123/loan-risk-models',
      },
    ],
    practiceTitle: '',
    practice: [],
  },
  {
    id: 'cat-dog',
    number: '02',
    category: 'Deep Learning',
    title: 'Cat vs Dog Classifier',
    description:
      'Transfer learning with EfficientNetV2L (ImageNet). Fine-tuned last 20 layers with data augmentation. Validation accuracy 95%, precision 99.07%, recall 100%. Model hosted on HuggingFace, Streamlit app deployed via Docker.',
    status: 'Live · HF + Streamlit',
    tags: [
      'EfficientNetV2L',
      'Transfer Learning',
      'Data Augmentation',
      'TensorFlow/Keras',
      'Docker',
      'HuggingFace',
    ],
    metrics: [
      {
        value: '95%',
        label: 'Val Accuracy',
      },
      {
        value: '99.07%',
        label: 'Precision',
      },
      {
        value: '100%',
        label: 'Recall',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/moizishere-droid/CatDog-Classifier-Finetune-Augmentation-DL-Project',
      },
      {
        label: 'Model',
        href: 'https://huggingface.co/Abdulmoiz123/cat-dog-classifier',
      },
    ],
    practiceTitle: '',
    practice: [],
  },
  {
    id: 'codementor',
    number: '03',
    category: 'LLM Fine-tuning',
    title: 'CodeMentor-LLM',
    description:
      'Production-grade coding assistant built by fine-tuning Llama-3.2-3B-Instruct with a two-stage SFT + DPO alignment pipeline on 5,000 high-quality coding pairs. CI/CD via GitHub Actions, experiment tracking on W&B, deployed on HF Spaces.',
    status: 'Live on HF Spaces',
    tags: [
      'Llama-3.2-3B',
      'QLoRA',
      'SFT',
      'DPO',
      'PEFT',
      'W&B',
      'FastAPI',
      'Streamlit',
      'Docker',
      'CI/CD',
    ],
    metrics: [
      {
        value: '24 phases',
        label: 'Full MLOps',
      },
      {
        value: 'SFT + DPO',
        label: 'Two-stage',
      },
      {
        value: '5k pairs',
        label: 'Training data',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/moizishere-droid/CodeMentor-LLM',
      },
      {
        label: 'Live Demo',
        href: 'https://abdulmoiz123-codementor-llm-combined.hf.space',
      },
      {
        label: 'Model',
        href: 'https://huggingface.co/Abdulmoiz123/codementor-llm-merged',
      },
    ],
    practiceTitle: '',
    practice: [],
  },
  {
    id: 'medrag',
    number: '04',
    category: 'RAG Systems',
    title: 'MedRAG',
    description:
      'End-to-end multilingual multimodal medical RAG system. Ingests PubMed, WHO guidelines, and OpenFDA. Answers across text, images, and tables in 6 languages (English, Arabic, French, German, Spanish, Urdu) using GPT-4-turbo + CLIP + Qdrant + Neo4j.',
    status: 'In Development',
    tags: [
      'GPT-4-turbo',
      'CLIP',
      'Qdrant',
      'Neo4j',
      'RAGAS',
      'scispaCy',
      'FastAPI',
      'Streamlit',
      'Docker',
    ],
    metrics: [
      {
        value: '6 langs',
        label: 'Multilingual',
      },
      {
        value: 'Multimodal',
        label: 'Text+Image+Table',
      },
      {
        value: 'Phase 0',
        label: 'Architecture done',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/moizishere-droid/medrag',
      },
    ],
    practiceTitle: '',
    practice: [],
  },
  {
    id: 'agentic-ai',
    number: '05',
    category: 'Agentic AI',
    title: 'Agentic AI System — Coming Soon',
    description:
      'A production-grade multi-agent system currently in the planning phase. Will combine supervisor-worker agent architecture, tool-calling, long-term memory, and real-world integrations — building on the agent and RAG foundations already in place. Full repo and deployment will follow the same 20+ phase production methodology.',
    status: 'In Planning',
    tags: [
      'LangGraph',
      'Supervisor Agents',
      'Tool Use',
      'Long-term Memory',
      'FastAPI',
      'Docker',
      'TBD',
    ],
    metrics: [],
    links: [],
    practiceTitle: '',
    practice: [],
  },
];
export const skills = [
  {
    title: 'Classical ML',
    items: [
      {
        name: 'LightGBM / XGBoost',
        level: 90,
      },
      {
        name: 'Feature Engineering',
        level: 88,
      },
      {
        name: 'SHAP Explainability',
        level: 85,
      },
      {
        name: 'ONNX Export',
        level: 80,
      },
      {
        name: 'Optuna Tuning',
        level: 78,
      },
    ],
  },
  {
    title: 'Deep Learning',
    items: [
      {
        name: 'CNNs (EfficientNet, ResNet)',
        level: 85,
      },
      {
        name: 'RNN / LSTM / GRU',
        level: 82,
      },
      {
        name: 'Transfer Learning',
        level: 88,
      },
      {
        name: 'Data Augmentation',
        level: 84,
      },
      {
        name: 'TensorFlow / PyTorch',
        level: 85,
      },
    ],
  },
  {
    title: 'LLMs & Fine-tuning',
    items: [
      {
        name: 'QLoRA / LoRA (PEFT)',
        level: 85,
      },
      {
        name: 'SFT + DPO Pipeline',
        level: 83,
      },
      {
        name: 'Full Fine-tuning',
        level: 80,
      },
      {
        name: 'Domain Adapters',
        level: 78,
      },
      {
        name: 'W&B Tracking',
        level: 78,
      },
    ],
  },
  {
    title: 'RAG & Agentic',
    items: [
      {
        name: 'Qdrant · FAISS · Neo4j',
        level: 85,
      },
      {
        name: 'LangChain · LangGraph',
        level: 88,
      },
      {
        name: 'RAGAS Evaluation',
        level: 78,
      },
      {
        name: 'CLIP (Multimodal)',
        level: 74,
      },
      {
        name: 'Tool-calling Agents',
        level: 80,
      },
    ],
  },
  {
    title: 'Backend & Infra',
    items: [
      {
        name: 'FastAPI · Pydantic',
        level: 86,
      },
      {
        name: 'Docker · Compose',
        level: 82,
      },
      {
        name: 'PostgreSQL (Neon)',
        level: 78,
      },
      {
        name: 'GitHub Actions CI/CD',
        level: 74,
      },
      {
        name: 'HuggingFace Hub',
        level: 85,
      },
    ],
  },
  {
    title: 'Evaluation',
    items: [
      {
        name: 'RAGAS (RAG metrics)',
        level: 80,
      },
      {
        name: 'F1 / AUC / Silhouette',
        level: 88,
      },
      {
        name: 'BLEU / Perplexity',
        level: 72,
      },
      {
        name: 'SHAP / Surrogate',
        level: 82,
      },
      {
        name: 'pytest · API testing',
        level: 75,
      },
    ],
  },
];
export const education = [
  {
    date: '2022 — Present',
    title: 'BS Computer Science',
    organization: 'UBIT · University of Karachi',
    description:
      '7th Semester · CGPA 3.30/4.00 · Coursework: Software Engineering, Distributed Systems, Simulation & Modelling, AI/ML, Computerised Accounting. Senior capstone: skin disease classification and segmentation (CNNs + segmentation architectures on dermatology dataset).',
  },
  {
    date: 'Ongoing',
    title: 'Self-directed AI/ML Research',
    organization: 'Independent',
    description:
      'Systematic study across 5 domains: Classical ML → Deep Learning → LLM Fine-tuning → RAG Systems → Agentic AI. All production projects follow a 20+ phase methodology: experiment in notebooks, then refactor to documented production code with full deployment.',
  },
];
export const projectSummaries = {
  'loan-risk':
    'Predicts loan approval, interest rates, and borrower segments, with SHAP explanations and a deployed FastAPI backend.',
  'cat-dog':
    'An EfficientNetV2L image classifier with 95% validation accuracy, trained with transfer learning and data augmentation.',
  codementor:
    'A coding assistant built by fine-tuning Llama 3.2 with SFT and DPO, deployed on HuggingFace Spaces.',
  medrag:
    'A medical RAG system connecting PubMed, WHO, and OpenFDA across six languages, with text, image, and table retrieval.',
  'agentic-ai':
    'A planned multi-agent system for coordinating research, analysis, and coding tasks.',
};
export const email = 'abdulmoiz.aiml.dev@gmail.com';
export const socials = [
  { label: 'GitHub', href: 'https://github.com/moizishere-droid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-moiz-a70678265/' },
  { label: 'HuggingFace', href: 'https://huggingface.co/Abdulmoiz123' },
];

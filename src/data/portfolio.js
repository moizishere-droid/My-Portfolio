export const projects = [
  {
    id: 'loan-risk',
    number: '01',
    category: 'Classical ML',
    title: 'Loan Risk Assessment System',
    problem: 'Make loan predictions understandable alongside the financial inputs behind them.',
    approach: 'Combine classification, interest-rate regression, borrower segmentation, and SHAP explanations behind a FastAPI service.',
    outcome: 'A deployed application with ONNX inference and a PostgreSQL audit trail. Model evaluation scores are listed below.',
    screenshot: 'images/projects/loan-risk.jpg',
    screenshotAlt: 'Loan Risk Assessment System showing the new applicant form and loan and credit input fields.',
    workflow:
      'Train and tune the prediction models, evaluate classification and regression results, export to ONNX, and serve predictions with FastAPI, SHAP explanations, and PostgreSQL audit logging.',
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
        label: 'Models',
        href: 'https://huggingface.co/Abdulmoiz123/loan-risk-models',
      },
    ],
    practiceTitle: '',
    practice: [],
  },
  {
    id: 'codementor',
    number: '02',
    category: 'LLM Fine-tuning',
    title: 'CodeMentor-LLM',
    problem: 'Adapt a general instruction model for coding questions.',
    approach: 'Use QLoRA with supervised fine-tuning, followed by preference alignment with DPO.',
    outcome: 'A deployed coding assistant and published model. Generated code requires review and testing.',
    screenshot: 'images/projects/codementor.jpg',
    screenshotAlt: 'CodeMentor-LLM coding assistant showing its question input and Generate Response button.',
    workflow:
      'Fine-tune Llama 3.2 with supervised fine-tuning (SFT), follow with direct preference optimization (DPO), track experiments in W&B, and deploy on HuggingFace Spaces with GitHub Actions CI/CD.',
    description:
      'Coding assistant built by fine-tuning Llama-3.2-3B-Instruct with a two-stage SFT + DPO alignment pipeline on 5,000 coding pairs. CI/CD via GitHub Actions, experiment tracking on W&B, deployed on HF Spaces.',
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
    number: '03',
    category: 'RAG Systems',
    title: 'MedRAG',
    problem: 'Find relevant medical reference material and return answers with source citations.',
    approach: 'Combine hybrid retrieval, reranking, and knowledge graph enrichment with multilingual answers and session-specific PDF uploads.',
    outcome: 'A Modal-hosted application with Docker packaging for local use and 22,696 indexed chunks. Latency figures cover only three warmed queries, not a general performance guarantee.',
    screenshot: 'images/projects/medrag.jpg',
    screenshotAlt: 'MedRAG medical knowledge assistant showing its chat workspace, session controls, and document upload options.',
    description:
      'A multilingual medical knowledge assistant that searches PubMed, WHO guidelines, and OpenFDA to generate cited answers. Combines hybrid retrieval, reranking, and knowledge graph enrichment, with saved conversations, private PDF chat, and available source tables and figures. Built with FastAPI and Streamlit and deployed on Modal, with Docker packaging to build and run the application locally.',
    status: 'Live on Modal',
    tags: [
      'Hybrid Retrieval',
      'Reranking',
      'Qdrant',
      'BM25',
      'Neo4j',
      'ONNX Runtime',
      'FastAPI',
      'Streamlit',
      'Docker',
    ],
    metrics: [
      {
        value: '22,696',
        label: 'Indexed chunks',
      },
      {
        value: '49.8–66.5%',
        label: 'Lower latency · 3 warmed queries',
      },
      {
        value: 'Top 5',
        label: 'Retrieval order preserved',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/moizishere-droid/medrag',
      },
      {
        label: 'Live Demo',
        href: 'https://moizishere-droid--medrag.modal.run/',
      },
    ],
    practiceTitle: '',
    practice: [],
  },
];

export const skills = [
  {
    title: 'Classical ML',
    items: ['LightGBM', 'Random Forest', 'Gaussian Mixture Models', 'Optuna'],
    projectIds: ['loan-risk'],
  },
  {
    title: 'Deep Learning Foundations',
    items: ['CNNs', 'Transfer Learning', 'Data Augmentation', 'TensorFlow / PyTorch'],
    note: 'Developed through coursework and learning projects.',
    projectIds: [],
  },
  {
    title: 'LLMs & Fine-tuning',
    items: ['QLoRA / PEFT', 'Supervised Fine-tuning (SFT)', 'Direct Preference Optimization (DPO)', 'W&B Tracking'],
    projectIds: ['codementor'],
  },
  {
    title: 'Retrieval Systems',
    items: ['Qdrant', 'BM25 / Hybrid Retrieval', 'Reranking', 'Neo4j'],
    projectIds: ['medrag'],
  },
  {
    title: 'Backend & Deployment',
    items: ['FastAPI', 'Docker', 'PostgreSQL (Neon)', 'GitHub Actions CI/CD', 'HuggingFace Spaces'],
    projectIds: ['loan-risk', 'codementor'],
  },
  {
    title: 'Evaluation & Inference',
    items: ['F1 / ROC AUC', 'Regression Evaluation', 'SHAP Explainability', 'ONNX Runtime', 'Retrieval Latency Benchmarking'],
    projectIds: ['loan-risk', 'medrag'],
  },
];
export const education = [
  {
    date: '2022 — Present',
    title: 'BS Software Engineering',
    completion: 'Expected graduation: 2027',
    organization: 'UBIT · University of Karachi',
    description:
      'Final year · Expected graduation: 2027 · CGPA 3.30/4.00 · Coursework: Software Engineering, Distributed Systems, Simulation & Modelling, AI/ML, Computerised Accounting. Senior capstone: skin disease classification and segmentation (CNNs + segmentation architectures on dermatology dataset).',
  },
  {
    date: 'Ongoing',
    title: 'Self-directed AI/ML Research',
    organization: 'Independent',
    description:
      'Independent study in classical ML, deep learning, LLM fine-tuning, and RAG, with ongoing exploration of agentic AI. My workflow moves from notebook experiments to evaluation, documented APIs, testing, and deployment.',
  },
];

export const projectSummaries = {
  'loan-risk':
    'Predicts loan approval, interest rates, and borrower segments, with SHAP explanations and a deployed FastAPI backend.',
  codementor:
    'A coding assistant built by fine-tuning Llama 3.2 with SFT and DPO, deployed on HuggingFace Spaces.',
  medrag:
    'A multilingual medical evidence assistant with source citations, hybrid retrieval over 22,696 indexed chunks, and sign-in, saved chats, and PDF uploads. Deployed on Modal, with Docker packaging for local builds and runs.',
};

export const email = 'abdulmoiz.aiml.dev@gmail.com';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/moizishere-droid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-moiz-a70678265/' },
  { label: 'HuggingFace', href: 'https://huggingface.co/Abdulmoiz123' },
];

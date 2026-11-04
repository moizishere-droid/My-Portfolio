export const projects = [
  {
    "id": "loan-risk",
    "number": "01",
    "category": "Classical ML",
    "title": "Loan Risk Assessment System",
    "problem": "Assess default risk and explain the factors behind each prediction.",
    "approach": "Use shared profile-group splits, training-only preprocessing, and validation-selected LightGBM, Random Forest, and GMM models.",
    "outcome": "Held-out default F1 0.8375 and ROC-AUC 0.9498 on 4,865 records. Rate R² 0.9070 and RMSE 0.9746 percentage points on 4,401 records; the rate model uses lender-assigned grade. Cluster silhouette: 0.2336, indicating overlapping groups.",
    "screenshot": "images/projects/loan-risk.png",
    "screenshotAlt": "Loan Risk Assessment application preview with an illustrative assessment.",
    "workflow": "Notebook experiments → verified source → documentation. Clean 32,581 rows to 32,408; split matching profiles together into shared 70/15/15 partitions; fit transformations on training only; select configurations on validation; evaluate held-out records; verify ONNX parity; deploy one Docker Space with Streamlit, private FastAPI, and PostgreSQL.",
    "description": "A deployed loan-risk demo that estimates default risk and interest rates, groups borrower profiles, and explains model outputs with SHAP. New applications receive an estimated rate before default scoring; existing loans use the supplied rate. A fixed 0.60 default-score threshold drives the demo approval label. Includes account-scoped saved assessments and atomic database writes; this is a portfolio application, not a validated bank lending policy.",
    "status": "Live on HF Spaces",
    "tags": [
      "LightGBM",
      "Random Forest",
      "GMM",
      "ONNX Runtime",
      "SHAP",
      "FastAPI",
      "Streamlit",
      "PostgreSQL",
      "Docker",
      "HuggingFace Spaces"
    ],
    "metrics": [
      {
        "value": "F1 0.8375",
        "label": "Default classification"
      },
      {
        "value": "AUC 0.9498",
        "label": "Default ranking"
      },
      {
        "value": "R² 0.9070",
        "label": "Interest-rate regression"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/moizishere-droid/loan-risk-system"
      },
      {
        "label": "Live Demo",
        "href": "https://abdulmoiz123-loan-risk-app.hf.space"
      },
      {
        "label": "Models",
        "href": "https://huggingface.co/Abdulmoiz123/loan-risk-models"
      }
    ],
    "practiceTitle": "",
    "practice": []
  },
  {
    id: 'codementor',
    number: '02',
    category: 'LLM Fine-tuning',
    title: 'CodeMentor-LLM',
    problem: 'Adapt a general instruction model for coding questions.',
    approach: 'Use QLoRA with supervised fine-tuning, followed by preference alignment with DPO.',
    outcome: 'A deployed coding assistant and published model. Generated code requires review and testing.',
    screenshot: 'images/projects/codementor.png',
    screenshotAlt: 'Code Mentor LLM updated sign-in page with coding workspace introduction and account form.',
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
    screenshot: 'images/projects/medrag.png',
    screenshotAlt: 'MedRAG updated research landing page with an example medical question and source-connected workspace.',
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
    'Estimates default risk and interest rates, groups borrower profiles, and explains predictions with SHAP. Built with grouped hold-out evaluation, account-scoped records, and Docker deployment.',
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

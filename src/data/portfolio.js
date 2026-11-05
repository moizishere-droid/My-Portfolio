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
    problem: 'Adapt a small instruction model for coding assistance within Colab T4 limits.',
    approach: 'Use QLoRA supervised fine-tuning, a small DPO preference experiment, and held-out text-similarity evaluation.',
    outcome: 'Recorded DPO ROUGE-L 0.2077 (base 0.1807) and BERTScore F1 0.8491 (SFT 0.8504) on 50 test examples. These are similarity scores, not code-correctness rates. The application passed 85 automated tests and a live generation/history/login check.',
    screenshot: 'images/projects/codementor.png',
    screenshotAlt: 'Code Mentor LLM sign-in page with coding workspace introduction and account form.',
    workflow:
      'Notebook experiments → tested source → documentation. Clean 20,022 records to 19,024 and create fixed 80/10/10 splits; train 5,000 SFT examples for three epochs and 200 DPO pairs for one epoch; compare base, SFT and DPO on 50 test examples; serve the merged model on Modal behind the combined Space. The code review did not retrain the model weights.',
    description:
      'Coding assistant adapted from Llama-3.2-3B-Instruct using QLoRA SFT on 5,000 examples for three epochs, followed by exploratory DPO on 200 model-labelled preference pairs for one epoch. A combined FastAPI/Streamlit Hugging Face Space calls Modal A10G inference and provides accounts, streamed answers and private request history.',
    status: 'Live on HF Spaces',
    tags: [
      'Llama-3.2-3B',
      'QLoRA',
      'SFT',
      'DPO',
      'PEFT',
      'W&B',
      'Modal',
      'FastAPI',
      'Streamlit',
      'SQLite',
      'Docker',
      'GitHub Actions',
    ],
    metrics: [
      {
        value: '0.2077',
        label: 'DPO ROUGE-L · 50 examples',
      },
      {
        value: '5k / 200',
        label: 'SFT examples / DPO pairs',
      },
      {
        value: '85 tests',
        label: 'Automated checks',
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
    problem: 'Retrieve traceable medical evidence while keeping private documents isolated to their chat.',
    approach:
      'Fuse dense and BM25 search with reciprocal rank fusion, rerank candidates with a CPU ONNX cross-encoder, and supplement passages with source-supported Neo4j relationships.',
    outcome:
      'Deployed on Modal with real answer streaming and 22,696 curated text chunks. Verified 458 Python tests with 90.22% statement coverage, plus hosted checks of citations, history and chat-scoped PDF isolation. Software verification does not establish clinical accuracy or a fixed response-time guarantee.',
    screenshot: 'images/projects/medrag.png',
    screenshotAlt: 'MedRAG research landing page with a medical question and source-connected chat workspace.',
    workflow:
      'Collect and deduplicate PubMed abstracts, OpenFDA labels and WHO documents; create source-aware chunks and dense/sparse indexes; retrieve 20 fused candidates and rerank to five passages; stream a cited answer and atomically save the completed conversation. Validate ownership, upload publication and failure handling before deployment. Uses pretrained models without medical model fine-tuning.',
    description:
      'An educational medical evidence assistant with multilingual answers and numbered citations across PubMed, WHO and OpenFDA. Combines hybrid retrieval, cross-encoder reranking and a label-derived drug knowledge graph. FastAPI and Streamlit provide authenticated saved chats, chat-scoped PDF uploads, verified source figures and tables, and real incremental answer streaming. Deployed on Modal with PostgreSQL persistence and Docker support for local use; not clinically validated.',
    status: 'Live on Modal',
    tags: [
      'Hybrid Retrieval',
      'Qdrant / BM25',
      'Cross-encoder',
      'Neo4j',
      'ONNX Runtime',
      'FastAPI',
      'Streamlit',
      'PostgreSQL',
      'Modal',
      'Docker',
    ],
    metrics: [
      { value: '22,696', label: 'Curated text chunks' },
      { value: '458 tests', label: 'Python verification' },
      { value: '90.22%', label: 'Statement coverage' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/moizishere-droid/medrag' },
      { label: 'Live Demo', href: 'https://moizishere-droid--medrag.modal.run/' },
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
    'A QLoRA SFT and DPO coding assistant with Modal GPU inference, streamed answers and private history in a Hugging Face Space.',
  medrag:
    'Searches 22,696 medical text chunks with hybrid retrieval and reranking. Streams cited, multilingual answers with saved chats and private PDF uploads. Deployed on Modal; an educational demo.',
};

export const email = 'abdulmoiz.aiml.dev@gmail.com';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/moizishere-droid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-moiz-a70678265/' },
  { label: 'HuggingFace', href: 'https://huggingface.co/Abdulmoiz123' },
];

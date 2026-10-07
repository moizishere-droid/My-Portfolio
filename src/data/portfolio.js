export const projects = [
  {
    "id": "loan-risk",
    "number": "01",
    "category": "Classical ML",
    "title": "Loan Risk Assessment System",
    "description": "End-to-end ML system for loan risk prediction. Takes an applicant's financial profile and returns an approval decision, predicted interest rate, borrower segment, and plain-English SHAP explanation — backed by ONNX-exported models, FastAPI, and a PostgreSQL audit trail on Neon Cloud.",
    "status": "Live on HF Spaces",
    "tags": [
      "LightGBM",
      "RandomForest",
      "GMM",
      "ONNX Runtime",
      "SHAP",
      "Optuna",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "HuggingFace Spaces"
    ],
    "metrics": [
      {
        "value": "F1 0.8390",
        "label": "Classification"
      },
      {
        "value": "AUC 0.9471",
        "label": "ROC Score"
      },
      {
        "value": "R² 0.9077",
        "label": "Regression"
      },
      {
        "value": "20 phases",
        "label": "Full MLOps"
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
        "label": "API Docs",
        "href": "https://abdulmoiz123-loan-risk-api.hf.space/docs"
      },
      {
        "label": "Models",
        "href": "https://huggingface.co/Abdulmoiz123/loan-risk-models"
      }
    ],
    "practiceTitle": "ML practice projects that led here (5)",
    "practice": [
      {
        "title": "Titanic — Data Cleaning & EDA",
        "description": "Exploratory analysis and missing-value treatment. Foundation for all preprocessing patterns used in production.",
        "tags": [
          "Pandas",
          "Seaborn",
          "Matplotlib"
        ],
        "label": "EDA"
      },
      {
        "title": "California Housing — Regression",
        "description": "LightGBM with Optuna tuning, deployed on Streamlit Cloud. Best tuned R² 0.8588 — directly informs the production regression model.",
        "tags": [
          "LightGBM",
          "XGBoost",
          "Optuna",
          "Streamlit"
        ],
        "label": "Regression"
      },
      {
        "title": "Loan Approver — Classification",
        "description": "XGBoost pipeline with SMOTE, Yeo-Johnson transforms, and full sklearn Pipeline. ~83% accuracy. Precursor to production classifier.",
        "tags": [
          "XGBoost",
          "SMOTE",
          "sklearn Pipeline",
          "Streamlit"
        ],
        "label": "Classification"
      },
      {
        "title": "Customer Segmentation — RFM Clustering",
        "description": "RFM feature engineering on Online Retail dataset. Compared K-Means (0.61), Hierarchical (0.92), and GMM (0.54). SHAP surrogate for cluster explainability. GMM borrower segmentation in production came from this work.",
        "tags": [
          "KMeans",
          "GMM",
          "SHAP",
          "PCA",
          "RFM"
        ],
        "label": "Clustering"
      },
      {
        "title": "Loan Approver ANN — Deep Learning",
        "description": "ANN vs ML comparison on loan default dataset. ANN (87%) outperformed ML baseline (82%), validating the neural approach for tabular financial data.",
        "tags": [
          "TensorFlow/Keras",
          "Sigmoid",
          "Streamlit"
        ],
        "label": "DL · ANN"
      }
    ]
  },
  {
    "id": "cat-dog",
    "number": "02",
    "category": "Deep Learning",
    "title": "Cat vs Dog Classifier",
    "description": "Transfer learning with EfficientNetV2L (ImageNet). Fine-tuned last 20 layers with data augmentation. Validation accuracy 95%, precision 99.07%, recall 100%. Model hosted on HuggingFace, Streamlit app deployed via Docker.",
    "status": "Live · HF + Streamlit",
    "tags": [
      "EfficientNetV2L",
      "Transfer Learning",
      "Data Augmentation",
      "TensorFlow/Keras",
      "Docker",
      "HuggingFace"
    ],
    "metrics": [
      {
        "value": "95%",
        "label": "Val Accuracy"
      },
      {
        "value": "99.07%",
        "label": "Precision"
      },
      {
        "value": "100%",
        "label": "Recall"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/moizishere-droid/CatDog-Classifier-Finetune-Augmentation-DL-Project"
      },
      {
        "label": "Model",
        "href": "https://huggingface.co/Abdulmoiz123/cat-dog-classifier"
      }
    ],
    "practiceTitle": "Deep learning practice projects (3)",
    "practice": [
      {
        "title": "MNIST Digit Recognition — CNN",
        "description": "CNN achieving 99.14% accuracy on handwritten digits. Conv2D → MaxPool → Flatten → Dropout → Softmax. Streamlit canvas for real-time drawing and prediction.",
        "tags": [
          "CNN",
          "TensorFlow",
          "Streamlit",
          "OpenCV"
        ],
        "label": "99.14% acc"
      },
      {
        "title": "Spam Classifier — RNN / LSTM / GRU",
        "description": "Compared three sequence models on email spam classification. LSTM 98.87%, GRU 98.81% after threshold tuning. Streamlit app with model selector and probability display.",
        "tags": [
          "LSTM",
          "GRU",
          "RNN",
          "NLTK",
          "Streamlit"
        ],
        "label": "LSTM 98.87%"
      },
      {
        "title": "Transformer from Scratch — English→Urdu NMT",
        "description": "Built every component from scratch in PyTorch: self-attention, multi-head attention, positional encoding, encoder, decoder. Trained on ~9k English–Urdu pairs. No nn.Transformer used.",
        "tags": [
          "PyTorch",
          "Self-Attention",
          "Encoder-Decoder",
          "NMT"
        ],
        "label": "From Scratch"
      }
    ]
  },
  {
    "id": "codementor",
    "number": "03",
    "category": "LLM Fine-tuning",
    "title": "CodeMentor-LLM",
    "description": "Production-grade coding assistant built by fine-tuning Llama-3.2-3B-Instruct with a two-stage SFT + DPO alignment pipeline on 5,000 high-quality coding pairs. CI/CD via GitHub Actions, experiment tracking on W&B, deployed on HF Spaces.",
    "status": "Live on HF Spaces",
    "tags": [
      "Llama-3.2-3B",
      "QLoRA",
      "SFT",
      "DPO",
      "PEFT",
      "W&B",
      "FastAPI",
      "Streamlit",
      "Docker",
      "CI/CD"
    ],
    "metrics": [
      {
        "value": "24 phases",
        "label": "Full MLOps"
      },
      {
        "value": "SFT + DPO",
        "label": "Two-stage"
      },
      {
        "value": "5k pairs",
        "label": "Training data"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/moizishere-droid/CodeMentor-LLM"
      },
      {
        "label": "Live Demo",
        "href": "https://abdulmoiz123-codementor-llm-combined.hf.space"
      },
      {
        "label": "Model",
        "href": "https://huggingface.co/Abdulmoiz123/codementor-llm-merged"
      }
    ],
    "practiceTitle": "LLM fine-tuning practice projects (4)",
    "practice": [
      {
        "title": "Tweet Sentiment — Full Fine-tuning",
        "description": "Full fine-tuning of DistilBERT on tweet_eval sentiment dataset. 74.05% accuracy after 3 epochs. Inference pipeline published to HuggingFace Hub.",
        "tags": [
          "DistilBERT",
          "HuggingFace Trainer",
          "FP16"
        ],
        "label": "Full FT"
      },
      {
        "title": "Customer Support Chatbot — LoRA",
        "description": "LoRA adapter fine-tuning for a domain-specific support chatbot. Efficient parameter tuning without full model retraining.",
        "tags": [
          "LoRA",
          "PEFT",
          "HuggingFace"
        ],
        "label": "LoRA"
      },
      {
        "title": "Medical Knowledge Assistant — Domain Adapter",
        "description": "Domain adapter + LoRA for medical Q&A. Combines domain-specific adapter stacking with task-specific LoRA layers.",
        "tags": [
          "Domain Adapter",
          "LoRA",
          "Medical NLP"
        ],
        "label": "Adapter"
      },
      {
        "title": "GPT-2 DPO Alignment",
        "description": "Direct Preference Optimisation on GPT-2. Built preference dataset with chosen/rejected pairs and applied DPO training — the same alignment technique used in the production CodeMentor pipeline.",
        "tags": [
          "DPO",
          "GPT-2",
          "TRL"
        ],
        "label": "DPO"
      }
    ]
  },
  {
    "id": "medrag",
    "number": "04",
    "category": "RAG Systems",
    "title": "MedRAG",
    "description": "End-to-end multilingual multimodal medical RAG system. Ingests PubMed, WHO guidelines, and OpenFDA. Answers across text, images, and tables in 6 languages (English, Arabic, French, German, Spanish, Urdu) using GPT-4-turbo + CLIP + Qdrant + Neo4j.",
    "status": "In Development",
    "tags": [
      "GPT-4-turbo",
      "CLIP",
      "Qdrant",
      "Neo4j",
      "RAGAS",
      "scispaCy",
      "FastAPI",
      "Streamlit",
      "Docker"
    ],
    "metrics": [
      {
        "value": "6 langs",
        "label": "Multilingual"
      },
      {
        "value": "Multimodal",
        "label": "Text+Image+Table"
      },
      {
        "value": "Phase 0",
        "label": "Architecture done"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/moizishere-droid/medrag"
      }
    ],
    "practiceTitle": "RAG practice projects that led here (3)",
    "practice": [
      {
        "title": "Multi-PDF RAG Application",
        "description": "Upload multiple PDFs and ask questions. LangChain + FAISS vector store + OpenAI embeddings. Context-aware answers strictly from uploaded documents. Deployed on Streamlit Cloud.",
        "tags": [
          "LangChain",
          "FAISS",
          "OpenAI Embeddings",
          "Streamlit"
        ],
        "label": "RAG"
      },
      {
        "title": "Hybrid RAG + AI Agent System",
        "description": "Combines RAG retrieval with agent-style tool usage (web search, calculator, notes) using LangChain v1.1.3. Session-based memory, FAISS vector store, modular tool architecture.",
        "tags": [
          "LangChain",
          "FAISS",
          "Tool Use",
          "Streamlit"
        ],
        "label": "Hybrid"
      },
      {
        "title": "Multilingual RAG System",
        "description": "25-phase pipeline with mBERT + XLM-R embeddings, Jina reranking, and LangSmith observability. Direct predecessor to MedRAG's multilingual retrieval layer.",
        "tags": [
          "mBERT",
          "XLM-R",
          "Jina",
          "LangSmith",
          "Qdrant"
        ],
        "label": "Multilingual"
      }
    ]
  },
  {
    "id": "agentic-ai",
    "number": "05",
    "category": "Agentic AI",
    "title": "Agentic AI System — Coming Soon",
    "description": "A production-grade multi-agent system currently in the planning phase. Will combine supervisor-worker agent architecture, tool-calling, long-term memory, and real-world integrations — building on the agent and RAG foundations already in place. Full repo and deployment will follow the same 20+ phase production methodology.",
    "status": "In Planning",
    "tags": [
      "LangGraph",
      "Supervisor Agents",
      "Tool Use",
      "Long-term Memory",
      "FastAPI",
      "Docker",
      "TBD"
    ],
    "metrics": [],
    "links": [],
    "practiceTitle": "",
    "practice": []
  }
];
export const skills = [
  {
    "title": "Classical ML",
    "items": [
      {
        "name": "LightGBM / XGBoost",
        "level": 90
      },
      {
        "name": "Feature Engineering",
        "level": 88
      },
      {
        "name": "SHAP Explainability",
        "level": 85
      },
      {
        "name": "ONNX Export",
        "level": 80
      },
      {
        "name": "Optuna Tuning",
        "level": 78
      }
    ]
  },
  {
    "title": "Deep Learning",
    "items": [
      {
        "name": "CNNs (EfficientNet, ResNet)",
        "level": 85
      },
      {
        "name": "RNN / LSTM / GRU",
        "level": 82
      },
      {
        "name": "Transfer Learning",
        "level": 88
      },
      {
        "name": "Data Augmentation",
        "level": 84
      },
      {
        "name": "TensorFlow / PyTorch",
        "level": 85
      }
    ]
  },
  {
    "title": "LLMs & Fine-tuning",
    "items": [
      {
        "name": "QLoRA / LoRA (PEFT)",
        "level": 85
      },
      {
        "name": "SFT + DPO Pipeline",
        "level": 83
      },
      {
        "name": "Full Fine-tuning",
        "level": 80
      },
      {
        "name": "Domain Adapters",
        "level": 78
      },
      {
        "name": "W&B Tracking",
        "level": 78
      }
    ]
  },
  {
    "title": "RAG & Agentic",
    "items": [
      {
        "name": "Qdrant · FAISS · Neo4j",
        "level": 85
      },
      {
        "name": "LangChain · LangGraph",
        "level": 88
      },
      {
        "name": "RAGAS Evaluation",
        "level": 78
      },
      {
        "name": "CLIP (Multimodal)",
        "level": 74
      },
      {
        "name": "Tool-calling Agents",
        "level": 80
      }
    ]
  },
  {
    "title": "Backend & Infra",
    "items": [
      {
        "name": "FastAPI · Pydantic",
        "level": 86
      },
      {
        "name": "Docker · Compose",
        "level": 82
      },
      {
        "name": "PostgreSQL (Neon)",
        "level": 78
      },
      {
        "name": "GitHub Actions CI/CD",
        "level": 74
      },
      {
        "name": "HuggingFace Hub",
        "level": 85
      }
    ]
  },
  {
    "title": "Evaluation",
    "items": [
      {
        "name": "RAGAS (RAG metrics)",
        "level": 80
      },
      {
        "name": "F1 / AUC / Silhouette",
        "level": 88
      },
      {
        "name": "BLEU / Perplexity",
        "level": 72
      },
      {
        "name": "SHAP / Surrogate",
        "level": 82
      },
      {
        "name": "pytest · API testing",
        "level": 75
      }
    ]
  }
];
export const education = [
  {
    "date": "2022 — Present",
    "title": "BS Computer Science",
    "organization": "UBIT · University of Karachi",
    "description": "7th Semester · CGPA 3.30/4.00 · Coursework: Software Engineering, Distributed Systems, Simulation & Modelling, AI/ML, Computerised Accounting. Senior capstone: skin disease classification and segmentation (CNNs + segmentation architectures on dermatology dataset)."
  },
  {
    "date": "Ongoing",
    "title": "Self-directed AI/ML Research",
    "organization": "Independent",
    "description": "Systematic study across 5 domains: Classical ML → Deep Learning → LLM Fine-tuning → RAG Systems → Agentic AI. All production projects follow a 20+ phase methodology: experiment in notebooks, then refactor to documented production code with full deployment."
  }
];
export const projectSummaries = {
  'loan-risk': 'Predicts loan approval, interest rates, and borrower segments, with SHAP explanations and a deployed FastAPI backend.',
  'cat-dog': 'An EfficientNetV2L image classifier with 95% validation accuracy, trained with transfer learning and data augmentation.',
  'codementor': 'A coding assistant built by fine-tuning Llama 3.2 with SFT and DPO, deployed on HuggingFace Spaces.',
  'medrag': 'A medical RAG system connecting PubMed, WHO, and OpenFDA across six languages, with text, image, and table retrieval.',
  'agentic-ai': 'A planned multi-agent system for coordinating research, analysis, and coding tasks.',
};
export const email = 'abdulmoiz.aiml.dev@gmail.com';
export const socials = [
  { label: 'GitHub', href: 'https://github.com/moizishere-droid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-moiz-a70678265/' },
  { label: 'HuggingFace', href: 'https://huggingface.co/Abdulmoiz123' },
];

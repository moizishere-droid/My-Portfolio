import Expander from './Expander';
export default function Projects() {
  return <section id="projects">
  <div className="container">
    <div className="sec-header reveal">
      <span className="sec-tag">Production Work</span>
      <h2 className="st">Projects</h2>
    </div>
    <div className="proj-grid">

      
      <div className="pcard wide reveal">
        <div className="wide-inner">
          <div className="pc-body">
            <div className="pc-icon">🏦</div>
            <div className="badge-live"><span></span>Live on HF Spaces</div>
            <h3>Loan Risk Assessment System</h3>
            <p>End-to-end ML system for loan risk prediction. Takes an applicant's financial profile and returns an approval decision, predicted interest rate, borrower segment, and plain-English SHAP explanation — backed by ONNX-exported models, FastAPI, and a PostgreSQL audit trail on Neon Cloud.</p>
            <div className="chips">
              <span className="chip">LightGBM</span><span className="chip">RandomForest</span><span className="chip">GMM</span>
              <span className="chip">ONNX Runtime</span><span className="chip">SHAP</span><span className="chip">Optuna</span>
              <span className="chip chip-v">FastAPI</span><span className="chip chip-v">PostgreSQL</span><span className="chip chip-v">Docker</span><span className="chip chip-v">HuggingFace Spaces</span>
            </div>
          </div>
          <div className="terminal">
            <span className="td">POST /predict/new</span><br />
            <span className="tc">regression</span>  RF → rate: 12.4%<br />
            <span className="tc">classifier</span>  LightGBM → APPROVED<br />
            <span className="tv">clustering</span>  GMM → High Value Borrower<br />
            <span className="tc">shap</span>       TreeExplainer → reasons<br />
            <span className="td">────────────────────────</span><br />
            F1 <span style={{
                "color": "#4ade80"
              }}>0.8390</span>  AUC <span style={{
                "color": "#4ade80"
              }}>0.9471</span><br />
            R² <span style={{
                "color": "#4ade80"
              }}>0.9077</span>  RMSE <span style={{
                "color": "#4ade80"
              }}>0.9811</span><br />
            <span className="td">20 phases · fully deployed</span>
          </div>
        </div>
        <div className="pc-metrics">
          <div className="pcm"><strong>F1 0.8390</strong>Classification</div>
          <div className="pcm"><strong>AUC 0.9471</strong>ROC Score</div>
          <div className="pcm"><strong>R² 0.9077</strong>Regression</div>
          <div className="pcm"><strong>20 phases</strong>Full MLOps</div>
        </div>
        <div className="pc-links">
          <a href="https://github.com/moizishere-droid/loan-risk-system" target="_blank" rel="noopener noreferrer" className="pl"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>GitHub</a>
          <a href="https://abdulmoiz123-loan-risk-app.hf.space" target="_blank" rel="noopener noreferrer" className="pl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>Live Demo</a>
          <a href="https://abdulmoiz123-loan-risk-api.hf.space/docs" target="_blank" rel="noopener noreferrer" className="pl">API Docs</a>
          <a href="https://huggingface.co/Abdulmoiz123/loan-risk-models" target="_blank" rel="noopener noreferrer" className="pl">🤗 Models</a>
        </div>
        <Expander title="ML practice projects that led here (5)">
            <div className="sub-card">
              <div className="sub-icon">🚢</div>
              <div className="sub-info"><h4>Titanic — Data Cleaning & EDA</h4><p>Exploratory analysis and missing-value treatment. Foundation for all preprocessing patterns used in production.</p><div className="sub-chips"><span className="sub-chip">Pandas</span><span className="sub-chip">Seaborn</span><span className="sub-chip">Matplotlib</span></div></div>
              <span className="sub-tag">EDA</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">🏠</div>
              <div className="sub-info"><h4>California Housing — Regression</h4><p>LightGBM with Optuna tuning, deployed on Streamlit Cloud. Best tuned R² 0.8588 — directly informs the production regression model.</p><div className="sub-chips"><span className="sub-chip">LightGBM</span><span className="sub-chip">XGBoost</span><span className="sub-chip">Optuna</span><span className="sub-chip">Streamlit</span></div></div>
              <span className="sub-tag">Regression</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">✅</div>
              <div className="sub-info"><h4>Loan Approver — Classification</h4><p>XGBoost pipeline with SMOTE, Yeo-Johnson transforms, and full sklearn Pipeline. ~83% accuracy. Precursor to production classifier.</p><div className="sub-chips"><span className="sub-chip">XGBoost</span><span className="sub-chip">SMOTE</span><span className="sub-chip">sklearn Pipeline</span><span className="sub-chip">Streamlit</span></div></div>
              <span className="sub-tag">Classification</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">👥</div>
              <div className="sub-info"><h4>Customer Segmentation — RFM Clustering</h4><p>RFM feature engineering on Online Retail dataset. Compared K-Means (0.61), Hierarchical (0.92), and GMM (0.54). SHAP surrogate for cluster explainability. GMM borrower segmentation in production came from this work.</p><div className="sub-chips"><span className="sub-chip">KMeans</span><span className="sub-chip">GMM</span><span className="sub-chip">SHAP</span><span className="sub-chip">PCA</span><span className="sub-chip">RFM</span></div></div>
              <span className="sub-tag">Clustering</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">🧠</div>
              <div className="sub-info"><h4>Loan Approver ANN — Deep Learning</h4><p>ANN vs ML comparison on loan default dataset. ANN (87%) outperformed ML baseline (82%), validating the neural approach for tabular financial data.</p><div className="sub-chips"><span className="sub-chip">TensorFlow/Keras</span><span className="sub-chip">Sigmoid</span><span className="sub-chip">Streamlit</span></div></div>
              <span className="sub-tag">DL · ANN</span>
            </div>
</Expander>
      </div>

      
      <div className="pcard reveal">
        <div className="pc-body">
          <div className="pc-icon">🐱</div>
          <div className="badge-live"><span></span>Live · HF + Streamlit</div>
          <h3>Cat vs Dog Classifier</h3>
          <p>Transfer learning with EfficientNetV2L (ImageNet). Fine-tuned last 20 layers with data augmentation. Validation accuracy 95%, precision 99.07%, recall 100%. Model hosted on HuggingFace, Streamlit app deployed via Docker.</p>
          <div className="chips">
            <span className="chip">EfficientNetV2L</span><span className="chip">Transfer Learning</span><span className="chip">Data Augmentation</span>
            <span className="chip chip-v">TensorFlow/Keras</span><span className="chip chip-v">Docker</span><span className="chip chip-v">HuggingFace</span>
          </div>
        </div>
        <div className="pc-metrics">
          <div className="pcm"><strong>95%</strong>Val Accuracy</div>
          <div className="pcm"><strong>99.07%</strong>Precision</div>
          <div className="pcm"><strong>100%</strong>Recall</div>
        </div>
        <div className="pc-links">
          <a href="https://github.com/moizishere-droid/CatDog-Classifier-Finetune-Augmentation-DL-Project" target="_blank" rel="noopener noreferrer" className="pl"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>GitHub</a>
          <a href="https://huggingface.co/Abdulmoiz123/cat-dog-classifier" target="_blank" rel="noopener noreferrer" className="pl">🤗 Model</a>
        </div>
        <Expander title="Deep learning practice projects (3)">
            <div className="sub-card">
              <div className="sub-icon">✏️</div>
              <div className="sub-info"><h4>MNIST Digit Recognition — CNN</h4><p>CNN achieving 99.14% accuracy on handwritten digits. Conv2D → MaxPool → Flatten → Dropout → Softmax. Streamlit canvas for real-time drawing and prediction.</p><div className="sub-chips"><span className="sub-chip">CNN</span><span className="sub-chip">TensorFlow</span><span className="sub-chip">Streamlit</span><span className="sub-chip">OpenCV</span></div></div>
              <span className="sub-tag">99.14% acc</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">📩</div>
              <div className="sub-info"><h4>Spam Classifier — RNN / LSTM / GRU</h4><p>Compared three sequence models on email spam classification. LSTM 98.87%, GRU 98.81% after threshold tuning. Streamlit app with model selector and probability display.</p><div className="sub-chips"><span className="sub-chip">LSTM</span><span className="sub-chip">GRU</span><span className="sub-chip">RNN</span><span className="sub-chip">NLTK</span><span className="sub-chip">Streamlit</span></div></div>
              <span className="sub-tag">LSTM 98.87%</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">🔤</div>
              <div className="sub-info"><h4>Transformer from Scratch — English→Urdu NMT</h4><p>Built every component from scratch in PyTorch: self-attention, multi-head attention, positional encoding, encoder, decoder. Trained on ~9k English–Urdu pairs. No nn.Transformer used.</p><div className="sub-chips"><span className="sub-chip">PyTorch</span><span className="sub-chip">Self-Attention</span><span className="sub-chip">Encoder-Decoder</span><span className="sub-chip">NMT</span></div></div>
              <span className="sub-tag">From Scratch</span>
            </div>
</Expander>
      </div>

      
      <div className="pcard reveal">
        <div className="pc-body">
          <div className="pc-icon">💻</div>
          <div className="badge-live"><span></span>Live on HF Spaces</div>
          <h3>CodeMentor-LLM</h3>
          <p>Production-grade coding assistant built by fine-tuning Llama-3.2-3B-Instruct with a two-stage SFT + DPO alignment pipeline on 5,000 high-quality coding pairs. CI/CD via GitHub Actions, experiment tracking on W&B, deployed on HF Spaces.</p>
          <div className="chips">
            <span className="chip">Llama-3.2-3B</span><span className="chip">QLoRA</span><span className="chip">SFT</span><span className="chip">DPO</span><span className="chip">PEFT</span><span className="chip">W&B</span>
            <span className="chip chip-v">FastAPI</span><span className="chip chip-v">Streamlit</span><span className="chip chip-v">Docker</span><span className="chip chip-v">CI/CD</span>
          </div>
        </div>
        <div className="pc-metrics">
          <div className="pcm"><strong>24 phases</strong>Full MLOps</div>
          <div className="pcm"><strong>SFT + DPO</strong>Two-stage</div>
          <div className="pcm"><strong>5k pairs</strong>Training data</div>
        </div>
        <div className="pc-links">
          <a href="https://github.com/moizishere-droid/CodeMentor-LLM" target="_blank" rel="noopener noreferrer" className="pl"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>GitHub</a>
          <a href="https://abdulmoiz123-codementor-llm-combined.hf.space" target="_blank" rel="noopener noreferrer" className="pl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>Live Demo</a>
          <a href="https://huggingface.co/Abdulmoiz123/codementor-llm-merged" target="_blank" rel="noopener noreferrer" className="pl">🤗 Model</a>
        </div>
        <Expander title="LLM fine-tuning practice projects (4)">
            <div className="sub-card">
              <div className="sub-icon">🐦</div>
              <div className="sub-info"><h4>Tweet Sentiment — Full Fine-tuning</h4><p>Full fine-tuning of DistilBERT on tweet_eval sentiment dataset. 74.05% accuracy after 3 epochs. Inference pipeline published to HuggingFace Hub.</p><div className="sub-chips"><span className="sub-chip">DistilBERT</span><span className="sub-chip">HuggingFace Trainer</span><span className="sub-chip">FP16</span></div></div>
              <span className="sub-tag">Full FT</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">💬</div>
              <div className="sub-info"><h4>Customer Support Chatbot — LoRA</h4><p>LoRA adapter fine-tuning for a domain-specific support chatbot. Efficient parameter tuning without full model retraining.</p><div className="sub-chips"><span className="sub-chip">LoRA</span><span className="sub-chip">PEFT</span><span className="sub-chip">HuggingFace</span></div></div>
              <span className="sub-tag">LoRA</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">🩺</div>
              <div className="sub-info"><h4>Medical Knowledge Assistant — Domain Adapter</h4><p>Domain adapter + LoRA for medical Q&A. Combines domain-specific adapter stacking with task-specific LoRA layers.</p><div className="sub-chips"><span className="sub-chip">Domain Adapter</span><span className="sub-chip">LoRA</span><span className="sub-chip">Medical NLP</span></div></div>
              <span className="sub-tag">Adapter</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">⚖️</div>
              <div className="sub-info"><h4>GPT-2 DPO Alignment</h4><p>Direct Preference Optimisation on GPT-2. Built preference dataset with chosen/rejected pairs and applied DPO training — the same alignment technique used in the production CodeMentor pipeline.</p><div className="sub-chips"><span className="sub-chip">DPO</span><span className="sub-chip">GPT-2</span><span className="sub-chip">TRL</span></div></div>
              <span className="sub-tag">DPO</span>
            </div>
</Expander>
      </div>

      
      <div className="pcard reveal">
        <div className="pc-body">
          <div className="pc-icon">🩺</div>
          <div className="badge-dev"><span></span>In Development</div>
          <h3>MedRAG</h3>
          <p>End-to-end multilingual multimodal medical RAG system. Ingests PubMed, WHO guidelines, and OpenFDA. Answers across text, images, and tables in 6 languages (English, Arabic, French, German, Spanish, Urdu) using GPT-4-turbo + CLIP + Qdrant + Neo4j.</p>
          <div className="chips">
            <span className="chip">GPT-4-turbo</span><span className="chip">CLIP</span><span className="chip">Qdrant</span><span className="chip">Neo4j</span><span className="chip">RAGAS</span><span className="chip">scispaCy</span>
            <span className="chip chip-v">FastAPI</span><span className="chip chip-v">Streamlit</span><span className="chip chip-v">Docker</span>
          </div>
        </div>
        <div className="pc-metrics">
          <div className="pcm"><strong>6 langs</strong>Multilingual</div>
          <div className="pcm"><strong>Multimodal</strong>Text+Image+Table</div>
          <div className="pcm"><strong>Phase 0</strong>Architecture done</div>
        </div>
        <div className="pc-links">
          <a href="https://github.com/moizishere-droid/medrag" target="_blank" rel="noopener noreferrer" className="pl"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>GitHub</a>
        </div>
        <Expander title="RAG practice projects that led here (3)">
            <div className="sub-card">
              <div className="sub-icon">📄</div>
              <div className="sub-info"><h4>Multi-PDF RAG Application</h4><p>Upload multiple PDFs and ask questions. LangChain + FAISS vector store + OpenAI embeddings. Context-aware answers strictly from uploaded documents. Deployed on Streamlit Cloud.</p><div className="sub-chips"><span className="sub-chip">LangChain</span><span className="sub-chip">FAISS</span><span className="sub-chip">OpenAI Embeddings</span><span className="sub-chip">Streamlit</span></div></div>
              <span className="sub-tag">RAG</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">🔀</div>
              <div className="sub-info"><h4>Hybrid RAG + AI Agent System</h4><p>Combines RAG retrieval with agent-style tool usage (web search, calculator, notes) using LangChain v1.1.3. Session-based memory, FAISS vector store, modular tool architecture.</p><div className="sub-chips"><span className="sub-chip">LangChain</span><span className="sub-chip">FAISS</span><span className="sub-chip">Tool Use</span><span className="sub-chip">Streamlit</span></div></div>
              <span className="sub-tag">Hybrid</span>
            </div>
            <div className="sub-card">
              <div className="sub-icon">🌐</div>
              <div className="sub-info"><h4>Multilingual RAG System</h4><p>25-phase pipeline with mBERT + XLM-R embeddings, Jina reranking, and LangSmith observability. Direct predecessor to MedRAG's multilingual retrieval layer.</p><div className="sub-chips"><span className="sub-chip">mBERT</span><span className="sub-chip">XLM-R</span><span className="sub-chip">Jina</span><span className="sub-chip">LangSmith</span><span className="sub-chip">Qdrant</span></div></div>
              <span className="sub-tag">Multilingual</span>
            </div>
</Expander>
      </div>

      
      <div className="pcard wide reveal">
        <div className="pc-body" style={{
            "maxWidth": "580px"
          }}>
          <div className="pc-icon">🤖</div>
          <div className="badge-plan">In Planning</div>
          <h3>Agentic AI System <span style={{
                "fontWeight": "400",
                "color": "var(--muted)",
                "fontSize": ".9rem"
              }}>— Coming Soon</span></h3>
          <p>A production-grade multi-agent system currently in the planning phase. Will combine supervisor-worker agent architecture, tool-calling, long-term memory, and real-world integrations — building on the agent and RAG foundations already in place. Full repo and deployment will follow the same 20+ phase production methodology.</p>
          <div className="chips">
            <span className="chip">LangGraph</span><span className="chip">Supervisor Agents</span><span className="chip">Tool Use</span><span className="chip">Long-term Memory</span>
            <span className="chip chip-v">FastAPI</span><span className="chip chip-v">Docker</span><span className="chip chip-v">TBD</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>;
}

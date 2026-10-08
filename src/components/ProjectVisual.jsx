import { Icon } from './ui';

const graph = [28, 43, 35, 57, 48, 66, 60, 76, 71, 91, 82, 98];

export default function ProjectVisual({ project, compact = false }) {
  return (
    <div
      className={`project-visual visual-${project.id}${compact ? ' compact' : ''}`}
      aria-label={`${project.title} interface illustration`}
    >
      <div className="visual-top">
        <span className="visual-mark">
          <Icon name={project.id === 'codementor' ? 'code' : 'layers'} size={17} />
          {project.id === 'loan-risk'
            ? 'LoanRisk'
            : project.id === 'cat-dog'
              ? 'Vision Lab'
              : project.id === 'codementor'
                ? 'CodeMentor'
                : project.id === 'medrag'
                  ? 'MedRAG'
                  : 'Agent Studio'}
        </span>
        <span className="visual-online">
          <i />
          {project.id === 'agentic-ai' ? 'Architecture' : 'Workspace'}
        </span>
      </div>
      <div className="visual-layout">
        <aside className="visual-sidebar">
          <span className="visual-nav active">
            <Icon name="layers" size={14} />
            Overview
          </span>
          <span className="visual-nav">
            <Icon name="code" size={14} />
            Models
          </span>
          <span className="visual-nav">
            <Icon name="search" size={14} />
            Evaluation
          </span>
          <div className="sidebar-bottom">
            <span className="tiny-avatar">AM</span>
            <span>
              Abdul Moiz<small>AI / ML Engineer</small>
            </span>
          </div>
        </aside>
        <div className="visual-body">
          {project.id === 'loan-risk' && (
            <>
              <p className="visual-kicker">INTELLIGENCE, EXPLAINED</p>
              <h3>
                A clearer picture
                <br />
                of financial risk.
              </h3>
              <p className="visual-description">Prediction. Segmentation. Explainability.</p>
              <div className="visual-stats">
                <div>
                  <small>Classification F1</small>
                  <strong>
                    0.8390<span>↗</span>
                  </strong>
                </div>
                <div>
                  <small>ROC AUC</small>
                  <strong>
                    0.9471<span>↗</span>
                  </strong>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-header">
                  <span>Model performance</span>
                  <small>LightGBM · ONNX</small>
                </div>
                <div className="bar-chart">
                  {graph.map((height, i) => (
                    <span key={i} style={{ '--height': `${height}%` }} />
                  ))}
                </div>
                <div className="chart-axis">
                  <span>Experiment 01</span>
                  <span>Production</span>
                </div>
              </div>
              <div className="result-row">
                <span className="status-dot" />
                APPROVED
                <span>
                  SHAP explanation available <Icon name="arrow" size={13} />
                </span>
              </div>
              <div className="visual-footer-line">
                R² 0.9077<span>RMSE 0.9811 · rate 12.4%</span>
              </div>
            </>
          )}
          {project.id === 'cat-dog' && (
            <>
              <p className="visual-kicker">COMPUTER VISION</p>
              <h3>
                Small details.
                <br />
                Confident predictions.
              </h3>
              <p className="visual-description">EfficientNetV2L · Transfer learning</p>
              <div className="vision-frame">
                <div className="scan-grid" />
                <svg viewBox="0 0 180 150" aria-hidden="true">
                  <path
                    d="M39 65 30 18 71 43Q90 32 110 43L150 18l-9 47q12 21 5 43-12 28-56 32-44-4-56-32-7-22 5-43Z"
                    fill="currentColor"
                    opacity=".85"
                  />
                  <path
                    d="m54 83 19 4m35 0 19-4m-42 20 5 5 5-5m-5 5v8m-28-10-25-5m25 14-25 1m81-10 25-5m-25 14 25 1"
                    stroke="#dfead9"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                <span className="scan-corner top-left" />
                <span className="scan-corner bottom-right" />
                <span className="scan-line" />
                <span className="vision-label">Class: cat</span>
              </div>
              <div className="visual-stats three">
                <div>
                  <small>Accuracy</small>
                  <strong>95%</strong>
                </div>
                <div>
                  <small>Precision</small>
                  <strong>99.07%</strong>
                </div>
                <div>
                  <small>Recall</small>
                  <strong>100%</strong>
                </div>
              </div>
            </>
          )}
          {project.id === 'codementor' && (
            <>
              <p className="visual-kicker">YOUR CODING COMPANION</p>
              <h3>
                Better answers.
                <br />
                Built, not prompted.
              </h3>
              <div className="chat-prompt">
                <span className="tiny-avatar">AM</span>
                <p>Explain how attention works in a transformer.</p>
              </div>
              <div className="chat-answer">
                <span className="model-symbol">✳</span>
                <div>
                  <p>Attention lets each token learn which other tokens matter.</p>
                  <div className="code-snippet">
                    <span className="code-muted"># Scaled dot-product attention</span>
                    <br />
                    <span className="code-purple">def</span> attention(q, k, v):
                    <br />
                    &nbsp; scores = q @ k.T / sqrt(d_k)
                    <br />
                    &nbsp; <span className="code-purple">return</span> softmax(scores) @ v
                  </div>
                  <div className="response-meta">
                    <Icon name="check" size={12} />
                    Llama-3.2-3B · SFT + DPO
                  </div>
                </div>
              </div>
              <div className="chat-input">
                Ask CodeMentor anything<span>↑</span>
              </div>
              <div className="visual-footer-line">
                5,000 training pairs <span>24 phases · production ready</span>
              </div>
            </>
          )}
          {project.id === 'medrag' && (
            <>
              <p className="visual-kicker">KNOWLEDGE, CONNECTED</p>
              <h3>
                Medical knowledge.
                <br />
                Without the barriers.
              </h3>
              <p className="visual-description">Multilingual. Multimodal. Grounded in sources.</p>
              <div className="rag-network">
                <span className="network-center">
                  <Icon name="layers" size={32} />
                  MedRAG
                </span>
                {['PubMed', 'WHO', 'OpenFDA', 'Qdrant', 'CLIP', 'Neo4j'].map((name, i) => (
                  <span key={name} className={`network-node node-${i}`}>
                    {name}
                  </span>
                ))}
                <svg viewBox="0 0 440 220" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M220 110 64 45M220 110 220 24M220 110 370 45M220 110 64 180M220 110 220 198M220 110 370 180" />
                </svg>
              </div>
              <div className="language-list">
                {['EN', 'AR', 'FR', 'DE', 'ES', 'UR'].map((lang) => (
                  <span key={lang}>{lang}</span>
                ))}
              </div>
              <div className="visual-footer-line">
                Architecture complete<span>In development</span>
              </div>
            </>
          )}
          {project.id === 'agentic-ai' && (
            <>
              <p className="visual-kicker">THE NEXT CHAPTER</p>
              <h3>
                One goal.
                <br />
                Many capable agents.
              </h3>
              <p className="visual-description">Planning a production multi-agent system.</p>
              <div className="agent-flow">
                <span className="flow-goal">Real-world task</span>
                <i />
                <span className="flow-supervisor">
                  <Icon name="layers" size={20} />
                  Supervisor
                </span>
                <div className="agent-workers">
                  <span>
                    Research
                    <br />
                    <small>Web + RAG</small>
                  </span>
                  <span>
                    Execute
                    <br />
                    <small>Tool calling</small>
                  </span>
                  <span>
                    Remember
                    <br />
                    <small>Long-term memory</small>
                  </span>
                </div>
              </div>
              <div className="visual-footer-line">
                LangGraph · FastAPI<span>In planning</span>
              </div>
            </>
          )}
        </div>
      </div>
      <span className="visual-caption">Interface study · {project.category}</span>
    </div>
  );
}

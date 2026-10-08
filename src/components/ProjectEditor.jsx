import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolio';
import { Icon, Wordmark } from './ui';
import ProjectVisual from './ProjectVisual';

const getScreenDevice = () => (window.innerWidth <= 767 ? 'mobile' : 'desktop');

export default function ProjectEditor({ onSelectProject, theme, toggleTheme }) {
  const [panels, setPanels] = useState(true);
  const [device, setDevice] = useState(getScreenDevice);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [tab, setTab] = useState('Projects');
  const [width, setWidth] = useState(1200);
  const [active, setActive] = useState(null);
  const [held, setHeld] = useState(null);
  const viewport = useRef(null);
  const track = useRef(null);
  const drag = useRef(null);
  const holdTimer = useRef(null);
  const position = useRef(0);
  const speedRef = useRef(speed);
  const pauseRef = useRef(false);
  const moved = useRef(false);
  const didHold = useRef(false);
  speedRef.current = speed;
  pauseRef.current = paused || active !== null || held !== null;

  useLayoutEffect(() => {
    const screen = window.matchMedia('(max-width: 767px)');
    let lastWidth = window.innerWidth;
    setDevice(getScreenDevice());
    const updateDevice = () => {
      // Ignore synthetic resize events that do not change the screen width.
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      setDevice(getScreenDevice());
    };
    screen.addEventListener('change', updateDevice);
    window.addEventListener('resize', updateDevice);
    window.addEventListener('orientationchange', updateDevice);
    return () => {
      screen.removeEventListener('change', updateDevice);
      window.removeEventListener('resize', updateDevice);
      window.removeEventListener('orientationchange', updateDevice);
    };
  }, []);
  useEffect(() => {
    const observer = new ResizeObserver((entries) =>
      setWidth(Math.round(entries[0].contentRect.width)),
    );
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const el = track.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame,
      last = 0,
      visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(viewport.current);
    const draw = (time) => {
      const dt = last ? Math.min(time - last, 40) : 0;
      last = time;
      if (!reduced && visible && !pauseRef.current && !drag.current)
        position.current -= dt * 0.06 * speedRef.current;
      const period = el.children[projects.length]?.offsetLeft - el.children[0]?.offsetLeft;
      if (period > 0) {
        position.current = ((position.current % period) - period) % period;
        el.style.transform = `translate3d(${position.current}px,0,0)`;
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      clearTimeout(holdTimer.current);
    };
  }, [device]);
  const pointerDown = (event, project) => {
    if (event.button !== 0) return;
    moved.current = false;
    didHold.current = false;
    drag.current = { x: event.clientX, y: event.clientY, offset: position.current };
    event.currentTarget.setPointerCapture(event.pointerId);
    clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(() => {
      if (!moved.current) {
        didHold.current = true;
        setHeld(project);
      }
    }, 550);
  };
  const pointerMove = (event) => {
    if (!drag.current) return;
    const delta = event.clientX - drag.current.x;
    if (Math.abs(delta) > 8 || Math.abs(event.clientY - drag.current.y) > 8) {
      moved.current = true;
      clearTimeout(holdTimer.current);
      position.current = drag.current.offset + delta;
    }
  };
  const pointerUp = (event, project) => {
    clearTimeout(holdTimer.current);
    if (drag.current && !moved.current && !didHold.current) onSelectProject(project);
    drag.current = null;
    setHeld(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const cancelPointer = () => {
    clearTimeout(holdTimer.current);
    drag.current = null;
    setHeld(null);
  };
  const jump = (index) => {
    const card = track.current.children[index];
    position.current = -(card?.offsetLeft || 0);
    setPaused(true);
  };

  return (
    <div className={`project-editor${panels ? '' : ' panels-hidden'} device-${device}`}>
      <div className="editor-topbar">
        <button
          className="editor-brand icon-button"
          aria-label={panels ? 'Collapse editor panels' : 'Expand editor panels'}
          aria-expanded={panels}
          onClick={() => setPanels((value) => !value)}
        >
          <Wordmark compact />
          <Icon name="chevron" size={12} />
        </button>
        <div className="editor-view-controls">
          <div className="segmented">
            <button
              aria-label="Desktop preview"
              aria-pressed={device === 'desktop'}
              onClick={() => setDevice('desktop')}
            >
              <Icon name="desktop" size={19} />
            </button>
            <button
              aria-label="Mobile preview"
              aria-pressed={device === 'mobile'}
              onClick={() => setDevice('mobile')}
            >
              <Icon name="mobile" size={17} />
            </button>
          </div>
          <span className="editor-dimensions">
            w <b>{device === 'mobile' ? '375' : width}</b>px<span>|</span>
            <Icon name="search" size={13} />
            100%
          </span>
        </div>
        <span className="editor-avatar" title="Abdul Moiz">
          AM
        </span>
      </div>
      <div className="editor-viewport" ref={viewport}>
        <div className="editor-track" ref={track}>
          {[...projects, ...projects].map((project, i) => (
            <button
              key={`${project.id}-${i}`}
              className={`editor-shot${active === i ? ' hovered' : ''}`}
              aria-label={`Preview ${project.title}`}
              tabIndex={i >= projects.length ? -1 : 0}
              aria-hidden={i >= projects.length ? true : undefined}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={(event) => {
                setActive(i);
                if (event.currentTarget.matches(':focus-visible')) jump(i);
              }}
              onBlur={() => setActive(null)}
              onPointerDown={(event) => pointerDown(event, project)}
              onPointerMove={pointerMove}
              onPointerUp={(event) => pointerUp(event, project)}
              onPointerCancel={cancelPointer}
              onClick={(event) => {
                if (event.detail === 0) onSelectProject(project);
              }}
            >
              <ProjectVisual project={project} />
              <span className="shot-hint">Press & hold to preview</span>
            </button>
          ))}
        </div>
        {panels && (
          <>
            <aside className="editor-panel editor-left">
              <div className="editor-tabs" role="tablist" aria-label="Portfolio explorer">
                {['Projects', 'Layers', 'Stack'].map((label) => (
                  <button
                    key={label}
                    role="tab"
                    aria-selected={tab === label}
                    onClick={() => setTab(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="editor-tree" role="tabpanel" aria-label={tab}>
                {tab === 'Projects' ? (
                  <>
                    <p>
                      <Icon name="layers" size={14} />
                      My portfolio
                    </p>
                    {projects.map((project, i) => (
                      <button onClick={() => jump(i)} key={project.id}>
                        <span className="tree-indent" />
                        {project.title}
                        <small>{project.number}</small>
                      </button>
                    ))}
                  </>
                ) : tab === 'Layers' ? (
                  [
                    'Hero',
                    'Introduction',
                    'Selected work',
                    'Expertise',
                    'Background',
                    'Resume',
                    'Contact',
                  ].map((label, i) => (
                    <a
                      key={label}
                      href={`#${['hero', 'about', 'projects', 'skills', 'education', 'resume', 'contact'][i]}`}
                    >
                      <Icon name="layers" size={12} />
                      {label}
                    </a>
                  ))
                ) : (
                  [
                    'Python',
                    'TensorFlow / PyTorch',
                    'LangChain / LangGraph',
                    'FastAPI',
                    'Docker',
                    'HuggingFace',
                  ].map((label) => (
                    <div className="stack-item" key={label}>
                      <Icon name="code" size={12} />
                      {label}
                    </div>
                  ))
                )}
              </div>
              <div className="editor-panel-foot">
                <span className="status-dot" />
                20+ projects. One journey.
              </div>
            </aside>
            <aside className="editor-panel editor-right">
              <p className="panel-title">Portfolio properties</p>
              <div className="property-group">
                <span>Position</span>
                <div>
                  <small>Type</small>
                  <b>Production</b>
                </div>
              </div>
              <div className="property-group">
                <span>Size</span>
                <div>
                  <small>Domains</small>
                  <b>
                    5 <em>Focus</em>
                  </b>
                </div>
                <div>
                  <small>Projects</small>
                  <b>
                    20+ <em>Built</em>
                  </b>
                </div>
              </div>
              <div className="property-group">
                <span>Layout</span>
                <div>
                  <small>Direction</small>
                  <Icon name="arrow" size={14} />
                </div>
                <div>
                  <small>Workflow</small>
                  <b>Experiment → Deploy</b>
                </div>
                <div>
                  <small>Method</small>
                  <b>20+ phases</b>
                </div>
              </div>
              <div className="property-group">
                <span>Effects</span>
                <div>
                  <small>Explainability</small>
                  <b>SHAP</b>
                </div>
                <div>
                  <small>Deployment</small>
                  <b>HF Spaces</b>
                </div>
              </div>
              <div className="property-group">
                <span>Availability</span>
                <div>
                  <small>Roles</small>
                  <b>AI / ML</b>
                </div>
                <div>
                  <small>Location</small>
                  <b>Karachi</b>
                </div>
              </div>
            </aside>
          </>
        )}
        {held && (
          <div className="hold-preview" aria-hidden="true">
            <ProjectVisual project={held} />
            <span>Release to return</span>
          </div>
        )}
      </div>
      <div className="editor-bottom">
        <span className="editor-instructions">
          Hold to preview <i />
          Click to explore <i />
          Drag the strip
        </span>
        <div className="editor-bottom-controls">
          <button
            className="icon-button"
            aria-label={paused ? 'Play project strip' : 'Pause project strip'}
            onClick={() => setPaused((value) => !value)}
          >
            <Icon name={paused ? 'play' : 'pause'} size={13} />
          </button>
          <select
            value={speed}
            onChange={(event) => setSpeed(Number(event.target.value))}
            aria-label="Project strip speed"
          >
            <option value=".5">0.5×</option>
            <option value="1">1×</option>
            <option value="2">2×</option>
          </select>
          <button className="icon-button" aria-label="Toggle canvas theme" onClick={toggleTheme}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

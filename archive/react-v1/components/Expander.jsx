import { useId, useState } from 'react';
export default function Expander({
  title,
  children
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return <div className="expander">
      <button type="button" className={`exp-toggle${open ? ' open' : ''}`} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)}>
        <span>{title}</span><span className="arr">▼</span>
      </button>
      <div id={panelId} className={`exp-body${open ? ' open' : ''}`} inert={!open}>
        {children}
      </div>
    </div>;
}

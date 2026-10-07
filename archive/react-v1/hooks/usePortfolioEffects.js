import { useEffect } from 'react';
export default function usePortfolioEffects() {
  useEffect(() => {
    const frames = new Set();
    const timers = new Set();
    const listeners = [];
    const observers = [];
    const requestAnimationFrame = callback => {
      const id = window.requestAnimationFrame(time => {
        frames.delete(id);
        callback(time);
      });
      frames.add(id);
      return id;
    };
    const setTimeout = (callback, delay) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        callback();
      }, delay);
      timers.add(id);
      return id;
    };
    const onResize = callback => {
      window.addEventListener('resize', callback);
      listeners.push(callback);
    };
    const createObserver = (callback, options) => {
      const observer = new window.IntersectionObserver(callback, options);
      observers.push(observer);
      return observer;
    };

    /* HERO CANVAS */
    (function () {
      const c = document.getElementById('hero-canvas'),
        ctx = c.getContext('2d');
      let W,
        H,
        ns = [];
      const N = 85,
        D = 145,
        S = .32;
      function r() {
        W = c.width = c.offsetWidth;
        H = c.height = c.offsetHeight;
      }
      function init() {
        ns = [];
        for (let i = 0; i < N; i++) ns.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - .5) * S,
          vy: (Math.random() - .5) * S,
          r: Math.random() * 1.4 + .5
        });
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < ns.length; i++) {
          for (let j = i + 1; j < ns.length; j++) {
            const a = ns[i],
              b = ns[j],
              dx = a.x - b.x,
              dy = a.y - b.y,
              d = Math.sqrt(dx * dx + dy * dy);
            if (d < D) {
              const al = 1 - d / D;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(0,212,255,${al * .15})`;
              ctx.lineWidth = .6;
              ctx.stroke();
            }
          }
        }
        ns.forEach(n => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0,212,255,.4)';
          ctx.shadowColor = 'rgba(0,212,255,.7)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        });
        requestAnimationFrame(draw);
      }
      onResize(() => {
        r();
        init();
      });
      r();
      init();
      draw();
    })();

    /* CONTACT CANVAS */
    (function () {
      const c = document.getElementById('contact-canvas'),
        ctx = c.getContext('2d');
      let W,
        H,
        t = 0;
      function r() {
        W = c.width = c.offsetWidth;
        H = c.height = c.offsetHeight;
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        const cx = W / 2,
          cy = H / 2;
        for (let i = 0; i < 5; i++) {
          const rr = (t * 28 + i * 88) % Math.max(W, H);
          const al = 1 - rr / Math.max(W, H);
          ctx.beginPath();
          ctx.arc(cx, cy, rr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(124,58,237,${al * .1})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        t += .004;
        requestAnimationFrame(draw);
      }
      onResize(r);
      r();
      draw();
    })();

    /* TYPEWRITER */
    (function () {
      const el = document.getElementById('typed');
      const ph = ["ML systems.", "fine-tuned LLMs.", "RAG pipelines.", "deep learning models.", "agentic AI.", "production AI."];
      let pi = 0,
        ci = 0,
        del = false,
        pause = 0;
      function tick() {
        const p = ph[pi];
        if (pause > 0) {
          pause--;
          setTimeout(tick, 50);
          return;
        }
        if (!del) {
          el.textContent = p.slice(0, ci + 1);
          ci++;
          if (ci === p.length) {
            del = true;
            pause = 36;
          }
          setTimeout(tick, 78);
        } else {
          el.textContent = p.slice(0, ci - 1);
          ci--;
          if (ci === 0) {
            del = false;
            pi = (pi + 1) % ph.length;
            pause = 8;
          }
          setTimeout(tick, 38);
        }
      }
      setTimeout(tick, 800);
    })();

    /* REVEAL */
    (function () {
      const els = document.querySelectorAll('.reveal');
      const io = createObserver(e => e.forEach(x => {
        if (x.isIntersecting) {
          x.target.classList.add('in');
          io.unobserve(x.target);
        }
      }), {
        threshold: .08
      });
      els.forEach(el => io.observe(el));
    })();
    return () => {
      frames.forEach(id => window.cancelAnimationFrame(id));
      timers.forEach(id => window.clearTimeout(id));
      listeners.forEach(callback => window.removeEventListener('resize', callback));
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
}

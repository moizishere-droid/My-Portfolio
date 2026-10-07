import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioEffects(scope) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    let lenis;
    let ticker;
    media.add('(prefers-reduced-motion: no-preference)', () => {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -112 }, stopInertiaOnNavigate: true });
      lenis.on('scroll', ScrollTrigger.update);
      ticker = time => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.hero-badge', { opacity: 0, y: 16, duration: .6 }, .1)
        .from('.hero-char', { opacity: 0, yPercent: 45, filter: 'blur(7px)', duration: .7, stagger: .017 }, .15)
        .from('.hero-subtitle, .hero-buttons', { opacity: 0, y: 20, duration: .8, stagger: .1 }, .55)
        .from('.project-editor', { opacity: 0, y: 72, scale: .985, duration: 1.4, ease: 'expo.out' }, .75)
        .from('.hero > .gradient-bars', { opacity: 0, duration: 1.6 }, 1.1);
      gsap.utils.toArray('[data-reveal]', scope.current).forEach(el => {
        gsap.from(el, { opacity: 0, y: 26, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
      gsap.utils.toArray('[data-count]', scope.current).forEach(el => {
        const value = Number(el.dataset.count), counter = { value: 0 };
        gsap.to(counter, { value, duration: 1.5, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(counter.value); }, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
      gsap.to('.collage-one', { x: 120, ease: 'none', scrollTrigger: { trigger: '.about-section', start: 'top bottom', end: 'bottom top', scrub: .6 } });
      gsap.to('.collage-two', { x: -120, ease: 'none', scrollTrigger: { trigger: '.about-section', start: 'top bottom', end: 'bottom top', scrub: .6 } });
      return () => { if (ticker) gsap.ticker.remove(ticker); lenis?.destroy(); };
    }, scope);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('portfolio:resize', refresh);
    let disposed = false;
    document.fonts?.ready.then(() => { if (!disposed) refresh(); });
    return () => { disposed = true; window.removeEventListener('portfolio:resize', refresh); media.revert(); };
  }, [scope]);
}

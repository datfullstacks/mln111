"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type SlideDeckControlItem = {
  member: string;
  eyebrow: string;
  title: string;
};

type SlideDeckControlsProps = {
  slides: SlideDeckControlItem[];
};

export function SlideDeckControls({ slides }: SlideDeckControlsProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideElements = useRef<HTMLElement[]>([]);
  const activeSlideData = slides[activeSlide] ?? slides[0];
  const progress = slides.length ? ((activeSlide + 1) / slides.length) * 100 : 0;

  const slideMemberJumps = useMemo(
    () =>
      slides.reduce<{ member: string; startIndex: number }[]>((groups, slide, index) => {
        if (!groups.some(group => group.member === slide.member)) {
          groups.push({ member: slide.member, startIndex: index });
        }

        return groups;
      }, []),
    [slides]
  );

  const refreshSlideElements = useCallback(() => {
    slideElements.current = Array.from(document.querySelectorAll<HTMLElement>('.home-deck .slide-section'));
    return slideElements.current;
  }, []);

  const scrollToSlide = useCallback(
    (slideIndex: number) => {
      const nextIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));
      const slideNodes = slideElements.current.length ? slideElements.current : refreshSlideElements();
      const target = slideNodes[nextIndex];

      if (!target) {
        return;
      }

      const headerOffset = 82;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
      setActiveSlide(nextIndex);
    },
    [refreshSlideElements, slides.length]
  );

  const updateActiveSlide = useCallback(() => {
    const slideNodes = slideElements.current.length ? slideElements.current : refreshSlideElements();
    const viewportMiddle = window.innerHeight / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideNodes.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        return;
      }

      const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlide(closestIndex);
  }, [refreshSlideElements]);

  useEffect(() => {
    let frame = 0;
    refreshSlideElements();

    const handleViewportChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSlide);
    };

    handleViewportChange();
    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, [refreshSlideElements, updateActiveSlide]);

  useEffect(() => {
    const slideNodes = slideElements.current.length ? slideElements.current : refreshSlideElements();
    slideNodes.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeSlide);
    });
  }, [activeSlide, refreshSlideElements]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      const isTyping =
        target?.closest('input, textarea, select, button, a, [contenteditable="true"]') || event.altKey || event.ctrlKey || event.metaKey;

      if (isTyping) {
        return;
      }

      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(activeSlide + 1);
      }

      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(activeSlide - 1);
      }

      if (event.key === 'Home') {
        event.preventDefault();
        scrollToSlide(0);
      }

      if (event.key === 'End') {
        event.preventDefault();
        scrollToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, scrollToSlide, slides.length]);

  if (!slides.length) {
    return null;
  }

  return (
    <aside className="slide-control-rail" aria-label="Slide controls">
      <div className="slide-current-index" aria-live="polite">
        <strong>{String(activeSlide + 1).padStart(2, '0')}</strong>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
      <div className="slide-progress-meter" aria-hidden="true">
        <span style={{ height: `${progress}%`, width: `${progress}%` }} />
      </div>
      <div className="slide-nav-buttons">
        <button
          type="button"
          className="slide-nav-button"
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          aria-label="Slide truoc"
          title="Slide truoc"
        >
          {'<'}
        </button>
        <button
          type="button"
          className="slide-nav-button"
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === slides.length - 1}
          aria-label="Slide tiep theo"
          title="Slide tiep theo"
        >
          {'>'}
        </button>
      </div>
      <div className="slide-current-meta">
        <strong>{activeSlideData.member}</strong>
        <span>{activeSlideData.eyebrow}</span>
      </div>
      <div className="slide-dot-grid" aria-label="Slide list">
        {slides.map((slide, index) => (
          <button
            key={`${slide.member}-${slide.eyebrow}`}
            type="button"
            className={`slide-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.eyebrow} - ${slide.title}`}
            aria-current={index === activeSlide ? 'step' : undefined}
            title={`${String(index + 1).padStart(2, '0')} - ${slide.eyebrow}`}
          >
            <span>{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="slide-member-jumps" aria-label="Presenter jumps">
        {slideMemberJumps.map(group => (
          <button
            key={group.member}
            type="button"
            className={activeSlideData.member === group.member ? 'active' : ''}
            onClick={() => scrollToSlide(group.startIndex)}
          >
            {group.member}
          </button>
        ))}
      </div>
    </aside>
  );
}

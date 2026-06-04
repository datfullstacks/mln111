"use client";

import { useCallback, useEffect, useRef, useState } from 'react';

type TimelineCarouselProps = {
  items: string[];
};

function isSectionCurrent(section: Element | null | undefined) {
  if (!(section instanceof HTMLElement)) {
    return false;
  }

  const rect = section.getBoundingClientRect();
  const viewportMiddle = window.innerHeight / 2;

  return section.classList.contains('is-active') || (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle);
}

export function TimelineCarousel({ items }: TimelineCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualTurn, setManualTurn] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const activeItem = items[activeIndex] ?? items[0];

  const goTo = useCallback(
    (index: number) => {
      if (!items.length) {
        return;
      }

      setActiveIndex((index + items.length) % items.length);
      setManualTurn(turn => turn + 1);
    },
    [items.length]
  );

  useEffect(() => {
    if (items.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      const section = rootRef.current?.closest('.slide-section');

      if (!isSectionCurrent(section)) {
        return;
      }

      setActiveIndex(index => (index + 1) % items.length);
    }, 3600);

    return () => {
      window.clearInterval(timer);
    };
  }, [items.length, manualTurn]);

  useEffect(() => {
    const section = rootRef.current?.closest('.slide-section');
    const cardGrid = section?.querySelector<HTMLElement>('.slide-card-grid');
    const cards = Array.from(section?.querySelectorAll<HTMLElement>('.slide-info-card') ?? []);

    if (!cardGrid || !cards.length) {
      return;
    }

    cardGrid.classList.add('has-linked-selection');
    rootRef.current?.closest<HTMLElement>('.slide-visual')?.setAttribute('data-timeline-active', String(activeIndex));
    cards.forEach((card, index) => {
      card.classList.toggle('is-linked-active', index === activeIndex);
    });

    const activeCard = cards[activeIndex];

    if (isSectionCurrent(section)) {
      window.requestAnimationFrame(() => {
        if (!activeCard) {
          return;
        }

        const targetTop = activeCard.offsetTop - cardGrid.clientHeight / 2 + activeCard.offsetHeight / 2;
        cardGrid.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
      });
    }

    return () => {
      rootRef.current?.closest<HTMLElement>('.slide-visual')?.removeAttribute('data-timeline-active');
      cardGrid.classList.remove('has-linked-selection');
      cards.forEach(card => card.classList.remove('is-linked-active'));
    };
  }, [activeIndex]);

  if (!items.length) {
    return null;
  }

  return (
    <div ref={rootRef} className="visual-timeline-carousel" aria-label="Timeline carousel">
      <div className="timeline-carousel-card" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, '0')}</span>
        <strong>{activeItem}</strong>
        <small>
          {activeIndex + 1}/{items.length}
        </small>
      </div>
      <div className="timeline-carousel-controls">
        <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Buoc truoc" title="Buoc truoc">
          {'<'}
        </button>
        <div className="timeline-carousel-dots">
          {items.map((item, index) => (
            <button
              key={item}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => goTo(index)}
              aria-label={`Toi buoc ${index + 1}: ${item}`}
              aria-current={index === activeIndex ? 'step' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </button>
          ))}
        </div>
        <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Buoc tiep theo" title="Buoc tiep theo">
          {'>'}
        </button>
      </div>
    </div>
  );
}

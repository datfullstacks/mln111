'use client';

import { useState, type ReactElement } from 'react';
import { Game } from './Game';
import { Hero } from './Hero';
import { Library } from './Library';
import { NavBar } from './NavBar';
import { Presentation } from './Presentation';
import { Regions } from './Regions';
import { Theory } from './Theory';

import type { NavKey } from './NavBar';

type SectionKey = 'theory' | 'presentation' | 'regions' | 'library' | 'game';

const sectionComponents: Partial<Record<NavKey, ReactElement>> = {
  theory: <Theory />,
  presentation: <Presentation />,
  regions: <Regions />,
  library: <Library />,
  game: <Game />
};

export function Home() {
  const [section, setSection] = useState<NavKey>('theory');

  return (
    <>
      <NavBar current={section} onNavigate={setSection} />
      <main>
        {section === 'theory' && <Hero onPrimary={() => setSection('theory')} onSecondary={() => setSection('game')} />}
        {sectionComponents[section] ?? null}
      </main>
    </>
  );
}

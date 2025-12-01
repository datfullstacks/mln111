'use client';

import { useState, type ReactElement } from 'react';
import { Game } from './Game';
import { Hero } from './Hero';
import { Library } from './Library';
import { NavBar } from './NavBar';
import { Presentation } from './Presentation';
import { Regions } from './Regions';
import { Theory } from './Theory';

type SectionKey = 'theory' | 'presentation' | 'regions' | 'library' | 'game';

const sectionComponents: Record<SectionKey, ReactElement> = {
  theory: <Theory />,
  presentation: <Presentation />,
  regions: <Regions />,
  library: <Library />,
  game: <Game />
};

export function Home() {
  const [section, setSection] = useState<SectionKey>('theory');

  return (
    <>
      <NavBar current={section} onNavigate={setSection} />
      <main>
        {section === 'theory' && <Hero onPrimary={() => setSection('theory')} onSecondary={() => setSection('game')} />}
        {sectionComponents[section]}
      </main>
    </>
  );
}

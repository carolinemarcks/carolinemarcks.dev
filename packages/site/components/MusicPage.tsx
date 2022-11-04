import React from 'react';
import Main from './Main';
import MusicHeader from './MusicHeader';

interface MusicPageProps {
  children: JSX.Element;
  category: 'tracks' | 'artists' | 'albums';
}

function MusicPage({ children, category }: MusicPageProps): JSX.Element {
  return (
    <Main>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>What I&apos;ve been listening to</h2>
          </div>
        </header>
        <MusicHeader selected={category} />
        {children}
      </article>
    </Main>
  );
}

export default MusicPage;

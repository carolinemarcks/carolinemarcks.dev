import React from 'react';
import Main from '../components/Main';

const Index = (): JSX.Element => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Welcome, friend!</h2>
        </div>
      </header>
      <p>
        I&apos;m a backend and api engineer who spends most of her time at work writing and desiging apis, along with
        the infrastructure to support them. This is my personal site where I feebly venture into the world of web
        development.
      </p>
    </article>
  </Main>
);

export default Index;

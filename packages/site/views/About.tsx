import React from 'react';
import Main from '../components/Main';

const About = (): JSX.Element => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>About me</h2>
        </div>
      </header>
      <p>I do things</p>
    </article>
  </Main>
);

export default About;

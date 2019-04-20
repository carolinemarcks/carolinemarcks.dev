import React from 'react';
import Main from '../components/Main';

const Index = (): JSX.Element => (
  <Main>
    <article className="post" id="index">
      <h1>Hello there!</h1>
      <p>
        I&apos;m a software engineer who spends most of her time at work thinking about how to help other engineers
        build and consume APIs. I love serverless applications, infrastructure as code, and coming up with the simplest
        solutions to the most complicated problems.
      </p>
      <p>
        Because I spend most of my time behind the scenes and not producing or consuming web apis myself, this site was
        built as a personal challenge to learn some technologies that I&apos;m interested in. It&apos;s built with React
        and Typescript, and the music components are powered by a GraphQL API. The infrastructure is all managed through
        AWS via CloudFormation. You can check out the source code{' '}
        <a href="https://github.com/carolinemarcks/carolinemarcks.dev">here</a>.
      </p>
      <p>
        In May of 2019, after almost 5 amazing years, I&apos;ll be moving on from Meetup and looking for a new
        opportunity. If you know of any smart and collaborative teams looking for a quick and passionate learner,{' '}
        <a href="mailto:caroline.marcks@gmail.com">send me a note</a>! I value diverse teams that engage in regular
        feedback and learn from both failures and successes.
      </p>
    </article>
  </Main>
);

export default Index;

import React from 'react';
import Main from '../components/Main';

const Index = (): JSX.Element => (
  <Main>
    <article className="post" id="index">
      <h1>Welcome, Friend!</h1>
      <p>
        I&apos;m a software engineer who spends most of her time at work thinking about how to help other engineers
        build and consume APIs. I love serverless applications, infrastructure as code, and coming up with the simplest
        solutions to the most complicated problems.
      </p>
      <p>
        Because I spend most of my time behind the scenes and not producing or consuming web apis myself, this site was
        built as a personal challenge to learn some technologies that I&apos;m interested in. It&apos;s built with React
        and Typescript, and some components are powered by a GraphQL API. The infrastructure is all managed through AWS
        via CloudFormation. You can check out the source code{' '}
        <a href="https://github.com/carolinemarcks/carolinemarcks.dev">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;

import React from 'react';
import Main from '../components/Main';

function Index(): JSX.Element {
  return (
    <Main>
      <section>
        <article className="post" id="index1">
          <h1>Hello there!</h1>
          <p>
            I&apos;m a software engineer who spends most of her time at work thinking about how to help other engineers
            build and consume APIs. I love serverless applications, infrastructure as code, and coming up with the
            simplest solutions to the most complicated problems.
          </p>
          <p>
            In May of 2019, after almost 5 amazing years, I&apos;ll be moving on from my role at{' '}
            <a href="https://www.meetup.com/">Meetup</a> and looking for a new opportunity. I&apos;ve worn many
            different hats at Meetup, and I pride myself in my ability to learn quickly and pick up the skills needed
            for any role. I&apos;m mostly interested in SaaS products — I&apos;ve worked on both platform and product
            and am now looking for the intersection of them. I have significant experience in backend and API
            development but am open to full-stack roles as well. If you know of any smart and collaborative teams
            looking for someone like me, send me a note{' '}
            <a href="https://www.linkedin.com/in/carolinemarcks/">on LinkedIn</a>.
          </p>
        </article>
      </section>
      <section>
        <article className="post" id="index2">
          <h1>About this site</h1>
          <p>
            Because I spend most of my time behind the scenes and not producing or consuming web apis myself, this site
            was built as a personal challenge to learn some technologies that I&apos;m interested in. It&apos;s built
            with React and Typescript, and the music components are powered by a GraphQL API. The infrastructure is all
            managed through AWS via CloudFormation.
          </p>
          <a href="https://github.com/carolinemarcks/carolinemarcks.dev" className="button">
            Check out the source code
          </a>
        </article>
      </section>
    </Main>
  );
}

export default Index;

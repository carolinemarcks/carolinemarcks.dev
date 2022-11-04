import React from 'react';
import Main from '../components/Main';

function Index(): JSX.Element {
  return (
    <Main>
      <section>
        <article className="post" id="index1">
          <h1>Hello there!</h1>
          <p>
            I&apos;m an experienced software engineer who is laser focused on user needs. At Stripe, I&apos;ve been
            helping startups run more of their financial life on Stripe by bringing them money management tools that
            replace their need to work directly with traditional banks. In my previous time at Meetup, I provided
            engineers with a way to own their product development from end to end with minimal overhead. I love quick
            iteration cycles, infrastructure as code, and coming up with the simplest solutions to the most complicated
            problems.
          </p>
          <p>
            While my title has always been &apos;Software Engineer&apos;, I&apos;ve worn many different hats. I pride
            myself in my ability to learn quickly and pick up the skills needed for any task. Right now, I&apos;m
            interested full stack roles where I can help a small product find product market fit and learn about user
            needs. I&apos;m particularly intrigued by productivity and collaboration tools, but open to any industry
            that I have&apos;t yet worked in! If you know of any smart and collaborative teams looking for someone like
            me, send me a note <a href="https://www.linkedin.com/in/carolinemarcks/">on LinkedIn</a>.
          </p>
        </article>
      </section>
      <section>
        <article className="post" id="index2">
          <h1>About this site</h1>
          <p>
            I built this site in 2019 to help get myself exposure to React &amp; other technologies that I hadn&apos;t
            yet been able to spend as much time with as I wanted. It&apos;s built with React and Typescript, and the
            music components are powered by a GraphQL API. The infrastructure is all managed through AWS via
            CloudFormation.
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

import React from 'react';
import Main from '../components/Main';

function About(): JSX.Element {
  return (
    <Main>
      <article className="post" id="index">
        <h1>About me</h1>
        <p>
          I&apos;m currently working at <a href="https://www.stripe.com/">Stripe</a> on applications of{' '}
          <a href="https://www.stripe.com/treasury">Treasury</a> and{' '}
          <a href="https://www.stripe.com/issuing">Issuing</a> to help startups run more of their financial life in one
          place. I started my professional career at <a href="https://www.meetup.com/">Meetup</a>, where I was a tech
          lead for the API Platform team, helping redesign and roll out a service oriented architecture. Before entering
          the workforce, I studied at Tufts University. I received my BSc in Computer Science from the School of
          Engineering in 2014.
        </p>
      </article>
      <article className="post" id="index">
        <h3>Other facts about me</h3>
        <ul>
          <li>
            My latest hobby is furniture flipping, and I&apos;m hoping to transition to building pieces from scratch
            soon!
          </li>
          <li>
            My partner and I are on a quest to go to every national park in the lower 48. Our favorite so far has been{' '}
            <a href="/lassen.jpeg">Lassen Volcanic National Park.</a>
          </li>
          <li>
            Git is one of my favorite pieces of technology. I could talk for hours about the mental model. I have many
            diagrams created in google drawings created while on calls with coworkers talking them through why they
            should care about (and love) rebasing.
          </li>
          <li>
            I was Meetup&apos;s reigning pie eating competition champion for three years running. I know how to scarf
            down a whipped pie like no one else.
          </li>
          <li>My first aol screen name was PuzzleMasterC. Can you tell that I was a cool kid?</li>
          <li>
            Before I was required to take a class that involved programming in Excel for my intended Chemical
            Engineering degree in college, I was actually afraid of computers and wanted nothing to do with them.
          </li>
          <li>
            One summer before I was 16, my parents &quot;hired&quot; me as their personal chef. I never cooked the same
            meal twice. If I ever decided to leave tech, my dream would be to open a small breakfast and lunch place.
          </li>
        </ul>
      </article>
    </Main>
  );
}

export default About;

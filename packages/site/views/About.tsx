import React from 'react';
import Main from '../components/Main';

const About = (): JSX.Element => (
  <Main>
    <article className="post" id="index">
      <h1>About me</h1>
      <p>
        For most of my professional career, I&apos;ve worked at <a href="https://www.meetup.com/">Meetup</a>. I&apos;ve
        worn a number of hats there, but most recently I&apos;ve been leading up our API Platform Team. Before Meetup, I
        studied at Tufts University. I received my BSc in Computer Science from the School of Engineering in 2014.
      </p>
    </article>
    <article className="post" id="index">
      <h3>Other facts about me</h3>
      <ul>
        <li>
          I was born and raised in Glastonbury, CT. I lived in the same house for 14 years, but haven&apos;t spent more
          than two years in the same place since.
        </li>
        <li>
          I was Meetup&apos;s reigning pie eating competition champion for three years running. I know how to scarf down
          a whipped pie like no one else.
        </li>
        <li>My first aol screen name was PuzzleMasterC. I was a cool kid.</li>
        <li>
          Git is one of my favorite pieces of technology. I could talk for hours about the mental model. I have many
          diagrams created in google drawings created while on calls with coworkers talking them through why they should
          care about (and love) rebasing.
        </li>
        <li>
          Before I was required to take a class that involved programming in Excel for my intended Chemical Engineering
          degree in college, I was actually afraid of computers and wanted nothing to do with them.
        </li>
        <li>
          One summer before I was 16, my parents &quot;hired&quot; me as their personal chef. I never cooked the same
          meal twice. If I ever decided to leave tech, my dream would be to get into the restaurant business.
        </li>
        <li>
          A coworker gifted me with the title of &quot;most passionate singer&quot; after a karaoke outing in K-Town.
          Your girl may not be the most on key, but I&apos;ll make you feel it.
        </li>
        <li>If I had to limit myself to one dance move for the rest of my life, I&apos;d pick shoulder dancing.</li>
      </ul>
    </article>
  </Main>
);

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import MusicLink from './MusicLink';

const Header = ({ children }: { children?: JSX.Element }): JSX.Element => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src="/packages/site/static/images/avatar.png" alt="" />
      </a>
      <h1>
        My name is{' '}
        <strong>
          <Link to="/">Caroline</Link>
        </strong>
        .
      </h1>
      <br />
      <h1>
        Find out <Link to="/about">about me</Link>, what I&apos;m{' '}
        <MusicLink.ArtistsLink>listening to</MusicLink.ArtistsLink>, or check out my{' '}
        <a href="/ctm-resume.pdf">resume</a>.
      </h1>
    </div>
    {children}
  </header>
);

export default Header;

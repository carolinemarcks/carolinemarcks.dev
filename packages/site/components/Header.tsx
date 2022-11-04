import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../static/images/avatar.png';
import MusicLink from './MusicLink';

function Header({ children }: { children?: JSX.Element }): JSX.Element {
  return (
    <header id="header">
      <div className="inner">
        <a href="/" className="image avatar">
          <img src={Avatar} alt="" />
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
          <MusicLink.AlbumsLink>listening to</MusicLink.AlbumsLink>, or check out my{' '}
          <a href="/ctm-resume.pdf">resume</a>.{' '}
        </h1>
      </div>
      {children}
    </header>
  );
}

export default Header;

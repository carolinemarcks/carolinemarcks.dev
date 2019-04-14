import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => (
  <header id="header">
    <h1>
      <Link to="/">Caroline Marcks</Link>
    </h1>
    <nav className="links">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <a href="/ctm-resume.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

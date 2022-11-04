import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(): JSX.Element {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a href="https://github.com/carolinemarcks">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carolinemarcks">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
          <li>
            <a href="mailto:caroline.marcks@gmail.com">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Caroline Marcks 2019</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

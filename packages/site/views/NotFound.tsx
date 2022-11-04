import React from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../components/Main';

function NotFound(): JSX.Element {
  const location = useLocation();

  return (
    <Main>
      <article className="post" id="index">
        <div>
          <p>
            Whoops! There&apos;s nothing to be found at
            <code>{location.pathname}</code>
          </p>
        </div>
      </article>
    </Main>
  );
}

export default NotFound;

import React from 'react';
import Main from '../components/Main';

interface Location {
  pathname: string;
}

export interface NotFoundProps {
  location: Location;
}

const NotFound = ({ location }: NotFoundProps) => (
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

export default NotFound;

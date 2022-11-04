import React, { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps): JSX.Element {
  return (
    <div id="wrapper">
      <div id="main">{children}</div>
    </div>
  );
}

export default Main;

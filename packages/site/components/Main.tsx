import React, { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => (
  <div id="wrapper">
    <div id="main">{children}</div>
  </div>
);

export default Main;

/* eslint-env browser */
import React from 'react';
import { withBreakpoints, Breakpoints } from 'react-breakpoints';
import Header from './Header';
import Footer from './Footer';

const Layout: React.StatelessComponent<{
  breakpoints: Breakpoints;
  currentBreakpoint: keyof Breakpoints;
  children: JSX.Element;
}> = ({ breakpoints, currentBreakpoint, children }): JSX.Element => {
  if (breakpoints[currentBreakpoint] >= breakpoints.large)
    return (
      <div>
        <Header>
          <Footer />
        </Header>
        {children}
      </div>
    );

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default withBreakpoints<{ children: JSX.Element }>(Layout);

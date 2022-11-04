/* eslint-env browser */
import React from 'react';
import { withBreakpoints, Breakpoints } from 'react-breakpoints';
import Header from './Header';
import Footer from './Footer';

function Layout({
  breakpoints,
  currentBreakpoint,
  children,
}: {
  breakpoints: Breakpoints;
  currentBreakpoint: keyof Breakpoints;
  children: JSX.Element;
}): JSX.Element {
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
}
export default withBreakpoints<{ children: JSX.Element }>(Layout);

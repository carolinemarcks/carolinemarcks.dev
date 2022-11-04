/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactBreakpoints, { Breakpoints } from 'react-breakpoints';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from './components/Layout';
import About from './views/About';
import Index from './views/Index';
import NotFound from './views/NotFound';
import environment from './environment';
import MusicRouter from './views/MusicRouter';

import './static/theme/assets/sass/main.scss';

import './static/images/ctm-resume.pdf';
import './static/images/avatar.png';

const client = new ApolloClient({
  uri: environment.apiUri,
  cache: new InMemoryCache(),
});

const breakpoints: Breakpoints = {
  mobile: 0,
  large: 980,
};

function AppRouter(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about/" element={<About />} />
              {MusicRouter()}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ReactBreakpoints>
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('index'));

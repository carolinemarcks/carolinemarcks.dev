/* eslint-env browser */
import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, fas, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ReactBreakpoints, { Breakpoints } from 'react-breakpoints';
import Layout from './components/Layout';
import About from './views/About';
import Index from './views/Index';
import Music from './views/Music';
import NotFound from './views/NotFound';
import environment from './environment';

library.add(faStroopwafel, fas, fab, faEnvelope);

require('./static/theme/assets/sass/main.scss');
require('./static/images/ctm-resume.pdf');

const client = new ApolloClient({
  uri: environment.apiUri,
});

const breakpoints: Breakpoints = {
  mobile: 0,
  large: 980,
};

const AppRouter = (): JSX.Element => (
  <ApolloProvider client={client}>
    <Router>
      <ReactBreakpoints breakpoints={breakpoints}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/music/" component={Music} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ReactBreakpoints>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<AppRouter />, document.getElementById('index'));

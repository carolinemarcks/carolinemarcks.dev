/* eslint-env browser */
import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import ReactBreakpoints, { Breakpoints } from 'react-breakpoints';
import Layout from './components/Layout';
import About from './views/About';
import Index from './views/Index';
import MusicRouter from './views/MusicRouter';
import NotFound from './views/NotFound';
import environment from './environment';

library.add(faGithub, faLinkedin, faEnvelope);

require('./static/theme/assets/sass/main.scss');
require('./static/images/ctm-resume.pdf');
require('./static/images/avatar.png');

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
            {MusicRouter()}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ReactBreakpoints>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<AppRouter />, document.getElementById('index'));

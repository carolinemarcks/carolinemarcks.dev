import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './views/About';
import Index from './views/Index';
import Music from './views/Music';
import NotFound from './views/NotFound';

require('./static/css/main.scss');
require('./static/images/ctm-resume.pdf');

const client = new ApolloClient({
  // TODO replace wth dynaming rendering b/c of cors
  uri: 'https://staging.carolinemarcks.dev/api/graphql',
});

const AppRouter = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/music/" component={Music} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<AppRouter />, document.getElementById('index'));

import { ApolloServer } from 'apollo-server-lambda';

import environment from './environment';
import resolvers from './resolvers';
import typeDefs from './typeDefs.graphql';

const server = new ApolloServer({
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  resolvers,
  typeDefs,
});
exports.handler = server.createHandler();

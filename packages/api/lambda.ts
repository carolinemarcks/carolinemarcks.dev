import { ApolloServer } from "apollo-server-lambda";

import { environment } from "./environment";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs.graphql";

const server = new ApolloServer({
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  resolvers,
  typeDefs
});
const f = server.createHandler();
exports.handler = (e:any,c1:any,c2:any) => {
  console.log(JSON.stringify(e));
  return f(e,c1,c2);
}

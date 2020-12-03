import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers'
import sequelize from './models';

const schema = new ApolloServer({
    typeDefs,
    resolvers
  });

const app = express();
schema.applyMiddleware({ app })

sequelize.sync({ force: true }).then(() => {
  app.listen(8080);
});

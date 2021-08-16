import 'reflect-metadata';
import { MikroORM } from "@mikro-orm/core";
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';

import { __prod__ } from "./constants";
import config from './mikro-orm.config';
import { PostResolver } from "./resolvers/post";

const main = async () => {
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();

  const app = express();
  const port = 4000;

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
  });
}

main().catch(err => {
  console.error(err);
});

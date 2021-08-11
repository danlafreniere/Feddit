import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import config from './mikro-orm.config';
import express from 'express';

const main = async () => {
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();

  // const post = orm.em.create(Post, {title: 'my first post'});
  // await orm.em.persistAndFlush(post);

  // const posts = await orm.em.find(Post, {});
  // console.log(posts);

  const app = express();
  const port = 4000;

  app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
  });

}

main().catch(err => {
  console.error(err);
});

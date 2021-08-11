

### Handy Tidbits

- If a function returns a promise, await.
- process.env.NODE_ENV is handy for determining what environment you're in (dev/prod/etc).

## Notes

### Object-Relational Mapping (ORM)

ORM allows us to convert data between incompatible type-systems using object-oriented programming?

What the fuck does this mean?

Well, SQL database management systems (DBMS) can classically only store and manipulate scalar values (simple stuff: integers/strings/etc) because they aren't object-oriented. This isn't particularly convenient for us; not one bit.

![Not one bit](https://i.makeagif.com/media/10-31-2016/XYVC0n.gif)

So we rely on ORMs to convert object values into groups of scalars that our DB can consume, and then convert scalars back to objects on retrieval.

Que microORM to make this extra convenient for us. Woot woot.


### Handy Commands

npx tsconfig.json -> adds TS config into root.

Add typescript definitions as dev dependencies:
yarn add -D @types/express
yarn add -D @types/node

#### Postgresql
https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

- brew services start postgresql

Create DB:
- createdb {db-name}
List DBs:
- psql -l

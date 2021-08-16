import { User } from "src/entities/User";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Query, Resolver } from "type-graphql";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  async createUser(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() {em}: MyContext
  ) {
    const user = em.create(User, { username: options.username });
    await em.persistAndFlush(user);
    return 'user created';
  }
}

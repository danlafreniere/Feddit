import { Query, Resolver } from "type-graphql";

@Resolver()
export class TemplateResolver {
  @Query(() => String)
  hello() {
    return "hello world"
  }
}
